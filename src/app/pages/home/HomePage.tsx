import "./HomePage.scss";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { ApplicationForm } from "../../shared/components/molecules/ApplicationForm/ApplicationForm";
import { Carousel } from "react-bootstrap";
import { Section } from "../../shared/components/organisms/Section/Section";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { WelcomeFrame } from "../../shared/components/molecules/WelcomeFrame/WelcomeFrame";
import { useState } from "react";
import { SocialButton } from "../../shared/components/atoms/SocialButton/SocialButton";

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  const slides = [
    {
      id: 1,
      component: <WelcomeFrame />,
    },
    {
      id: 2,
      component: <ApplicationForm />,
    },
  ];

  return (
    <div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false} interval={null}>

        {slides.map(slide => (
          <Carousel.Item key={slide.id} className="slide">
            <Section children={slide.component} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="slideCounter d-flex flex-1 justify-content-between w-75">
        <div onClick={() => setActiveIndex(activeIndex - 1)} className={activeIndex !== 0 ? "" : "invisible"}>
          <SocialButton value={"-"} />
        </div>

        <span>
          {activeIndex + 1} de {slides.length}
        </span>

        <div onClick={() => setActiveIndex(activeIndex + 1)} className={activeIndex !== slides.length - 1 ? "" : "invisible"}>
          <SocialButton value={"+"} />
        </div>
      </div>
    </div>
  );
};

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("Home");
  return <BasicTemplate children={HomeCarousel()} />;
};
