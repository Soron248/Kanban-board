"use client";
import { useState } from "react";
import BoardHead from "./compoenents/BoardHead/BoardHead";
import Button from "./compoenents/Button/Button";

export default function Home() {
  const [task, setTask] = useState([]);

  const pulltask = (taskData) => {
    setTask((prevTask) => [...prevTask, taskData]);
  };

  // Filter tasks based on their priority
  const todoTasks = task.filter((task) => task.priority === "todo");
  const progressTasks = task.filter((task) => task.priority === "progress");
  const reviewTasks = task.filter((task) => task.priority === "review");
  const completedTasks = task.filter((task) => task.priority === "completed");
  const declinedTasks = task.filter((task) => task.priority === "declined");

  return (
    <div>
      <section className="w-full flex justify-center items-center my-3">
        <Button pulltask={pulltask} />
      </section>

      <section className="w-full flex justify-evenly ">
        {/* Render BoardHead components for each priority */}
        <BoardHead
          task={todoTasks}
          head="To Do"
          design="p-2 bg-white text-center font-semibold rounded-md shadow-md border-l-8 border-blue-500"
        />
        <BoardHead
          task={progressTasks}
          head="In Progress"
          design="p-2 bg-white text-center font-semibold rounded-md shadow-md border-l-8 border-yellow-500"
        />
        <BoardHead
          task={reviewTasks}
          head="Review"
          design="p-2 bg-white text-center font-semibold rounded-md shadow-md border-l-8 border-orange-500"
        />
        <BoardHead
          task={completedTasks}
          head="Completed"
          design="p-2 bg-white text-center font-semibold rounded-md shadow-md border-l-8 border-green-500"
        />
        <BoardHead
          task={declinedTasks}
          head="Declined"
          design="p-2 bg-white text-center font-semibold rounded-md shadow-md border-l-8 border-red-500"
        />
      </section>
    </div>
  );
}
