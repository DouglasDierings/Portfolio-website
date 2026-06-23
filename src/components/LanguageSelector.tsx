import type { Locale } from "@/types/i18n";

type LanguageSelectorProps = {
  currentLocale: Locale;
  label: string;
  labels: Record<Locale, string>;
  onLocaleChange: (locale: Locale) => void;
};

export function LanguageSelector({
  currentLocale,
  label,
  labels,
  onLocaleChange,
}: LanguageSelectorProps) {
  const locales = Object.keys(labels) as Locale[];

  return (
    <label className="language-selector">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={currentLocale}
        onChange={(event) => onLocaleChange(event.target.value as Locale)}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {labels[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
