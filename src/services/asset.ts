import queries from '../queries/asset';
import { CreateAssetBond, CreateAssetEtf, EditAsset } from '../interfaces/asset';
import { types, bondSubcategories } from '../libs/mapping';

export const addAsset = async (payload: CreateAssetBond | CreateAssetEtf) => {
    const query = queries.add(payload);
    console.log(query);
    // return await db.exec(query);
};


export const editAsset = async (payload: EditAsset) => {
    const query = queries.edit(payload);
    // return await db.exec(query);
};

export const removeAsset = async (id: number) => {
    const query = queries.remove(id);
    // return await db.exec(query);
}


export const retrieveAsset = async () => {
    const query = queries.retrieve();
    // return await db.exec(query);
}



