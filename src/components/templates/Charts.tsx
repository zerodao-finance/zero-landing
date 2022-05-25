import { useAppContext } from '../../store';
// Layout
import { Section } from '../layout/Section';
// Components
import { Background } from '../background/Background';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import Link from 'next/link';
import { Button } from '../button/Button';
import { Grid } from '../layout/Grid';
import { DefaultCard } from '../card/Default';

const Charts = () => {
  const { eventsLoading, totalTransacted } = useAppContext();

  return (
    <Background color="bg-gray-800">
      <Section yPadding="py-6">
        <NavbarTwoColumns 
          logo={<Logo xl />}
        >
          <li className="hover:text-gray-100 transition duration-200">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:text-gray-100 transition duration-200">
            <Link href="https://docs.zerodao.com" target="_blank">
              <a>Docs</a>
            </Link>
          </li>
          <Link href="https://bridge.zerodao.com">
            <a>
              <Button>
                Bridge
              </Button>
            </a>
          </Link>
        </NavbarTwoColumns>
      </Section>

      <Section 
        title="Analytics"
        description="Bringing you live updates about our bridge."
        vertical
      >
        <Grid
          children={<>
            <DefaultCard>
              <p>
                {eventsLoading ? "Loading" : totalTransacted}
              </p>
            </DefaultCard>
            <DefaultCard>
              <p>
                {eventsLoading ? "Loading" : totalTransacted}
              </p>
            </DefaultCard>
            <DefaultCard>
              <p>
                {eventsLoading ? "Loading" : totalTransacted}
              </p>
            </DefaultCard>
          </>}
        />
      </Section>
    </Background>
  );
};

export { Charts };
