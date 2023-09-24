import { Carousel } from "react-bootstrap";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { Section } from "../../shared/components/organisms/Section/Section";
import { ThanksForTouSignUpFrame } from "./Frames/ThanksForTouSignUp/ThanksForTouSignUpFrame";
import { StayTunedFrame } from "./Frames/StayTuned/StayTunedFrame";
import { LearnMoreFrame } from "./Frames/LearnMore/LearnMoreFrame";

const ItemThanksForTouSignUpFrame = () => {
  return <ThanksForTouSignUpFrame />;
};

const ItemStayTunedFrame = () => {
  return <StayTunedFrame />;
};

const ItemLearnMoreFrame = () => {
  return <LearnMoreFrame />;
};

const ResponseCarousel = () => {
  return (
    <Carousel controls={false} interval={null}>
      <Carousel.Item className="slide">
        <Section children={ItemThanksForTouSignUpFrame()} />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <Section children={ItemStayTunedFrame()} />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <Section children={ItemLearnMoreFrame()} />
      </Carousel.Item>
    </Carousel>
  );
};

export const ResponsePage: React.FC<{}> = () => {
  UseDocumentTitle("Resposta");
  return <BasicTemplate children={ResponseCarousel()} />;
};
