import { Link as NextLink } from '@/navigation';
import { useTranslations } from 'next-intl';
import Button from '@mui/material/Button';

const LoginInfo = () => {
  const t = useTranslations();
  return (
    <>
      <Button LinkComponent={NextLink} href="/login">
        {t('header.auth.login')}
      </Button>

      <Button LinkComponent={NextLink} href="/register">
        {t('header.auth.register')}
      </Button>
    </>
  );
};

export default LoginInfo;
