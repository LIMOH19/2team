import './Form.css';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import Modal from '../modal/Modal';

const Form = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  const [imageSrc, setImageSrc] = useState('');
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        console.log(reader.result);
        setTodo({...todo,image:reader.result})
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  
  const initialState = {
    id: 0,
    title: '',
    content: '',
    writer:'',
    image:'',
    isDone: false,
    createdAt: null,
  };

  const dispatch = useDispatch();
  const [todo, setTodo] = useState(initialState);

  const handleChangeState = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  let dataId = useRef(3); // 이전 useRef 사용했던 거 대신 ㄹㅇ 숫자로,,
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().getTime();
    console.log(createdAt);
    if (todo.title.trim() === '' || todo.content.trim() === '') return;
    // setTodos([...todos, { ...todo, id: num, createdAt }]);
    dispatch(addTodo({ ...todo, createdAt }));
    setTodo(initialState);
    setImageSrc('')
    dataId.current++;
    closeModal()
  };

  return (
    <>
    <button onClick={openModal}>추가하기</button>
    <Modal show={show}>
    <form className='form' onSubmit={handleSubmit}>
      <div className='input-group'>
        <div>
        <label className='form-label' htmlFor='title'>
          제목
        </label>
        <input
          className='add-input'
          name='title'
          value={todo.title}
          onChange={handleChangeState}
          type='text'
        />
        </div>
        <div>
        <label className='form-label' htmlFor='content'>
          내용
        </label>
        <textarea         
          name='content'
          rows="5"
          value={todo.content}
          onChange={handleChangeState}
          />
        </div>
        <div>
          <label className='form-label' htmlFor='writer'>
          작성자
        </label>
        <input
          className='add-input'
          name='writer'
          value={todo.writer}
          onChange={handleChangeState}
          type='text'
        />
        </div>
        <div>
          <p>이미지 미리보기</p>
          <input type="file" onChange={(e) => 
          {encodeFileToBase64(e.target.files[0]);
          }} />
        <label className='form-label' htmlFor='preview'>
        </label>
        {imageSrc && <img src={imageSrc} alt="preview-img"/>}
        </div>
      </div>
      <div>
      <button>추가하기</button>
      <button onClick={closeModal}>닫기</button>
      </div>
    </form>
    </Modal>
    </>
  );
};

export default Form;


