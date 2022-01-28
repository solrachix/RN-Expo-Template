import { Toast, Popup } from 'popup-ui'

export function newError({ title, text }: { title: string; text?: string }) {
  Toast.show({
    title,
    text,
    color: '#E96379'
  })
}

export function newSuccess({ title, text }: { title: string; text?: string }) {
  Toast.show({
    title,
    text,
    color: '#67e480'
  })
}

interface newPopupProps {
  type: 'Success' | 'Warning' | 'Danger'
  title: string
  button?: boolean
  textBody?: string
  buttonText?: string
  callback?: () => void
}

export function newPopup(data: newPopupProps) {
  Popup.show({ ...data, callback: () => Popup.hide() })
}
