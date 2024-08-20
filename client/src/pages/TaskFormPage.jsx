import { useEffect } from "react";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-hot-toast"

export default function TaskFormPage() {

    const navigate = useNavigate()
    const params = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task updated successfully')
        } else {
            await createTask(data)
            toast.success('Task created successfully')
        }
        navigate("/tasks")
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
                setValue('done', data.done)
            }
        }
        loadTask()
    }, [])


    return (
        <div className="rounded-md shadow-md mt-4 bg-slate-50 w-full sm:w-1/2 mx-auto p-5">
            <div className="flex flex-col">
                <h1 className="text-center font-semibold text-xl">{params.id ? "Update Task" : "Create Task"}</h1>
                <form action="" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label className="text-lg font-serif">Title:</label>
                            <input className="rounded-md border p-1 border-indigo-950"
                                type="text" id="title" name="title" placeholder="Title"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span className="text-sm text-red-600">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg font-serif">Description:</label>
                            <textarea className="rounded-md border p-1 border-indigo-950"
                                name="description" id="description" rows={"4"} placeholder="Description"
                                {...register("description", { required: true })}
                            >Description</textarea>
                            {errors.description && <span className="text-sm text-red-600">This field is required</span>}
                        </div>
                        {params.id &&
                            <div className="flex gap-3 items-center">
                                <label className="text-lg font-serif">Done:</label>
                                <input className="size-4 " type="checkbox" id="done" name="done" {...register("done")} />
                            </div>
                        }
                        <div className="flex justify-end gap-3">
                            <button className="bg-indigo-950 hover:bg-indigo-800 text-white font-medium rounded px-4 py-1" type="submit">Save</button>
                            {params.id &&
                                <button onClick={async () => {
                                    if (confirm("Are you sure you want delete this task?")) {
                                        await deleteTask(params.id)
                                        toast.success('Task deleted successfully')
                                        navigate("/tasks")
                                    }
                                }}
                                    className="bg-red-500 hover:bg-red-700 text-white font-medium rounded px-4 py-1"
                                >Delete</button>}
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}