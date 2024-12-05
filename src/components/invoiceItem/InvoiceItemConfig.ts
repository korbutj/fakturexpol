export interface InvoiceItemColumnConfig {
    lineNumberColumn: number;
    nameColumn: number;
    valueColumn: number;
    vatColumn: number;
    vatValueColumn: number;
    totalValueColumn: number;
}

export const InvoiceItemConfiguration : InvoiceItemColumnConfig = {
    lineNumberColumn: 0.1,
    nameColumn: 1,
    valueColumn: 1,
    vatColumn: 0.2,
    vatValueColumn: 0.5,
    totalValueColumn: 1
}