import { formatNumber } from '@/lib/helpers';

const renderSalaryRange = (range, currency) =>
  range.length > 1
    ? `${range[0]}–${range[1]} ${currency}`
    : `${range[0]} ${currency}`;

export function Salary({ range, rangeOriginal, currency, isGross }) {
  range = range.map(formatNumber);
  rangeOriginal = rangeOriginal.map(formatNumber);

  return (
    <div>
      {renderSalaryRange(range, currency)}
      {isGross ? ` (${renderSalaryRange(rangeOriginal, currency)})` : ''}
    </div>
  );
}
