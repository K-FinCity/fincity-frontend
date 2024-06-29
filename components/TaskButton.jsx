import clsx from "clsx";

export default function TaskButton(props) {
  return (
    <div className="flex flex-row items-center mt-8 align-middle">
      <input
        type="checkbox"
        className="checkbox size-9 md:size-12 lg:size-14 self-center"
        disabled
      />
      <p className="bg-[#CFB0F8] text-2xl  md:text-3xl w-[490px] h-[74px] rounded-2xl lg:text-4xl">
        {props.title}
      </p>
    </div>
  );
}

// <input type="checkbox" className="checkbox" disabled checked />
