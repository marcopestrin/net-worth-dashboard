import queries from '../queries/cell';
import { AddCell, EditCell } from '../interfaces/cell'

export const addCell = async ({
    asset,
    month,
    year,
    shareNumber,
    shareValue,
    pmc
}: AddCell) => {
    const query = queries.add({
        asset,
        month,
        year,
        shareNumber,
        shareValue,
        pmc 
    });
    console.log(query);
    // return await db.exec(query);
};


export const editCell = async ({
    month,
    year,
    shareNumber,
    shareValue,
    pmc,
    id
}: EditCell) => {
    const query = queries.edit({
        month,
        year,
        shareNumber,
        shareValue,
        pmc,
        id
    });
    // return await db.exec(query);
};

export const removeCell = async (id: number) => {
    const query = queries.remove(id);
    // return await db.exec(query);
}


export const retrieveCell = async () => {
    const query = queries.retrieve();
    // return await db.exec(query);
}



