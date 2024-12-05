import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InvoiceProps, Invoice } from './components/invoice/Invoice';
import { ExampleInvoice } from './configuration';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { InvoiceOwnerForm } from './components/invoiceOwnerForm/invoiceOwnerForm';
import { OwnerType } from './models/OwnerType';

function App() {
  
  let invoiceProps = ExampleInvoice;

  const handleDownloadPdf = () => {
    const input = document.getElementById('invoice');
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
      });
    }
  };

  return (
    <div className="App">
      {/* <Invoice seller={invoiceProps.seller} 
      buyer={invoiceProps.buyer} 
      items={invoiceProps.items} 
      sellerAcountNumber={invoiceProps.sellerAcountNumber}
      dateOfIssue={invoiceProps.dateOfIssue}
      amountOfDaysToPay={invoiceProps.amountOfDaysToPay}/>
      <button onClick={handleDownloadPdf}>Download PDF</button> */}

      <InvoiceOwnerForm ownerType={OwnerType.Seller}/>

    </div>
  );
}

export default App;
