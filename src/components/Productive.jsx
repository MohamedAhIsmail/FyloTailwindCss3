import productive from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";
function Productive() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid place-items-center grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <img src={productive} alt="Stay Productive" />
          </div>

          <div className="text-white w-full">
            <h3 className="font-semibold mb-7 text-3xl md:w-[400px] md:text-4xl ">
              Stay productive, wherever you are
            </h3>
            <p className="pb-5 w-[600px] tracking-[.8px] text-sm max-w-full">
              Never let location be an issue when accessing your files, Fylo has
              you covered for all of your file storage needs
            </p>

            <p className="pb-5 w-[600px] tracking-[.8px] text-sm max-w-full">
              Securely share files and folders with friends, family and
              colleagues for live collaboration, No email attachments required
            </p>

            <a
              href="#"
              className="flex items-center gap-1 pb-2 border-b-2 w-fit border-[#62e0d9] text-[#62E0D9] hover:text-[#69f5ee] transition-all duration-200"
            >
              See how Fylo works{" "}
              <img
                src={arrow}
                alt="Arrow"
                className="transition-transform animate-moveRight"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productive;
