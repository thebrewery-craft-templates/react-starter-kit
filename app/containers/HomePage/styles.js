import styled from 'styled-components';

export const StyledLayout = styled.div`
  height: 100vh;
  background: #000000;
  color: #636b6f;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  margin: 0;
`;

export const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 10px;
  width: 100%;
  color: white;
  text-align: center;
`;

export const CenterDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin-top: 30px;
`;

export const WelcomeContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin-top: 10px;
  font-size: 28px;
  & > div {
    font-weight: 500;
    margin-bottom: 10px;
  }
  & > p {
    text-align: center;
    margin-left: 100px;
    margin-right: 100px;
    font-size: 20px;
  }
`;

export const Links = styled.div`
  & > a {
    color: #ffffff;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const ResponsiveImg = styled.img`
  max-width: 30%;
  max-height: 15%;
  margin-bottom: 30px;
`;

export const RBLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  p {
    margin-right: 1.25em;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }
`;

export const RBLogoImage = styled.img`
  max-width: 10%;
  max-height: 100%;
`;
