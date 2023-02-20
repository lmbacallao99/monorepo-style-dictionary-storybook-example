import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Abpbase } from '@ABP/Component-Base';

@customElement('app-element')
export class AppElement extends Abpbase {
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

  @property({ type: String }) asd = 'asd';

  override render() {
    return html`
      <h1>Hello World!!!</h1>
      <h2>Hello World!!!</h2>
      <p>Hello World!!!</p>
      <div
        style="background-color: var(--abp-ColorPaletteSecondaryFreshGreenDark)"
      ></div>
      <div
        style="background-color: var(--abp-ColorPaletteSecondaryPurpleDark)"
      ></div>
      <div
        style="background-color: var(--abp-ColorPaletteSecondaryRedLight)"
      ></div>
      <div
        style="background-color: var(--abp-ColorPaletteSecondaryRedDark)"
      ></div>
    `;
  }
}
