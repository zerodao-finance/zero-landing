import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { Analytics } from '../components/templates/Analytics';
import { Base } from '../components/templates/Base';

const AnalyticsPage = ({ transfers }: any) => {
  console.log(transfers);
  return (
    <Base
      withNav
      meta={{
        title: 'zeroDAO - Bitcoin Bridge Analytics',
        description:
          'zeroDAO is a web3 cross-chain platform optimizing interoperability. Look at how the zeroBRIDGE is performing here!',
      }}
    >
      <Analytics />
    </Base>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc',
    cache: new InMemoryCache(),
  });

  const { data: zeroControllerTransfers } = await client.query({
    query: gql`
      query GetTransactions {
        exchanges(orderBy: block) {
          id
          block
          from
          to
          amount
          block
        }
      }
    `,
  });

  return {
    props: {
      transfers: zeroControllerTransfers,
    },
  };
}

export default AnalyticsPage;
