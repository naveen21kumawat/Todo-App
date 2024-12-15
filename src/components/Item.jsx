/* eslint-disable react/prop-types */
import Items from "./Items";
import styles from './Item.module.css'

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function Item() {

  const {todoItems} = useContext(TodoItemsContext);
   //javascript code areww written here s
  return (
    <>
      {todoItems.map((item) => (
        <div key={item.Name}   className={`container ${styles.ItemContainer}`}>
          <Items  item={item} />
        </div>
      ))}
    </>
  );
}

export default Item;
