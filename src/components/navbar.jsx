import React from 'react'

const Navbar = ({title}) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default bg-lightblue">
        <div className="container-fluid">
          <div className="navbar-header text-blue">
            <a className="navbar-brand" href="#"><img src="/img/logo.png" alt="ThORR"/></a> - {title}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
