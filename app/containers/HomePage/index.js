/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import {
  Background,
  BreweryTitleContainer,
  BreweryTitleWrapper,
  BreweryTitle,
  BrewerySubtitle,
} from './styles';
import BeerMug from '../../components/BeerMug';

// Ant Design is pre installed , use included components for faster delivery

export default function HomePage() {
  return (
    <Background>
      <BreweryTitleContainer>
        <BeerMug />
        <BreweryTitleWrapper>
          <BreweryTitle> THE BREWERY </BreweryTitle>
        </BreweryTitleWrapper>
        <BrewerySubtitle> ReactJs boilerplate </BrewerySubtitle>
      </BreweryTitleContainer>
    </Background>
  );
}
