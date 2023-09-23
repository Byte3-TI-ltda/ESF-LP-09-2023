interface HeaderProps {
  children: any;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header style={{ height: "10vh" }}>{children}</header>;
};
