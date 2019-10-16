/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MaltLogo from 'images/malt.png';
import {
  StyledLayout,
  Background,
  BreweryTitleContainer,
  BreweryTitleWrapper,
  BreweryTitle,
  BrewerySubtitle,
  CraftLogoImage,
  StyledFooter,
} from './styles';
// Ant Design is pre installed , use included components for faster delivery

export default function HomePage() {
  return (
    <StyledLayout>
      <Background>
        <BreweryTitleContainer>
          <CraftLogoImage src={MaltLogo} alt="craft logo" />
          <BrewerySubtitle> React Boilerplate </BrewerySubtitle>
          powered by:
          <BreweryTitleWrapper>
            <BreweryTitle> THE BREWERY </BreweryTitle>
          </BreweryTitleWrapper>
        </BreweryTitleContainer>
      </Background>
      <StyledFooter>Malt © 2019 Created by Stratpoint</StyledFooter>
    </StyledLayout>
  );
}
