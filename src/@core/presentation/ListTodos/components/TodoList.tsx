import { useAppSelector } from "@/store/hook"
import { ListTodoPageCore } from ".."

export const TodoList = () => {
  const { list, loading } = useAppSelector(e => ({
    list: e.todos.list,
    loading: e.system.loading
  }))

  const { handleEditTodo, handleRemoveTodo, handleDoneTodo } = ListTodoPageCore()

  return (
    <div className="todo-list">

      <p>{loading ? 'loading 1' : 'loading 2'}</p>

      <p className="todo-wrapper-title">List Todos</p>
      <ul>
        {list.map(el => (
          <li key={el.todo.id}>
            <div className="todo-list-item-info">
              <span>id: {el.todo.id}</span>
              <p title={el.todo.title}>{el.todo.title}</p>
            </div>

            <div className="todo-list-item-actions">
              <button
                onClick={() => {
                  handleEditTodo({
                    id: el.todo.id,
                    title: el.todo.title,
                    completed: el.todo.completed
                  })
                }}
                disabled={loading}
              >Editar</button>

              <button
                onClick={() => {
                  handleRemoveTodo(el.todo.id)
                }}
                disabled={loading}
              >Remover</button>

              <button
                onClick={() => {
                  handleDoneTodo(el.todo.id, !el.todo.completed)
                }}
                disabled={loading}
              >
                {!!el.todo.completed ? 'Concluído' : 'Pendente'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}