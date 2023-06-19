import {
  ToastProvider,
  ToastContainer,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../Button'

export interface ToastProps {
  title: string
  content: string
}

export function Toast({ title, content }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Toast</Button>
      <ToastContainer duration={3000} open={open} onOpenChange={setOpen}>
        <ToastTitle>
          {title}
          <ToastClose>
            <X size={12} color="#A9A9B2" />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>{content}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}
