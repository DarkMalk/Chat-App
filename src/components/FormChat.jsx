import { Image } from './Image'

export const FormChat = ({ onSubmit }) => {
  return (
    <form className='form-send-message' onSubmit={onSubmit}>
      <input type='text' placeholder='Write your message here...' autoComplete='off' minLength='1' required />
      <button>
        <Image img='sendMessageIcon' />
      </button>
    </form>
  )
}
