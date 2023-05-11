import { useEffect, useState } from 'react';

import { ethers } from 'ethers';

import { useInput, useNftWhitelist } from '../../hooks';
import { Button } from '../components';
import { SearchInput } from '../components/search';
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
      <ModalBase open={open} setOpen={setOpen} title="Whitelist Lookup">
        <div className="flex flex-col gap-4 w-full md:px-1">
          <p>
            Enter an address here to see if it&apos;s currently on the
            whitelist!
          </p>
          <SearchInput
            type="special"
            value={value}
            onChange={onChange}
            placeholder={ethers.constants.AddressZero}
          />
          {renderStatus()}
        </div>
      </ModalBase>
    </>
  );
};
