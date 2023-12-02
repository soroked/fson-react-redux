import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodos } from 'redux/todosSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodos(id));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
