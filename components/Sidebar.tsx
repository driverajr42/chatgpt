import NewChat from './NewChat'


export const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>
            {/* Model Selection */}
          </div>

          {/* Map Through Chat Row */}

        </div>
      </div>

    </div>
  )
}
