// import { formatNumberWithCommas } from "./formatNumbersWithCommas";

type CalculationResult = {
  discount: number;
  tax: number;
  total: number;
};

export function calculateDiscountTaxTotal(
  subTotal: number,
  discountRate: number,
  taxRate: number
): CalculationResult {
  const discount = subTotal * discountRate;
  const tax = (subTotal - discount) * taxRate;
  const total = subTotal - discount + tax;

  return { discount, tax, total };
}

// export function formatCurrency(value: number): string {
//   return `₦ ${formatNumberWithCommas(value.toFixed(2))}`;
// }
