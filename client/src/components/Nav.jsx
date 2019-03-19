import React from 'react';

const Nav = props => {
  return (
    <div id="nav">
      <div className="col-sm">
      <span className="nav-title">BOBA BUDDIES</span>
      </div>
      <nav className="col-sm justify-content-end">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#search">Search</a></li>
          <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Favorites
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdown-favorite">
              {
                props.favorites.length > 0 ? props.favorites.map(favorite => {
                  return (
                    <div className="favorite-view container dropdown-item" key={favorite.id}>
                      <div className="col-sm"><span className="favorite-name">{favorite.name}</span></div>
                      <div className="col-sm delete-favorite pull-right">
                        <i className="far fa-trash-alt" onClick={() => props.delete(favorite.id)}></i>
                      </div>
                    </div>
                  )
                }) : <span className="no-favorites">You have no favorites!</span>
              }
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
