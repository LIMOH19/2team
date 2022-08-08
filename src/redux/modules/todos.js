// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

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

// initial state
const initialState = {
  todoList: [
    // {
    //   id: 1,
    //   title: "리액트 공부하기",
    //   content: "인강 범위까지 다 보기",
    //   writer: "스파르타",
    //   isDone: false,
    //   createdAt: 1659311283308,
    // },
    // {
    //   id: 2,
    //   title: "JS 기초개념",
    //   content: "개념 노트 정리하기",
    //   writer: "르탄이",
    //   isDone: true,
    //   createdAt: 1659341238308,
    // },
  ],
  todo: {
    id: "0",
    title: "",
    content: "",
    writer: "",
    image: "",
    isDone: false,
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const lastDodo = state.todoList[state.todoList.length - 1];
      //빈 배열일 경우 nextId 는 1
      const nextId = lastDodo ? lastDodo.id + 1 : 1;
      action.payload.id = nextId;
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
