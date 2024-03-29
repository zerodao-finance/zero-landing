import { ReactNode, useState } from 'react';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';

import { useWindowDimensions } from '../../hooks/window-dimensions';
import { Button, Copyright, SocialIconList } from '../components';
import { Section } from '../layout/section';

type INavbarProps = {
  logo: ReactNode;
  batman?: boolean;
  bgColor?: `bg-${string}`;
};

const Navbar = (props: INavbarProps) => {
  const { width, breakpoints } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => !isOpen && setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const navItems: { text: string; link: string; target: string }[] =
    width >= breakpoints.md
      ? [
          { text: 'Heroes', link: '/#heroes', target: '_self' },
          { text: 'Roadmap', link: '/roadmap', target: '_self' },
          { text: 'Blog', link: '/#blog', target: '_self' },
          { text: 'Docs', link: 'https://docs.zerodao.com', target: '_blank' },
        ]
      : [
          { text: 'Home', link: '/', target: '_self' },
          { text: 'Heroes', link: '#heroes', target: '_self' },
          { text: 'Roadmap', link: '/roadmap', target: '_self' },
          { text: 'Blog', link: '/#blog', target: '_self' },
          { text: 'Docs', link: 'https://docs.zerodao.com', target: '_blank' },
        ];

  return (
    <>
      <div
        className={`w-full z-[99999] ${
          props.batman
            ? 'shadow-lg bg-gray-1000'
            : props.bgColor || 'bg-gray-1000'
        }`}
      >
        <Section yPadding="py-2.5 md:py-3 lg:py-4 px-4" wide>
          <div className="flex flex-wrap justify-between items-center w-full">
            <div>
              <Link href="/">
                <a>{props.logo}</a>
              </Link>
            </div>

            <nav>
              {width < breakpoints.md ? (
                <>
                  <div className="justify-self-end">
                    <button
                      onClick={openMenu}
                      className="inline-flex justify-center w-full p-1 text-neutral-100 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
                    >
                      <RiMenu4Line size="30px" />
                    </button>
                    <Transition
                      show={isOpen}
                      enter="transform transition ease-in-out duration-500"
                      enterFrom="translate-x-[100vw]"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-[100vw]"
                      className="fixed z-[9999] h-screen right-0 top-0"
                    >
                      <div className="w-64 flex flex-col h-full bg-brand-black shadow-md z-50 p-2 items-start justify-between">
                        <div className="flex flex-col items-start w-full">
                          <button
                            onClick={closeMenu}
                            className="inline-flex p-2 self-end rounded-md text-sm font-medium text-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
                          >
                            <RiCloseFill size="32px" />
                          </button>
                          <ul>
                            {navItems.map((item, i) => (
                              <li key={`${item}-${i}`}>
                                <a
                                  href={item.link}
                                  target={item.target}
                                  className={
                                    'block px-4 py-1.5 text-2xl uppercase font-bold w-full text-neutral-100'
                                  }
                                  rel="noreferrer"
                                  onClick={closeMenu}
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-4">
                          <SocialIconList />
                          <Copyright size="sm" />
                        </div>
                      </div>
                    </Transition>
                    <Transition
                      show={isOpen}
                      enter="transform transition ease-in-out duration-500"
                      enterFrom="-translate-x-[100vw]"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-[100vw]"
                      className="fixed z-[999] h-screen right-0 top-0"
                    >
                      <div
                        className="w-screen h-full bg-[rgba(50,50,50,0.5)]"
                        onClick={closeMenu}
                      />
                    </Transition>
                  </div>
                </>
              ) : (
                <ul className="navbar flex gap-3 items-center font-medium 2xl:text-lg text-white uppercase">
                  {navItems.map((el, i) => (
                    <li className="h-full" key={`nav-item-${i}`}>
                      <Link href={el.link} target={el.target}>
                        <a>
                          <Button type="link">{el.text}</Button>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          </div>
        </Section>
      </div>
    </>
  );
};

export { Navbar };
