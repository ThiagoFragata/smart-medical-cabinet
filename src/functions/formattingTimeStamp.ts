export function formattingTimestamp(
  timestamp: number,
  locale = "pt-BR",
  options: Intl.DateTimeFormatOptions = {},
): string {
  const data = new Date(timestamp);

  const optionsFormatting: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZoneName: "long",
    ...options,
  };

  return data.toLocaleString(locale, optionsFormatting);
}
