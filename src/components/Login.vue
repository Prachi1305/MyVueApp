<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-2"></div>
      <div class="col-lg-6 col-md-8 login-box">
        <div class="col-lg-12 login-key">
            <font-awesome-icon icon="fa fa-key" />
            <!-- <img src="../assets/images/morningstar.jpg" height="100" width="100" /> -->
        </div>
        <div class="col-lg-12 login-title">LOGIN</div>
        <div class="col-lg-12 login-form">
          <div class="col-lg-12 login-form">
            <p v-if="errors.length">The following fields are required
            <ul>
            <li v-for="e in errors" v-bind:key="e.id" style="color: #f14f22;">{{ e }}</li>
            </ul>
            </p>
            <form @submit="SubmitForm">
              <div class="form-group">
                <label class="form-control-label">USERNAME</label>
                <input type="text" class="form-control" v-model="loginForm.username" />
              </div>
              <div class="form-group">
                <label class="form-control-label">PASSWORD</label>
                <input type="password" class="form-control" v-model="loginForm.password" />
              </div>
              <div class="col-lg-12 loginbttm">
                <div class="col-lg-6 login-btm login-text">
                  <!-- Error Message -->
                </div>
                <div class="col-lg-12 login-btm login-button">
                  <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-3 col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
      errors: [],
    };
  },
  methods: {
    SubmitForm(e) {
      this.errors = [];
      if (!this.loginForm.username) {
        this.errors.push("username is required");
      }
      if (!this.loginForm.password) {
        this.errors.push("password is required");
      }
      if (this.loginForm.username && this.loginForm.password) {
        console.log("login called");
        console.log("username: ", this.loginForm.username)
        console.log("password: ", this.loginForm.password)
        this.$router.push({ name: "home" });
      }
      e.preventDefault();
    },
  },
};
</script>

<style>
body {
  /* background: #222d32; */
  font-family: "Roboto", sans-serif;
}

.login-box {
  margin-top: 180px;
  height: auto;
  background: #a5d4ec;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: -webkit-linear-gradient(#27ef9f, #0db8de);
  -webkit-text-fill-color: transparent;
}

.login-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #ecf0f5;
}

.login-form {
  margin-top: 25px;
  text-align: left;
}

input[type="text"] {
  background-color: #89cdf0;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}

input[type="password"] {
  background-color: #89cdf0;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}

.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #0db8de;
  outline: 0;
  background-color: #89cdf0;
;
  color: #ecf0f5;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #0db8de;
  color: #0db8de;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #0db8de;
  right: 0px;
}

.login-btm {
  float: left;
}

.login-button {
  padding-right: 0px;
  text-align: center;
  margin-bottom: 25px;
}

.login-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}

.loginbttm {
  padding: 0px;
}
</style>