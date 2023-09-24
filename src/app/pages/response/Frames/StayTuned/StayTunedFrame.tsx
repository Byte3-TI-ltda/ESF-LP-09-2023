import { Col, Row } from "react-bootstrap";
import "./StayTunedFrame.scss";

export const StayTunedFrame: React.FC<{}> = () => {
  return (
    <div className="px-3 text-center">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <h1 className="text-center mx-3">Fique atento!</h1>
        </Col>
      </Row>

      <Row className="justify-content-center my-1">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-0 ">
            Os Exploradores sem Fronteiras possuirão um aplicativo que
            possibilitará:
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center my-2">
        <Col className="col-sm-12 col-md-4">
          <ul className="list-group">
            <li className="list-group-item text-start border-0 p-0 m-0">
              <p className="my-0">Lorem ipsum</p>
            </li>
            <li className="list-group-item text-start border-0 p-0 m-0">
              <p className="my-0">Lorem ipsum</p>
            </li>
            <li className="list-group-item text-start border-0 p-0 m-0">
              <p className="my-0">Lorem ipsum</p>
            </li>
            <li className="list-group-item text-start border-0 p-0 m-0">
              <p className="my-0">Lorem ipsum</p>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col className="col-sm-12 col-md-4">
          <p className="text-center mx-2">
            Acesse periodicamente nossas redes sociais e confira seus e-mails
            para não perder nenhuma de nossas atualizações!
          </p>
        </Col>
      </Row>
    </div>
  );
};
