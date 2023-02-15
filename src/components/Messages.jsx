import { useSelector } from 'react-redux'

export const Messages = ({ user, text, date }) => {
  const { auth } = useSelector(state => state)
  const myUser = user === auth?.user_metadata?.user_name
  return (
    <div className={`message ${myUser ? 'message-my-user' : 'message-other-user'}`}>
      <div className={`${myUser ? 'my-message' : 'other-message'}`}>
        <p>
          {user}, {date}
        </p>
        <hr />
        <p>{text}</p>
      </div>
    </div>
  )
}
