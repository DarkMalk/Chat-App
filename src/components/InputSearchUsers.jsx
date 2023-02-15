import { Image } from './Image'

export const InputSearchUsers = ({ onChange }) => {
  return (
    <label className='search-input'>
      <Image img='searchIcon' />
      <input type='text' autoComplete='false' onChange={onChange} placeholder='Search...' />
    </label>
  )
}
