import "./Section.scss";

interface SectionProps {
  children: any;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="h-80">{children}</section>;
};
