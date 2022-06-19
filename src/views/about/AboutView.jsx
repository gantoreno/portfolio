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
import { ExternalLink, ListItem, Underline } from '../../shared/entry/Entry';
import { NavigationBar } from '../../shared/navigation-buttons/NavigationButtons';

import './AboutView.scss';

const AboutView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - About</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/about.png" />
      <Section
        title="Hello There! 👋🏻"
        subtitle="I'm Gabriel, from 🇻🇪 &mdash; your trusted software engineer"
      >
        <Entry title="What I Do">
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
        <Entry title="What I also do">
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
        <Entry title="The technologies I use">
          <Paragraph>
            You'll often see me using my preferred tech stack, which consists
            of:
          </Paragraph>
          <List>
            <ListItem title="⚛️ React">(front-end library of choice).</ListItem>
            <ListItem title="⚛️ React Native">
              (for mobile applications).
            </ListItem>
            <ListItem title="🐝 Node.js">
              (with Express for back-end development).
            </ListItem>
            <ListItem title="📦 AWS">
              (for overall system infrastructure).
            </ListItem>
            <ListItem title="🐬 MySQL">(for relational databases).</ListItem>
            <ListItem title="🍃 MongoDB">(for NoSQL databases).</ListItem>
          </List>
          <Paragraph>Although I can also (and usually) work with:</Paragraph>
          <List>
            <ListItem title="🐍 Python">
              (with TensorFlow, Pandas, NumPy, Django, Flask).
            </ListItem>
            <ListItem title="💎 Ruby">
              (on Rails, for full-stack applications &amp; backend services).
            </ListItem>
            <ListItem title="🐘 PHP">
              (using Laravel &amp; Bango &mdash; my framework).
            </ListItem>
            <ListItem title="☕️ Java">
              (through AWT for graphical applications).
            </ListItem>
            <ListItem title="➕ C++">
              (for data structures &amp; algorithms, machine learning).
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
            leftIcon="fas fa-arrow-right"
            hoverBackground="yellow-400"
            opaque
          />
        </NavigationBar>
      </Section>
    </Wrapper>
  );
};

export default AboutView;
