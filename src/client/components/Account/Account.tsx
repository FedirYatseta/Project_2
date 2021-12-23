import React from "react";
import { FC } from "react"
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../../data';




const Account: FC = () => {
    let invoices = getInvoices();
    return (
        <div className="container">
            <div className="row">
                <nav className="col-3 list-group mt-4">
                    {invoices
                        .map((invoice) => (
                            <NavLink className="list-group-item list-group-item-light my-2 text-black"
                                to={`/account/${invoice.page}`}
                                key={invoice.page}
                            >
                                {invoice.name}
                            </NavLink>
                        ))}
                </nav>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Account;