import { html } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { getList } from './utils';
import styles from './styles';

import { Abpbase } from '@ABP/Component-Base';

@customElement('abp-carrusel-indicator')
export class ABPCarruselIndicator extends Abpbase {
  static override styles = [...super.styles, styles];

  @property({ type: String }) size = 'small';
  @property({ type: Number, attribute: false }) currentSlide = 0;
  @property({ type: Number, attribute: 'total-slide' }) totalSlide = 1;

  @eventOptions({ capture: true })
  protected handleClick(item: number): void {
    this.currentSlide = item;
    const ABPClick: CustomEvent = new CustomEvent('abp-click', {
      bubbles: true,
      composed: true,
      detail: {
        currentSlide: item,
      },
    });
    this.dispatchEvent(ABPClick);
  }

  protected override render() {
    return html`
      <ul>
        ${getList(0, this.totalSlide).map(
          (item: number) =>
            html`
              <li @click="${() => this.handleClick(item)}">
                <div
                  class=${classMap({
                    small: true,
                    large: this.size === 'large',
                    current: this.currentSlide === item,
                  })}
                ></div>
              </li>
            `
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'abp-carrusel-indicator': ABPCarruselIndicator;
  }
}
