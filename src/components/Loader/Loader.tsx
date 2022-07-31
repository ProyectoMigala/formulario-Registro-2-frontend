import React from "react";
import styled from "styled-components";

export const Loader = ({ textOfLoader = "Estamos procesando tu solicitud."}: any) => {

  return (
    <LoaderWrapper>
      <Loading/>
      {textOfLoader && <LoaderText> {textOfLoader} </LoaderText>}
    </LoaderWrapper>
  )

}

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(94, 23, 128, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const Loading = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: pulse 1s linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUp 1s linear infinite;
  }

  @keyframes scaleUp {
    0% {
      transform: translate(-50%, -50%) scale(0)
    }
    60%, 100% {
      transform: translate(-50%, -50%) scale(1)
    }
  }
  @keyframes pulse {
    0%, 60%, 100% {
      transform: scale(1)
    }
    80% {
      transform: scale(1.2)
    }
  }
`

const LoaderText = styled.b`
  color: white;
  font-size: calc(12px + 2vmin);
`