import "./BasicTemplate.scss";
import { Header } from "../../organisms/Header/Header";
import { Section } from "../../organisms/Section/Section";
import { Carousel, Container } from "react-bootstrap";
import { Logo } from "../../atoms/logo/Logo";

interface BasicTemplateProps {
  children: any;
}

const HeaderChildren = () => {
  return <Logo />;
};

export const BasicTemplate: React.FC<BasicTemplateProps> = ({ children }) => {
  return (
    <Container
      fluid={true}
      className="min-vh-100 d-block overflow-y-hidden"
    >
      <Header children={HeaderChildren()} />

      <Carousel controls={false} interval={null}>
        <Carousel.Item className="slide">
          <Section children={children} />
        </Carousel.Item>

        <Carousel.Item className="slide">
          <Section children={children} />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
