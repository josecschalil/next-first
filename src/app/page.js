import Contact from "./components/contact";
import Heading from "./components/heading";
import HeroSection from "./components/herosection";
import ReadMore from "./components/readmore";
import Testimony from "./components/testimony";

const HomePage = () => {
  const cards = [
    {
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "The rise of AI in healthcare and its impact",
      description:
        "Artificial Intelligence is revolutionizing the healthcare industry by improving diagnostics and patient care.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "Sustainable energy innovations for a better future",
      description:
        "Discover the latest advancements in sustainable energy and how they shape our future world for the better.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "Cybersecurity trends 2025 and beyond for businesses",
      description:
        "Stay ahead with the latest trends and tools in cybersecurity for 2025 and beyond to protect your digital assets.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "The future of remote work and workplace culture",
      description:
        "How remote work is transforming industries and changing workplace culture forever and how to adapt.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Blockchain beyond cryptocurrencies case studies",
      description:
        "Exploring how blockchain technology is used beyond just digital currencies.",
      link: "#",
    },
  ];
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <br />
      <div className="flex flex-wrap justify-center">
        <Heading />
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-wrap gap-8 justify-center">
        {cards.map((card, index) => (
          <ReadMore
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-10 px-30">
        <Testimony />
      </div>
      <div className="justify-center pb-7 px-30 bg-50 dark:bg-800">
        <Contact />
      </div>
    </>
  );
};
export default HomePage;
