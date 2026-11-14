import { useCallback, useMemo, useState } from 'react';

import type { Option } from '@/components/AppPulldownMenu/types';

import type {
  SearchFormValues,
} from '../types';

const defaultValues: SearchFormValues = {
  actressName: '',
  makerId: '',
  genre: '',
  vrType: '',
};

export const useSearchPanel = (
  onSearch: (params: SearchFormValues) => Promise<void>,
) => {
  const [filters, setFilters] =
    useState<SearchFormValues>(defaultValues);

  const [isLoading, setIsLoading] = useState(false);

  /**
   * TODO:
   * APIに置き換える
   */
  const makerOptions = useMemo<Option[]>(
    () => [
      {
        id: 1,
        value: "すべて",
      },
      {
        id: 2,
        value: "S1",
      },
      {
        id: 3,
        value: "MOODYZ",
      },
      {
        id: 4,
        value: "PRESTIGE",
      },
    ],
    [],
  );

  /**
   * TODO:
   * APIに置き換える
   */
  const vrTypeOptions = useMemo<Option[]>(
    () => [
      {
        id: 1,
        value: "すべて",
      },
      {
        id: 2,
        value: "2D",
      },
      {
        id: 3,
        value: "VR",
      },
    ],
    [],
  );

  const updateField = useCallback(
    (
      key: keyof SearchFormValues,
      value: string,
    ) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const handleClear = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const handleSearch = useCallback(async () => {
    try {
      setIsLoading(true);

      /**
       * 検索後は1ページ目表示
       */
      await onSearch({
        ...filters,
      });
    } finally {
      setIsLoading(false);
    }
  }, [filters, onSearch]);

  const handleChange =
  (key: keyof SearchFormValues) =>
  (value: string) => {
    updateField(key, value);
  };

  return {
    filters,
    makerOptions,
    vrTypeOptions,
    isLoading,
    handleClear,
    handleSearch,
    handleChange
  };
};