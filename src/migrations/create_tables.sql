

CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE assets (
    id SERIAL PRIMARY KEY,
    type_id INTEGER REFERENCES Types(id) NOT NULL,
    name VARCHAR(255) NOT NULL,
    ticker VARCHAR(255) UNIQUE,
    broker VARCHAR(255) NOT NULL,
    index_ref VARCHAR(255),
    exchange VARCHAR(255),
    category INTEGER(255),
    expire DATE,
    sub_cat INTEGER(255),
    UNIQUE (name, ticker, broker)
);

CREATE TABLE cells (
    id SERIAL PRIMARY KEY,
    asset_id INTEGER REFERENCES Assets(id) NOT NULL,
    month INTEGER NOT NULL,
    year INTEGER NOT NULL,
    share_number INTEGER,
    share_value NUMERIC,
    pmc NUMERIC NOT NULL
);

INSERT INTO Types (name) VALUES
    ('robo'),
    ('account'),
    ('stocks'),
    ('bond'),
    ('etf'),
    ('constraints'),
    ('cryptocurrencies');
