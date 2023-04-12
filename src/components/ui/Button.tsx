import { ButtonHTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'text-slate-50 rounded-lg flex items-center justify-center disabled:opacity-50 transition-color hover:bg-mygraylight duration-200',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-2 border-solid border-mygraylight',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = ({
  className,
  children,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ className, variant, size })} {...props}>
      {children}
    </button>
  )
}

export default Button
