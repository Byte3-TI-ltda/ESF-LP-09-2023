import "./ApplicationForm.scss";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../../../services/ApiService";
import { useState } from "react";

type inputs = {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
};

export const ApplicationForm: React.FC<{}> = () => {

  const navigate = useNavigate();
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<inputs>();

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    try {
      setEnviando(true);
      const response = await ApiService.create().post('/endpoint', data);
      console.log(response.data);
      navigate("/welcome");
    } catch (error) {
      console.log(error);
    } finally {
      setEnviando(false);
    }
  }
  //console.log(watch("firstName"));

  return (
    <div className="px-2 px-lg-0">
      <Row className="justify-content-center">
        <Col className="col-sm-12">
          <h2 className="text-center mx-4 text-uppercase fs-bebas-neue lh-1 fs-custom_a">
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
              {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
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
              {...register("whatsapp", { required: true, pattern: /^\d{2}\s?([2-9]{1})(\d{3,4})\s?(\d{4})$/ })}
              placeholder={"Whatsapp"}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary text-uppercase fw-semibold fs-3 px-4 d-flex align-items-center"
              disabled={enviando}
            >
              {enviando ? (
                <>
                  <span className="sr-only ms-2 me-2">Enviando...</span>
                  <Spinner className=""
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <span className="mx-2">confirmar</span>
              )}
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
