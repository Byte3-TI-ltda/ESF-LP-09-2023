import "./EsfButton.scss";
import * as icons from "react-bootstrap-icons";
import { BsIcon } from "../BsIcon/BsIcon";

interface EsfButtonProps {
  type: "button" | "submit";
  text: string;
  iconName?: keyof typeof icons;
  onClick?: () => void;
  variant?: "black" | "primary";
}

export const EsfButton: React.FC<EsfButtonProps> = ({
  type,
  text,
  iconName,
  onClick,
  variant = "primary",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`btn text-uppercase fw-semibold fs-3 px-4 esf-button
      ${
        variant === "primary"
          ? "btn-primary"
          : "btn-black text-primary bg-black"
      } `}
      onClick={handleClick}
    >
      {iconName ? (
        <>
          <span className="ms-4 me-0">ver mais</span>
          <BsIcon
            iconName={iconName}
            className="ms-2"
            style={{ marginTop: "-4px" }}
          ></BsIcon>
        </>
      ) : (
        <span className="mx-3">{text}</span>
      )}
    </button>
  );
};
