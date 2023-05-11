import { useEffect, useState } from 'react';

import PublicGoogleSheetsParser from 'public-google-sheets-parser';

export const useNftWhitelist = () => {
  const [whitelisted, setWhitelisted] = useState<string[]>([]);

  function checkWhitelistStatus(inputAddress: string) {
    console.log('checking whitelist status', inputAddress);
    const found = whitelisted.find(
      (address) => address.toLowerCase() === inputAddress.toLowerCase()
    );
    console.log('res', found);
    return !!found;
  }

  useEffect(() => {
    if (whitelisted.length > 0) return;

    new PublicGoogleSheetsParser(
      '1dNDbS3PhoR8yHxcUUvd1wS_QmTUQVu5sQzVO91V7cwo',
      { sheetId: '1939331393' }
    )
      .parse()
      .then((data) => {
        setWhitelisted(data.map(({ address }) => address?.toLowerCase()));
      })
      .catch((err) => console.error('Error pulling google sheets:', err));
  }, []);

  return {
    whitelisted,
    checkWhitelistStatus,
  };
};
