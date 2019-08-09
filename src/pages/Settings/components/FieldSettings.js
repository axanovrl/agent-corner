import React from 'react';

import NavBar from '../../../components/NavBar';
import TabPanel from './TabPanel';

const FieldSettings = () =>{

    return(
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <div className="mb-2">
                    <div className="my-1-hf d-flex justify-content-between">
                        <h1>Settings</h1>
                    </div>
                    <hr class="out"></hr>
                    <TabPanel/>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default FieldSettings;