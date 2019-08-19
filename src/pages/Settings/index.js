import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from '../../components/NavBar';
import TabPanel from './components/TabPanel';

const index = () => {

    return (
        <React.Fragment>
            <NavBar />
            <Container>
                <div className="mb-2">
                    <div className="my-1-hf d-flex justify-content-between">
                        <h1>Settings</h1>
                    </div>
                    <hr></hr>
                    <TabPanel />
                </div>
            </Container>
        </React.Fragment>
    )

}

export default index;