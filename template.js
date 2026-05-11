const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="/react-appl/">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/react-appl/press.html">Press</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="border-top p-2">
        Template Demo © 2026
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="py-4 px-3">
        Sidebar
      </div>
    </div>
  )
}

const Template = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-9">
            {props.children}
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}