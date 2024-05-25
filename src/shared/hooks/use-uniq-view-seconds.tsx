import { useState, useEffect, useCallback } from 'react';

import { fetchUniqViewSeconds } from '@shared/services/fetch-uniq-view-seconds';

export const useUniqViewSeconds = () => {
  const [uniqueViewSeconds, setUniqueViewSeconds] = useState<number[]>([]);

  const handleFetchUniqueViewSeconds = useCallback(async () => {
    const data = await fetchUniqViewSeconds();

    const viewSeconds = data.numbers;

    if (viewSeconds.length > 0) {
      const flattened = viewSeconds.flat();
      const unique = Array.from(new Set(flattened));
      const sorted = unique.sort((a, b) => a - b);
      setUniqueViewSeconds(sorted);
    }
  }, [setUniqueViewSeconds]);

  useEffect(() => {
    handleFetchUniqueViewSeconds();
  }, [handleFetchUniqueViewSeconds]);

  return uniqueViewSeconds;
};
