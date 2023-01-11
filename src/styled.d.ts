import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    width: {
      [index: number]: number;
    };
    height: {
      [index: number]: number;
    };
    fontFamily: {
      [index: string]: string;
    };
    fontSize: {
      [index: number]: number;
    };
    fontWeight: {
      [index: number]: number;
    };
    gap: {
      [index: number]: number;
    };
    lineHeight: {
      [index: number]: number;
    };
    margin: {
      [index: number]: number;
    };
    padding: {
      [index: number]: number;
    };
    borderRadius: {
      [index: number]: number;
    };

    transition: string;
    colors: {
      [index: string]: string;
    };
    shadows: {
      [index: string]: string;
    };
  }
}
