import { Image } from './Image'

export const InfoUserChat = ({ avatarUrl, username, onClick }) => {
  return (
    <div className='info-user-chat'>
      <div>
        <img src={avatarUrl} alt={`Avatar ${username}`} />
        <p>{username}</p>
      </div>
      <button onClick={onClick}>
        <Image img='closeIcon' />
      </button>
    </div>
  )
}
