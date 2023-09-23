import "./Button.scss";

export const Button: React.FC<{ type: 'submit' | 'button', value: string }> = ({ type, value }) => {
  return <button type={type} className="btn btn-dark text-uppercase">{value}</button>;
};
