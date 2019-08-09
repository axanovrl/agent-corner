import React from 'react';

import {Link} from 'react-router-dom';

const DropdownNav = () => {
    return(
        <React.Fragment>
          <div class="dropdown">
              <Link className="dropdown-toggle nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="/img/avatar_mini.png" width="30px" height="30px" id="h-mini-avatar"/>
                <span className="text-white">Jeffery</span>
              </Link>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="">
              <Link to="/settings" className="dropdown-item" >Settings</Link>
              <Link to="/new-contact" className="dropdown-item" >Create a new contact</Link>
              <div className="dropdown-divider" role="separator"></div>
              <Link to="#" className="dropdown-item" >Log out</Link>
            </div>
          </div>
    
        </React.Fragment>
    
    )
}

export default DropdownNav