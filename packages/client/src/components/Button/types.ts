export interface Props {
  onClick: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
