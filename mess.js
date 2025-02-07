import './index.css'

const Message = ({isLoggedIn}) => (
  <p className="message">{isLoggedIn ? 'Welcome User!' : 'Please Login'}</p>
)

export default Message
