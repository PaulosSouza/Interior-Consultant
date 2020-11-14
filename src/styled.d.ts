import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    loraFont: string;
    montserratFont: string;
    crismsonProFont: string;

    colors: {
      primaryColor: string;
      secondColor: string;
      background: string;
    };
  }
}
