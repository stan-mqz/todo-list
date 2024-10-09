import { options } from "../data/data";
import { TodoFormData } from "../types/types";
import { Buttons } from "./Buttons";

type FormProps = {
   setData: React.Dispatch<React.SetStateAction<TodoFormData>>
}

export const Form = ({setData}: FormProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
     
        setData(prevData => ({
            ...prevData,
            [e.target.id] : e.target.value
           }))
        
    }

  return (
    <form className="bg-slate-100 p-5 mt-3 rounded-md flex flex-col max-w-[60%] mx-auto gap-4">
      <legend>Add Todo</legend>
      <div className="grid grid-cols-1 gap-1">
        <label htmlFor="">Title</label>
        <input
          id="title"
          className="border-2 border-[#e1e1e1] p-2"
          type="text"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-1">
        <label htmlFor="">Status</label>
        <select
          id="status"
          className="border-2 border-[#e1e1e1] p-2 rounded-md w-30"
          onChange={handleChange}
        >
          {options.map((option) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>

      <Buttons />
    </form>
  );
};
