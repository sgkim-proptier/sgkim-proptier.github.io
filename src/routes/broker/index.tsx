import { createFileRoute } from '@tanstack/react-router';

import Broker from '../../components/view/broker';

export const Route = createFileRoute('/broker/')({
  component: () => <Broker />,
});
