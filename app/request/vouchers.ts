import vouchers from "../data/vouchers.json";

export const getAllVouchers = (take: number = 4) => {
    if (take) {
        return vouchers.slice(0, take);
    }

    return vouchers;
};