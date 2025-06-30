import image from "../assets/illustration-intro.png";
import Button from "./Button";
function Landing() {
  return (
    <section className="pt-[200px]">
      <div className="container">
        <div className="element-center flex-col">
          <div className="w-[650px] max-w-full">
            <img src={image} alt="Intro Landing" className="w-full h-fit " />
          </div>

          <div className="text-white text-center my-5">
            <h1 className=" text-2xl md:text-4xl font-semibold pb-8">
              All your files in one secure location
              <br />
              accessible any where
            </h1>
            <p className="text-lg mx-auto opacity-[.8] px-[15px] md:w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, Aliquam atque eaque ipsum reprehenderit sit tenetur
              cumque ut expedita magnam ullam!
            </p>
          </div>

          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
