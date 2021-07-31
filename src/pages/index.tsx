import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import DefaultSeo from "../components/utils/defaultSeo";
import styles from "../assets/pages/home.module.scss";

const pageNamespace = "home";
const Home: NextPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation(pageNamespace);

  return (
    <>
      <DefaultSeo t={t} locale={language} namespace={pageNamespace} />
      <div className={styles.home}>
        <h1>Homepage</h1>
      </div>
    </>
  );
};

// This function gets called at build time on server-side.
// Passing translations and configuration options into pages, as props.
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", pageNamespace])),
    },
  };
}

export default Home;
