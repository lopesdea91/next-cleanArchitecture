import { useAppSelector } from "@/store/hook"
import { ListTodoPageCore } from ".."

export const CreateTodoForm = () => {
  const { loading } = useAppSelector(e => ({
    loading: e.system.loading
  }))
  const { fields, errors, register, handleSubmit, onSubmit } = ListTodoPageCore()

  const titleBtnSubmit = !!fields.id ? 'Atualizar' : 'Cadastrar'

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="todo-container-input">
        <label className="todo-wrapper-title" htmlFor="title">Novo Todo</label>
        <input {...register('title')} id="title" disabled={loading} />
        <span>{errors?.title?.message}</span>
      </div>

      <div className="todo-form-footer">
        <button type="submit" disabled={loading}>{titleBtnSubmit}</button>
      </div>
    </form>
  )
}