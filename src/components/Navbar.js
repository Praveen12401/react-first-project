import React from 'react'; //when class based component then use must this line
import PropTypes from 'prop-types';



export function Navbar(props) {
  return (
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.abouttext}
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
   
  
  )
}
// navabar main text ka data type set karne ka tareka
Navbar.propTypes={ title:PropTypes.string,
                    abouttext:PropTypes.string
}


// when are we not set value then default value thease set

Navbar.defaultProps={
    title:'icoder',
    abouttext:'About'
};

export  function Card(prop) {
  return (
    <div>
      <div className="card containers" >
  <img src="https://tse4.mm.bing.net/th?id=OIP.hZrUmaARzP6obZEGWAmrGQHaEy&pid=Api&P=0&h=180" className="card-img-top" style={{ width: '100%' }} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
  