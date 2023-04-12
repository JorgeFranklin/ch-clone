import React, { HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const headingVariants = cva(
  'text-white leading-tight tracking-tighter relative h-20 max-md:h-16 after:content-[""] after:absolute after:h-4 after:w-24 max-md:after:h-3 max-md:after:w-20 after:left-0 after:bottom-0 after:bg-gradient-to-r after:from-pink-500 after:to-red-500 after:rounded-lg',
  {
    variants: {
      size: {
        default: 'text-5xl max-md:text-3xl',
        lg: 'text-5xl max-lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type HeadingProps = {} & HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>

const Heading = ({ className, size, children, ...props }: HeadingProps) => {
  return (
    <h2 className={headingVariants({ size, className })} {...props}>
      {children}
    </h2>
  )
}

export default Heading
