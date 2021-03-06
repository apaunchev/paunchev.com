export function hyphenize(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
