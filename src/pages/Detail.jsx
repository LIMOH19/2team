import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Comment from '../components/comment/Comment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getTodoByID } from '../redux/modules/todos';
import { todosActions } from '../redux/modules/todosSlice';

const Detail = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  // const { todo } = useSelector((state) => state.todos);
  console.log(todo);

  useEffect(() => {
    dispatch(todosActions.getTodoByID(id));
  }, [dispatch, id]);

  return (
    <>
      <Layout>
        <Header />
        <DetailBox>
          <DetailNo>No. {todo.id} 🎂</DetailNo>
          <DetailTitle>{todo.title}</DetailTitle>
          <DetailContent>{todo.content}</DetailContent>
        </DetailBox>
        <Comment />
      </Layout>
    </>
  );
};

const DetailBox = styled.div`
  width: 500px;
  height: 150px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

const DetailNo = styled.div`
  margin-bottom: 15px;
`;

const DetailTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 15px;
`;

const DetailContent = styled.div`
  font-size: 18px;
`;

export default Detail;
