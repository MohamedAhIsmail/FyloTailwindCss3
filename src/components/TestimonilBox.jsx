function TestimonilBox({ testimonil }) {
  const { comment, avatar, title, name } = testimonil;
  return (
    <div>
      <p>{comment}</p>
      <div className="">
        <div>
          <img src={avatar} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonilBox;
