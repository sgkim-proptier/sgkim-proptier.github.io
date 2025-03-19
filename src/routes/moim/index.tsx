import { createFileRoute } from '@tanstack/react-router';

import Moim from '../../components/view/moim';

export const Route = createFileRoute('/moim/')({
  component: () => <Moim />,
});
