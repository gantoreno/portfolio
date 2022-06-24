import { Helmet } from 'react-helmet';

import {
  Emoji,
  Entry,
  FadedHeader,
  LinkButton,
  NavigationBar,
  Paragraph,
  Section,
  SocialMediaButtons,
  Underline,
  Wrapper,
} from '../../shared';

import './ContactView.scss';

const ContactView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - Contact</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/contact.png" />
      <Section>
        <Section.Title>
          Get in touch <Emoji name="mobile-phone" />
        </Section.Title>
        <Section.Subtitle>Let's build something awesome</Section.Subtitle>
        <Entry>
          <Entry.Title>Social media</Entry.Title>
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
