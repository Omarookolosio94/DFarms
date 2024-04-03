export const isNumeric = (str: string) => {
  return /^\d+$/.test(str);
};

export const numbersOnly = (e: any) => {
  if (isNaN(e?.key) && e?.key !== 'Backspace') {
    e.preventDefault();
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const monthName = date.toLocaleString('default', { month: 'short' });

  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
};

export const isObjectEmpty = (obj: any) => {
  if (obj === null) return true;
  return Object.keys(obj).length === 0;
};

export const formatCurrency = (value: any) => {
  if (value) {
    let val = value;
    val = val ? parseFloat(val).toFixed(2) : 0.0;
    return val === 0 ? "₦ 0.00" : `₦ ${Number(val).toLocaleString("en-US")}`;
  }

  return "₦ 0.00";
};
