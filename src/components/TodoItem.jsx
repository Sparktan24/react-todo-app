import { PropTypes } from 'prop-types';

const TodoItem = ({ todo, setTodos, delTodo }) => {
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <button onClick={() => delTodo(todo.id)}>Delete</button>
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  setTodos: PropTypes.func,
};

export default TodoItem;
