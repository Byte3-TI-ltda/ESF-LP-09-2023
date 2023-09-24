import { Col, Row } from "react-bootstrap";
import "./ThanksForTouSignUpFrame.scss";
import { Button } from "../../../../shared/components/atoms/Button/Button";
import { SocialButton } from "../../../../shared/components/atoms/SocialButton/SocialButton";

export const ThanksForTouSignUpFrame: React.FC<{}> = () => {
  return (
    <div className="px-3 text-center">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <h3 className="text-center mx-4">Obrigado por se inscrever!</h3>
        </Col>
      </Row>

      <Row className="justify-content-center my-1">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-2 small">
            Siga as nossas redes sociais e acompanhe nossas novidades!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-3 p-0">
        <Col className="col-3 col-sm-3 d-flex justify-content-center">
          <SocialButton value={"+"} />
        </Col>
        <Col className="col-3 col-sm-3 d-flex justify-content-center">
          <SocialButton value={"+"} />
        </Col>
        <Col className="col-3 col-sm-3 d-flex justify-content-center">
          <SocialButton value={"+"} />
        </Col>
        <Col className="col-3 col-sm-3 d-flex justify-content-center">
          <SocialButton value={"+"} />
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col className="col-sm-12 col-md-4">
          <h3 className="text-center mx-0">
            Conheça os Exploradores sem Fronteiras!
          </h3>
        </Col>
      </Row>

      <Row className="justify-content-center my-1">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-2 small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col className="col-sm-12 col-md-4">
          <Button type="button" value="saiba mais" />
        </Col>
      </Row>
    </div>
  );
};
