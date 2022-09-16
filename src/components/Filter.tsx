import { observer } from 'mobx-react-lite';
import TodoState from '../store/TodoState';
import './filter.scss';

const Filter = observer(() => {
  if (TodoState.todos.length === 0) return null;

  const styles = {
    active: {
      background: '#52BBFF',
      color: '#fff',
    },
    disabled: {
      display: 'none',
    },
  };

  return (
    <div className="filter">
      <button
        id="filter-completed"
        onClick={() => TodoState.getCurrentFilter('completed')}
        style={TodoState.current_filter === 'completed' ? styles.active : {}}>
        Завершенные
      </button>
      <button
        id="filter-not-completed"
        onClick={() => TodoState.getCurrentFilter('not-completed')}
        style={TodoState.current_filter === 'not-completed' ? styles.active : {}}>
        Незавершенные
      </button>
      <button
        id="filter-all"
        onClick={() => TodoState.getCurrentFilter('all')}
        style={TodoState.current_filter === 'all' ? styles.disabled : {}}>
        Сбросить
      </button>
    </div>
  );
});

export default Filter;
