import { EditAsset  } from '../interfaces/asset';
export const retrieve = () => `SELECT * FROM assets`;
export const remove = async (id: number) => `DELETE FROM assets WHERE id = ${id}`;

export const add = ({
    typeId,
    name,
    ticker,
    broker,
    index = null,
    exchange = null,
    expire = null,
    category = null
}: any) => `
    INSERT INTO assets (
        type_id,
        name,
        ticker,
        broker,
        index_ref,
        exchange,
        expire,
        sub_cat
    ) VALUES (
        ${typeId},
        '${name}',
        '${ticker}',
        '${broker}',
        '${index}',
        '${exchange}',
        ${expire},
        ${category}
    );
`;

export const edit = ({
    name,
    ticker,
    broker,
    index = null,
    exchange = null,
    expire = null,
    category = null,
    id
}: EditAsset) => `
    UPDATE assets
    SET
        name = '${name}',
        ticker = '${ticker}',
        broker = '${broker}',
        index_ref = '${index}',
        exchange = '${exchange}',
        expire = ${expire},
        sub_cat = '${category}'
    WHERE
        id = ${id}
    RETURNING *;
`;


export default {
    edit,
    add,
    remove,
    retrieve
}
