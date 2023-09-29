import "./HomeFrame.scss";
import { Col, Row } from "react-bootstrap";
import { ApplicationForm } from "../ApplicationForm/ApplicationForm";
import { useNavigate } from "react-router-dom";
import YouTube, { YouTubeProps } from "react-youtube";
import { useState } from "react";

export const HomeFrame: React.FC<{}> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inscrevase");
  };

  const [play] = useState(1);

  const videoOptions: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: play,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  return (
    <Row className="justify-content-center justify-content-lg-around p-2">
      <Col className="col-sm-12 col-md-10 col-lg-4 px-lg-4">
        <div className="d-flex flex-column flex-lg-column-reverse">
          <Row className="justify-content-center mt-0 mt-lg-5">
            <Col className="col-sm-12 mb-sm-2">
              <YouTube
                videoId="h0yPK_A1b74"
                opts={videoOptions}
                className="youtube-container"
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-0 mb-lg-2">
            <Col className="col-sm-12 p-0">
              <h1 className="text-center mx-5 text-uppercase fs-bebas-neue lh-1 fs-custom_h">
                sinta a emoção da descoberta
              </h1>
            </Col>
          </Row>
        </div>

        <Row className="justify-content-center mt-4 mt-lg-5">
          <Col className="col-sm-12">
            <p className="text-center lh-1 px-lg-2 fs-5">
              Essa é a sua chance de ser um Explorador Sem Fronteiras e deixar a
              sua marca na história!
            </p>
          </Col>
        </Row>

        <Row className="d-sm-block d-lg-none justify-content-center mt-4">
          <Col className="col-sm-12 text-center">
            <button
              type="button"
              className="btn btn-primary text-uppercase fw-semibold fs-3 px-4"
              onClick={handleClick}
            >
              <span className="mx-2">inscreva-se</span>
            </button>
          </Col>
        </Row>
      </Col>
      <Col className="col-sm-12 col-md-10 col-lg-4 px-lg-4 d-none d-lg-block">
        <ApplicationForm />
      </Col>
    </Row>
  );
};
