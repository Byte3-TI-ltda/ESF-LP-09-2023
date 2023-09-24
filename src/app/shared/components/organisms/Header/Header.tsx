import "./Header.scss"; 

interface HeaderProps {
  children: any;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="h-10">{children}</header>;
};
