import "./ApplicationForm.scss";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../../atoms/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type inputs = {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
};

export const ApplicationForm: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = (data) => console.log(data);
  //console.log(watch("firstName"));

  return (
    <div className="px-3">
      <Row className="justify-content-center my-3">
        <Col className="col-sm-12 col-md-4">
          <h3 className="text-center mx-4">
            Inscreva-se e tenha acesso a conteúdos exclusivos!
          </h3>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)} className="text-center my-4">
        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <input
              className={`form-control bg-dark text-white ${
                errors.firstName ? "is-invalid" : ""
              }`}
              type="text"
              {...register("firstName", { required: true })}
              placeholder={"Nome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <input
              className={`form-control bg-dark text-white ${
                errors.lastName ? "is-invalid" : ""
              }`}
              type="text"
              {...register("lastName", { required: true })}
              placeholder={"Sobrenome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <input
              className={`form-control bg-dark text-white ${
                errors.email ? "is-invalid" : ""
              }`}
              type="text"
              {...register("email", { required: true })}
              placeholder={"E-mail"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12 col-md-4">
            <input
              className={`form-control bg-dark text-white ${
                errors.whatsapp ? "is-invalid" : ""
              }`}
              type="text"
              {...register("whatsapp", { required: true })}
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
