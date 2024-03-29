import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenu4Line } from 'react-icons/ri';

type IDropdownProps = {
  text?: string;
  items?: Array<string>;
  action?: any;
  active?: string;
  label?: string;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

function Dropdown(props: IDropdownProps) {
  const items: Array<string> = ['All', 'Mint', 'Burn'];

  return (
    <Menu as="div" className="relative inline-block text-left z-[999]">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-100 transition duration-200">
          {props.text && props.text}
          {props.text ? (
            <FaChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          ) : (
            <RiMenu4Line size="28px" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {(props.items || items).map((el, i) => (
              <Menu.Item key={i}>
                {({ active }: { active: any }) => (
                  <a
                    href="#"
                    className={classNames(
                      active || props.active === el
                        ? 'bg-gray-600 text-gray-100'
                        : 'text-gray-100',
                      `block px-4 py-2 text-sm
                      ${
                        el.includes('Bridge') &&
                        'bg-brand-900 !text-white rounded-b-md'
                      }
                      `
                    )}
                    onClick={
                      props.action
                        ? (e) => {
                            e.preventDefault();
                            props.action(el);
                          }
                        : () => {}
                    }
                  >
                    {el}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export { Dropdown };
