import { filterOptions } from "../data/data";
import { todoAction, todoState } from "../reducers/todoReducer";

type ComboboxProps = {
  state: todoState;
  dispatch: React.Dispatch<todoAction>;
};

export const Combobox = ({ state, dispatch }: ComboboxProps) => {


  const selectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type :'filter-todo', payload: {filter : +e.target.value}})
  };

  return (
    <div className="flex justify-end max-w-[60%] mx-auto mt-6">
      <select
        id="status-filter"
        onChange={selectFilter}
        className="bg-[#cccdde] p-2 rounded-md w-30"
      >
        {filterOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
