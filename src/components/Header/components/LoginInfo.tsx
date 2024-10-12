import { useTranslations } from 'next-intl';
import { Button, useTheme } from '@mui/material';
import ButtonWithGradient from '@/components/common/ButtonWithGradient';

const LoginInfo = () => {
  const t = useTranslations();
  const theme = useTheme();
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: theme.palette.common.white,
        }}
      >
        {t('header.auth.login')}
      </Button>

      <ButtonWithGradient variant="contained">
        {t('header.auth.register')}
      </ButtonWithGradient>
    </>
  );
};

export default LoginInfo;
