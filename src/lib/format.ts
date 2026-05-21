const LOCALE = "es-HN";

const priceFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "HNL",
  maximumFractionDigits: 0,
});

export function formatPrice(amountHnl: number): string {
  return priceFormatter.format(amountHnl);
}

const hourFormatter = new Intl.DateTimeFormat(LOCALE, {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function formatHour(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return hourFormatter.format(date);
}
