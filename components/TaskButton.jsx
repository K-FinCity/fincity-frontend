import clsx from "clsx";

export default function TaskButton(props) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        className="checkbox size-14 self-center"
        disabled
      />
      <p className="bg-[#CFB0F8] w-[490px] h-[74px] rounded-2xl text-[36px] ">
        Task1
      </p>
    </div>
  );
}

// <input type="checkbox" className="checkbox" disabled checked />
