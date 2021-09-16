// HOC that passes the dimensions of the window as props to the wrapped component
import React, { Component } from "react";
import { debounce } from "lodash";

export enum DeviceSize {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export enum DeviceMinWidth {
  Mobile = 0,
  Tablet = 769,
  Desktop = 1000,
}

export interface WithWindowSize {
  width: number;
  height: number;
  deviceType: DeviceSize;
}

export default function windowSize<TProps>(
  WrappedComponent: React.ComponentType<TProps>
) {
  return class WS extends Component {
    public state = {
      width: null,
      height: null,
      deviceType: null,
    };

    public constructor(props: any) {
      super(props);
      this.handleResize = debounce(this.handleResize, 200);
    }

    private handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let device = DeviceSize.Mobile;

      if (width >= DeviceMinWidth.Desktop) {
        device = DeviceSize.Desktop;
      } else if (width >= DeviceMinWidth.Tablet) {
        device = DeviceSize.Tablet;
      }

      // set initial state
      this.setState({
        width,
        height,
        deviceType: device,
      });
    };

    public componentDidMount() {
      // bind window resize listeners
      window.addEventListener("resize", this.handleResize);
      setTimeout(this.handleResize, 400);
    }

    public componentWillUnmount() {
      // clean up listeners
      window.removeEventListener("resize", this.handleResize);
    }

    public render() {
      const { width, height, deviceType } = this.state;
      return (
        <WrappedComponent
          {...(this.props as TProps)}
          windowWidth={width}
          windowHeight={height}
          deviceType={deviceType}
        />
      );
    }
  };
}
