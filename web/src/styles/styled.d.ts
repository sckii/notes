import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;
      primaryDarker: string;
      secondary: string;
      secondaryLight: string;
      text: string;
    }
  }
}