import type { Locale } from "@/types/i18n";

type LanguageSelectorProps = {
  currentLocale: Locale;
  labels: Record<Locale, string>;
  onLocaleChange: (locale: Locale) => void;
};

export function LanguageSelector({
  currentLocale,
  labels,
  onLocaleChange,
}: LanguageSelectorProps) {
  const locales = Object.keys(labels) as Locale[];

  return (
    <label className="language-selector">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
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
