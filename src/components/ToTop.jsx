import { useEffect, useRef } from "react";
import { HiChevronDoubleUp } from "react-icons/hi2";

function ToTop() {
  const toTopButton = useRef();
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        toTopButton.current.style.right = "20px";
      } else {
        toTopButton.current.style.right = "-60px";
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={toTopButton}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="w-12 h-12 border-[1px] border-[#21293C] p-3 flex justify-center items-center text-white rounded-[4px] bg-[#0C1524] fixed bottom-5 right-[-60px] shadow-md cursor-pointer transition-all duration-300 z-50 group"
    >
      <HiChevronDoubleUp className="group-hover:animate-bounce" />
    </div>
  );
}

export default ToTop;
