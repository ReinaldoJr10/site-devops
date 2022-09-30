let Login = {

    render: async () => {
        return /*html*/ `
    <section class="hero is-success">
      <div class="hero-body">
        <form class="box">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alex@example.com">
          </div>
        </div>
      
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********">
          </div>
        </div>
      
        <button class="button is-primary">Sign in</button>
      </form>
      </div>
    </section> 
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        document.getElementById("register_submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email_input");
            let pass        = document.getElementById("pass_input");    
        })
    }
}

export default Login;