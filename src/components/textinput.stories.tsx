import { TextInput, TextInputRootProps } from './textinput'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'


export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
      children: (
        <>
        
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Digite seu email aqui" />
        </>
      ),   
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

