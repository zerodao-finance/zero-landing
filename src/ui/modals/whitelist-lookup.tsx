import { useState } from 'react';

import { ethers } from 'ethers';

import { useInput } from '../../hooks';
import { Button } from '../components';
import { SearchInput } from '../components/search';
import { ModalBase } from './base';

export const WhitelistLookup = () => {
  const [open, setOpen] = useState(false);
  const { value, onChange } = useInput();

  const onSubmit = () => {
    console.log('address', value);
  };

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
            onSearch={onSubmit}
          />
        </div>
      </ModalBase>
    </>
  );
};
