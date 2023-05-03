import { ReactNode, useState } from 'react';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import { RiMenu4Line, RiCloseFill } from 'react-icons/ri';

import { useWindowDimensions } from '../../hooks/window-dimensions';
// import { Dropdown } from '../components';
import { Section } from '../layout/section';

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => {
  const { width } = useWindowDimensions();
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => !isOpen && setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const navItems: { text: string; link: string; target: string }[] = [
    { text: 'Home', link: '/', target: '_self' },
    { text: 'Roadmap', link: '/roadmap', target: '_self' },
    { text: 'Blog', link: '#blog', target: '_self' },
    { text: 'Docs', link: 'https://docs.zerodao.com', target: '_blank' },
  ];

  // const redirect = (el: string) => {
  //   switch (el.toLowerCase()) {
  //     case 'home':
  //       return router.push('/');
  //     case 'develop':
  //       return router.push('/develop');
  //     case 'docs':
  //       return window.open('https://docs.zerodao.com');
  //     case 'blog':
  //       return router.push('#blog');
  //     case 'analytics':
  //       return router.push('/analytics');
  //     case 'launch bridge':
  //       return window.open('https://bridge.zerodao.com');
  //     case 'roadmap':
  //       return router.push('/roadmap');
  //     default:
  //       return router.push('/');
  //   }
  // };

  return (
    <>
      <div
        className={`w-full z-[99999] bg-gray-1000 shadow-md shadow-neutral-900`}
      >
        <Section yPadding="py-3 md:py-4 lg:py-5" wide>
          <div className="flex flex-wrap justify-between items-center w-full">
            <div>
              <Link href="/">
                <a>{props.logo}</a>
              </Link>
            </div>

            <nav>
              {width < 600 ? (
                // <Dropdown
                //   items={navItems.map((el) => el.text)}
                //   action={redirect}
                // />
                <>
                  <div className="justify-self-end">
                    <button
                      onClick={openMenu}
                      className="inline-flex justify-center w-full p-1 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
                    >
                      <RiMenu4Line size="32px" />
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
                      <div className=" w-72 flex flex-col h-full bg-brand-black shadow-md z-50 p-2 items-start">
                        <button
                          onClick={closeMenu}
                          className="inline-flex p-2 self-end rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
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
                                  'block px-4 py-2 text-2xl uppercase font-bold w-full'
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
                        className="w-screen h-full bg-[rgba(0,0,0,0.25)]"
                        onClick={closeMenu}
                      />
                    </Transition>
                  </div>
                </>
              ) : (
                <ul className="navbar flex items-center font-medium 2xl:text-lg text-white uppercase">
                  {navItems.map((el, i) => (
                    <li
                      className="hover:text-gray-100 transition duration-150"
                      key={`nav-item-${i}`}
                    >
                      <Link href={el.link} target={el.target}>
                        <a>{el.text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>

            <style jsx>
              {`
                .navbar :global(li:not(:first-child)) {
                  @apply mt-0;
                }

                .navbar :global(li:not(:last-child)) {
                  @apply mr-3;
                }

                @media only screen and (min-width: 1080px) {
                  .navbar :global(li:not(:last-child)) {
                    @apply mr-6;
                  }
                }
              `}
            </style>
          </div>
        </Section>
      </div>
    </>
  );
};

export { Navbar };
