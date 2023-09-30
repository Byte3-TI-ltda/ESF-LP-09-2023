import { Header } from "../../organisms/Header/Header";
import { Container } from "react-bootstrap";
import { Logo } from "../../atoms/logo/Logo";
import { useState } from "react";

interface BasicTemplateProps {
  children: any;
  isFluid?: boolean;
}

const HeaderChildren = () => {
  return <Logo />;
};

export const BasicTemplate: React.FC<BasicTemplateProps> = ({ children, isFluid = false }) => {

  const [fluid] = useState(isFluid);

  return (
    <div className="d-flex flex-column vh-100">
      <Header children={HeaderChildren()} />
      <Container fluid={fluid} className={`d-flex align-items-start align-items-lg-center justify-content-center flex-grow-1 ${fluid ? 'm-0 ' : 'p-3'}`}>
        {children}
      </Container>
    </div>
  );
};
