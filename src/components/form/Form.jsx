import './Form.css';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../../redux/modules/todos';
import { todosActions } from '../../redux/modules/todosSlice';
import axios from 'axios';

const Form = () => {
  const initialState = {
    id: 0,
    title: '',
    content: '',
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

  let dataId = useRef(3);
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().getTime();
    console.log(createdAt);
    if (todo.title.trim() === '' || todo.content.trim() === '') return;
    // setTodos([...todos, { ...todo, id: num, createdAt }]);
    dispatch(todosActions.addTodo({ ...todo, id: dataId.current, createdAt }));
    setTodo(initialState);

    // 서버로도 저장해보기
    axios.post('http://localhost:3001/todoList', {
      ...todo,
      id: dataId.current,
      createdAt,
    });
    dataId.current++;
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='input-group'>
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
        <label className='form-label' htmlFor='content'>
          내용
        </label>
        <input
          className='add-input'
          name='content'
          value={todo.content}
          onChange={handleChangeState}
          type='text'
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
