import { Carousel } from "react-bootstrap";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { Section } from "../../shared/components/organisms/Section/Section";

const ResponseCarousel = () => {
  return (
    <Carousel controls={false} interval={null}>
      <Carousel.Item className="slide">
        <Section children={<p>item 1</p>} />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <Section children={<p>item 2</p>} />
      </Carousel.Item>
      <Carousel.Item className="slide">
        <Section children={<p>item 3</p>} />
      </Carousel.Item>
    </Carousel>
  );
};

export const ResponsePage: React.FC<{}> = () => {
  UseDocumentTitle("Resposta");
  return <BasicTemplate children={ResponseCarousel()} />;
};
