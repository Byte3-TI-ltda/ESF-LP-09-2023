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
    <div className="d-flex flex-column vh-100 py-2">
      <Header children={HeaderChildren()} />
      <Container className="d-flex align-items-center justify-content-center flex-grow-1 py-lg-5">
        {children}
      </Container>
    </div>
  );
};
