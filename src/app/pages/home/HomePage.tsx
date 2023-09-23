import { UseDocumentTitle } from "../../shared/hooks/UseDocumentTitleHook";

export const HomePage: React.FC<{}> = () => {
  UseDocumentTitle("Home");
  return <h4 className="">Works!</h4>;
};
