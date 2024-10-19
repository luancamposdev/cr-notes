import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export const FloatNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note One'
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
