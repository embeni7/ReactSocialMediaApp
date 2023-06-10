import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            provident commodi fugit obcaecati laborum cum explicaorum corrupti
            porro ea amet aliquid.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>

          <form>
            <input
              className="focus-only"
              type="text"
              placeholder="Username"
              name="username"
              id="userName"
            />
            <input
              className="focus-only"
              type="text"
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              className="focus-only"
              type="text"
              placeholder="Password"
              name="password"
              id="password"
            />
            <input
              className="focus-only"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
