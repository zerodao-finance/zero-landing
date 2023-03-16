import { Base } from '../ui/base';
import { Analytics } from '../ui/templates/Analytics';

const AnalyticsPage = () => {
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

export default AnalyticsPage;
