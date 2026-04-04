export const formatVND = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const formatDateToString = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("vi-VN");
};
