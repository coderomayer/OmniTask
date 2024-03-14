
import { userAuth } from "@/Provider/AuthProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AiOutlineMore } from "react-icons/ai";

const TaskBoard = () => {

    const { user } = useContext(userAuth)
    console.log(user)

    const { data: taskData, isLoading, refetch } = useQuery({

        queryKey: ['taskData', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://omni-task-server.vercel.app/task?email=${user?.email}`)
            const data = await response.json()
            return data
        },

    })

    if (isLoading) {
        return ('Loading...')
    }

    const handleDelete =  async (taskId) => {

        const response = await fetch(`https://omni-task-server.vercel.app/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type" : "application/json"
            }

        })
        
        if (response.ok) {
            // If the delete request is successful, refetch the task data
            await refetch();
            console.log('Task deleted successfully!')
        }

    }



    return (
        <main className="font-Quicksand">
            <div className="grid md:grid-cols-4 gap-4">
                {
                    taskData?.map(task => (

                        <div className="p-4 border border-slate-400 rounded-md shadow-md flex flex-col justify-between">
                            <div>
                                <h2 className="font-bold py-4">{task?.title}</h2>
                                <p>{task.note}</p>
                            </div>

                            <div className="">
                                <hr className="border-t-slate-400 my-4" />
                                <div className="flex justify-between">
                                    <p className="text-xs">{task.date}</p>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                        <AiOutlineMore />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-white p-4 rounded-md">
                                            <DropdownMenuItem onClick={() => handleDelete (task?._id)} className="cursor-pointer outline-none hover:text-red-700">Dellete</DropdownMenuItem>

                                            {/* <DropdownMenuItem className="cursor-pointer outline-none hover:text-lime-600">Update</DropdownMenuItem> */}

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default TaskBoard