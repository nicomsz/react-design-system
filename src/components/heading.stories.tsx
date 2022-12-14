import { Heading, HeadingProps } from './heading'
import { Meta, StoryObj } from '@storybook/react'


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'sm'
    },
    argTypes: {

        size: {

            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<HeadingProps>
export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {

        asChild: {
            table: {
                disable: true
            }
        }
    }
}
export const CustomComp: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with {'h1'}</h1>
        )
    },
    argTypes: {

        children: {
            table: {
                disable: 'true'
            }
        },
        asChild: {
            table: {
                disable: 'true'
            }
        }
    }
}


