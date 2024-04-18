"use client";
import { Reorder } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";

const BoardHead = ({ head, design, task }) => {
  const [orderedTask, setOrderedTask] = useState([]);

  // Update orderedTask whenever the task prop changes
  useEffect(() => {
    const reverseTask = [...task].reverse();
    setOrderedTask(reverseTask);
  }, [task]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "todo":
        return "bg-blue-500";
      case "progress":
        return "bg-yellow-500";
      case "review":
        return "bg-orange-500";
      case "completed":
        return "bg-green-500";
      case "declined":
        return "bg-red-500";
      default:
        return "bg-gray-500"; // Default color if priority is not recognized
    }
  };

  // Callback function to handle reordering
  const handleReorder = (newOrder) => {
    setOrderedTask(newOrder);
  };

  return (
    <div className="w-64 ">
      {/* Head */}
      <div className="mb-5">
        <h2 className={design}>
          {head} <span className="float-right">{task.length}</span>
        </h2>
      </div>

      {/* body */}
      <div className="h-[500px] overflow-scroll">
        <Reorder.Group values={orderedTask} onReorder={handleReorder}>
          {orderedTask &&
            orderedTask.map((data, index) => {
              return (
                <Reorder.Item value={data} key={data.id}>
                  <div className="mb-5 bg-white rounded-md p-2 shadow-lg cursor-pointer">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">
                        {data.title} {data.id}
                      </h3>
                      <p
                        className={`${getPriorityColor(
                          data.priority
                        )} w-10 h-5 rounded-sm`}
                      ></p>
                    </div>

                    <div className="w-full">
                      <p className="my-3  text-gray-600 text-justify">
                        {data.description}
                      </p>

                      <section className=" w-full flex items-center justify-between">
                        <div className=" flex flex-wrap gap-2">
                          {data.selected.map((tag, index) => {
                            return (
                              <span
                                className={`${getPriorityColor(
                                  data.priority
                                )}  bg-opacity-25 px-2 rounded-full font-medium`}
                                key={index}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>

                        <span>
                          <MdOutlineWatchLater className="text-xl" />{" "}
                        </span>
                      </section>
                    </div>
                  </div>
                </Reorder.Item>
              );
            })}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default BoardHead;
