import Link from 'next/link';

// Utils
import { hoverWhite } from '../../utils/Constants';
// Layouts
// Components
import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-900">
    <Section>
      <CenteredFooter logo={<Logo />} iconList>
        <li className={hoverWhite}>
          <Link href="/">
            <a>Docs</a>
          </Link>
        </li>
        <li className={hoverWhite}>
          <Link href="/#">
            <a>Analytics</a>
          </Link>
        </li>
        <li className={hoverWhite}>
          <Link href="/#">
            <a>Bridge</a>
          </Link>
        </li>
        <li className={hoverWhite}>
          <Link href="/#">
            <a>GitHub</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
