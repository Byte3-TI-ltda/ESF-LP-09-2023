import "./ApplicationForm.scss";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ApiService } from "../../../../services/ApiService";
import { useState } from "react";
import { EsfButton } from "../../atoms/EsfButton/EsfButton";
import { BsIcon } from "../../atoms/BsIcon/BsIcon";

enum SubmitSts {
  STOPPED = 'STOPPED',
  SENDING = 'SENDING',
  CHECKED = 'CHECKED',
  FAILED = 'FAILED'
}

type inputs = {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
};

export const ApplicationForm: React.FC<{}> = () => {

  const navigate = useNavigate();
  const [submitStatus, setSubmitStatus] = useState<SubmitSts>(SubmitSts.STOPPED);

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<inputs>();

  //console.log(watch("firstName"));

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    setSubmitStatus(SubmitSts.SENDING);
    await ApiService.create().post('contacts/create', data).then((resp: any) => {
      setSubmitStatus(SubmitSts.CHECKED);
      setTimeout(() => {
        navigate("/welcome");
      }, 1000);
    }).catch((error: any) => {
      setSubmitStatus(SubmitSts.FAILED);
    }).finally(() => { });
  }
 
  const getTextBtnSubmit = (): string => {
    switch (submitStatus) {
      case SubmitSts.SENDING:
        return 'enviando...'
      case SubmitSts.CHECKED:
        return 'enviando'
      case SubmitSts.FAILED:
        return 'o envio falhou'
      default: return 'confirmar'
    }
  }

  const getBsIconBtnSubmit = (): JSX.Element | null => {
    switch (submitStatus) {
      case SubmitSts.CHECKED:
        return <BsIcon iconName="CheckLg" />
      case SubmitSts.FAILED:
        return <BsIcon iconName="BugFill" />
      default: return null
    }
  }

  return (
    <div className="">
      <Row className="justify-content-center">
        <Col className="col-sm-12">
          <h2 className="text-center px-2 p-lg-0 text-uppercase fs-bebas-neue lh-1 fs-custom_a">
            Inscreva-se e tenha acesso a conteúdos exclusivos!
          </h2>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)} className="text-center mt-3 mt-lg-4">
        <input
          className={`form-control bg-primary bg-opacity-10 my-3 my-lg-2 border border-primary text-white fw-semibold ${errors.firstName ? "is-invalid" : ""
            }`}
          type="text"
          {...register("firstName", { required: true })}
          placeholder={"Nome"}
        />
        <input
          className={`form-control bg-primary bg-opacity-10 my-3 my-lg-2 border border-primary text-white fw-semibold ${errors.lastName ? "is-invalid" : ""
            }`}
          type="text"
          {...register("lastName", { required: true })}
          placeholder={"Sobrenome"}
        />
        <input
          className={`form-control bg-primary bg-opacity-10 my-3 my-lg-2 border border-primary text-white fw-semibold ${errors.email ? "is-invalid" : ""
            }`}
          type="text"
          {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          placeholder={"E-mail"}
        />
        <input
          className={`form-control bg-primary bg-opacity-10 my-3 my-lg-2 border border-primary text-white fw-semibold ${errors.whatsapp ? "is-invalid" : ""
            }`}
          type="text"
          {...register("whatsapp", { required: true, pattern: /^\d{2}\s?([2-9]{1})(\d{3,4})\s?(\d{4})$/ })}
          placeholder={"Whatsapp"}
        />
        <Row className="justify-content-center mt-4">
          <Col className="col-sm-12 d-flex justify-content-center">
            <EsfButton
              type="submit"
              text={getTextBtnSubmit()}
              onSubmit={() => { }} disabled={submitStatus === SubmitSts.SENDING}
              child={
                submitStatus === SubmitSts.SENDING ?
                  <Spinner className=""
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  : getBsIconBtnSubmit()
              }
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
