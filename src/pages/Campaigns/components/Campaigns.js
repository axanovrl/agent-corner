import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../../../components/NavBar';
import TableCampaigns from './TableCampaigns';



const Campaigns = () =>{

    return(
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="mb-2-hf d-flex justify-content-between flex-wrap">
                        <h2>Campaigns</h2>
                    </div>
                    <Link to="#" className="font-weight-bold add-btn btn btn-primary">+ Create</Link>
                   <div className="mb-2-hf">
                    <TableCampaigns/>
                   </div>
                </div>

                
            </React.Fragment>
         
    )
}

export default Campaigns;