export const ContainerAuth = ({ title, children }) => {
  return (
    <div className='container-auth'>
      <div className='container-items-auth'>
        <h1>{title}</h1>
        <hr />
        <div className='container-items'>{children}</div>
      </div>
    </div>
  )
}
