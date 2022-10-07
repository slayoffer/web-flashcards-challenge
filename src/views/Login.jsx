const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({ tryAgain }) {
  return (
    <Layout>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4 mt-5">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }} />
                <span className="heading h1 fw-bold mb-0">Wassup? 0_o</span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form action="/" method="POST" style={{ width: '23rem' }}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Вход</h3>
                  <div className="form-outline mb-4">
                    <input name="inputName" id="form2Example18" className="form-control form-control-lg" required />
                    <label className="form-label" htmlFor="form2Example18">Имя</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input name="inputPassword" type="password" id="form2Example28" className="form-control form-control-lg" required />
                    <label className="form-label" htmlFor="form2Example28">Пароль</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-warning btn-lg btn-block" type="submit">Войти</button>
                  </div>
                  <p className="text-danger font-weight-bold text-uppercase">{tryAgain}</p>
                  <p className="h5">
                    Нет аккаунта?
                    {' '}
                    <a href="/signup" className="signup-link text-decoration-none">Зарегистрироваться</a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://cdn.naturettl.com/wp-content/uploads/2021/05/21151603/How-to-Photograph-Bees-14-1200x1200-cropped.jpg"
                alt="Login"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
