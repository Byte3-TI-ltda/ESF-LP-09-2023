import "./ApplicationForm.scss";
import { Col, Form, Row } from "react-bootstrap";
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
      <Row className="justify-content-center">
        <Col className="col-sm-12">
          <h2 className="text-center px-2 p-lg-0 text-uppercase fs-bebas-neue lh-1 fs-custom_a">
            Inscreva-se e tenha acesso a conteúdos exclusivos!
          </h2>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)} className="text-center mt-3 mt-lg-4">
        <Row className="justify-content-center">
          <Col className="col-sm-12">
            <input
              className={`form-control bg-primary bg-opacity-10 border border-primary text-white fw-semibold ${errors.firstName ? "is-invalid" : ""
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
              className={`form-control bg-primary bg-opacity-10 border border-primary text-white fw-semibold ${errors.lastName ? "is-invalid" : ""
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
              className={`form-control bg-primary bg-opacity-10 border border-primary text-white fw-semibold ${errors.email ? "is-invalid" : ""
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
              className={`form-control bg-primary bg-opacity-10 border border-primary text-white fw-semibold ${errors.whatsapp ? "is-invalid" : ""
                }`}
              type="text"
              {...register("whatsapp", { required: true })}
              placeholder={"Whatsapp"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12">
            <button
              type="submit"
              className="btn btn-primary text-uppercase fw-semibold fs-4 px-4"
            >
              <span className="mx-2">confirmar</span>
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
