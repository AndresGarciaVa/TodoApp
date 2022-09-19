import { useState } from "react";
export default function Todoapp() {
  const [title, setTitle] = useState("holaa");

  function handleClick(e) {
    e.preventDefault();
    setTitle("Andres")
  }
  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }
  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleClick}
          type="submit"
          value="Create Todo"
          className="buttomCreate"
        />

        {title}
      </form>
    </div>
  );
}
