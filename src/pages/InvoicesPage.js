import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

function InvoicesPage() {
  let invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {invoices.map((invoice) => (
          <NavLink
            // Highlight each active link
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
                textDecoration: "none",
              };
            }}
            to={`/invoices/${invoice.id}`}
            key={invoice.id}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default InvoicesPage;
