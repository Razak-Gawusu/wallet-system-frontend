import { useState } from 'react';

import { Button, Input, Search, Transaction } from '../components';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string>('');

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleLoader = () => {
    setIsLoading(true);
  };

  const handleSelect = (selectedOption: string) => {
    console.log(`selected option ${selectedOption}`);
  };

  const options = ['dollar', 'niara'];

  return (
    <div>
      <div>Home</div>
      <Input label="Name" />
      <Button isLoading={isLoading} onClick={handleLoader} variant="tertiary">
        Filter
      </Button>
      <Search className="w-[400px]" onSearch={handleSearch} />
      <div>Search Value: {search}</div>

      <div>
        <Transaction
          onSelect={handleSelect}
          options={options}
          className="w-[225px]"
        />
      </div>
    </div>
  );
}
