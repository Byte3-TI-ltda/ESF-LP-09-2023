import * as icons from "react-bootstrap-icons";

interface IconProps extends icons.IconProps {
  iconName: keyof typeof icons;
}

export const BsIcon: React.FC<IconProps> = ({
  iconName,
  ...props
}: IconProps) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
};
