import React from "react";
import { WithTranslation, withTranslation } from "next-i18next";

type Props = WithTranslation;
class Footer extends React.PureComponent<Props> {
  public render() {
    const { t } = this.props;
    return (
      <footer className="footer">
        <div className="container"></div>
      </footer>
    );
  }
}

export default withTranslation("common")(Footer);
