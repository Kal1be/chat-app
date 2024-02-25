import {PhoneIcon,ChatBubbleLeftRightIcon} from "@heroicons/react/24/solid"

function Header() {
  return (
    <div className="chat-header">
      <div className="flexbetween">
<ChatBubbleLeftRightIcon className="icon-chat"/>
<h3 className="header-text">Chat app</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone"/>
        <p className="header-text">Group Chat Application</p>
      </div>
    </div>
  )
}

export default Header
