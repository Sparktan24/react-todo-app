import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, setTodos, delTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            delTodo={delTodo}
          />
        ))}
      </ul>
    </div>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodosList;
