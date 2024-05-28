import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            gray100: string;
            gray200: string;
            gray300: string;
            gray400: string;
            gray500: string;
            gray600: string;
            gray700: string;
            blue300: string;
            blue500: string;
            purple300: string;
            purple500: string;
            red500: string;
        };
    }
}
