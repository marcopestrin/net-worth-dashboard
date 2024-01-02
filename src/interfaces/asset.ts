interface CreateAssetCommon {
    typeId: number;
    name: string;
    ticker: string;
    broker: string;
};

export interface CreateAssetBond extends CreateAssetCommon {
    expire: string;
    category: number;
};

export interface CreateAssetEtf extends CreateAssetCommon {
    index: string;
    exchange: string;
    category: number;
};

export interface EditAsset {
    id: number;
    name: string;
    ticker: string;
    broker: string;
    index?: string | null;
    exchange?: string | null;
    expire?: number | null;
    category?: string | null;
};