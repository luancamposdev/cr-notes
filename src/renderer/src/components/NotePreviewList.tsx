import type { ComponentProps } from 'react'

import { NotePreview } from '@/components'
import { notesMock } from '@/store/mocks'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
