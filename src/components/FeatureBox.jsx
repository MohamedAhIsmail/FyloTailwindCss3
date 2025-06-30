function FeatureBox({ feature }) {
  const { icon, title, description } = feature;
  console.log(feature);

  return (
    <div className="text-white text-center element-center flex-col p-5">
      <img src={icon} alt={title} />
      <h2 className="text-xl font-semibold my-4">{title}</h2>
      <p className=" font-normal text-sm">{description}</p>
    </div>
  );
}

export default FeatureBox;
