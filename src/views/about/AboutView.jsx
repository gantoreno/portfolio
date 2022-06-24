import { Helmet } from 'react-helmet';

import {
  Bold,
  Emoji,
  Entry,
  ExternalLink,
  FadedHeader,
  LinkButton,
  List,
  NavigationBar,
  Paragraph,
  Section,
  Underline,
  Wrapper,
} from '../../shared';

import './AboutView.scss';

const AboutView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - About</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/about.png" />
      <Section>
        <Section.Title>
          Hello There! <Emoji name="waving-hand-light-skin-tone" />
        </Section.Title>
        <Section.Subtitle>
          I'm Gabriel, from <Emoji name="flag-venezuela" /> &mdash; your trusted
          software engineer
        </Section.Subtitle>
        <Entry>
          <Entry.Title>What I do</Entry.Title>
          <Paragraph>
            I'm a software engineer &amp; full-stack web developer specialized
            in <Underline>commercial projects</Underline>,{' '}
            <Underline>startup creations</Underline>,{' '}
            <Underline>corporate identity</Underline>, and{' '}
            <Underline>personal websites</Underline>. My job is to bring ideas
            to life through dynamic client-developer experiences, working as a
            team to transform amazing ideas into exceptional realities.
          </Paragraph>
        </Entry>
        <Entry>
          <Entry.Title>
            What I <u>also</u> do
          </Entry.Title>
          <Paragraph>
            When I'm not developing commercial applications, I'm working on{' '}
            <ExternalLink href="https://github.com/gantoreno">
              personal &amp; open source projects
            </ExternalLink>
            , as well as mentoring beginner programmers and students with an
            awesome team at{' '}
            <ExternalLink href="https://www.electrichive.org/">
              The Electric Hive
            </ExternalLink>
            ; but the most important thing is, I'm always discovering, learning,
            and improving, one day at a time.
          </Paragraph>
        </Entry>
        <Entry>
          <Entry.Title>The technologies I use</Entry.Title>
          <Paragraph>
            You'll often see me using my preferred tech stack, which consists
            of:
          </Paragraph>
          <List>
            <List.Item>
              <Bold>
                <Emoji name="atom-symbol" /> React
              </Bold>{' '}
              (front-end library of choice).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="mobile-phone" /> React Native
              </Bold>{' '}
              (for mobile applications).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="honeybee" /> Node.js
              </Bold>{' '}
              (with Express for back-end development).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="package" /> AWS
              </Bold>{' '}
              (for overall system infrastructure).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="dolphin" /> MySQL
              </Bold>{' '}
              (for relational databases).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="leaf-fluttering-in-wind" /> MongoDB{' '}
              </Bold>{' '}
              (for NoSQL databases).
            </List.Item>
          </List>
          <Paragraph>Although I can also (and usually) work with:</Paragraph>
          <List>
            <List.Item>
              <Bold>
                <Emoji name="snake" /> Python
              </Bold>{' '}
              (with TensorFlow, Pandas, NumPy, Django, Flask).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="diamond-suit" /> Ruby
              </Bold>{' '}
              (on Rails, for full-stack applications &amp; backend services).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="elephant" /> PHP
              </Bold>{' '}
              (using Laravel &amp; Bango &mdash; my framework).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="hot-beverage" /> Java
              </Bold>{' '}
              (through AWT for graphical applications).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="plus" /> C++
              </Bold>{' '}
              (for data structures &amp; algorithms, machine learning).
            </List.Item>
          </List>
          <Paragraph>
            Last (but not least), I work pretty well too with the following
            environments and/or solutions:
          </Paragraph>
          <List>
            <List.Item>
              <Bold>
                <Emoji name="pool-8-ball" /> 8base
              </Bold>{' '}
              (as a backend-as-a-service provider with GraphQL).
            </List.Item>
            <List.Item>
              <Bold>
                <Emoji name="fire" /> Firebase
              </Bold>{' '}
              (and Google Cloud Platform for real-time applications).
            </List.Item>
          </List>
        </Entry>
        <NavigationBar>
          <LinkButton to="/" text="Back to home" leftIcon="fas fa-arrow-left" />
          <LinkButton
            to="/projects"
            text="See my projects"
            rightIcon="fas fa-arrow-right"
            opaque
          />
        </NavigationBar>
      </Section>
    </Wrapper>
  );
};

export default AboutView;
