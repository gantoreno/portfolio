import { Helmet } from 'react-helmet';

import {
  Entry,
  List,
  Paragraph,
  Section,
  Wrapper,
  FadedHeader,
} from '../../shared';
import { LinkButton } from '../../shared/button/Button';
import {
  EntryTitle,
  ExternalLink,
  ListItem,
  Bold,
  Underline,
} from '../../shared/entry/Entry';
import { NavigationBar } from '../../shared/navigation-buttons/NavigationButtons';
import { SectionSubtitle, SectionTitle } from '../../shared/section/Section';

import './AboutView.scss';

const AboutView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - About</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/about.png" />
      <Section>
        <SectionTitle>Hello There! 👋🏻</SectionTitle>
        <SectionSubtitle>
          I'm Gabriel, from 🇻🇪 &mdash; your trusted software engineer
        </SectionSubtitle>
        <Entry>
          <EntryTitle>What I do</EntryTitle>
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
          <EntryTitle>
            What I <u>also</u> do
          </EntryTitle>
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
          <EntryTitle>The technologies I use</EntryTitle>
          <Paragraph>
            You'll often see me using my preferred tech stack, which consists
            of:
          </Paragraph>
          <List>
            <ListItem>
              <Bold>⚛️ React</Bold> (front-end library of choice).
            </ListItem>
            <ListItem>
              <Bold>📱 React Native</Bold> (for mobile applications).
            </ListItem>
            <ListItem>
              <Bold>🐝 Node.js</Bold> (with Express for back-end development).
            </ListItem>
            <ListItem>
              <Bold>📦 AWS</Bold> (for overall system infrastructure).
            </ListItem>
            <ListItem>
              <Bold>🐬 MySQL</Bold> (for relational databases).
            </ListItem>
            <ListItem>
              <Bold>🍃 MongoDB </Bold> (for NoSQL databases).
            </ListItem>
          </List>
          <Paragraph>Although I can also (and usually) work with:</Paragraph>
          <List>
            <ListItem>
              <Bold>🐍 Python</Bold> (with TensorFlow, Pandas, NumPy, Django,
              Flask).
            </ListItem>
            <ListItem>
              <Bold>💎 Ruby</Bold> (on Rails, for full-stack applications &amp;
              backend services).
            </ListItem>
            <ListItem>
              <Bold>🐘 PHP</Bold> (using Laravel &amp; Bango &mdash; my
              framework).
            </ListItem>
            <ListItem>
              <Bold>☕️ Java</Bold> (through AWT for graphical applications).
            </ListItem>
            <ListItem>
              <Bold>➕ C++</Bold> (for data structures &amp; algorithms, machine
              learning).
            </ListItem>
          </List>
          <Paragraph>
            Last (but not least), I work pretty well too with the following
            environments and/or solutions:
          </Paragraph>
          <List>
            <ListItem>
              <Bold>🎱 8base</Bold> (as a backend-as-a-service provider with
              GraphQL).
            </ListItem>
            <ListItem>
              <Bold>🔥 Firebase</Bold> (and Google Cloud Platform for real-time
              applications).
            </ListItem>
          </List>
        </Entry>
        <NavigationBar>
          <LinkButton
            to="/home"
            text="Back to home"
            leftIcon="fas fa-arrow-left"
          />
          <LinkButton
            to="/projects"
            text="See my projects"
            rightIcon="fas fa-arrow-right"
            hoverBackground="yellow-400"
            opaque
          />
        </NavigationBar>
      </Section>
    </Wrapper>
  );
};

export default AboutView;
