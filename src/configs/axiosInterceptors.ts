import type { AxiosInstance } from 'axios'

import { newError } from '../utils/Toast'

interface ErrorBody {
  ErrorCode: number
  Message: string
}
export const SetError = (text: string) =>
  newError({
    title: 'Erro!',
    text: text
  })

export default function Interceptors(api: AxiosInstance) {
  api.interceptors.response.use(
    response => {
      return response
    },
    error => {
      const errorBody = error.response.data as ErrorBody

      switch (error.response.status) {
        case 404:
          SetError(
            'Ocorreu um erro ao fazer essa requisição, tente novamente mais tarde!'
          )
          break

        default:
          SetError('Erro Genérico. \n\nCódigo de erro: #500-N')
          break
      }

      return Promise.reject(error)
    }
  )
}

/**
 *
 * Error: #500-N
 * > Qualquer erro não mapeado
 *
 * Error: #404
 * > Pagina não encontrada
 */
