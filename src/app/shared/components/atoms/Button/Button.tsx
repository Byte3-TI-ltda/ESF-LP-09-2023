import "./Button.scss";

export const Button: React.FC<{ text: string }> = ({ text }) => {
  return <button>{text}</button>;
};
