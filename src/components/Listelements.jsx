import React from "react";
import { MdDelete } from "react-icons/md";
function Listelements({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kgrow">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Listelements;
