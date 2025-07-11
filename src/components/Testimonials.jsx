import avatarOne from "../assets/profile-1.jpg";
import avatarTwo from "../assets/profile-2.jpg";
import avatarThree from "../assets/profile-2.jpg";
import quotes from "../assets/bg-quotes.png";
import TestimonilBox from "./TestimonilBox";

const testimonilas = [
  {
    comment:
      "Fylo has improved our team productivity by an order of mangnitude. Since making the switch our team has become a well-oiled collaboration machine",
    avatar: avatarOne,
    name: "Satish Patel",
    title: "Founder & CEO, Hunda",
  },
  {
    comment:
      "Fylo has improved our team productivity by an order of mangnitude. Since making the switch our team has become a well-oiled collaboration machine",
    avatar: avatarTwo,
    name: "Bruce Mckenzie",
    title: "Founder & CEO, Hunda",
  },
  {
    comment:
      "Fylo has improved our team productivity by an order of mangnitude. Since making the switch our team has become a well-oiled collaboration machine",
    avatar: avatarThree,
    name: "Iva Boyd",
    title: "Founder & CEO, Hunda",
  },
];

function Testimonials() {
  return (
    <section className="pt-20 pb-72">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={quotes} alt="Qoutes" />
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonilas.map((testimonil) => (
            <TestimonilBox testimonil={testimonil} key={testimonil.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
