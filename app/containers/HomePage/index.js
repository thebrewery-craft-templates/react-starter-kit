/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MaltLogo from 'images/malt.png';
import RBLogo from 'images/rb-logo.png';
import BreweryLogo from 'images/the_brewery_white.png';
import {
  StyledLayout,
  FooterDiv,
  CenterDiv,
  Content,
  ResponsiveImg,
  RBLogoImage,
  WelcomeContent,
} from './styles';
import { PersonComponent } from '../../components/PersonComponent';
// Ant Design is pre installed , use included components for faster delivery

export default function HomePage() {
  return (
    <StyledLayout>
      <CenterDiv>
        <Content>
          <ResponsiveImg src={MaltLogo} />
          <WelcomeContent>
            <div>Welcome to your Craft React App!</div>
            <p>
              To get started, edit <code>./app.js</code> and paste the{' '}
              <code>App ID</code>, <code>JavaScript Key</code> and{' '}
              <code>API URL</code> from your
              <a href="https://craft.thebrewery.app/apps" target="_blank">
                &nbsp;App&apos;s Settings Page
              </a>
            </p>
            <p>
              Once you are done configuring your React App, you can try our
              simple script below that save and retrieve data from your Craft
              database, using our built-in Parse Server &amp; Parse SDK. Go
              ahead and click the <code>Add Person</code> and{' '}
              <code>Fetch Person</code> button below. Then, go to your{' '}
              <a href="https://craft.thebrewery.app/apps" target="_blank">
                App&apos;s Dashboard
              </a>{' '}
              to check the changes in Person class
            </p>
          </WelcomeContent>

          <PersonComponent />
          <WelcomeContent>
            <br />
            <p>
              To learn more about Parse SDK, the{' '}
              <a
                href="https://parseplatform.org/Parse-SDK-JS/api/master/Parse.html"
                target="_blank"
              >
                Parse SDK for JS guide
              </a>{' '}
              is the good place to start.
              <br />
              And if you want to use &amp; learn more about the built-in APIs
              using REST, the{' '}
              <a
                href="https://docs.parseplatform.org/rest/guide/"
                target="_blank"
              >
                Parse REST API Guide
              </a>{' '}
              is also available.
            </p>
          </WelcomeContent>
          <FooterDiv>
            <p>Powered by</p>
            <RBLogoImage src={BreweryLogo} />
            &nbsp;&nbsp; &amp; &nbsp;&nbsp;
            <RBLogoImage src={RBLogo} />
          </FooterDiv>
        </Content>
      </CenterDiv>
    </StyledLayout>
  );
}
