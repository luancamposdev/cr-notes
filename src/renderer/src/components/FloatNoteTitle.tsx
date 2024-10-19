import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export const FloatNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
