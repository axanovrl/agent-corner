import React from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TableForm = (className) =>{

    return(
        <React.Fragment>
             <div className={`mb-2-hf d-flex justify-content-between flex-wrap ${className}`}>
                <h2>Contacts</h2>
            </div>
                        <div className={`mb-2-hf ${className}`}>
                            <div className={`overflow-auto table-bordered container-table bg-light ${className}`}>
                            <Table striped bordered hover>
                                <thead>
                                        <tr>
                                            <th scope="col">PHOTO</th>
                                            <th scope="col">USERNAME</th>
                                            <th scope="col">ZIPCODE</th>
                                            <th scope="col">CITY&STATE</th>
                                            <th scope="col">ESTIMATED PRICE</th>
                                            <th scope="col">DATE CREATED</th>
                                            <th scope="col">PROPERTY TYPE</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">BEDS</th>
                                            <th scope="col">BATHS</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">PHONE</th>
                                            <th scope="col">LAST CONTACTED</th>
                                            <th scope="col">CREDIT RANGE</th>
                                            <th scope="col">STAGE</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">DOWN PAYMENT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="/img/Photo.png" width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png" width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png" width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png" width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                        <tr>
                                            <td><img src="/img/Photo.png"  width="140px" height="80px"/></td>
                                            <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                                            <td>123456</td>
                                            <td>San Francisco, CA</td>
                                            <td>$450,000-$500,000</td>
                                            <td>May 1, 2019</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                    </div>
       
        </React.Fragment>
       
    )
    
    
}

export default TableForm;