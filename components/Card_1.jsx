const Card_1 = (props) => {
  return (
    <section className="border rounded-2xl border-dashed">
      <div className="text-[#09090b] font-semibold text-lg leading-[15px] p-3">
        Icono
      </div>
      <h3 className="text-[#09090b] font-semibold text-lg leading-[15px] p-3">
        {props.title}
      </h3>
      <p className="text-[#09090b] text-base leading-4 p-3">{props.content}</p>
    </section>
  );
};

export default Card_1;
