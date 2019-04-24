import React, { useReducer } from "react";
import "./App.css";

const initialState = { todos: [], input: "" };
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        console.log("state.input", state.input);
        console.log("action.input", action.input);
        return {
          ...state,
          todos: [...state.todos, { todo: state.input, complete: false }]
        };
      case "HANDLE_INPUT":
        console.log("state.input", state.input);
        console.log("action.input", action.input);
        return { ...state, input: action.input };

      case "DELETE_TODO":
        return {
          todos: [
            ...state.todos.slice(0, action.index),
            ...state.todos.slice(action.index + 1)
          ]
        };

      case "COMPLETE_TODO":
        return {
          todos: [
            ...state.todos.slice(0, action.index),
            {
              ...state.todos[action.index],
              complete: !state.todos[action.index].complete
            },
            ...state.todos.slice(action.index + 1)
          ]
        };

      default:
        return "Not an action";
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO"
          })
        }
      >
        +
      </button>
      <input
        onChange={e =>
          dispatch({ type: "HANDLE_INPUT", input: e.target.value })
        }
        style={{ height: "10px", width: "100px" }}
      />

      {state.todos.map((item, indx) => (
        <div>
          {item.complete ? (
            <strike>{item.todo}</strike>
          ) : (
            <div>{item.todo}</div>
          )}
          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TODO",
                index: indx
              })
            }
          >
            -
          </button>

          <button
            onClick={() => dispatch({ type: "COMPLETE_TODO", index: indx })}
          >
            complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
