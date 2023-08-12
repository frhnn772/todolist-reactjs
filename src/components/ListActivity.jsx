import CardActivity from "./Fragments/CardActivity";

const ListActivity = (props) => {
  const { tasks, title, name, onDeleteTasks, onToggleCheck} = props;
  return (
    <div className="px-6 py-2 gap-2 flex flex-col">
      <p className="text-gray-600 text-sm">{title}</p>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <CardActivity task={task} key={task.id} onDeleteTasks={onDeleteTasks} onToggleCheck={onToggleCheck}>
            {task.activity}
          </CardActivity>
        ))
      ) : (
        <div className=" bg-gray-100 py-3 w-full rounded-sm">
          <div className="px-2 flex justify-between">
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-gray-300">{name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ListActivity;
