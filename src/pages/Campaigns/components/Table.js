import React from 'react';
import { Table as BTable } from 'react-bootstrap';

const Table = (className) => {
    return (
        <div className={`overflow-auto container-table ${className}`}>
            <BTable bordered hover >
                <thead>
                    <tr>
                        <th>CAMPAIGNS NAME</th>
                        <th>ACTIONS</th>
                        <th>ZIP CODE</th>
                        <th>BID AMOUNT</th>
                        <th>WEEKLY BUDGET</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                    <tr>
                        <td>Campaign Name</td>
                        <td>
                            <div className={`d-flex align-items-center`}>
                                <div className={`oval oval-success`}></div>
                                Active
                            </div>
                        </td>
                        <td>123456</td>
                        <td>$10.50</td>
                        <td>$210.00</td>
                    </tr>
                </tbody>
            </BTable>
        </div>

    )
}

export default Table;