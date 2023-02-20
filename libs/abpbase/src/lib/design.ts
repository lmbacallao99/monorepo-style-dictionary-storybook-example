import { css } from 'lit';

export const design = css`
  :host {
    /* TDOO: font-family descargar tipo de fuete woof y agregarla con los tokens  */
    font-size: var(--abp-TypographyFontSize);
  }
  h1 {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyH1FontSize);
    font-weight: var(--abp-TypographyH1FontWeight);
  }
  h2 {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyH2FontSize);
    font-weight: var(--abp-TypographyH2FontWeight);
  }
  h3 {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyH3FontSize);
    font-weight: var(--abp-TypographyH3FontWeight);
  }
  h4 {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyH4FontSize);
    font-weight: var(--abp-TypographyH4FontWeight);
  }
  h5 {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyH5FontSize);
    font-weight: var(--abp-TypographyH5FontWeight);
  }
  p {
    /* TDOO: font-family */
    font-size: var(--abp-TypographyParagraphFontSize);
    font-weight: var(--abp-TypographyParagraphFontWeight);
  }
  .caption {
    /* TODO: Duda */
    /* TDOO: font-family */
    font-size: var(--abp-TypographyCaptionFontSize);
    font-weight: var(--abp-TypographyCaptionFontWeight);
  }
`;
