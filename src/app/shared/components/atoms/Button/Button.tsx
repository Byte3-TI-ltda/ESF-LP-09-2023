export const Button: React.FC<{ type: "submit" | "button"; value: string }> = ({
  type,
  value,
}) => {
  return (
    <button
      type={type}
      className="btn btn-primary text-uppercase fw-bold fs-3 px-5"
    >
      {value}
    </button>
  );
};
