import Image from "next/image";

const LandingPageCard = (props) => {
  return (
    <section className="bg-zinc-50 border rounded-2xl border-dashed flex flex-col h-full">
      <div className="text-[#09090b] font-semibold text-lg leading-[15px] p-3 mx-auto p-6">
        <Image src={props.icon} alt="icono"></Image>
      </div>
      <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-3">
        {props.title}
      </h3>
      <p className="text-[#09090b] text-base leading-4 p-3">{props.content}</p>
    </section>
  );
};

export default LandingPageCard;
