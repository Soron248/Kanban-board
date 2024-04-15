import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

const BoardHead = ({ head, design, task }) => {
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

  return (
    <div className="w-64 ">
      {/* Head */}
      <div className="mb-5">
        <h2 className={design}>{head}</h2>
      </div>

      {/* body */}
      <div className="h-[500px] overflow-scroll">
        {task &&
          task.map((data, index) => {
            return (
              <div
                className="mb-5 bg-white rounded-md p-2 shadow-lg"
                key={index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{data.title}</h3>
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
            );
          })}
      </div>
    </div>
  );
};

export default BoardHead;
