import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-2 sm:px-6 lg:px-2', className)}
      {...props}
    />
    
  )
}
