import { FailIcon, SuccessIcon } from '../assets';
import { TransactionStatus } from '../components';

export function Home() {
  return (
    <div>
      <div>Home</div>
      <div className="flex justify-center gap-3 items-center py-3 px-3">
        <TransactionStatus
          variant="secondary"
          status="Failed"
          leftIcon={<FailIcon />}
        />
        <TransactionStatus
          variant="primary"
          status="Succeful"
          leftIcon={<SuccessIcon />}
        />
      </div>
    </div>
  );
}
