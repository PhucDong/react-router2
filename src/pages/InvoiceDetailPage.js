import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

function InvoiceDetailPage() {
  let navigate = useNavigate();
  let params = useParams();
  console.log(9, params.invoiceId);
  let invoice = getInvoice(parseInt(params.invoiceId));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total due: {invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.id}
      </p>
      <p>Due date: {invoice.due}</p>

      <button
        onClick={() => {
          deleteInvoice(invoice.id);
          navigate("/invoices");
        }}
      >
        Delete
      </button>
    </main>
  );
}

export default InvoiceDetailPage;
