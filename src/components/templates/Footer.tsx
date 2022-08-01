import Link from 'next/link';

// Utils
import { hoverWhite } from '../../utils/Constants';
// Layouts
// Components
import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-brand-black">
    <Section>
      <CenteredFooter iconList>
        <li className={hoverWhite}>
          <Link href="http://docs.zerodao.com" target="_blank">
            <a>Docs</a>
          </Link>
        </li>
        <li className={hoverWhite}>
          <Link href="http://bridge.zerodao.com" target="_blank">
            <a>Bridge</a>
          </Link>
        </li>
        <li className={hoverWhite}>
          <Link href="/analytics">
            <a>Analytics</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
