import React from 'react';

import NavBar from '../../../components/NavBar';
import ListBlock from './ListBlock';
import ContactInfo from './ContactInfo';
import {List, List1, List2} from '../const';

const Details = () =>{
    return(
        <React.Fragment>
            <NavBar/>
                <div className="container">
                    <div className="row">
                        <ContactInfo/>
                        <div className="p-0 col-9">
                            <div className="pt-1-hf pl-2 row">
                                <div className="ag-m-3 col-lg-6 col-12">
                                <ListBlock list={List} title="Overview" />
                                </div>
                                <div className="ag-m-3 col-lg-6 col-12">
                                <ListBlock list={List1} title="Contract Details"/>
                                </div>
                                <div className="ag-m-3 col-lg-6 col-12">
                                <ListBlock list={List2} title="Other Info" />  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
       
    )
}

export default Details;
