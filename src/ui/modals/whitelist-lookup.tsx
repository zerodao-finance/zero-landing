import { useEffect, useState } from 'react';

import { Transition } from '@headlessui/react';
import { ethers } from 'ethers';

import { useInput, useNftWhitelist } from '../../hooks';
import { SearchInput, Button } from '../components';
import { ModalBase } from './base';

export const WhitelistLookup = () => {
  const [open, setOpen] = useState(false);
  const { value, onChange, error, clear } = useInput('address');
  const { checkWhitelistStatus } = useNftWhitelist();

  const renderStatus = () => {
    if (!value) return <></>;
    if (error)
      return (
        <span className="text-red-400">
          This is not an address. Please use a mainnet wallet address.
        </span>
      );
    if (checkWhitelistStatus(value)) {
      return (
        <span className="text-green-400">
          This address is on the whitelist!
        </span>
      );
    }
    return (
      <span className="text-red-400">
        This address is not on the whitelist.
      </span>
    );
  };

  useEffect(() => {
    if (!open && value) setTimeout(() => clear(), 500);
  }, [open]);

  return (
    <>
      <Button type="outline" onClick={() => setOpen(true)}>
        Whitelist Lookup
      </Button>
      <ModalBase
        open={open}
        setOpen={setOpen}
        title="Whitelist Lookup"
        headerClass="mb-0"
      >
        <div className="flex flex-col gap-4 w-full md:px-1 mt-8 sm:items-center">
          <p>
            Enter an address here to see if it&apos;s currently on the
            whitelist!
          </p>
          <div className="sm:w-[500px] flex justify-center flex-col gap-2">
            <SearchInput
              type="special"
              value={value}
              onChange={onChange}
              placeholder={ethers.constants.AddressZero}
            />
            <Transition
              show={value !== ''}
              enter="transition-opacity duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="text-sm"
            >
              {renderStatus()}
            </Transition>
          </div>
        </div>
      </ModalBase>
    </>
  );
};
