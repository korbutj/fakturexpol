import React from "react";
import "./invoiceOwnerForm.css";
import { OwnerType } from "../../models/OwnerType";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setBuyer, setSeller } from "../../reduxConfig";

export interface InvoiceOwnerFormProps {
    ownerType: OwnerType;
}


export function InvoiceOwnerForm(props : InvoiceOwnerFormProps) {
    
    const firm = useSelector((state: RootState) => props.ownerType === OwnerType.Buyer ? state.buyer.value : state.seller.value);
    const dispatch = useDispatch();

    const callback = props.ownerType === OwnerType.Seller ? setSeller : setBuyer;

  return (
    <div className="invoiceOwnerForm">
      <h2>{props.ownerType === OwnerType.Seller ? 'Dane usługodawcy' : 'Dane usługobiorcy'}</h2>
      <div className="form-group">
        <label htmlFor="firmName">Nazwa firmy</label>
        <input type="text" id="firmName" name="firmName" value={firm.firmName} onChange={x => dispatch(callback({firmName: x.currentTarget.value}))}/>
      </div>
      <div className="form-group">
        <label htmlFor="street">Ulica</label>
        <input type="text" id="street" name="street" value={firm.street} onChange={x => dispatch(callback({street: x.currentTarget.value}))} />
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Kod pocztowy</label>
        <input type="text" id="zipCode" name="zipCode" value={firm.zipCode} onChange={x => dispatch(callback({zipCode: x.currentTarget.value}))} />
      </div>
      <div className="form-group">
        <label htmlFor="city">Miasto</label>
        <input type="text" id="city" name="city" value={firm.city} onChange={x => dispatch(callback({city: x.currentTarget.value}))}/>
      </div>
      <div className="form-group">
        <label htmlFor="firmIdNumber">NIP</label>
        <input type="text" id="firmIdNumber" name="firmIdNumber" value={firm.firmIdNumber} onChange={x => dispatch(callback({firmIdNumber: x.currentTarget.value}))} />
      </div>
    </div>
  );
}