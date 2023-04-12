import { HTMLAttributes, ReactNode } from 'react'

export type ContainerProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-[1300px] m-auto px-4 ${className}`}>{children}</div>
  )
}

export default Container
