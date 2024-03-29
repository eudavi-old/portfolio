import styled from 'styled-components';

import { typing, blink, textFocusIn } from '~/assets/styles/partials/_animations';
import { device } from '~/assets/styles/partials/_variables';

export const HeaderWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  min-height: 75vh;
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
`;

export const CodersContainer = styled.div`
  height: 160px;
  width: 330px;
  animation: ${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-evenly;
  flex-direction: column;
  padding-right: 10px;

  &:last-child {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-gap: 5px;
    flex-basis: 50%;
  }

  @media ${device.tablet} {
    flex-basis: 90%;
    margin-top: 15px;
    justify-content: space-around;
    align-items: center;

    &:last-child {
      flex-basis: 100%;
      grid-template-columns: 1fr;
      align-items: flex-start;
    }
  }
`;

export const Introduction = styled.div`
  @media ${device.tablet} {
    text-align: center;
    margin-bottom: 25px;
  }
`;

export const DescriptionTitle = styled.h3`
  font: 400 20px 'Poppins', sans-serif;
  font-style: normal;
  color: #666;
  letter-spacing: 1px;
  animation: ${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const DescriptionText = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  padding: 10px 0 10px;
  font-weight: 400;
  color: #666;
  letter-spacing: 5px;
  line-height: 25px;
  animation: ${textFocusIn} 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

  span {
    font-weight: 400;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 10px;
      width: 100%;
      z-index: -1;
      background: #f47a65;
      opacity: 0.5;
    }
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const TypeWritter = styled.div`
  margin-top: 10px;
  max-width: 60%;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

export const TypeWritterText = styled.p`
  color: #666;
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  overflow: hidden;
  letter-spacing: 2px;
  animation: ${typing} 5s steps(50, end), ${blink} .75s normal infinite;
  white-space: nowrap;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-right: 4px solid #f47a65;
  box-sizing: border-box;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

export const Photo = styled.img`
  max-width: 60%;
  min-width: 205px;
  height: auto;
  box-shadow: 10px 13px 0px 2px #f47a65;
  border-radius: 2px;
  animation: ${textFocusIn} 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  justify-self: center;

  &:hover {
    transition: 1s ease;
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    max-width: 90%;
    display: none;
  }
`;
