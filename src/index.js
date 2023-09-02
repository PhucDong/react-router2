import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicesPage from "./pages/InvoicesPage";
import ExpensesPage from "./pages/ExpensesPage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="invoices" element={<InvoicesPage />}>
          {/* Show initial information of a page */}
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<InvoiceDetailPage />} />
        </Route>
        {/* Test if users type any URL */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
