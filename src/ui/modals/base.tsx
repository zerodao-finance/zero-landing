import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

import { DefaultCard } from '../components';

type IBaseModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
  cardClass?: string;
  headerClass?: string;
};

export const ModalBase = ({
  open,
  setOpen,
  title,
  children,
  cardClass,
  headerClass,
}: IBaseModalProps) => (
  <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden transition-all w-full max-w-2xl shadow-md">
                <DefaultCard
                  className={`flex flex-col text-neutral-100 sm:px-8 !shadow-inner !shadow-brand-black ${
                    cardClass || ''
                  }`}
                  color="bg-gradient-to-t from-gray-900 to-gray-1000"
                  headerClass={headerClass}
                  title={title}
                  largeTitle
                  center
                  close={
                    <button
                      onClick={() => setOpen(false)}
                      className="text-neutral-100 h-full p-1 focus-visible:outline-0"
                    >
                      <MdClose size="28px" />
                    </button>
                  }
                >
                  {children}
                </DefaultCard>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </>
);
