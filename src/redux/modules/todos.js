import axios from 'axios';

// Action value
const ADD_TODO = 'ADD_TODO';
const GET_TODO_BY_ID = 'GET_TODO_BY_ID';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// axios 불러오기 확인용
// axios를 통해서 get 요청을 하는 함수를 생성합니다.
// 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
const fetchTodos = async () => {
  const { data } = await axios.get('http://localhost:3001/todoList');
  console.log(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
};

fetchTodos(); // 이걸 리덕스 초기state로 넣으려면 어캄..?


// initial state
const initialState = {
  todoList: [
    {
      id: 1,
      title: '리액트 공부하기',
      content: '인강 범위까지 다 보기',
      isDone: false,
      createdAt: 1659311283308,
    },
    {
      id: 2,
      title: 'JS 기초개념',
      content: '개념 노트 정리하기',
      isDone: true,
      createdAt: 1659341238308,
    },
  ],
  todo: {
    id: '0',
    title: '',
    content: '',
    isDone: false,
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todoList.find((todo) => {
          return parseInt(todo.id) === parseInt(action.payload);
        }),
      };
    default:
      return state;
  }
};

export default todos;
