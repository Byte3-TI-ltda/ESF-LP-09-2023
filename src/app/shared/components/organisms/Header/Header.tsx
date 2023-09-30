interface HeaderProps {
  children: any;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="pt-5 pb-4">{children}</header>;
};
