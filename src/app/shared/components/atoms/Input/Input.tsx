import "./Input.scss";

interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className="form-control bg-dark text-white"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
