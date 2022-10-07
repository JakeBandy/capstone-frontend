import { useState, useEffect } from "react";
import "./App.css";
import { CreateUserForm } from "./CreateUserForm";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodoData = async () => {
      const data = await fetch("capstone-backend-ten.vercel.app/todos");

      const json = await data.json();

      setTodos(json);
    };

    fetchTodoData();
  }, []);

  useEffect(() => {
    console.log({ todos });
  }, [todos]);

  return (
    <div className="App">

    <h1>Welcome, Jake</h1>
    <h4>Your tasks</h4>
    <form>
      <label for="text_todo">
        Last name:
        <input type="text" name="todo" onChange={handleChange} />
      </label>
      <input
        type="submit"
        }
      />
    </form>
    <h1>{ todos }</h1>
    <h2>-Eat breakfast</h2>
    <h2>-Go to the gym</h2>
    <h2>-Do coding interviews</h2>

  </div>
  );
}

export default App;