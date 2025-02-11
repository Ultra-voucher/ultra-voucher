import merchants from '../data/merchants.json';

export const getAllMerchants = (take?: number) => {
  if (take) {
    return merchants.slice(0, take);
  }
  return merchants;
};

export const getMerchantByCategory = (categoryName: string) => {
  const filteredMerchants = merchants.filter((merchant) => {
    merchant.category === categoryName;
  });

  return filteredMerchants;
};
