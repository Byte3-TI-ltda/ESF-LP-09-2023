interface HeaderProps {
  children: any;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};
