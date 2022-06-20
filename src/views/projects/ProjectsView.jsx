import { Helmet } from 'react-helmet';

import {
  Code,
  CodeBlock,
  Entry,
  ExternalLink,
  ExternalLinkButton,
  FadedHeader,
  Figure,
  LinkButton,
  Masonry,
  NavigationBar,
  Paragraph,
  Section,
  Tag,
  Underline,
  Wrapper,
} from '../../shared';

import './ProjectsView.scss';

const CommercialProject = ({ pictureUrl, title, source, tags = [] }) => {
  return (
    <div className="flex-wrap content-center mb-6 rounded shadow-lg lg:flex bg-grey">
      <div className="lg:flex lg:w-1/3">
        <div className="overflow-hidden rounded lg:flex-1">
          <img className="rounded" src={pictureUrl} alt={title} />
        </div>
      </div>
      <div className="lg:flex lg:w-2/3">
        <div className="lg:flex-1">
          <div className="flex flex-col items-start justify-center h-full mt-6 text-left lg:mt-0 lg:ml-6">
            <h4 className="mb-3 text-xl sm:text-2xl font-bold text-left text-white">
              {title}
            </h4>
            {tags.length > 0 && (
              <div className="mb-6 leading-6">
                <span className="text-sm mr-2">
                  <i className="fas fa-tag"></i> Tags:
                </span>
                {tags.map(title => (
                  <Tag title={title} />
                ))}
              </div>
            )}
            {source && (
              <ExternalLinkButton
                href={source}
                text="View"
                leftIcon="fa-solid fa-arrow-up-right-from-square"
                opaque
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const GitHubProject = ({
  emoji,
  title,
  description,
  link,
  className,
  language,
}) => {
  return (
    <div
      className={`project-card bg-gray-800 rounded border border-gray-725 text-center ${className}`}
    >
      <div className="p-6 border-b border-gray-725">
        <h3 className="mb-6 text-5xl sm:text-6xl">{emoji}</h3>
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="p-6 border-b border-gray-725 text-left text-sm sm:text-base">
        {description}
      </div>
      <div className="p-6">
        <ExternalLinkButton
          href={link}
          text="View on GitHub"
          rightIcon="fab fa-github"
          className="mx-auto"
          opaque
        />
      </div>
    </div>
  );
};

const ProjectsView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - Projects</title>
      </Helmet>
      <FadedHeader pictureUrl="/assets/img/code.png" />
      <Section>
        <Section.Title>My projects 👨🏻‍💻</Section.Title>
        <Section.Subtitle>
          Take a look at some of the things I've worked on
        </Section.Subtitle>
        <Entry>
          <Entry.Title>Commercial projects</Entry.Title>
          <Paragraph>
            For the past 3+ years, I've been working really close to known
            companies from around the world, doing{' '}
            <Underline>web consulting</Underline> &amp;{' '}
            <Underline>project assessments</Underline>. These are some of the
            most remarkable projects I've had the fortune to develop and see in
            action:
          </Paragraph>
          <CommercialProject
            title="Insightt — Repossession Tool"
            pictureUrl="/assets/img/projects/insightt.png"
            source="https://insightt.io"
            tags={['react', 'react-native', 'node', 'aws', 'firebase']}
          />
          <CommercialProject
            title="Resident — Student Housing"
            pictureUrl="/assets/img/projects/resident.png"
            source="https://app.resident.io"
            tags={['react', 'typescript', '8base', 'graphql']}
          />
          <CommercialProject
            title="Totalcom Venezuela — ISP"
            pictureUrl="https://mir-s3-cdn-cf.behance.net/projects/max_808/0d25a0109534879.Y3JvcCwxNTk4MiwxMjUwMSwyNDEzLDA.png"
            source="https://www.behance.net/gallery/109534879/Totalcom-Venezuela-ISP"
            tags={['react', 'node', 'scss']}
          />
          <CommercialProject
            title="Resivenca — Internet + Energy"
            pictureUrl="https://mir-s3-cdn-cf.behance.net/projects/max_808/9a9f98109535527.Y3JvcCwxNTk4MSwxMjUwMCwyNjUwLDA.png"
            source="https://www.behance.net/gallery/109535527/Resivenca-Internet-Energia"
            tags={['react', 'next', 'scss']}
          />
          <CommercialProject
            title="CWV — Project Management System"
            pictureUrl="https://mir-s3-cdn-cf.behance.net/projects/max_808/bc47d3109540181.Y3JvcCwxNTk4MSwxMjUwMCwyNDEyLDA.png"
            source="https://www.behance.net/gallery/109540181/CWV-Project-Management-System"
            tags={['php', 'laravel', 'javascript', 'scss']}
          />
        </Entry>
        <Entry>
          <Entry.Title>Personal &amp; open source</Entry.Title>
          <Paragraph>
            <Underline>Open source</Underline> &amp;{' '}
            <Underline>side projects</Underline> are important too! I've spent a
            major part of the past couple years working on{' '}
            <Underline>web development</Underline>,{' '}
            <Underline>ai-related stuff</Underline> &amp;{' '}
            <Underline>small interesting projects</Underline>. Some of them are:
          </Paragraph>
          <Masonry>
            <GitHubProject
              emoji="❤️"
              title="Curtis"
              description="The cardiovascular unified real-time intelligent system — ECG analysis through an AI-based mobile app."
              link="https://github.com/gantoreno/curtis-app"
            />
            <GitHubProject
              emoji="🐘"
              title="Bango"
              description="The zero-tricks lightweight framework - just you, and PHP."
              link="https://github.com/gantoreno/bango"
            />
            <GitHubProject
              emoji="🧠"
              title="Iris"
              description="A C++ neural networks engine."
              link="https://github.com/gantoreno/iris"
            />
            <GitHubProject
              emoji="🍎"
              title="Macfetch"
              description="A macOS Neofetch alternative written in C++."
              link="https://github.com/gantoreno/macfetch"
            />
            <GitHubProject
              emoji="📝"
              title="Aether"
              description="An interactive editor that performs JavaScript code analysis, and runs on Electron."
              link="https://github.com/gantoreno/aether"
            />
            <GitHubProject
              emoji="🩺"
              title="PyTop"
              description="A Python-based Windows app monitor."
              link="https://github.com/gantoreno/pytop"
            />
            <GitHubProject
              emoji="🎧"
              title="Muso"
              description="A Telegram bot that listens to voice messages, and recognizes music."
              link="https://github.com/gantoreno/muso"
            />
          </Masonry>
        </Entry>
        <Entry>
          <Entry.Title>Themes &amp; tools</Entry.Title>
          <Paragraph>
            I'm a big fan of building my own tools &amp; making them look as I
            feel comfortable with. This, of course, involves the colors on my{' '}
            <Underline>text editor</Underline> of choice (Visual Studio Code)
            and my <Underline>terminal emulator</Underline> (iTerm2). That's why
            I created my own colorscheme, <Underline>VSCode Gabriel</Underline>.
          </Paragraph>
          <Figure
            src="/assets/img/tools.png"
            alt="VSCode and iTerm2"
            caption="Visual Studio Code, along iTerm2 with Google Sans Mono @ 12px"
          />
          <Paragraph>
            You can grab it from the{' '}
            <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=gantoreno.gabriel">
              Visual Studio Code Marketplace
            </ExternalLink>
            , or by opening the command palette with <Code>⌘</Code>{' '}
            <Code>p</Code> (or <Code>^</Code> <Code>p</Code> if you're on
            Windows) and typing in the following:{' '}
          </Paragraph>
          <CodeBlock>ext install gabriel</CodeBlock>
          <Paragraph>
            You'll know it when you see it. Aditionally, you can copy the
            terminal's <Underline>16 color palette</Underline> and copy it to
            your preferred terminal emulator if you want to match it with the
            editor as I do.
          </Paragraph>
          <Figure
            src="/assets/img/colors.png"
            alt="iTerm2"
            caption="My iTerm2 colorscheme"
          />
          <Paragraph>
            I've crafted a whole <Underline>ecosystem</Underline> &amp;{' '}
            <Underline>design language based</Underline> on my favorite colors,
            creating a warm &amp; cozy atmosphere that is easy in the eyes for
            long coding sessions. Also, do you know the{' '}
            <ExternalLink href="https://www.vim.org/">Vim</ExternalLink> editor?
            Well, I have a colorscheme for you too.
          </Paragraph>
          <Figure
            src="/assets/img/vim.png"
            alt="The Vim editor"
            caption="iTerm2 running (Neo)vim, along with the Vim Gabriel colorscheme."
          />
          <Paragraph>
            If you're a <Underline>heavy command-line user</Underline> (like
            me), you're familiar with command-line text editors (like
            Vim/Neovim), and, for an extra touch of consistency, you can also
            grab my{' '}
            <ExternalLink href="https://github.com/gantoreno/vim-gabriel">
              Vim theme
            </ExternalLink>{' '}
            and use it to finally complete the ecosystem (or simply import{' '}
            <Code>gantoreno/vim-gabriel</Code> in your <Code>.vimrc</Code>/
            <Code>init.vim</Code> with your package manager of choice). Make
            sure to check that out! (Also, feel free to have a look around my{' '}
            <ExternalLink href="https://github.com/gantoreno/dotfiles">
              dotfiles
            </ExternalLink>{' '}
            to see all my configs &amp; tools).
          </Paragraph>
        </Entry>
        <NavigationBar>
          <LinkButton
            to="/about"
            text="Back to about"
            leftIcon="fas fa-arrow-left"
          />
          <LinkButton
            to="/contact"
            text="Contact me"
            rightIcon="fas fa-arrow-right"
            opaque
          />
        </NavigationBar>
      </Section>
    </Wrapper>
  );
};

export default ProjectsView;
