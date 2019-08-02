import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './logo1.png'
import Photo from './Photo.png'

const Contacts = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link to="/dashboard"><img src={Logo} width="42px" height="41px;"/></Link>
                    <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                        <div className="mr-auto navbar-nav">
                            <Link to="/dashboard" className="text-white nav-link">Dashboard</Link>
                            <Link to="/contacts" className="text-white nav-link">Contacts</Link>
                            <Link to="/campaigns" className="text-white nav-link">Campaigns</Link>
                        </div>
                </div>
                </div>  
            </nav>
            <div className="container">
                    <div className="mb-2-hf d-flex justify-content-between flex-wrap">
                        <h2>Contacts</h2>
                    </div>
                    <div className="mb-2-hf">
                        <div className="overflow-auto table-hover table-bordered container-table bg-light">
                            <table className="table contacts table-hover table-bordered">
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                                        <td><img src={Photo} width="140px" height="80px"/></td>
                                        <td><Link to="/contacts/details" className="text-dark text-underline">Jeffery Fox</Link></td>
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
                            </table>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        
 
       
 
    )

    
}





export default Contacts;