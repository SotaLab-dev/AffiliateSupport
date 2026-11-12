import { StyledLabel } from "./styles";
import type { LabelProps } from "./types";

export const AppLabel = ({ name }: LabelProps) => {
  return (
    <StyledLabel>
        {name}
    </StyledLabel>
  );
};