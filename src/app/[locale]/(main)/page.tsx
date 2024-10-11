import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations();

  return <>{t('footer.navigation.myAccount')}</>;
};

export default page;
