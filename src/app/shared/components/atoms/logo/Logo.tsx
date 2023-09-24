import "./Logo.scss";

export const Logo: React.FC<{}> = () => {
  return (
    <div className="border-0 w-100 text-center mt-5">
      <img
        src={process.env.PUBLIC_URL + "/logo192.png"}
        alt="logo"
        width={56}
        height={56}
      />
    </div>
  );
};
