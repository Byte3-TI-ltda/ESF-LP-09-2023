import "./HomePage.scss";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { ApplicationForm } from "../../shared/components/molecules/ApplicationForm/ApplicationForm";
import { Carousel } from "react-bootstrap";
import { Section } from "../../shared/components/organisms/Section/Section";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { WelcomeFrame } from "../../shared/components/molecules/WelcomeFrame/WelcomeFrame";

const ItemWelcomeFrame = () => {
  return <WelcomeFrame />;
};

const ItemFrameSignUp = () => {
  return <ApplicationForm />;
};

const HomeCarousel = () => {
  return (
    <Carousel controls={false} interval={null}>
      <Carousel.Item className="slide">
        <Section children={ItemWelcomeFrame()} />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <Section children={ItemFrameSignUp()} />
      </Carousel.Item>
    </Carousel>
  );
};

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("Home");
  return <BasicTemplate children={HomeCarousel()} />;
};
