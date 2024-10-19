import { FaRegTrashCan } from 'react-icons/fa6'
import { useSetAtom } from 'jotai'

import { ActionButton, type ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeleteNote = () => {
    deleteNote()
  }
  return (
    <ActionButton {...props} onClick={handleDeleteNote}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
