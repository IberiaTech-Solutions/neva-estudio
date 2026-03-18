'use client';
import { useEffect } from 'react';
import { useLocale } from '@/hooks/useTranslations';

export default function SetLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
