import React from 'react';
import classNames from 'classnames';
import './InvoiceOwnerDetails.css';
import { FirmModel } from '../../models/FirmModel';
import { OwnerType } from '../../models/OwnerType';

interface OwnerProps {
    firm : FirmModel;
    ownerType : OwnerType;
}

const ownerTypeDictionary : Record<OwnerType, string> = 
{ 
    [OwnerType.Seller] : 'Usługodawca', 
    [OwnerType.Buyer]  : 'Usługobiorca' 
};

export function InvoiceOwnerDetails(props : OwnerProps) {

    let ownerClass = classNames({
        'owner': true,
        'owner-seller': props.ownerType === OwnerType.Seller,
        'owner-buyer': props.ownerType === OwnerType.Buyer
    });

  return (
    <div className={ownerClass}>
        <div className='flex-column'>
            <p className='owner-type'>{ownerTypeDictionary[props.ownerType]}</p>
            <p>{props.firm.firmName}</p>
            <p>{props.firm.street}</p>
            <p>{props.firm.zipCode} {props.firm.city}</p>
            <p>NIP {props.firm.firmIdNumber}</p>
        </div>
    </div>
  );
}