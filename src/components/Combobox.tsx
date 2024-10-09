

export const Combobox = () => {
  return (
    <div className="flex justify-end max-w-[60%] mx-auto mt-6">
      <select className="bg-[#cccdde] p-2 rounded-md w-30">
        <option value="">All</option>
        <option value="">Incomplete</option>
        <option value="">Complete</option>
      </select>
    </div>
  );
};
