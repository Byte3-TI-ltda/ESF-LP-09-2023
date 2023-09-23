interface SectionProps {
  children: any;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};
