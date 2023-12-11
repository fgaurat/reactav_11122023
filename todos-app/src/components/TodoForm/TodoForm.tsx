import { SubmitHandler, useForm } from "react-hook-form";
import { Todo } from "../../core/Todo";

interface ITodoForm {
  title: string;
  completed: boolean;
}

interface ITodoFormProps {
  submitTodo: (todo: Todo) => void;
}
function TodoForm({ submitTodo }: ITodoFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ITodoForm>();

  const onSubmit: SubmitHandler<ITodoForm> = (data) => {
    submitTodo(data);
  };

  return (
    <div>
      <h2>TodoForm</h2>

      <form
        className="space-y-6"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative -space-y-px rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
          <div>
            <label htmlFor="" className="sr-only">
              Email address
            </label>
            <input placeholder="Todo Title" {...register("title")} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              {...register("completed")}
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-900"
            >
              Completed ?
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
