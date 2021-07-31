import React from "react";
import { NextPage, NextPageContext } from "next";
import { useTranslation } from "next-i18next";

const pageNamespace = "error";

interface Props {
  statusCode?: number | null;
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const {
    i18n: { language },
  } = useTranslation(pageNamespace);
  return (
    <>
      <div className="error">{`${statusCode} - ${language}`}</div>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext): Props => {
  let statusCode = null;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }
  return {
    statusCode,
  };
};

export default Error;
