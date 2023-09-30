import "./HomeFrame.scss";
import { Col, Row } from "react-bootstrap";
import { ApplicationForm } from "../ApplicationForm/ApplicationForm";
import { useNavigate } from "react-router-dom";

export const HomeFrame: React.FC<{}> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inscrevase");
  };

  return (
    <Row className="justify-content-center justify-content-lg-around">
      <Col className="col-sm-12 col-md-10 col-lg-4 col-scale px-lg-4">
        <div className="d-flex flex-column flex-lg-column-reverse">
          <Row className="justify-content-center mt-0 mt-lg-1">
            <Col className="col-sm-12 mb-sm-2">
              <iframe className="youtube-container border border-primary" src="https://www.youtube.com/embed/h0yPK_A1b74?si=nuwB0XcPtmQ3wOmr?&autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-4 mt-lg-0 mb-lg-2">
            <Col className="col-sm-12 p-0">
              <h1 className="text-center mx-5 text-uppercase fs-bebas-neue lh-1 fs-custom_h">
                sinta a emoção da descoberta
              </h1>
            </Col>
          </Row>
        </div>

        <Row className="justify-content-center mt-4 mt-lg-1">
          <Col className="col-sm-12">
            <p className="text-center lh-1 px-2 px-lg-3 fs-5">
              Essa é a sua chance de ser um Explorador Sem Fronteiras e deixar a
              sua marca na história!
            </p>
          </Col>
        </Row>

        <Row className="d-sm-block d-lg-none justify-content-center mt-4">
          <Col className="col-sm-12 text-center">
            <button
              type="button"
              className="btn btn-primary text-uppercase fw-semibold fs-3 px-4"
              onClick={handleClick}
            >
              <span className="mx-2">inscreva-se</span>
            </button>
          </Col>
        </Row>
      </Col>
      <Col className="col-sm-12 col-md-10 col-lg-4 col-scale px-lg-4 d-none d-lg-block">
        <ApplicationForm />
      </Col>
    </Row>
  );
};
