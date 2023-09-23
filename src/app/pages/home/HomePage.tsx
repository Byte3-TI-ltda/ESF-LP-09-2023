import { BasicTemplate } from "../../shared/components/templates/BasicTemplate/BasicTemplate";
import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";
import { ApplicationForm } from "../../shared/components/molecules/ApplicationForm/ApplicationForm";

const FrameSignUp = () => {
  return <ApplicationForm />;
};

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("Home");
  return <BasicTemplate children={FrameSignUp()} />;
};
