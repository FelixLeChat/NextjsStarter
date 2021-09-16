import React from "react";
import { TFunction } from "next-i18next";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";
import { ItemListElements } from "next-seo/lib/jsonld/breadcrumb";
import getConfig from "next/config";

import { seoFriendlyString } from "../../utils";

const { publicRuntimeConfig } = getConfig();

type Props = {
  t: TFunction;
  namespace: string;
  locale: string;
  noIndex?: boolean;
};

const DefaultSeo = ({ t, locale, namespace, noIndex }: Props) => {
  // Get structured
  const structuredBreadcrumb = t(`${namespace}:structuredData.breadcrumb`, {
    returnObjects: true,
    domain: publicRuntimeConfig.domain,
    locale,
  }) as ItemListElements[];

  return (
    <>
      <NextSeo
        noindex={Boolean(noIndex)}
        title={seoFriendlyString(t(`${namespace}:seo.title`))}
        description={seoFriendlyString(t(`${namespace}:seo.description`))}
        openGraph={{
          title: seoFriendlyString(t(`${namespace}:seo.title`)),
          description: seoFriendlyString(t(`${namespace}:seo.description`)),
          images: [
            {
              url: `https://${publicRuntimeConfig.domain}/img/share/share-square.png`,
              width: 1200,
              height: 1200,
              alt: "Logo",
            },
            {
              url: `https://${publicRuntimeConfig.domain}/img/share/share-rect.png`,
              width: 1200,
              height: 630,
              alt: "Logo",
            },
          ],
        }}
      />
      {Array.isArray(structuredBreadcrumb) && (
        <BreadcrumbJsonLd itemListElements={structuredBreadcrumb} />
      )}
    </>
  );
};

export default DefaultSeo;
