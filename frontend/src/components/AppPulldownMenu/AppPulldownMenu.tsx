import { StyledSelect } from './styles';
import type { AppPulldownMenuProps } from './types';

export const AppPulldownMenu = ({
  options,
  value,
  onChange,
}: AppPulldownMenuProps) => {
  return (
    <StyledSelect
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
    >
    <option value="">すべて</option>

    {options.map((option) => (
        <option key={option.id} value={option.value}>
            {option.value}
        </option>
    ))}
    </StyledSelect>
  );
};