import Product from './Product';

export default interface Costs {
    id: string,
    balance: number,
    percents: number,
    products:  Product[],
    total: number,
    totalSpend: number,
    type: string,
};
