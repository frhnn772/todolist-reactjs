import { useEffect, useState } from "react";
import "./index.css";
import ListActivity from "./components/ListActivity";

export default function App() {
  const tasks = [];

  const [isTasks, setIsTasks] = useState(tasks);
  const [isActivity, setIsActivity] = useState('');
  const addToTask = (e) => {
    e.preventDefault();
    if (isActivity) {
      const newTask = { activity: isActivity, status: false, id: Date.now() };
      setIsTasks([...isTasks, newTask]);
      console.log(tasks.push(newTask));
      setIsActivity('');
    } else {
      alert("kosong");
    }
  };
  const deleteFromTasks = (id) => {
    setIsTasks((isTasks) => isTasks.filter((task) => task.id !== id));
  };
  const handleToggleCheck = (id) => {
    setIsTasks((isTasks) => isTasks.map((task) => task.id === id ? {...task, status: !task.status} : task))
  }
  const completedTasks = isTasks.filter((task) => task.status === true);
  const uncompletedTasks = isTasks.filter((task) => task.status === false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setIsTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(isTasks));
  }, [isTasks]);

  return (
    <>
      <div className="w-full h-screen flex justify-center py-8 px-8 bg-teal-500">
        <div className="w-full max-w-2xl relative bg-white rounded-md shadow-md shadow-black/50">
          <div className=" py-4 rounded-b-2xl ">
            <div className="bg-red-500 inset-x-0 mx-4 sm:mx-40 -top-4 py-1 absolute rounded-md shadow-md hover:-translate-y-1 shadow-black/50 transition-all duration-150">
              <h1 className="text-center ">Simple TodoList w/ReactJS</h1>
            </div>
          </div>
          <form onSubmit={addToTask}>
            <div className="flex-row sm:flex justify-between p-6">
              <input
                className={`py-2 rounded-full px-5 placeholder:text-gray-300 text-teal-500 shadow-sm shadow-black/50 w-full ${
                  isActivity ? 'sm:w-3/4' : 'sm:w-44'
                } sm:focus:w-3/4 focus:shadow-md focus:shadow-black/60 focus:outline-none transition-all duration-300`}
                type="text"
                name="activity"
                id="activity"
                value={isActivity}
                onChange={(e) => setIsActivity(e.target.value)}
                placeholder="Add some activity..."
              />
              <div className="flex justify-center pt-3 sm:pt-0">
                <button className="px-5 py-2 bg-black text-white rounded shadow-sm shadow-black/50 hover:shadow-md hover:shadow-black/60 hover:bg-black/90 mx-12 sm:mx-0 w-full sm:w-auto transition-all duration-300">
                  Add Task
                </button>
              </div>
            </div>
          </form>
          <div className="bg-[#F8F9FA] border h-3/4 sm:h-4/5 overflow-y-scroll">
            <ListActivity
              tasks={uncompletedTasks}
              status={false}
              title="Uncompleted"
              name="No activities"
              onToggleCheck={handleToggleCheck}
              />
            <ListActivity
              tasks={completedTasks}
              status={true}
              title="Completed"
              name="No completed activities"
              onDeleteTasks={deleteFromTasks}
              onToggleCheck={handleToggleCheck}
            />
          </div>
        </div>
      </div>
    </>
  );
}
