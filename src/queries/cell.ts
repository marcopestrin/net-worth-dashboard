import { AddCell, EditCell  } from '../interfaces/cell';

export const retrieve = () => `SELECT * FROM cells`;
export const remove = async (id: number) => `DELETE FROM cells WHERE id = ${id}`;

export const add = ({
    asset,
    month,
    year,
    shareNumber,
    shareValue,
    pmc 
}: AddCell) => `
    INSERT INTO cells (
        asset_id,
        month,
        year,
        share_number,
        share_value,
        pmc
    ) VALUES (
        ${asset}, 
        ${month},
        ${year},
        ${shareNumber},
        ${shareValue},
        ${pmc}
    );
`;


export const edit = ({
    month,
    year,
    shareNumber,
    shareValue,
    pmc,
    id
}: EditCell) => `
    UPDATE cells
    SET
        month = ${month},
        year = ${year},
        pmc = ${pmc},
        share_number = ${shareNumber},
        share_value = ${shareValue}
    WHERE
        id = ${id}
    RETURNING *',
`;

export default {
    edit,
    add,
    remove,
    retrieve
}