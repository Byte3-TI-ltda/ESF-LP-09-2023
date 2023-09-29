import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { ApplicationForm } from "../../shared/components/molecules/ApplicationForm/ApplicationForm";
import { Col, Row } from "react-bootstrap";

export const Inscrevase: React.FC<{}> = () => {
  UseDocumentTitle("ESF - Inscreva-se");
  return (
    <BasicTemplate
      children={
        <Row className="justify-content-center">
          <Col className="col-lg-10 col-scale px-lg-5">
            <ApplicationForm />
          </Col>
        </Row>
      }
    />
  );
};
