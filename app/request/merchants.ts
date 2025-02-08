import merchants from "../data/merchants.json";

export const getAllMerchants = (take? : number) => {
    let merchantsTakes;

    if (take) {
        for (let index = 0; index < take; index++) {
            
        }
    }
    return merchantsTakes;
};

export const getMerchantByCategory = (categoryName: string) => {
    const filteredMerchants = merchants.filter((merchant) => {
        merchant.category === categoryName
    });

    return filteredMerchants;
};