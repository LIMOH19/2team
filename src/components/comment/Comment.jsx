import { useState } from "react";
import './Comment.css'

const Comment = () => {
  const initialState = {
    id: 0,
    user: null,
    body: '',
    createdAt: null,
  };
  const [comment, setComment] = useState(initialState);

  const handleChangeState = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className='comment-form'>
      <div className='input-group'>
        <label className='form-label' htmlFor='comment'>
          응원 한마디
        </label>
        <input
          className='add-input'
          name='body'
          value={comment.body}
          onChange={handleChangeState}
          type='text'
        />
      </div>
      <button>등록</button>
    </div>
  );
};

export default Comment;
