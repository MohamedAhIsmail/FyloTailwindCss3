import Button from "./Button";

function GetStarted() {
  return (
    <section className="">
      <div className="container">
        <div className="bg-[#1C2230] mx-auto text-center p-6 rounded-md w-[900px] max-w-full ">
          <div className="text-white">
            <h4 className="font-semibold text-3xl mb-4">
              Get early access today
            </h4>
            <p className="text-sm mb-8 w-[70%] mx-auto">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-5 items-center justify-center">
            <input
              type="text"
              className="w-full md:w-[50%] px-5 py-3 text-sm rounded-full outline-none"
              placeholder="email@example.com"
            />
            <button className="btn w-full md:w-[30%] px-7 py-3 rounded-full">
              Get started for free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
