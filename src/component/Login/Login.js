import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit="event.preventDefault()" className="box">
              <h1>Login</h1>
              <p className="text-muted">
                {" "}
                Please enter your login and password!
              </p>{" "}
              <input type="text" name="" placeholder="Username" />{" "}
              <input type="password" name="" placeholder="Password" />{" "}
              <a className="forgot text-muted" href="#">
                Forgot password?
              </a>{" "}
              <input type="submit" name="" value="Login" href="#" />
              <div className="col-md-12">
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f">FB</i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/login?lang=en"
                      className="icoTwitter"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter">T</i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                      className="icoGoogle"
                      title="Google +"
                    >
                      <i className="fab fa-google-plus">G</i>
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
