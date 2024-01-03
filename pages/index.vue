<script setup>
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/login',
    }
})
const { status, data, signIn, signOut, refresh   } = useAuth()


const loggIn = computed(() => status.value === "authenticated")  
async function handlersingOut_github(params) {
  await signOut()
}
//console.log(data.value.user.email)
// async function handleSignIn() {
//   await signIn();
// }
// async function handleSignOut() {
//   await signOut();
// }
</script>

<template>
  <nav class="navbar-altmenu navbar-expand-lg navbar fixed-bottom navbar-light">
    <div class="container-fluid justify-content-center">
      <ul class="list-group">
        <li v-if="loggIn" class="list-group-item bg-transparent border-0">
          <ul class="navbar-nav flex-row">
            <li class="nav-item mx-2">
              <NuxtLink to="/userrecord">
                <button name="kisikaydi" type="button" class="btn">
                  <i class="col-2 fa-solid fa-person-circle-plus"></i>
                </button>
              </NuxtLink>
            </li>
            <li class="nav-item mx-2">
              <button name="kisibilgiguncelle" type="button" class="btn">
                <i class="col-2 fa-solid fa-user-pen"></i>
              </button>
            </li>
            <li class="nav-item mx-2">
              <button name="verigirisi" type="button" class="btn">
                <i class="col-2 fa-solid fa-server"></i>
              </button>
            </li>
            <li class="nav-item mx-2">
              <button name="gelisimtakip" type="button" class="btn">
                <i class="col-2 fa-solid fa-person-circle-question"></i>
              </button>
            </li>
            <li class="nav-item mx-2">
              <button name="hesaplama" type="button" class="btn">
                <i class="col-2 fa-solid fa-calculator"></i>
              </button>
            </li>
            <li class="nav-item mx-2">
              <button @click="handlersingOut_github" name="singout" type="button" class="btn">
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        </li>
        <li v-else class="list-group-item bg-transparent border-0">
          <ul class="navbar-nav flex-row">
            <li class="nav-item mx-2">
              <NuxtLink to="/login">
                <button name="singin" type="button" class="btn">
                <i class="fa-solid fa-right-to-bracket"></i>
              </button>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <section>
    <div class="bg-img1 position-absolute w-100 h-100"></div>
  </section>
</template>
<style>
button {
  text-transform: uppercase;
}
.navbutton {
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  flex-wrap: wrap;
}
.navbutton button {
  min-height: 12vh;
  padding: 10px;
  box-shadow: 6px 7px 6px #888888;
}
.bg-img1 {
  background-image: url("/assets/img/anasayfaimg/backround.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
nav.navbar-altmenu i {
  color: #615f5f;
  font-size: 7vw;
}
</style>