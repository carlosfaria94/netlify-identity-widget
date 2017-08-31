const css = require("csjs");
const baseColor = "rgb(14, 30, 37)";
const highlightColor = "#f6bc00";
const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

module.exports = css`

  .modalBackground {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${baseColor};
    opacity: .87;
  }

  .modalWindow {
    width: 90%;
    max-width: 424px;
    padding: 32px;
    background-color: white;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,0.07), 0 12px 32px 0 rgba(14,30,37,0.10);
    border-radius: 8px;
    font-family: ${fontFamily};
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .formGroup {
    position: relative;
    margin-top: 38px;
  }

  .form input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 6px 14px;
    border: 2px solid #e9ebeb;
    border-radius: 4px;
    background-color: white;
    color: ${baseColor};
    box-shadow: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    transition: box-shadow ease-in-out 0.15s;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .form input:focus {
    outline: none;
    border-color: ${highlightColor};
    box-shadow: 0 0 1px 0 ${highlightColor};
  }

  label {
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #a3a9ac;
    transform: translate3d(14px, 8px, 0);
    transition: 0.2s ease;
  }

  .labelIsFloating label {
    transform: scale(0.75) translate3d(-16%, -120%, 0);
  }

  .header {
  }

  .active {
  }
`;
