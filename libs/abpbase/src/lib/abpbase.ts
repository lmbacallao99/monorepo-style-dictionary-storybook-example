import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { tokens } from '@abp/tokens';
import { reset } from './reset';
import { design } from './design';

@customElement('abp-base')
export class Abpbase extends LitElement {
  static override styles = [tokens, reset, design];
}
