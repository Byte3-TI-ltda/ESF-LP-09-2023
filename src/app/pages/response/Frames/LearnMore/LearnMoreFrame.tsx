import { Col, Row } from "react-bootstrap";
import "./LearnMoreFrame.scss";

export const LearnMoreFrame: React.FC<{}> = () => {
  return (
    <div className="px-3 text-center">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <h3 className="text-center mx-4">Saiba mais</h3>
        </Col>
      </Row>

      <Row className="justify-content-center my-1">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-0 small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-1">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-0 small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <img
            src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
            className="img-fluid"
            alt="img"
          />
        </Col>
      </Row>
    </div>
  );
};
