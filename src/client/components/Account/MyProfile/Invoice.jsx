import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice } from '../../../data';


 const Invoice = () => {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(params.elementId)
  if(invoice.page === 'profile') {
  return (
    <div className="row row-cols-2 my-5">
      <div className="col">
      <h2>My profile</h2>
       </div>
       <div className="col">
     <button className="btn btn-link">Delete account</button>
       </div>
      <div className="col">
        <label htmlFor="ForFirstName" className="form-label">First name</label>
        <input type="text" className="form-control" id="ForFirstName" placeholder="FirstName"
          value={invoice.FirstName} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="ForLastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="ForLastName" placeholder="LastName"
          value={invoice.LastName} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="ForEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="ForEmail" placeholder="Email"
          value={invoice.LastName} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="ForPhone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="ForPhone" placeholder="Phone"
          value={invoice.phone} defaultValue="Search..." />
      </div>
      <div className="col">
        <label htmlFor="ForPass" className="form-label">New Password</label>
        <input type="password" className="form-control" id="ForPass" placeholder="New Password"
          value={invoice.password} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="ForConfirm" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="ForConfirm" placeholder="Confirm Password"
          value={invoice.confirm} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="ForCountry" className="form-label">Country</label>
        <input type="text" className="form-control" id="ForCountry" placeholder="Country"
          value={invoice.country} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="exampleDropdownForLastName" className="form-label">City</label>
        <input type="text" className="form-control" id="exampleDropdownForLastName" placeholder="Name"
          value={invoice.city} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="exampleDropdownForLastName" className="form-label">Address</label>
        <input type="text" className="form-control" id="exampleDropdownForLastName" placeholder="Name"
          value={invoice.address} defaultValue="Search..."/>
      </div>
      <div className="col">
        <label htmlFor="exampleDropdownForLastName" className="form-label">ZIP Code</label>
        <input type="text" className="form-control" id="exampleDropdownForLastName" placeholder="Name"
          value={invoice.zipCode} defaultValue="Search..."/>
      </div>
      <button className="btn btn-success my-4 mx-auto" type="submit">Save changes</button>
    </div>
  )}
  return( <div>
    1
  </div>)
  ;
}


export default Invoice;
