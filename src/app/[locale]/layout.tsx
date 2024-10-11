import RTLProvider from '@/components/common/RTLProvider';
import { defaultTheme, globalStyles, persianTheme } from '@/config/theme';
import { Locale, languages } from '@/navigation';
import { AppProvider } from '@/providers';
import I18nProvider from '@/providers/I18nProvider';
import {
  CssBaseline,
  GlobalStyles,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import ConfirmAlertProvider from '@/providers/ConfirmAlertProvider';
import 'react-toastify/dist/ReactToastify.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconsSymbols from '@/components/Icons/components/IconsSymbols';

export type LocaleLayoutParams = { params: { locale: Locale } };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Royal Elite',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren<LocaleLayoutParams>) {
  const reqUserAgent = userAgent({ headers: headers() });

  const themes: Record<Locale, ThemeOptions> = {
    en: defaultTheme,
    fa: persianTheme,
  };

  return (
    <html lang={locale} dir={languages?.[locale]?.direction}>
      <body>
        <IconsSymbols />
        <AppRouterCacheProvider>
          <ThemeProvider theme={themes[locale] ?? defaultTheme}>
            <ToastContainer
              rtl={languages?.[locale]?.direction == 'rtl'}
              position="top-center"
            />
            <AppProvider userAgent={reqUserAgent}>
              <CssBaseline />
              <GlobalStyles styles={globalStyles} />
              <RTLProvider>
                <I18nProvider locale={locale}>
                  <ConfirmAlertProvider>{children}</ConfirmAlertProvider>
                </I18nProvider>
              </RTLProvider>
            </AppProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
