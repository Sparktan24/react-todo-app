import { PropTypes } from 'prop-types';

const TodoItem = ({ todo, setTodos, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

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
    <li className="item">
      <div className="content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <button onClick={() => delTodo(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func,
};

export default TodoItem;
