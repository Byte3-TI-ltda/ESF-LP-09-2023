import "./EsfButton.scss";

interface EsfButtonProps {
  type: "button" | "submit";
  text: string;
  child?: any;
  onClick?: () => void;
  onSubmit?: () => void;
  variant?: "black" | "primary";
  disabled?: boolean;
}

export const EsfButton: React.FC<EsfButtonProps> = ({
  type,
  text,
  child,
  onClick,
  onSubmit,
  variant = "primary",
  disabled = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
      onSubmit={handleSubmit}
      disabled={disabled}
    >
      {child ? (
        <div className="d-flex flex-row">
          <span className="ms-4 me-0">{text}</span>
          <div className="d-flex align-items-center ms-2">{child}</div>
        </div>
      ) : (
        <span className="mx-3">{text}</span>
      )}
    </button>
  );
};
