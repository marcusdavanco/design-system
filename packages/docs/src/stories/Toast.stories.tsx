import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Toast, ToastProps } from '@md-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  tags: ['autodocs'],

  decorators: [
    (Story) => {

      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <div>
            {Story()}
          </div>
        </Box>
      )
    }
  ],

} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {

  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h.'
  }
}
