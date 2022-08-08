import './TodoList.css';
import Todo from '../todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteTodo, toggleStatusTodo } from '../../redux/modules/todosSlice';
import { todosActions } from '../../redux/modules/todosSlice';
import axios from 'axios';

// const TodoList = ({ todos, setTodos }) => {
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);

  // const onRemove = (todoId) => {
  //   const newTodos = todos.filter((todo) => {
  //     return todo.id !== todoId;
  //   });
  //   setTodos(newTodos);
  // };

  const onRemove = (id) => {
    dispatch(todosActions.deleteTodo(id));
    // json 서버에서 삭제..
    axios.delete(`http://localhost:3001/todoList/${id}`);
  };

  // const onEdit = (todoId) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === todoId) {
  //       return {
  //         ...todo,
  //         isDone: !todo.isDone,
  //       };
  //     } else {
  //       return { ...todo };
  //     }
  //   });
  //   setTodos(newTodos);
  // };

  const onEdit = (id) => {
    dispatch(todosActions.toggleStatusTodo(id));
  };

  return (
    <div className='list-container'>
      <p>
        총 {todos.length}개의 항목이 있습니다. 🏳‍🌈 할 일을 열심히 완료해봅시다
        ❗❗
      </p>
      <h2>Working..🔥</h2>
      <div className='list-wrapper'>
        {todos.map((todo) =>
          !todo.isDone ? (
            <Todo
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ) : null
        )}
      </div>
      <h2>Done..🌞</h2>
      <div className='list-wrapper'>
        {todos.map((todo) =>
          todo.isDone ? (
            <Todo
              key={todo.id}
              todo={todo}
              // setTodos={setTodos}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

// 만약 todos가 0개일 때, 받아올 프롭이 없다고 오류 생기는 것을 방지
TodoList.defaultProps = {
  todos: [],
}; // todo 0개여도 undefined 아니다! 빈배열 "있다"!!

export default TodoList;
