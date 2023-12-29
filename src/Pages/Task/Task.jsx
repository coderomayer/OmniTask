import React, { useContext, useRef } from 'react';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AiOutlinePlus } from "react-icons/ai"
import TaskBoard from './TaskBoard';
import { useQueryClient } from '@tanstack/react-query';
import { userAuth } from '@/Provider/AuthProvider';

const Task = () => {

    const {user} = useContext(userAuth)

    const queryClient = useQueryClient();
    const titleRef = useRef();
    const noteRef = useRef();
    const dateRef = useRef();

    const handleAddTask = async () => {
        const name = user.name;
        const email = user.email;
        const title = titleRef.current.value;
        const note = noteRef.current.value;
        const date = dateRef.current.value;

        const newTask = {name, email, title, note, date };
        console.log(newTask);

        try {
            // Send data to the server
            const response = await fetch('https://omni-task-server.vercel.app/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            if (response.ok) {
                // Invalidate and refetch the taskData query to update the task list
                queryClient.invalidateQueries(['taskData']);
            } else {
                console.error('Failed to add task:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding task:', error.message);
        }
    };

    return (
        <main className="p-8 md:p-24 bg-slate-200 min-h-screen">
            <TaskBoard></TaskBoard>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="bg-blue-600 p-2 text-white text-xl font-bold rounded-full fixed bottom-10 right-10"><AiOutlinePlus /></button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <div className="grid gap-4 p-8 dark:bg-slate-400 font-Quicksand">
                        <input
                            ref={titleRef}
                            className="w-full p-2 rounded-lg border font-bold"
                            type="text"
                            name="taskTitle"
                            placeholder="Title..."
                        />
                        <textarea
                            ref={noteRef}
                            className="w-full p-2 rounded-lg border"
                            name="taskNote"
                            placeholder="Your note..."
                        />
                        <input
                            ref={dateRef}
                            className="w-full p-2 rounded-lg border"
                            name="taskDate"
                            type="date"
                        />
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" onClick={handleAddTask}>Save</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </main>
    );
};

export default Task;
