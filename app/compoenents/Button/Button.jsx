"use client";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { TagsInput } from "react-tag-input-component";

const Button = ({ pulltask }) => {
  const [selected, setSelected] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskData = {
      title,
      priority,
      description,
      selected,
    };
    // Call the pulltask function with the task data
    pulltask(taskData);
    setTitle("");
    setPriority("");
    setDescription("");
    setSelected([]);
    // Close the modal
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_1").showModal()}>
        <span className="cursor-pointer">
          <CiCirclePlus className="text-4xl text-gray-600" />
        </span>
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg mb-5">New Task!</h3>
          {/* task form */}
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              required
            />

            <select
              id="age"
              name="age"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-3 py-2 border bg-white rounded-md focus:outline-none "
              required
            >
              <option value="" defaultValue>
                Select Priority
              </option>
              <option value="todo">To Do</option>
              <option value="progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
              <option value="declined">Declined</option>
            </select>

            <textarea
              id="message"
              name="message"
              placeholder="Descriptions..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none "
              required
            />

            <div>
              <TagsInput
                required
                value={selected}
                onChange={setSelected}
                name="services"
                classNames={{
                  tagsInput: "custom-tags-input",
                  tag: "custom-tag",
                  remove: "custom-remove",
                  suggestions: "custom-suggestions",
                }}
                placeHolder="Enter status or tag"
              />
              <em className="text-sm font-light text-gray-500">
                press enter to add new tag
              </em>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-center  text-white font-bold gap-3  py-2 px-3 rounded-md"
            >
              ADD
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Button;
