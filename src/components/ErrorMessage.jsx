import { useContext } from 'react';
import st from './ErrorMessage.module.css';
import { TodoItemsContext } from '../store/todo-items-store';
function ErrorMessage() {
  
 let {todoItems} = useContext(TodoItemsContext);
  return (
    <div className={st.ErrorMessageContainer}>{todoItems.length <= 0 && "Oh... No Item Found Please Add New Todo"}</div>
  )
}

export default ErrorMessage