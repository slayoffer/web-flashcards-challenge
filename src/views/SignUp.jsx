const React = require('react');

const Layout = require('./Layout');

module.exports = function SignUp({ alreadyExists }) {
  return (
    <Layout>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="signup-heading text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Регистрация</p>
                      <form action="/signup" method="POST" className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input name="newName" type="text" id="form3Example1c" className="form-control" required />
                            <label className="form-label" htmlFor="form3Example1c">Имя</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input name="newPassword" type="password" id="form3Example4c" className="form-control" required />
                            <label className="form-label" htmlFor="form3Example4c">Пароль</label>
                          </div>
                        </div>
                        <p className="text-danger h6 text-uppercase mb-4">{alreadyExists}</p>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-warning btn-lg">Зарегаться</button>
                          <button type="button" className="signin-btn btn btn-warning btn-lg"><a className="text-decoration-none text-reset" href="/">Войти</a></button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://thebeeconservancy.org/wp-content/uploads/2020/09/cellophane-bee-Colletes-compactus.jpg"
                        className="img-fluid rounded"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
