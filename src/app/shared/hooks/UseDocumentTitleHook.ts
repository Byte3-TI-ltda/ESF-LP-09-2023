import { useEffect, useState } from "react";

const UseDocumentTitleHook = (title: string) => {
  const [document_title, setDoucmentTitle] = useState(title);
  useEffect(() => {
    document.title = document_title;
  }, [document_title]);

  return [document_title, setDoucmentTitle];
};

export { UseDocumentTitleHook as UseDocumentTitle };
