import "./WelcomePage.scss";
import { Col, Container, Row } from "react-bootstrap";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { BsIcon } from "../../shared/components/atoms/BsIcon/BsIcon";
import { EsfButton } from "../../shared/components/atoms/EsfButton/EsfButton";
import { EsfButtonSocial } from "../../shared/components/atoms/EsfButtonSocial/EsfButtonSocial";
//import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC<{}> = () => {
  UseDocumentTitle("ESF - Bem-vindo!");

  //const navigate = useNavigate();

  const handleClick = () => {
    //navigate("/...");
  };

  return (
    <BasicTemplate
      isFluid={true}
      children={
        <div className="d-flex flex-column w-100">
          <Container className="p-3">
            <Row className="justify-content-center justify-content-lg-around">
              <Col className="col-sm-12 col-md-10 col-lg-4 col-scale px-lg-4">
                <Row className="justify-content-center mb-lg-2">
                  <Col className="col-sm-12 p-0">
                    <h1 className="text-center text-uppercase fs-bebas-neue lh-1 fs-custom_w">
                      bem-vindo aos exploradores sem fronteiras
                    </h1>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3 mt-lg-3">
                  <Col className="col-sm-12">
                    <p className="text-center lh-1 px-3 px-lg-4 fs-5">
                      Sua inscrição é o primeiro passo para embarcar em jornadas
                      incríveis!
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="col-sm-12 col-md-10 col-lg-4 col-scale px-lg-4">
                <Row className="justify-content-center mt-3 mt-lg-0">
                  <Col className="col-sm-12">
                    <p className="text-center lh-1 px-5 fs-4 fw-bold mb-0">
                      Não perca nossas atualizações.
                    </p>
                    <p className="text-center lh-1 px-5 fs-4 fw-bold">
                      Siga as nossas redes
                      sociais!
                    </p>
                  </Col>
                </Row>
                <Row className="d-sm-block justify-content-center">
                  <Col className="col-sm-12 text-center">
                    <ul className="list-group list-group-horizontal justify-content-center">
                      <li className="list-group-item border-0 bg-transparent py-2">
                        <EsfButtonSocial child={<BsIcon iconName="Instagram" className="fs-2"></BsIcon>} onClick={() => { }} />
                      </li>
                      <li className="list-group-item border-0 bg-transparent py-2">
                        <EsfButtonSocial child={<BsIcon iconName="Facebook" className="fs-2"></BsIcon>} onClick={() => { }} />
                      </li>
                      <li className="list-group-item border-0 bg-transparent py-2">
                        <EsfButtonSocial child={<BsIcon iconName="Youtube" className="fs-2"></BsIcon>} onClick={() => { }} />
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Row className="bg-primary mt-lg-4 row-footer p-3 p-lg-0">
            <Col className="col-sm-12">
              <Container>
                <Row className="justify-content-center justify-content-lg-around">
                  <Col className="col-12 col-lg-4 col-scale p-0 d-flex align-items-center justify-content-center">
                    <h1 className="text-center mx-5 mx-lg-0 text-uppercase fs-bebas-neue lh-1 fs-custom_w text-black mb-0">
                      confira nossas novidades!
                    </h1>
                  </Col>
                  <Col className="col-12 col-lg-4 col-scale p-0 d-flex align-items-center justify-content-center pt-2 py-lg-3">
                    <EsfButton type="button" text="ver mais" onClick={handleClick} variant="black"
                      child={<BsIcon iconName="ChevronRight" />} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      }
    />
  );
};
