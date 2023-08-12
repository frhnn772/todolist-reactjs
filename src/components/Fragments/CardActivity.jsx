import { Fragment } from "react";
import TrashIcon from "../../assets/iconSvg/TrashIcon";
import UndoIcon from "../../assets/iconSvg/UndoIcon";
import CheckIcon from "../../assets/iconSvg/CheckIcon";

const CardActivity = (props) => {
  const { children, task, onDeleteTasks, onToggleCheck } = props;
  return (
    <Fragment>
      <div
        className="bg-[#ffff] shadow-sm shadow-black/20 py-2 w-full rounded-sm hover:-translate-y-1 transition-all duration-500 delay-100"
      >
        <div className="px-2 flex justify-between">
          <div className="flex flex-col justify-center gap-2">
            <p
              className={`text-base selection:text-white select-auto ${
                task.status === true
                  ? "decoration-red-500 line-through selection:bg-red-500"
                  : "selection:bg-emerald-500"
              }`}
            >
              {children}
            </p>
          </div>
          <div className="flex items-center px-1 py-1 ">
            {task.status === true ? (
              <div className="flex gap-1">
              <button onClick={() => onToggleCheck(task.id)}>
                <UndoIcon />
                </button>
                <button onClick={() => onDeleteTasks(task.id)}>
                  <TrashIcon />
                </button>
              </div>
            ) : (
              <button onClick={() => onToggleCheck(task.id)}>
                <CheckIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CardActivity;