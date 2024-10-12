import React, { FC } from 'react';
import Image from './Image';
import { ImageProps } from 'next/image';
import { useTranslations } from 'next-intl';

const Logo: FC<Partial<ImageProps>> = (props) => {
  const t = useTranslations();

  return (
    <Image
      draggable={false}
      width={200}
      height={35}
      alt={t('siteInfo.title')}
      src="/assets/images/logo.svg"
      {...props}
    />
  );
};

export default Logo;
