import { useNavigate } from "react-router-dom";
import "./Logo.scss";

export const Logo: React.FC<{}> = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  
  return (
    <div className="border-0 w-100 text-center">
      <img
        src={process.env.PUBLIC_URL + "/logo-esf.svg"}
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
};
