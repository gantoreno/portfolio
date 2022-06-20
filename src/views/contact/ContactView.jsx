import { Helmet } from 'react-helmet';

import {
  Entry,
  FadedHeader,
  Paragraph,
  Section,
  SocialMediaButtons,
  Wrapper,
} from '../../shared';

import './ContactView.scss';
import { SectionSubtitle, SectionTitle } from '../../shared/section/Section';
import { EntryTitle, Underline } from '../../shared/entry/Entry';
import { NavigationBar } from '../../shared/navigation-buttons/NavigationButtons';
import { LinkButton } from '../../shared/button/Button';

const ContactView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - Contact</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/contact.png" />
      <Section>
        <SectionTitle>Get in touch 📱</SectionTitle>
        <SectionSubtitle>Let's build something awesome</SectionSubtitle>
        <Entry>
          <EntryTitle>Social media</EntryTitle>
          <Paragraph>
            If you have an idea about{' '}
            <Underline>something you'd like to create</Underline>, a{' '}
            <Underline>website you have in mind</Underline>, or a{' '}
            <Underline>business you want to start</Underline>, don't worry —{' '}
            <Underline>I got you covered</Underline>. You can find me on my
            social media, I'm constantly updating on each one.
          </Paragraph>
          <SocialMediaButtons />
        </Entry>
        <NavigationBar>
          <LinkButton
            to="/projects"
            text="Back to my projects"
            leftIcon="fas fa-arrow-left"
          />
        </NavigationBar>
      </Section>
    </Wrapper>
  );
};

export default ContactView;
