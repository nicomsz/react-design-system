import { ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot'
import clsx from "clsx";

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode;
    asChild?: boolean;
    
}

export function Heading({ size= 'md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h1'
    
    return (
        <div>
            <Comp
                className={clsx(

                    'text-gray-800 font-bold',
                    {
                        'text-lg': size == 'sm',
                        'text-xl': size == 'md',
                        'text-2xl': size == 'lg'

                    }


                )}
            >

                {children}
            </Comp>
        </div>
    )
}