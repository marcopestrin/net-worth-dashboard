export interface AddCell {
    asset: number;
    month: number;
    year: number;
    shareNumber: number;
    shareValue: number;
    pmc: number;
};

export interface EditCell {
    month: number;
    year: number;
    shareNumber: number;
    shareValue: number;
    pmc: number;
    id: number;
};