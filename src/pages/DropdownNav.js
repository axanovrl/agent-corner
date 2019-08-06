import React from 'react';

const DropdownNav = () => {
    return(
        <React.Fragment>
    <div class="dropdown">
    <a class="dropdown-toggle nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="/img/avatar_mini.png" width="30px" height="30px" id="h-mini-avatar"/>
        <span className="text-white">Jeffery</span>
  </a>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="">
    <a class="dropdown-item" href="/settings">Settings</a>
    <a class="dropdown-item" href="new-contact">Create a new contact</a>
    <div className="dropdown-divider" role="separator"></div>
    <a class="dropdown-item" href="#">Log out</a>
  </div>
</div>
    
        </React.Fragment>
    
    )
}

export default DropdownNav