import "./EsfButtonSocial.scss";

interface EsfButtonSocialProps {
    child: any;
    onClick?: () => void;
}

export const EsfButtonSocial: React.FC<EsfButtonSocialProps> = ({
    child,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            type="button"
            className="btn btn-social btn-black bg-white bg-opacity-10 text-uppercase rounded-circle"
            onClick={handleClick}
        >
            {child}
        </button>
    );
};
