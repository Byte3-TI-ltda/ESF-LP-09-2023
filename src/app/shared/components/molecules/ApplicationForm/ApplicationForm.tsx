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
    <div className="px-2 px-lg-0">
      <Row className="justify-content-center mt-5">
        <Col className="col-sm-12">
          <h3 className="text-center mx-4 text-uppercase text-scale lh-1 fw-semibold">
            Inscreva-se e tenha acesso a conteúdos exclusivos!
          </h3>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)} className="text-center mt-5">
        <Row className="justify-content-center">
          <Col className="col-sm-12">
            <input
              className={`form-control bg-primary bg-opacity-10 border border-light text-white ${errors.firstName ? "is-invalid" : ""
                }`}
              type="text"
              {...register("firstName", { required: true })}
              placeholder={"Nome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12">
            <input
              className={`form-control bg-primary bg-opacity-10 border border-light text-white ${errors.lastName ? "is-invalid" : ""
                }`}
              type="text"
              {...register("lastName", { required: true })}
              placeholder={"Sobrenome"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12">
            <input
              className={`form-control bg-primary bg-opacity-10 border border-light text-white ${errors.email ? "is-invalid" : ""
                }`}
              type="text"
              {...register("email", { required: true })}
              placeholder={"E-mail"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center my-3">
          <Col className="col-sm-12">
            <input
              className={`form-control bg-primary bg-opacity-10 border border-light text-white ${errors.whatsapp ? "is-invalid" : ""
                }`}
              type="text"
              {...register("whatsapp", { required: true })}
              placeholder={"Whatsapp"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12">
            <Button type="submit" value="confirmar" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
