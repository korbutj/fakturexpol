import React from 'react';
import { InvoiceOwnerDetails } from '../invoiceOwnerDetails/InvoiceOwnerDetails';
import { OwnerType } from '../../models/OwnerType';
import { InvoiceItem, InvoiceItemProps, InvoiceSum } from '../invoiceItem/InvoiceItem';
import './Invoice.css';
import '../invoiceItem/InvoiceItem.css';
import { FirmModel } from '../../models/FirmModel';
import { Configuration } from '../../configuration';
import { ValueCalculator } from '../../services/ItemValueCalculator';
import { ValueModel } from '../../models/ValueModel';



export interface InvoiceProps {
  seller: FirmModel;
  buyer: FirmModel;
  sellerAcountNumber?: string;
  dateOfIssue?: Date;
  amountOfDaysToPay?: number;
  items: Array<InvoiceItemProps>;
}

export function Invoice(props: InvoiceProps) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  return (
    <div className="Invoice" id='invoice'>
      <p className='invoice-title'> 
        FAKTURA 01/{currentMonth}/{currentYear} 
      </p>

      <InvoiceOwnerDetails firm={props.seller} ownerType={OwnerType.Seller} />
      <InvoiceOwnerDetails firm={props.buyer} ownerType={OwnerType.Buyer} />

      <InvoiceItemHeader/>
      {
        props.items.map((item, index) => (
          <InvoiceItem key={index} lineNumber={index + 1} name={item.name} itemValue={item.itemValue} />
        ))
      }
      
      <InvoiceSum 
        totalNetValue={ValueCalculator.CalculateTotalNetValue(props.items.map(x => x.itemValue))} 
        totalVatValue={ValueCalculator.CalculateTotalVatValue(props.items.map(x => x.itemValue))}
        totalGrossValue={ValueCalculator.CalculateTotalGrossValue(props.items.map(x => x.itemValue))} />

      <div className='invoice-footer'>
        <div className='invoice-footer-item'>
          <p className='invoice-footer-header'>
            <strong>Data wystawienia,<br/>miejscowość </strong>
          </p>
          <p>
            {props.dateOfIssue?.toLocaleDateString()}, Warszawa
          </p>
        </div>


        <div className='invoice-footer-item'>
          <p className='invoice-footer-header'>
            <strong>Termin płatności: </strong>
          </p>
          <p>
            {props.amountOfDaysToPay} dni od daty wystawienia faktury
          </p>
        </div>

        <div className='invoice-footer-item'>
          <p className='invoice-footer-header'>
            <strong>Numer konta: </strong>
          </p>
          <p>
            {props.sellerAcountNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

function InvoiceItemHeader()
{
  return (
    <div className='invoice-item invoice-header'>
      <p className='line-number-column'>
        <strong>Lp.</strong>
      </p>
      <p className='name-column'>
        <strong>Nazwa</strong>
      </p>
      <p className='amount-column'>
        <strong>Ilość</strong>
      </p>
      <p className='value-column'>
        <strong>Cena netto</strong>
      </p>
      <p className='vat-column'>
        <strong>Stawka VAT</strong>
      </p>
      <p className='vat-value-column'>
        <strong>VAT</strong>
      </p>
      <p className='total-value-column'>
        <strong>Cena brutto</strong>
      </p>
    </div>
  );
}

export default InvoiceProps;
