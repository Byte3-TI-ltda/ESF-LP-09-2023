import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { HomeFrame } from "../../shared/components/molecules/HomeFrame/HomeFrame";

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("ESF - Home");
  return <BasicTemplate children={<HomeFrame />} />;
};
