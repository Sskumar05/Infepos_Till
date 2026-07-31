/**
 * Dashboard utility helpers.
 * All return dummy/placeholder values until real data is connected.
 */

export function formatCurrency(value: number, currency = 'GBP'): string {
  console.log('formatCurrency (dummy):', value, currency);
  return `£${value.toFixed(2)}`;
}

export function formatPercentage(value: number): string {
  console.log('formatPercentage (dummy):', value);
  return `${value.toFixed(1)}%`;
}

export function calculateGrowth(_current: number, _previous: number): number {
  console.log('calculateGrowth (dummy):', _current, _previous);
  return 0;
}
