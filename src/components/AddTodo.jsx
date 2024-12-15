import { useContext, useState } from "react";
import styles from "./AddTodo.module.css";
import { MdAddToPhotos } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
function AddTodo() {

  const {addNewItem} =useContext(TodoItemsContext)
  
  const [todoName, setTodoName] = useState(" ");
  const [dueDate, setDueDate] = useState(" ");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onButtonClicked = (event) => {
    event.preventDefault();
    addNewItem(todoName, dueDate);
    setDueDate(" ");
    setTodoName(" ");
  };

  return (
    <>
      <div className={`container ${styles.AddTodoStyle}`}>
        <form className="row" onSubmit={onButtonClicked}>
          <div className="col-5">
            <input
              onChange={handleNameChange}
              placeholder="Enter Todo Here"
              type="text"
              value={todoName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              id=""
              onChange={handleDateChange}
              value={dueDate}
            />
          </div>
          <div className="col-3">
            <button
              className={`btn btn-success ${styles.buttonStyle}`}
              // onClick={onButtonClicked}
            >
              <MdAddToPhotos />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
