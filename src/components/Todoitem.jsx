// ToDoitem.js
import Listelements from "./Listelements";
import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../../../3-To-Do-APP-V3 copy/src/components/store/todo-items-store";
function ToDoitem({ llist, onDeleteClick }) {
  const todoitemsfromcontext = useContext(TodoItemsContext);
  console.log(`items context: ${todoitemsfromcontext}`);
  return (
    <div>
      {llist.map((item) => (
        // Use a key for each mapped element to avoid rendering issues
        <Listelements
          // Adding a key to each element is important
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default ToDoitem;
