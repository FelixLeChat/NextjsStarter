import React from "react";
import { withRouter } from "next/router";
import { compose } from "redux";
import { WithTranslation, withTranslation } from "next-i18next";
import { WithRouterProps } from "next/dist/client/with-router";

import windowSize, { WithWindowSize } from "../components/utils/windowSize";

interface Props extends WithTranslation, WithRouterProps, WithWindowSize {}

interface State {
  oppositeLanguage: string;
  languageLabel: string;
}

class Header extends React.Component<Props, State> {
  public state: State = {
    oppositeLanguage: "",
    languageLabel: "",
  };

  // Handle language transition
  private changeLanguage = (lng: string) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng, this.handleLanguageChange);
  };

  private handleLanguageChange = () => {
    const { i18n } = this.props;
    const oppositeLanguage = i18n.language === "en" ? "fr" : "en";
    const namespaces = ["common"];

    i18n.changeLanguage(oppositeLanguage, () => {
      const oppositeT = i18n.getFixedT(oppositeLanguage, namespaces);
      this.setState({
        oppositeLanguage,
        languageLabel: oppositeT(`common:locale.${oppositeLanguage}`),
      });
    });
  };

  public componentDidMount() {
    this.handleLanguageChange();
  }

  public render() {
    const { oppositeLanguage, languageLabel } = this.state;

    return (
      <>
        {/* Top Header */}
        <nav role="navigation" aria-label="top navigation">
          <a
            className="is-xsmall"
            onClick={() => this.changeLanguage(oppositeLanguage)}
          >
            {languageLabel}
          </a>
        </nav>
      </>
    );
  }
}

export default compose<any>(
  withTranslation("common"),
  windowSize,
  withRouter
)(Header);
