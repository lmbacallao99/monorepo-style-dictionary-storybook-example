import { html } from 'lit-html';
import './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'APP Example',
  component: 'app-element',
};

export const Default = () => html`<app-element>Hello World!</app-element>`;
