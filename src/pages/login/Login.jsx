import "./login.scss"


function Login() {
  return (
    <div className="login" >

        <div className="card">
          <div className="left">
                <h1>Hello World.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident commodi fugit obcaecati laborum cum explicaorum corrupti porro ea amet aliquid.
                </p>
                <span>Don't you have an account?</span>
                <button>Register</button>
          </div>
          <div className="right">
              <h1>Login</h1>

              <form>
                  <input type="text" placeholder="Username" name="username" id="userName" />
                  <input type="text" placeholder="Password" name="password" id="password" />
                  <button>Login</button>
              </form>

          </div>
        </div>
    </div>
  )
}

export default Login