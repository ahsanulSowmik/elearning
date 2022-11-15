import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import swal from 'sweetalert';



function Payment()
{
return(
  <div>
   <div className='py-4'>
   < div className='containter'>
<div className="row">

            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>Basic Information</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> First Name</label>
                                    <input type="text" name="firstname" className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Student ID</label>
                                    <input type="text" name="studentid" className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                          
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Email Address</label>
                                    <input type="email" name="email"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" name="password"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>City</label>
                                    <input type="text" name="city" className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>State</label>
                                    <input type="text" name="state"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mb-3">
                                    <label>Zip Code</label>
                                    <input type="text" name="zipcode"  className="form-control" />
                                    <small className="text-danger"></small>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-primary mx-1" >Place Order</button>
   
                                    <button type="button" className="btn btn-warning mx-1" >Pay Online</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-5">
              <h4>Summery</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <Link to='/coursedetails'><th width="50%">English for communication</th></Link>
                            <th>3000/</th>
                            <th>1</th>
                            <th>3000/</th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            </div>
      
    
   
            <div className="card card-body py-5 text-center shadow-sm">
                <h4>Your Shopping Cart is Empty. You are in Checkout Page.</h4>
            </div>
        </div>
        </div>
        </div>
)
 }

    
    
    



export default Payment;