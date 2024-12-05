import InvoiceProps from "./components/invoice/Invoice";

export interface ConfigurationType {
    defaultVatValue: number;
    currency: string;
}

export const Configuration : ConfigurationType = {
    // in percent
    defaultVatValue: 23,
    currency: 'zł'
}

export const ExampleInvoice : InvoiceProps = {
    seller: {
      firmName: "Firma sprzedająca",
      street: "Kwiatowa 12",
      city: "Zielona Góra",
      zipCode: "66-004",
      firmIdNumber: "111 111 11 55"
    },
    buyer: {
      firmName: "Firma Kupująca",
      street: "Jakas 11",
      city: "Warszawa",
      zipCode: "66-004",
      firmIdNumber: "123 123 12 12"
    },
    dateOfIssue: new Date(),
    amountOfDaysToPay: 14,
    sellerAcountNumber: "49 1020 2892 2276 3005 0000 0000",
    items: [
      {
        name: "Produkt 1",
        itemValue: {
          amount: 1,
          value: 100
        }
      },
      {
        name: "Produkt 2",
        itemValue: {
          value: 20,
          amount: 3,
        }
      },
      {
        name: "Produkt 3",
        itemValue: {
          value: 20,
          amount: 2,
        }
      }
    ]
  }