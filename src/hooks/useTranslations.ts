'use client';

import { useParams } from 'next/navigation';

import esMessages from '../../messages/es.json';
import enMessages from '../../messages/en.json';

const allMessages: Record<string, Record<string, unknown>> = {
  es: esMessages,
  en: enMessages,
};

export function useTranslations(namespace: string) {
  const params = useParams();
  const locale = (params.locale as string) || 'es';
  const messages = allMessages[locale] || allMessages.es;

  const t = (key: string): string => {
    const namespaceMessages = messages[namespace] as Record<string, unknown>;
    if (!namespaceMessages) {
      return key;
    }

    const keys = key.split('.');
    let value: unknown = namespaceMessages;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    return key;
  };

  const raw = (key: string): unknown => {
    const namespaceMessages = messages[namespace] as Record<string, unknown>;
    if (!namespaceMessages) return undefined;

    const keys = key.split('.');
    let value: unknown = namespaceMessages;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return undefined;
      }
    }
    return value;
  };

  return Object.assign(t, { raw });
}

export function useLocale() {
  const params = useParams();
  return (params.locale as string) || 'es';
}
