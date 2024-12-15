/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Items.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
function Items({ item }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className={`container ${styles.ItemContainer}`}>
        <div className={`${styles.ItemStyle} row`}>
          <div className="col-5">{item.Name}</div>
          <div className="col-4">{item.due}</div>
          <div className="col-3">
            <button
              className={`btn btn-danger ${styles.buttonStyle}`}
              onClick={() => deleteItem(item.Name)}
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
