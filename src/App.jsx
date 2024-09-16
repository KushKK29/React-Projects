import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import ToDoitem from "./components/Todoitem";
import { useState } from "react";
function app() {
  let inillist = [];

  const onNew = (iname, iduedate) => {
    let newlist = [...llist, { name: iname, duedate: iduedate }];
    setllist(newlist);
  };
  const [llist, setllist] = useState(inillist);
  const handeldeleteitem = (item) => {
    const newlist = llist.filter((i) => i.name !== item);
    setllist(newlist);
    console.log(item);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppToDo onNewitem={onNew}></AppToDo>
      {llist.length === 0 && <h2>Enjoy your day</h2>}
      <ToDoitem llist={llist} onDeleteClick={handeldeleteitem}></ToDoitem>
    </center>
  );
}
export default app;
