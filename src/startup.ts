import { addAsset } from './services/asset';
import { addCell } from './services/cell';
addAsset({
    name: 'Vanguard FTSE All-World UCITS ETF (USD) Accumulating',
    ticker: 'VWCE',
    broker: 'Degiro',
    index: 'FTSE All-World',
    exchange: 'XETRA',
    typeId: 5,
    category: 3,
});
addAsset({
    name: 'Vanguard S&P 500 UCITS ETF',
    ticker: 'VUSA',
    broker: 'Degiro',
    index: 'S&P 500',
    exchange: 'Borsa Italiana',
    typeId: 5,
    category: 3,

});
addAsset({
    name: 'iShares Core MSCI Emerging Markets IMI UCITS ETF (Acc)',
    ticker: 'EIMI',
    broker: 'Trade Republic',
    index: 'IMI UCITS ETF',
    exchange: 'XETRA',
    typeId: 5,
    category: 3,
});
addCell({
    asset: 1,
    month: 1,
    year: 2024,
    shareValue: 106.98,
    shareNumber: 4,
    pmc: 106.98
});
addCell({
    asset: 2,
    month: 1,
    year: 2024,
    shareValue: 81.93,
    shareNumber: 9,
    pmc: 81.93
});
addCell({
    asset: 3,
    month: 1,
    year: 2024,
    shareValue: 28.71,
    shareNumber: 15,
    pmc: 28.71
});