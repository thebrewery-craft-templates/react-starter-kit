/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import CraftLogo from 'images/craft-logo.png';
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
          <CraftLogoImage src={CraftLogo} alt="craft logo" />
          <BrewerySubtitle> React Boilerplate </BrewerySubtitle>
          powered by:
          <BreweryTitleWrapper>
            <BreweryTitle> THE BREWERY </BreweryTitle>
          </BreweryTitleWrapper>
        </BreweryTitleContainer>
      </Background>
      <StyledFooter>Craft © 2019 Created by Stratpoint</StyledFooter>
    </StyledLayout>
  );
}
