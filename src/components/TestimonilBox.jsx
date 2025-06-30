function TestimonilBox({ testimonil }) {
  const { comment, avatar, title, name } = testimonil;
  return (
    <div className="bg-[#21293C] text-white px-7 pt-10 pb-5 rounded-md shadow-md z-40">
      <p className="text-sm mb-5">{comment}</p>
      <div className="flex items-center gap-5">
        <div className="w-16 h-16">
          <img src={avatar} alt={name} className="rounded-full" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-[12px]">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonilBox;
