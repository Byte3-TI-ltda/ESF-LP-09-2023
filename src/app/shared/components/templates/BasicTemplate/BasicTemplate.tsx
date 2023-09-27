import { Header } from "../../organisms/Header/Header";
import { Container } from "react-bootstrap";
import { Logo } from "../../atoms/logo/Logo";

interface BasicTemplateProps {
  children: any;
}

const HeaderChildren = () => {
  return <Logo />;
};

export const BasicTemplate: React.FC<BasicTemplateProps> = ({ children }) => {
  return (
    <Container fluid={false}>
      <Header children={HeaderChildren()} />
      <>{children}</>
    </Container>
  );
};
