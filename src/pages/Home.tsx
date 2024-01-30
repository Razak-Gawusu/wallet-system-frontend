import { useState } from 'react';

import { Button, Input, Search } from '../components';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>('');

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleLoader = () => {
    setIsLoading(true);
  };

  return (
    <div>
      <div>Home</div>
      <Input label="Name" />
      <Button isLoading={isLoading} onClick={handleLoader} variant="tertiary">
        Filter
      </Button>
      <Search className="w-[400px]" onSearch={handleSearch} />
      <div>Search Value: {search}</div>
    </div>
  );
}
