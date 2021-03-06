import React from 'react'
import ContentLoader from 'react-content-loader'

const Chat = props => {
  return (
    <ContentLoader
      height={160}
      width={446}
      speed={2}
      primaryColor="#c1c1c1"
      secondaryColor="#ecebeb"
    >
      <circle cx="19" cy="25" r="16" />
      <circle cx="420" cy="71" r="16" />
      <rect x="179" y="76" rx="5" ry="5" width="220" height="10" />
      <rect x="179" y="58" rx="5" ry="5" width="220" height="10" />
      <rect x="39" y="16" rx="5" ry="5" width="220" height="10" />
      <rect x="40" y="33" rx="5" ry="5" width="220" height="10" />
      <circle cx="21" cy="117" r="16" />
      <rect x="45" y="102" rx="5" ry="5" width="220" height="10" />
      <rect x="45" y="120" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  )
}

Chat.metadata = {
  name: 'Daniel Eslava', // My name
  github: 'Eslavadev', // Github username
  description: 'Generic Chat', // Little tagline
  filename: 'Chat', // filename of your loader
}

export default Chat
