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
        onClick={() => TodoState.setCurrentFilter('completed')}
        style={TodoState.currentFilter === 'completed' ? styles.active : {}}>
        Завершенные
      </button>

      <button
        id="filter-not-completed"
        onClick={() => TodoState.setCurrentFilter('not-completed')}
        style={TodoState.currentFilter === 'not-completed' ? styles.active : {}}>
        Незавершенные
      </button>

      <button
        id="filter-all"
        onClick={() => TodoState.setCurrentFilter('all')}
        style={TodoState.currentFilter === 'all' ? styles.disabled : {}}>
        Сбросить
      </button>
    </div>
  );
});

export default Filter;
