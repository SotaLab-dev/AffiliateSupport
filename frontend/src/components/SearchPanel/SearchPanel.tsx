import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AppButton } from '../AppButton/AppButton';
import { AppPulldownMenu } from '../AppPulldownMenu/AppPulldownMenu';
import { AppTextBox } from '../AppTextBox/AppTextBox';
import { SearchFilterField } from '../SearchFilterField/SearchFilterField';
import { useSearchPanel } from './hooks/useSearchPanel';
import { SEARCH_PANEL_ACTION_SIZE, SEARCH_PANEL_GRID_SIZE, searchPanelStyles } from './styles';
import type { SearchPanelProps } from './types';

export const SearchPanel = ({
  onSearch,
}: SearchPanelProps) => {
  const {
    filters,
    makerOptions,
    vrTypeOptions,
    isLoading,
    handleClear,
    handleSearch,
    handleChange
  } = useSearchPanel(onSearch);

  return (
    <Box>
        <Grid
        container
        spacing={2}
        sx={searchPanelStyles.root}
        >
            <Grid
                size={SEARCH_PANEL_GRID_SIZE}
            >
                <SearchFilterField
                    label="女優名"
                >
                    <AppTextBox
                        value={filters.actressName}
                        onChange={handleChange("actressName")}
                    />
                </SearchFilterField>
            </Grid>

            <Grid
                size={SEARCH_PANEL_GRID_SIZE}
            >
                <SearchFilterField
                    label="メーカー"
                >
                    <AppPulldownMenu
                        options={makerOptions}
                        value={filters.makerId}
                        onChange={handleChange("makerId")}
                    />
                </SearchFilterField>
            </Grid>


            <Grid
                size={SEARCH_PANEL_GRID_SIZE}
            >
                <SearchFilterField
                label="ジャンル"
                >
                    <AppTextBox
                        value={filters.genre}
                        onChange={handleChange("genre")}
                        mode='normal'
                    />
                </SearchFilterField>
            </Grid>

            <Grid
                size={SEARCH_PANEL_GRID_SIZE}
            >
                <SearchFilterField
                label="2D/VR"
                >
                    <AppPulldownMenu
                        options={vrTypeOptions}
                        value={filters.vrType}
                        onChange={handleChange("vrType")}
                    />
                </SearchFilterField>
            </Grid>

            <Grid
                size={SEARCH_PANEL_ACTION_SIZE}
                 sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <div
                style={
                    searchPanelStyles.actions
                }
                >
                    <AppButton
                        onClick={handleClear}
                    >
                        クリア
                    </AppButton>

                    <AppButton
                        disabled={isLoading}
                        onClick={handleSearch}
                    >
                        検索
                    </AppButton>
                </div>
            </Grid>
        </Grid>
    </Box>
  )
};