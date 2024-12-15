import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import Item from "./components/Item";
import Container from "./components/Container";
import { useReducer } from "react";
import ErrorMessage from "./components/ErrorMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { Name: action.payload.itemName, due: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.Name != action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [
    { Name: "Naveen", due: "21-10-2005" },
  ]);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  let deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };
  // const initialTodoItems = [
  //   {
  //     Name: "Milk",
  //     due: "09 oct 2024",
  //   },
  //   {
  //     Name: "Milk",
  //     due: "09 oct 2024",
  //   },
  //     {
  //       Name: "Milk",
  //       due: "09 oct 2024",
  //     },

  // ];

  // const [todoItems, setTodoItems] = useState([]);
  // const addNewItem = (itemName, itemDueDate) => {
  // itemName && itemDueDate == " "
  //   ? alert("Please fill both fields")
  //   : setTodoItems([...todoItems, { Name: itemName, due: itemDueDate }]);

  /* itemDueDate && itemName == " "
      ? alert("Please fill both fields")
      : setTodoItems((currVlaue) => {
          // console.log(currVlaue);
          return [...currVlaue, { Name: itemName, due: itemDueDate }];
        }
      );*/

  // let newTodoItem = { Name: itemName, due: itemDueDate };
  // let updatedTodoItems = [...todoItems, newTodoItem];
  // setTodoItems(updatedTodoItems);
  // console.log(itemDueDate, itemName);
  // };

  // const defaultTodoContext = [{Name:"naveen", due:19}]

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        <Container>
          <center className="todo-container">
            <AppName />
            <AddTodo />
            <ErrorMessage />
            <Item />
          </center>
        </Container>
      </TodoItemsContext.Provider>
    </>
  );
}
export default App;
