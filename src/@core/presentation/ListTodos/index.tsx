import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateTodoForm, TodoList } from "./components"
import { container } from "@/context"
import { ITodosEntityService } from "@/@core/services/entity/TodoService"
import { useAppSelector } from "@/store/hook"
import { ITodoEntity } from "@/@core/domain/entity/TodoEntity"

export const ListTodosPage = () => {
  useEffect(() => {
    container.get<ITodosEntityService>('todosEntityService').getAll()
  }, [])

  return (
    <div className='page-example'>
      <h1>Página: list-todos</h1>

      <div className="todo-wrapper">
        <CreateTodoForm />
        <TodoList />
      </div>
    </div>
  )
}


const createTodoFormSchema = z.object({
  id: z.number().nullable(),
  title: z.string()
    .nonempty("Campo obrigatório")
    .min(5, 'o título deve ter no mínimo 6 caracteres'),
  completed: z.boolean()
})

type CreateTodoFormData = z.infer<typeof createTodoFormSchema>

export const ListTodoPageCore = () => {
  const todo = useAppSelector(e => e.todos.todo)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<CreateTodoFormData>({
    resolver: zodResolver(createTodoFormSchema)
  })

  const fields = getValues()

  const handleCreateTodo = async () => {
    const form = {
      title: fields.title,
      completed: fields.completed
    }

    await container.get<ITodosEntityService>('todosEntityService').add(form)

    setValue('title', '')
    setValue('completed', false)
  }
  const handleUpdateTodo = async () => {
    const id = Number(fields.id)
    const form = {
      title: fields.title,
      completed: fields.completed
    }

    await container.get<ITodosEntityService>('todosEntityService').update(id, form)

    setValue('id', 0)
    setValue('title', '')
    setValue('completed', false)
  }
  const onSubmit = async () => {
    !!fields.id
      ? await handleUpdateTodo()
      : await handleCreateTodo()
  }

  const handleRemoveTodo = async (id: number) => {
    container.get<ITodosEntityService>('todosEntityService').remove(id)
  }

  const handleDoneTodo = async (id: number, completed: boolean) => {
    container.get<ITodosEntityService>('todosEntityService').doneTodo({ id, completed })
  }

  const handleEditTodo = (values: Partial<ITodoEntity>) => {
    container.get<ITodosEntityService>('todosEntityService').setFormTodo(values)
  }

  useEffect(() => {
    if (todo.id !== fields.id) {
      setValue('id', todo.id)
      setValue('title', todo.title)
      setValue('completed', todo.completed)
    }
  }, [todo])

  watch((values) => {
    container.get<ITodosEntityService>('todosEntityService').setFormTodo({
      id: Number(values.id),
      title: values.title,
      completed: values.completed,
    })
  })

  return {
    fields,
    errors,
    register,
    handleSubmit,
    onSubmit,
    handleEditTodo,
    handleRemoveTodo,
    handleDoneTodo
  }
}