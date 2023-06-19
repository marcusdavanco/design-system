import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@md-ignite-ui/react'
import { useState } from 'react'

function DemoToast(props: ToastProps) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Toast</Button>
      <Toast
        {...props}
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h.',
    open: true,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
  }
}
