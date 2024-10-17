import { RootLayout, Sidebar, Content, DraggableTopBar } from '@/components'

function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
