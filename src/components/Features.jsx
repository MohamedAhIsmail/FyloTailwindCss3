import FeatureBox from "./FeatureBox";
import iconAccess from "../assets/icon-access-anywhere.svg"
import iconSecurity from "../assets/icon-security.svg"
import iconCollaboration from "../assets/icon-collaboration.svg"
import iconAnyFile from "../assets/icon-any-file.svg"

const features = [
  {
    icon: iconAccess,
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet or computer to access your account means your files follow you every where.",
  },
  {
    icon: iconSecurity,
    title: "Security you can trust",
    description:
      "factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: iconCollaboration,
    title: "Real-time Collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No eamil attachments required.",
  },
  {
    icon: iconAnyFile,
    title: "Store any type of file",
    description:
      "Whether you'r sharing holidays phones or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
  },
];

function Features() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-[865px] mx-auto max-w-full">
          {features.map((feature) => (
            <FeatureBox feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
