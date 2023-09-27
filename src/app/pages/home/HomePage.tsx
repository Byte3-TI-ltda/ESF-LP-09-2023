import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { WelcomeFrame } from "../../shared/components/molecules/WelcomeFrame/WelcomeFrame";

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("ESF - Home");
  return <BasicTemplate children={<WelcomeFrame />} />;
};
