import { useState } from "react";
import "./ApplicationForm.scss";
import { Input } from "../../atoms/Input/Input";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../../atoms/Button/Button";
import { TextTitle } from "../../atoms/TextTitle/TextTitle";

export const ApplicationForm: React.FC<{}> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleWhatsappChange = (event: any) => {
    setWhatsapp(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <div className="px-3">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <TextTitle
            value={"Inscreva-se e tenha acesso a conteúdos exclusivos!"}
          />
        </Col>
      </Row>

      <Form onSubmit={handleFormSubmit} className="text-center my-4">
        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <Input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder={"Nome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <Input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder={"Sobrenome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <Input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder={"E-mail"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <Input
              type="text"
              value={whatsapp}
              onChange={handleWhatsappChange}
              placeholder={"Whatsapp"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12 col-md-4">
            <Button type="submit" value="Fazer inscrição" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
