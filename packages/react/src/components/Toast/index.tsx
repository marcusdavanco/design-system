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
  open: boolean
  setOpen: (open: boolean) => void
}

export function Toast({ title, content, open, setOpen }: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer open={open} onOpenChange={setOpen}>
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
