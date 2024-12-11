import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="w-40 mx-auto mt-4">
        <button className="btn-96">
          <span>Review</span>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-96,
  .btn-96 *,
  .btn-96 :after,
  .btn-96 :before,
  .btn-96:after,
  .btn-96:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-96 {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .btn-96:disabled {
    cursor: default;
  }

  .btn-96:-moz-focusring {
    outline: auto;
  }

  .btn-96 svg {
    display: block;
    vertical-align: middle;
  }

  .btn-96 [hidden] {
    display: none;
  }

  .btn-96 {
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    -webkit-mask-image: none;
    padding: 2rem 5rem;
    perspective: 800px;
    position: relative;
    text-transform: uppercase;
    transform-style: preserve-3d;
  }

  .btn-96 span {
    background: #fff;
    color: #000;
    display: grid;
    inset: 0;
    place-items: center;
    position: absolute;
    transform: rotateX(0deg);
    transform-origin: top center;
    transition: 0.2s;
  }

  .btn-96:hover span {
    transform: rotateX(35deg);
  }

  .btn-96:after,
  .btn-96:before {
    background: #ddd;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotateX(0deg);
    width: 100%;
    z-index: -1;
  }

  .btn-96:after {
    background: #ccc;
    width: 0;
  }

  .btn-96:hover:after {
    -webkit-animation: progress-bar 1.2s;
    animation: progress-bar 1.2s;
  }

  @-webkit-keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }

    10% {
      opacity: 1;
      width: 15%;
    }

    25% {
      opacity: 1;
      width: 25%;
    }

    40% {
      opacity: 1;
      width: 35%;
    }

    55% {
      opacity: 1;
      width: 75%;
    }

    60% {
      opacity: 1;
      width: 100%;
    }

    to {
      opacity: 0;
      width: 100%;
    }
  }

  @keyframes progress-bar {
    0% {
      opacity: 1;
      width: 0;
    }

    10% {
      opacity: 1;
      width: 15%;
    }

    25% {
      opacity: 1;
      width: 25%;
    }

    40% {
      opacity: 1;
      width: 35%;
    }

    55% {
      opacity: 1;
      width: 75%;
    }

    60% {
      opacity: 1;
      width: 100%;
    }

    to {
      opacity: 0;
      width: 100%;
    }
  }
`;

export default Button;
