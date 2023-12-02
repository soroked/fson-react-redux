import { Container, Header, Section } from 'components';

import SearchForm from 'components/SearchForm/SearchForm';
import TodoList from 'components/TodoList/TodoList';

const App2 = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};

export default App2;
