import { Fragment } from "react";
import TrashIcon from "../../assets/iconSvg/TrashIcon";
import UndoIcon from "../../assets/iconSvg/UndoIcon";
import CheckIcon from "../../assets/iconSvg/CheckIcon";

const CardActivity = (props) => {
    const { children, id, status} = props;
  return (
    <Fragment>
    <div
      id={id}
      className="bg-[#ffff] shadow-sm shadow-black/20 py-2 w-full rounded-sm hover:-translate-y-1 transition-all duration-500 delay-100"
    >
      <div className="px-2 flex justify-between">
        <div className="flex flex-col justify-center gap-2">
          <p
            className={`text-base selection:text-white ${status === true ? 'decoration-red-500 line-through selection:bg-red-500': 'selection:bg-emerald-500'}`}
          >
            {children}
          </p>
        </div>
        <div className="flex items-center px-1 py-1 ">
        {status === true ? <div className="flex gap-1"><UndoIcon /><TrashIcon /></div> : <CheckIcon/>}
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default CardActivity;
