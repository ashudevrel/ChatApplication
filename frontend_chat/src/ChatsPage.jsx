import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4cb9bdca-ee13-43bb-82de-a95a0a0e9094', 
        props.user.username, 
         props.user.secret
    ) 
  return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{ height: '100%'}}/>

    </div>
  )
}

export default ChatsPage