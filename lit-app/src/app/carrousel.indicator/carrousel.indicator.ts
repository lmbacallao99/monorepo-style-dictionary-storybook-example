import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Abpbase } from '@ABP/Component-Base';

@customElement('abp-carrousel-indicator')
export class ABPCarrouselIndicator extends Abpbase {
  static override styles = [
    ...super.styles,
    css`
      div {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: solid 1px;
      }
    `,
  ];

  override render() {
    return html`
      <h1>Hello World!!!</div>
      <h2>Hello World!!!</div>
      <p>Hello World!!!</div>
      <div style="background-color: var(--abp-ColorPaletteSecondaryFreshGreenDark)"></div>
      <div style="background-color: var(--abp-ColorPaletteSecondaryPurpleDark)"></div>
      <div style="background-color: var(--abp-ColorPaletteSecondaryRedLight)"></div>
      <div style="background-color: var(--abp-ColorPaletteSecondaryRedDark)"></div>
    `;
  }
}
