import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  Section,
  Text,
  Todo,
} from 'components';

import SearchForm from 'components/SearchForm/SearchForm';

const App2 = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos([todo, ...todos]);
  };

  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default App2;
