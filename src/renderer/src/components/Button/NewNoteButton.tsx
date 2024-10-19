import { LuFileSignature } from 'react-icons/lu'
import { useSetAtom } from 'jotai'

import { ActionButton, type ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreate = () => {
    createEmptyNote()
  }

  return (
    <ActionButton {...props} onClick={handleCreate}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
