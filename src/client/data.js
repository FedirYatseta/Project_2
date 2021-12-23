/**
 * @type {Invoice[]}
 */
 let invoices = [
    {
      name: "My profile",
      page: "profile",
      FirstName: "Annette",
      LastName: "Black",
      email: "yatseta@gmail.com",
      phone: "0974066772",
      country: [
        "USA",
        "Ukraine",
      ],
      city: [
        "Vinnitsia"
      ],
      address:"2464 Royal Ln. Mesa, New Jersey",
      zipCode: 45463,
      password: 121221,
      confirm: 1212221,
    },
    {
      name: "My orders",
      page: "orders",
      FirstName: "Annette",
      LastName: "Black"
    },
    {
      name: "Wishlist",
      page: "wishlist",
      FirstName: "Annette",
      LastName: "Black"
    },
    {
      name: "Recently viewed",
      page: "view",
      FirstName: "Annette",
      LastName: "Black"
    },
    {
      name: "My reviews",
      page: "reviews",
      FirstName: "Annette",
      LastName: "Black"
    },
    {
      name: "Sign out"
    },
  ];
  
  export function getInvoices() {
    return invoices;
  }
  
  /**
   * @param {page} page
   * @returns {Invoice}
   */
  export function getInvoice(page) {
    return invoices.find(invoice => invoice.page === page);
  }
  
  /**
  //  * @param {page} page
  //  * @returns {void}
  //  */
  // export function deleteInvoice(page) {
  //   invoices = invoices.filter(invoice => invoice.page !== page);
  // }
  
  /**
   * @typedef {{ 
   * name: string; 
   * page: string; 
   * FirstName: string; 
   * LastName: string;
   * email: string;
   * phone: number;
   * country: string;
   * city: string;
   * address: string;
   * zipCode: number;
   * password: number;
   * confirm: number;
   *  }} Invoice
   */
  