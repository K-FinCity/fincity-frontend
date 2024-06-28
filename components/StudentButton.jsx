import Link from "next/link";

export default function StudentButton(props) {
  return (
    <Link
      href={props.link}
      className="w-[58px] h-[26px] border-[#F9F5FE] border-2 bg-[#E3D2FC] hover:bg-[#6B28BB] hover:text-[#FAFAFA]  rounded-2xl text-center content-center shadow-md lg:w-[126px] lg:h-[49px] md:w-[92px] md:h-[31px]"
    >
      <p>{props.title}</p>
    </Link>
  );
}
