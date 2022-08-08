import './Modal.css'

const Modal = (props) => {
  console.log(props);
  

  return (
    <>
    {props.show ? (
      <div className='openModal modal'>
        <section>
      {props.children}
      </section>
      </div>
      ) : ''}
    </>
  )
}

export default Modal;
