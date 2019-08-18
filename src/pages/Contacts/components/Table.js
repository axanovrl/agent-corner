import React from 'react';
import { Table as BTable } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Table = (className) => {

    return (
        <div className={`overflow-auto table-bordered container-table bg-light ${className}`}>
            <BTable striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">PHOTO</th>
                        <th scope="col">USERNAME</th>
                        <th scope="col">ZIPCODE</th>
                        <th scope="col">CITY&STATE</th>
                        <th scope="col">ESTIMATED PRICE</th>
                        <th scope="col">DATE CREATED</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                    <tr>
                        <td><img src="/img/Photo.png" width="140px" height="80px" /></td>
                        <td><Link to="/details" className={`text-dark text-underline ${className}`}>Jeffery Fox</Link></td>
                        <td>123456</td>
                        <td>San Francisco, CA</td>
                        <td>$450,000-$500,000</td>
                        <td>May 1, 2019</td>
                    </tr>
                </tbody>
            </BTable>
        </div>     
    )
}

export default Table;