<template>
  <div class="loginsingup">
    <div class="row">
      <div class="">
        <div class="card">
          <div class="login-box">
            <div class="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                class="sign-in"
                checked
              /><label for="tab-1" class="tab">Giriş Yap</label>
              <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
                for="tab-2"
                class="tab"
                >Kayıt Ol</label
              >
              <div class="login-space">
                <div class="login">
                  <div class="group">
                    <label for="user" class="label">Mail</label>
                    <input
                      id="user"
                      type="text"
                      class="input"
                      placeholder="Mailinizi Giriniz"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">Şifre</label>
                    <input
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Şifrenizi Giriniz"
                    />
                  </div>
                  <div class="group">
                    <input id="check" type="checkbox" class="check" checked />
                    <label for="check"
                      ><span class="icon me-1"></span>Oturumu Açık Tut</label
                    >
                  </div>
                  <div class="group">
                    <NuxtLink to="/login"
                      ><input type="submit" class="button" value="Giriş Yap"
                    /></NuxtLink>
                  </div>
                  <div
                    id="alert-login"
                    class="form-text text-danger text-capitalize fs-6 bg-alert"
                  >
                    bütün alanları doldurunuz
                  </div>
                  <div class="hr"></div>
                  <div class="foot">
                    <a @click="handleSignIn" class="m-3" href="javascript:void(0)"><i class="fa-brands fa-github fa-2x"></i></a>
                    <a href="javascript:void(0)">Şifreni mi Unuttunuz ??</a>
                  </div>
                </div>
                <div class="sign-up-form">
                  <div class="group">
                    <label for="antr-user-name" class="label">İsim Soyad</label>
                    <input
                      v-model="antr_user_name"
                      id="antr-user-name"
                      type="text"
                      class="input"
                      placeholder="İsim Soyad Giriniz"
                    />
                  </div>
                  <div class="group">
                    <label for="antr-user-pass" class="label">Şifre</label>
                    <input
                      v-model="antr_user_pass"
                      id="antr-user-pass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Şifre Oluşturunuz"
                    />
                  </div>
                  <div class="group">
                    <label for="antr-user-repass" class="label"
                      >Şifre Tekrarı</label
                    >
                    <input
                      v-model="antr_user_repass"
                      id="antr-user-repass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Oluşturduğunuz Şifreyi Tekrar Giriniz"
                    />
                  </div>
                  <div class="group">
                    <label for="antr-user-mail" class="label">Mail</label>
                    <input
                      v-model="antr_user_email"
                      id="antr-user-mail"
                      type="text"
                      class="input"
                      placeholder="Mail Adresinizi Giriniz"
                    />
                  </div>
                  <div class="group">
                    <input
                      @click="register"
                      type="submit"
                      class="button"
                      value="Kayıt Ol"
                    />
                  </div>
                  <div
                    id="alert-register"
                    class="form-text text-danger text-capitalize fs-6 bg-alert"
                  >
                    bütün alanları doldurunuz
                  </div>
                  <div class="hr"></div>
                  <div class="foot">
                    <label for="tab-1">Zaten Üyeyim</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { status, data, signIn, signOut, refresh   } = useAuth()
const loggIn = computed(() => status.value === "authenticated");
async function handleSignIn() {
  await signIn();
}
console.log(status.value);
const check = ref(false);
const antr_user_name = ref("");
const antr_user_pass = ref("");
const antr_user_repass = ref("");
const antr_user_email = ref("");
async function register() {
  const user_name = antr_user_name.value;
  var user_pass = antr_user_pass.value;
  const user_repass = antr_user_repass.value;
  var user_email = antr_user_email.value;
  const user_form = new Array(
    user_name.toLowerCase(),
    user_pass.toLowerCase(),
    user_email.toLowerCase()
  );

  function register_alert(message) {
    $("div#alert-register").css({ display: "block" });
    $("div#alert-register")[0].textContent = message;
  }

  async function antr_create(user_form) {
    const dataTwice = await $fetch("/api/antr.users.create", {
      method: "POST",
      body: { user_form },
    });
    register_alert(dataTwice.message);
  }

  function validate_email(value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  $("div.sign-up-form input:not([type='submit'])").each(function (i, v) {
    const input_value = $(v).val();
    if (!input_value) $(v).addClass("invalid").removeClass("valid");
    if (input_value) $(v).addClass("valid").removeClass("invalid");
  });
  const input_check = $("div.sign-up-form input.valid").length;
  if (input_check === 4) {
    if (user_pass === user_repass) {
      const check_email = validate_email(user_email);
      if (check_email === false) {
        check.value = false;
        register_alert("mail kontrol ediniz");
      } else {
        check.value = true;
        antr_create(user_form);
      }
    } else {
      check.value = false;
      register_alert("şifreler aynı değil");
    }
  } else {
    register_alert("bütün alanları doldurunuz");
    check.value = false;
  }

  

}
</script>
<style>
.login-box {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background-image: url(/singupimg/backgroundimg.jpg);
  background-size: cover;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-snip {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgb(0 77 77 / 45%);
}
.login-snip .login,
.login-snip .sign-up-form {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-snip .sign-in,
.login-snip .sign-up,
.login-space .group .check {
  display: none;
}
.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
  text-transform: uppercase;
}
.login-snip .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-snip .sign-in:checked + .tab,
.login-snip .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-space {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-space .group {
  margin-bottom: 15px;
}
.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-space .group .input,
.login-space .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-space .group input[data-type="password"] {
  /* text-security: circle; */
  -webkit-text-security: circle;
}
.login-space .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-space .group .button {
  background: #1161ee;
}
.login-space .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-space .group label .icon:before,
.login-space .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-space .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-space .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-space .group .check:checked + label {
  color: #fff;
}
.login-space .group .check:checked + label .icon {
  background: #1161ee;
}
.login-space .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-space .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-snip .sign-in:checked + .tab + .sign-up + .tab + .login-space .login {
  transform: rotate(0);
}
.login-snip .sign-up:checked + .tab + .login-space .sign-up-form {
  transform: rotate(0);
}

*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.hr {
  height: 0.5vh;
  margin: 2vh 0 2vh 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot {
  text-align: center;
}
.card {
  width: 100%;
  /* left: 100px; */
  position: absolute;
  height: 100%;
}

::placeholder {
  color: #b3b3b3;
}
</style>