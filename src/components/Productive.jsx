import productive from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";
function Productive() {
  return (
    <section className="py-24">
      <div className="container element-center">
        <div className="grid place-items-center grid-cols-1 gap-20 lg:grid-cols-2 tex">
          <div>
            <img src={productive} alt="Stay Productive" />
          </div>

          <div className="text-white w-full">
            <h3 className="font-semibold text-4xl w-[400px] mb-7">
              Stay productive, wherever you are
            </h3>
            <p className="pb-5 w-[500px] text-sm max-w-full">
              Never let location be an issue when accessing your files, Fylo has
              you covered for all of your file storage needs
            </p>

            <p className="pb-5 w-[500px] text-sm max-w-full">
              Securely share files and folders with friends, family and
              colleagues for live collaboration, No email attachments required
            </p>

            <a
              href="#"
              className="flex items-center gap-2 pb-2 underline text-[#62E0D9]"
            >
              See how Fylo works <img src={arrow} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productive;
