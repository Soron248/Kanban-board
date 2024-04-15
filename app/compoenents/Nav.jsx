import React from "react";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-10 bg-white shadow-sm">
      <h1 className="text-2xl font-bold">kanban</h1>
      <span className="size-8 flex justify-center items-center bg-gray-200 rounded-full">
        <CiUser className="text-xl" />
      </span>
    </div>
  );
};

export default Nav;
