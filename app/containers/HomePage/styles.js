import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const CraftLogoImage = styled.img`
  max-width: 500px;
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
`;
export const StyledFooter = styled(Footer)`
  color: #ffffff;
  background: #181818;
  text-align: center;
`;

export const Background = styled.div`
  flex-grow: 1;
  width: 100%;
  background: #4f4f50;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BreweryTitleWrapper = styled.div`
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: skewX(-15deg);
  width: 456px;
  white-space: nowrap;
  overflow: visible;
  display: flex;
  justify-content: center;
  margin-left: 22px;
`;

export const BreweryTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BreweryTitle = styled.h1`
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: 500;
  color: #f9cc41;
  margin: 0;
  letter-spacing: 15px;
`;

export const BrewerySubtitle = styled.h2`
  font-weight: 300;
  font-size: 45px;
  color: #ffffff;
  letter-spacing: 5px;
`;
