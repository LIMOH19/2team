import './List.css';
import Todo from '../todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../redux/modules/todos';


// const List = ({ todos, setTodos }) => {
const List = () => {
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
    dispatch(deleteTodo(id));
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
      <h2>🎞Record Frame📸</h2>
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
    </div>
  );
};

// 만약 todos가 0개일 때, 받아올 프롭이 없다고 오류 생기는 것을 방지
List.defaultProps = {
  todos: [],
}; // todo 0개여도 undefined 아니다! 빈배열 "있다"!!

export default List;
