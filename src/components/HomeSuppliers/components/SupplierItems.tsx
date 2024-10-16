import { Box, Grid, useTheme } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ButtonWithIcon from '@/components/common/ButtonWithIcon';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EggIcon from '@mui/icons-material/Egg';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const SupplierProductItems = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(to right top, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        minHeight: 60,
        py: 1,
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item my={1}>
          <ButtonWithIcon icon={CheckroomIcon} label="پوشاک" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={PhonelinkIcon} label="موبایل و کامپیوتر" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={RestaurantMenuIcon} label="رستوران ها" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={PhonelinkIcon} label="لوازم خانگی" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={EggIcon} label="پروتئینی" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={StorefrontIcon} label="سوپر مارکت ها" />
        </Grid>
        <Grid item my={1}>
          <ButtonWithIcon icon={ConnectingAirportsIcon} label="گردشگری" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupplierProductItems;
