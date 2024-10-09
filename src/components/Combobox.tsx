import { filterOptions } from "../data/data";



export const Combobox = () => {
  return (
    <div className="flex justify-end max-w-[60%] mx-auto mt-6">
      <select className="bg-[#cccdde] p-2 rounded-md w-30">
        {filterOptions.map(option => (
            <option value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
