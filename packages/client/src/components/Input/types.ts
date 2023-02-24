export type InputProps = {
  show?: boolean
  error?: string
  onBlur?: (e: React.FocusEvent) => void
  onChange: (e: React.ChangeEvent) => void
  value: string
  type?: string
  name: string
  disabled?: boolean
  label?: string
  className?: string
}
