import React from "react";
import App, { AppContext } from "next/app";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import getConfig from "next/config";

import ErrorPage from "./_error";
import Layout from "../layout";
import tracker from "../tracking";
const trackerInstance = tracker();
const { publicRuntimeConfig } = getConfig();

import "../assets/index.scss";
class _App extends App {
  public static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  public componentDidMount() {
    trackerInstance.initialize(publicRuntimeConfig.googleAnalyticsTrackingCode);
    trackerInstance.trackPageView();

    if (Router.router) {
      Router.router.events.on("routeChangeComplete", () => {
        trackerInstance.trackPageView();
      });
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout>
          {pageProps.statusCode ? (
            <ErrorPage {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </>
    );
  }
}

export default appWithTranslation(_App);
