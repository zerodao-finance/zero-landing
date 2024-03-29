import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

import { Section } from '../layout';
import * as T from '../typography';

const Develop = () => {
  return (
    <Section
      vertical
      yPadding="pb-20 pt-28"
      h1Title
      title="Develop"
      description={
        <span>
          Welcome to the zeroDAO Developer Docs! Here you can learn how to use
          the{' '}
          <a
            className="underline transition duration-200 hover:text-brand-100"
            target="_blank"
            href="https://github.com/zerodao-finance/zerodao"
            rel="noreferrer"
          >
            zeroDAO Software Development Kit
          </a>
          {',  '}
          enabling you to bridge between Bitcoin or Zcash and any of the chains
          we currently support.
        </span>
      }
    >
      <section>
        <T.Title text="Installation" />
        <T.Paragraph text="To install to a client-side application:" />
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {`
            yarn add @zerodao/sdk
          `}
        </ReactMarkdown>
      </section>

      <span className="text-xl my-12">
        Once you have that installed, the primary exports encountered in the
        library can be accessed and used as follows:
      </span>

      <section>
        <T.Title text="ZeroP2P" />
        <T.Paragraph text="A ZeroP2P instance can be used as an argument to Request#publish to broadcast any one of the derived Request classes." />
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {`
            import { ZeroP2P } from "@zerodao/sdk";
            import { Wallet } from "@ethersproject/wallet";
            
            (async () => {
              const signer = Wallet.createRandom();
              const peer = await ZeroP2P.fromPassword({
                signer,
                multiaddr: 'mainnet',
                password: await signer.getAddress()
              }); // deterministic libp2p key generation -- only run one peer with the same multiaddr
              await peer.start();
              // keepers announce themselves and their multiaddr is stored in the peer._keepers Array
              await peer.subscribeKeepers(); 
            })().catch(console.error);
          `}
        </ReactMarkdown>
      </section>

      <section className="mt-12">
        <T.Title text="Request" />
        <T.Paragraph text="Abstract class used to derive different types of broadcasts in the protocol. Currently, only TransferRequest and BurnRequest are used. Cannot be instantiated." />
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {`
            import { CONTROLLER_DEPLOYMENTS, Request } from "@zerodao/sdk";

            const ethereumControllerAddress = Object.keys(CONTROLLER_DEPLOYMENTS)
              .find((contractAddress) => 
                CONTROLLER_DEPLOYMENTS[contractAddress] === 'Ethereum'
              );

            Request.addressToChainId(
              ethereumControllerAddress
            ) // 1
          `}
        </ReactMarkdown>
      </section>

      <section className="mt-12">
        <T.Title text="Transfer Request" />
        <T.Paragraph text="Primary class for bridging BTC or ZEC to a host EVM network. Accepts a simple configuration object as an input to its constructor and exposes some methods useful for broadcasting to zeroDAO keepers." />
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {`
            import { FIXTURES, DEPLOYMENTS, TransferRequest, ZeroP2P } from "@zerodao/sdk";
            import { Wallet } from "@ethersproject/wallet";
            import { parseUnits } from "@ethersproject/units";
            import { AddressZero } from "@ethersproject/constants";
            import { AbiCoder } from "@ethersproject/abi";
            const coder = new AbiCoder();

            (async () => {
              const wallet = Wallet.createRandom(); // get a signer object any way necessary
              const peer = await ZeroP2P.fromPassword({
                signer,
                multiaddr: 'mainnet',
                password: await signer.getAddress()
              });
              const chainId = 1;
              const contractAddress = DEPLOYMENTS[chainId]
                .mainnet.contracts
                .BadgerBridgeZeroController.address;
              const request = new TransferRequest({
                asset: FIXTURES.ETHEREUM.renBTC, // or use renZEC on mainnet
                amount: parseUnits('1', 18) // 1 ETH
                module: AddressZero, // bridge to ETH
                to: await signer.getAddress(),
                data: coder.encode(['uint256'], [ getMinOutForTrade() ]), // ETH module accepts minOut for swapping to ETH, to prevent slippage
                underwriter: contractAddress,
                contractAddress
              });
              console.log(await request.toGatewayAddress());
              await request.publish(peer).toPromise();
            })().catch(console.error);
          `}
        </ReactMarkdown>
      </section>

      <section className="mt-12">
        <T.Title text="Burn Request" />
        <T.Paragraph text="Primary class for releasing funds as BTC or ZEC." />
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {`
            import { FIXTURES, DEPLOYMENTS, TransferRequest, ZeroP2P } from "@zerodao/sdk";
            import { Wallet } from "@ethersproject/wallet";
            import { parseUnits } from "@ethersproject/units";
            import { MaxUint256 } from "@ethersproject/constants";
            import { AbiCoder } from "@ethersproject/abi";
            const coder = new AbiCoder();

            (async () => {
              const signer = Wallet.createRandom(); // get a signer object any way necessary
              const peer = await ZeroP2P.fromPassword({
                signer,
                multiaddr: 'mainnet',
                password: await signer.getAddress()
              });
              const chainId = 1;
              const contractAddress = DEPLOYMENTS[chainId]
                .mainnet.contracts
                .BadgerBridgeZeroController.address;
              const request = new BurnRequest({
                asset: FIXTURES.ETHEREUM.WBTC, // or use renZEC on mainnet
                owner: await signer.getAddress(),
                amount: parseUnits('1', 8), // 1 WBTC
                data: coder.encode(['uint256'], [ getMinOutForTrade() ]), // WBTC module accepts minOut for swapping to WBTC, to prevent slippage
                contractAddress,
                deadline: MaxUint256 // set an expiry time for ERC20Permit message
              });
              if (await request.needsApproval()) await (await request.approve()).wait();
              await request.sign(signer);
              await request.publish(peer).toPromise();
            })().catch(console.error);
          `}
        </ReactMarkdown>
      </section>
    </Section>
  );
};

export { Develop };
