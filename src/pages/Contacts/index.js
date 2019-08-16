import React from 'react';
import { Container } from 'react-bootstrap';

import NavBar from '../../components/NavBar';
import Table from './components/Table';

const index = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Container>
               
                    <div className="mb-2-hf d-flex justify-content-between flex-wrap">
                        <h2>Contacts</h2>
                    </div>
                    <div className="mb-2-hf">
                        <Table />
                    </div>
              
            </Container>
        </React.Fragment>


    )
}

export default index;