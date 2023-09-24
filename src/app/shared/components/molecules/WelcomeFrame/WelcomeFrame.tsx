import "./WelcomeFrame.scss";
import { Button } from "../../atoms/Button/Button";
import { Col, Row } from "react-bootstrap";

export const WelcomeFrame: React.FC<{}> = () => {
  return (
    <div className="px-3">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <h3 className="text-center mx-4">Titulo de chamada</h3>
        </Col>
      </Row>

      <div className="text-center my-4">
        <Row className="justify-content-center my-1">
          <Col className="col-sm-12 col-md-4">
            <p className="text-center mx-0 small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12 col-md-4">
            <Button type="button" value="botão de ação" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
