import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getColor } from './utils';

import { Abpbase } from '@ABP/Component-Base';

@customElement('abp-status')
export class ABPStatus extends Abpbase {
  static override styles = [
    ...super.styles,
    css`
      div {
        display: inline-block;
        padding: 0 5px;

        border: black 2px solid;
        border-radius: 5px;
      }
    `,
  ];

  @property({ type: String }) status = 'default';

  protected override render() {
    return html`<div style=${styleMap({ color: getColor(this.status).color })}>
      <slot> </slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'abp-status': ABPStatus;
  }
}
