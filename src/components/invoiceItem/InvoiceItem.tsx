import React from 'react';
import classNames from 'classnames';
import './InvoiceItem.css';
import { Configuration } from '../../configuration';
import { ValueModel } from '../../models/ValueModel';
import { ValueCalculator } from '../../services/ItemValueCalculator';

export interface InvoiceItemProps {
  lineNumber?: number;
  name: string;
  itemValue: ValueModel;
}

export function InvoiceItem(props : InvoiceItemProps) {

  let vat = props.itemValue.vatPercent ?? Configuration.defaultVatValue;

  let netValue = ValueCalculator.CalculateNetValue(props.itemValue);
  let vatValue = ValueCalculator.CalculateVatValue(props.itemValue);
  let valueWithVat = ValueCalculator.CalculateGrossValue(props.itemValue);

  return (
    <div className='invoice-item'>
      <p className='line-number-column'>
        {props.lineNumber}
      </p>
      <p className='name-column'>
        {props.name}
      </p>
      <p className='amount-column'>
        {props.itemValue.amount}
      </p>
      <p className='value-column'>
        {netValue.toFixed(2) + " " + Configuration.currency}
      </p>
      <p className='vat-column'>
        {props.itemValue.amount === undefined ? "" : vat + "%"}
      </p>
      <p className='vat-value-column'>
        {vatValue.toFixed(2) + " " + Configuration.currency}
      </p>
      <p className='total-value-column'>
        {valueWithVat.toFixed(2) + " " + Configuration.currency}
      </p>
    </div>
  );
}

export interface InvoiceSumProps {
  totalNetValue: number; 
  totalVatValue: number; 
  totalGrossValue: number;
};
  

export function InvoiceSum(props: InvoiceSumProps) {

  return (
    <div className='invoice-item'>
      <p className='line-number-column'>
      </p>
      <p className='name-column'>
        <strong>Suma</strong>
      </p>
      <p className='amount-column'>
        
      </p>
      <p className='value-column'>
        <strong>{props.totalNetValue.toFixed(2) + " " + Configuration.currency}</strong>
      </p>
      <p className='vat-column'>
        
      </p>
      <p className='vat-value-column'>
        <strong>{props.totalVatValue.toFixed(2) + " " + Configuration.currency}</strong>
      </p>
      <p className='total-value-column'>
        <strong>{props.totalGrossValue.toFixed(2) + " " + Configuration.currency}</strong>
      </p>
    </div>
  );
}