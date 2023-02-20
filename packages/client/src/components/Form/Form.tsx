import { ReactNode, FormEvent } from 'react'

export type Props = {
  children: ReactNode
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
  buttons: ReactNode
}

export const Form = ({ children, onSubmit, buttons }: Props) => (
  <form onSubmit={onSubmit}>
    <div>{buttons}</div>
    <div>{children}</div>
  </form>
)
