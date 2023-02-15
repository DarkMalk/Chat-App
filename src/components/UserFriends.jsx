export const UserFriends = ({ username, email, image, eventClick }) => {
  return (
    <button className='user' onClick={eventClick}>
      <img src={image} alt={`Avatar ${username}`} />
      <div>
        <p className="username">{username}</p>
        <p className="email">{email}</p>
      </div>
    </button>
  )
}
