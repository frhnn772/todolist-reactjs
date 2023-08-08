import { useState } from "react";
import "./index.css";
import CardActivity from "./components/Fragments/CardActivity";

function App() {
  const [isChecked, setIsChecked] = useState("");
  const handleInput = (event) => {
    setIsChecked(event.target.value);
  };
  const addToTask = () => {
    if (isChecked) {
      setIsChecked("");
      console.log("Task added: " + isChecked);
    } else {
      alert("kosong");
    }
  };

  const tasks = [
    {
      id: 1,
      activity:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem minima alias eaque.",
      status: true,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: true,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
    {
      id: 2,
      activity: "Lorem ipsum dolor sit amet consectetur.",
      status: false,
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex justify-center py-8 px-8 bg-teal-500">
        <div className="w-full max-w-2xl  bg-white rounded-md shadow-md shadow-black/50">
          <h1 className="text-center border">Simple TodoList w/ReactJS</h1>
          <div className="flex-row sm:flex justify-between p-6">
            <input
              className={`py-2 rounded-full px-5 w-full placeholder:text-gray-300 text-teal-500 shadow-sm shadow-black/50 ${
                isChecked && "sm:w-3/4"
              } sm:w-44 sm:focus:w-3/4 focus:shadow-md focus:shadow-black/60 focus:outline-none transition-all duration-300`}
              type="text"
              name="activity"
              id="activity"
              value={isChecked}
              onChange={handleInput}
              placeholder="Add some activity..."
            />
            <div className="flex justify-center pt-3 sm:pt-0">
              <button
                onClick={addToTask}
                className="px-5 py-2 bg-black text-white rounded shadow-sm shadow-black/50 hover:shadow-md hover:shadow-black/60 hover:bg-black/90 mx-12 sm:mx-0 w-full sm:w-auto transition-all duration-300"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="bg-[#F8F9FA]   border h-1/2 sm:h-2/3 overflow-scroll">
            <div className="px-6 py-2 gap-2 flex flex-col">
              <p className="text-gray-600 text-sm">Completed</p>
              {tasks
                .filter((task) => task.status === true)
                .map((task) => (
                  <CardActivity key={task.id} status={task.status}>
                    {task.activity}
                  </CardActivity>
                ))}
            </div>
            <div className="px-6 py-2 gap-2 flex flex-col">
              <p className="text-gray-600 text-sm">Uncompleted</p>
              {tasks
                .filter((task) => task.status === false)
                .map((task) => (
                  <CardActivity key={task.id} status={task.status}>
                    {task.activity}
                  </CardActivity>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
