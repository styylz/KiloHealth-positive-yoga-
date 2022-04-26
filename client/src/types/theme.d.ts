import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true;
    p: true
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  p: React.CSSProperties;
}

// declare module '@material-ui/core/styles/createPalette' {
//   interface PaletteOptions {
//     success?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//   }
// }
