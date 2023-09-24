import "./SocialButton.scss";

export const SocialButton: React.FC<{ value: string }> = ({ value }) => {
  return (
    <button type="button" className="btn btn-social btn-dark text-uppercase rounded-circle">
      {value}
    </button>
  );
};
