import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import TodoList from '../components/todolist/TodoList';

function Home() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: '리액트 공부하기',
  //     content: '인강 범위까지 다 보기',
  //     isDone: false,
  //     created_date: 1659311223308,
  //   },
  //   {
  //     id: 2,
  //     title: 'JS 기초개념',
  //     content: '개념 노트 정리하기',
  //     isDone: true,
  //     created_date: 1659341238308,
  //   },
  // ]);

  return (
    <>
      <Layout>
        <Header />
        <Form />
        <TodoList />
      </Layout>
    </>
  );
}

export default Home;
