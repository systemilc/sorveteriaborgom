import logo from '../../img/logo.png'

function Header() {
  return (
    <div className="container">
      <header className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom my-header">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={logo} class="bi" width="150" height="auto" alt="Logomarca" />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2">Home</a></li>
          <li><a href="#" className="nav-link px-2">Features</a></li>
          <li><a href="#" className="nav-link px-2">Pricing</a></li>
          <li><a href="#" className="nav-link px-2">FAQs</a></li>
          <li><a href="#" className="nav-link px-2">About</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Entrar</button>
          <button type="button" className="btn btn-primary">Cadastrar</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
