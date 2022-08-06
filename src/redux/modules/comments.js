// Action value
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// Action Creator
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};


// initial state
const initialState = {
  commentList: [
    // {
    //   id: 1,
    //   title: '리액트 공부하기',
    //   content: '인강 범위까지 다 보기',
    //   isDone: false,
    //   createdAt: 1659311283308,
    // },
    // {
    //   id: 2,
    //   title: 'JS 기초개념',
    //   content: '개념 노트 정리하기',
    //   isDone: true,
    //   createdAt: 1659341238308,
    // },
  ],
  comment: {
    id: '0',
    user: null,
    body: '',
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commentList: [...state.commentList, action.payload],
      };

    case DELETE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.filter((comment) => comment.id !== action.payload),
      };

    // case TOGGLE_STATUS_TODO:
    //   return {
    //     ...state,
    //     todoList: state.todoList.map((todo) => {
    //       if (todo.id === action.payload) {
    //         return {
    //           ...todo,
    //           isDone: !todo.isDone,
    //         };
    //       } else {
    //         return todo;
    //       }
    //     }),
    //   };

    // case GET_TODO_BY_ID:
    //   return {
    //     ...state,
    //     todo: state.todoList.find((todo) => {
    //       return parseInt(todo.id) === parseInt(action.payload);
    //     }),
    //   };
    default:
      return state;
  }
};

export default todos;
