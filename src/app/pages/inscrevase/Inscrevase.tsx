import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { ApplicationForm } from "../../shared/components/molecules/ApplicationForm/ApplicationForm";
import { Col, Row } from "react-bootstrap";

export const Inscrevase: React.FC<{}> = () => {
  UseDocumentTitle("ESF - Inscreva-se");
  return (
    <BasicTemplate
      children={
        <Row className="justify-content-center mt-4">
          <Col className="col-lg-6 w-100">
            <ApplicationForm />
          </Col>
        </Row>
      }
    />
  );
};
