import { useState } from 'react';

import { FilterIcon } from '../assets';
import { Button, Input } from '../components';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoader = () => {
    setIsLoading(true);
  };

  return (
    <div>
      <div>Home</div>
      <Input label="Name" />
      <Button
        isLoading={isLoading}
        onClick={handleLoader}
        // leftIcon={<PlusIcon />}
        variant="tertiary"
        rightIcon={<FilterIcon />}
      >
        Filter
      </Button>
    </div>
  );
}
