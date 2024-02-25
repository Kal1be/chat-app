import {useMultiChatLogic,MultiChatSocket,MultiChatWindow} from "react-chat-engine-advanced";
import Header from "../Header";
import Standard from "../message/Standard";
function Chat() {
    const chatProps=useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "felix",
        "1234"

    )
  return (
    <div style={{flexBasis:"100%"}}>

        {/* +++++++++++++++++ we are passing the chat multichatsocket in our component+++++++++++++++++ */}

     <MultiChatSocket {...chatProps}/>
     <MultiChatWindow 
     {...chatProps}
      style={{height:"100vh"}}
      renderChatHeader={(chat)=> {return <Header chat={chat}/>}}
      renderMessageForm={(props)=>{
        return  <Standard props={props} activeChat={chatProps.chat} />
      }}
     />
    </div>
  )
}

export default Chat
