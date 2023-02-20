import { css } from 'lit';

export default css`
  li {
    display: inline-block;
    list-style-type: none;
    cursor: pointer;
  }

  div {
    border-radius: 100%;
    background-color: red;
  }

  .small {
    width: 20px;
    height: 20px;
  }

  .large {
    width: 20px;
    height: 20px;
  }

  .current {
    background-color: green;
  }
`;
