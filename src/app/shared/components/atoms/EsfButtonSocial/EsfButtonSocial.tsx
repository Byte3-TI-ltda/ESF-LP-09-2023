import "./EsfButtonSocial.scss";

interface EsfButtonSocialProps {
    child: any;
    onClick?: () => void;
    href?: string;
}

export const EsfButtonSocial: React.FC<EsfButtonSocialProps> = ({
    child,
    onClick,
    href
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    if (href) {
        return (
            <a
                className="btn btn-social btn-black bg-white bg-opacity-10 text-uppercase rounded-circle"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {child}
            </a>
        )
    }

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
