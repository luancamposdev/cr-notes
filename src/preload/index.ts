import { contextBridge, ipcRenderer } from 'electron'

import type { CreateNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enable in the browserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args)
  })
} catch (error) {
  console.error('Failed to expose context bridge', error)
}
