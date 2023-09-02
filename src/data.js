let invoices = [
  {
    id: 28,
    name: "Phuc Dong",
    amount: "$70,556",
    due: "12/06/2007",
  },
  {
    id: 5,
    name: "Josh Welcon",
    amount: "$7,556",
    due: "02/06/2007",
  },
  {
    id: 18,
    name: "Patty Wells",
    amount: "$170,556",
    due: "12/06/2010",
  },
  {
    id: 68,
    name: "James Franco",
    amount: "$17,000",
    due: "02/08/2005",
  },
  {
    id: 77,
    name: "Liza Fritz",
    amount: "$6,670",
    due: "12/06/2013",
  },
  {
    id: 8,
    name: "James Jane",
    amount: "$17,000",
    due: "25/04/2009",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(numberId) {
  return invoices.find((invoice) => invoice.id === numberId);
}

export function deleteInvoice(numberId) {
  invoices = invoices.filter((invoice) => invoice.id !== numberId);
  // console.log(50, invoices);
}
