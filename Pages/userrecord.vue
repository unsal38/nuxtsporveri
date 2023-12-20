<template>
  <button name="menushow" type="button" class="btn btn-secondary m-4">
    <i class="fa-solid fa-bars"></i>
  </button>
  <nav class="d-none solmenu">
    <ul class="nav solmenu flex-column col-6 col-md-4">
      <div class="d-flex mb-4">
        <a class="navbar-brand w-25" href="anasayfa.html"
          ><img class="w-100" src="../pageimg/solmenuimg.png" alt="navbar brand"
        /></a>
        <i class="fa-solid fa-angle-left fa-2x"></i>
      </div>

      <li class="nav-item">
        <a class="nav-link" href="anasayfa.html">Ana Sayfa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kisikaydi.html">Kişi Kaydı</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="kisibilgiguncelle.html"
          >Kişi Bilgileri Güncelle</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="verigirisi.html">Veri Girişi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="gelisimtakip.html">Gelişim Takip</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="hesaplama.html">Hesaplama</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="faaliyettakvimi.html">Faaliyet Takvimi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html">Çıkış</a>
      </li>
    </ul>
  </nav>
  <section>
    <div class="container-xd-fruid container-sm kisikaydi">
      <div class="card col-12 border-0 bg-transparent">
        <h5 class="card-header bg-transparent">Kişi Bilgilerini Giriniz</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control is-invalid"
                  id="mail"
                  placeholder="name@example.com"
                />
                <label for="mail">e-posta</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control is-invalid"
                  id="fname_lname"
                  placeholder="İsim Soyad"
                />
                <label for="fname_lname">İsim-Soyad</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control is-invalid"
                  id="telnu"
                  placeholder="Telefon Numarası"
                />
                <label for="telnu">Telefon Nu.</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <select
                  class="form-select is-invalid bg-transparent"
                  id="cinsiyet"
                >
                  <option selected>Seçiniz</option>
                  <option value="1">Erkek</option>
                  <option value="2">Kadın</option>
                </select>
                <label for="cinsiyet">cinsiyet</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="boy"
                  placeholder="boy cm"
                  min="100"
                />
                <label for="boy">Boy "cm"</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="kilo"
                  placeholder="Kilo gr"
                  min="40"
                />
                <label for="kilo">Kilo "kg"</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="yas"
                  placeholder="Yaş"
                  min="14"
                />
                <label for="yas">Yaş</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="belcevresi"
                  placeholder="cm"
                  min="10"
                />
                <label for="belcevresi">Bel Çevresi "cm"</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="kalcacevresi"
                  placeholder="cm"
                  min="10"
                />
                <label for="belcevresi">Kalça çevresi "cm"</label>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="pazucevresi"
                  placeholder="cm"
                  min="10"
                />
                <label for="pazucevresi">Pazu çevresi "cm"</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  class="form-control is-invalid"
                  placeholder="Spor Geçmisi"
                  id="sporgecmisi"
                  style="height: 100px"
                ></textarea>
                <label for="sporgecmisi">Spor Geçmişi</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control is-invalid"
                  id="hoslandigiyemek"
                  placeholder="Hoşlandığı Yemekler"
                  style="height: 14vh"
                ></textarea>
                <label for="hoslandigiyemek">Hoşlandığı Yemekler</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control is-invalid"
                  id="diyetbozma"
                  placeholder="Diyeti Kaç Günde Bir Bozduğu"
                  style="height: 14vh"
                ></textarea>
                <label for="diyetbozma">Diyeti Kaç Günde Bir Bozduğu</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control is-invalid"
                  id="sporamac"
                  placeholder="Sporu Ne İçin Yaptığı"
                  style="height: 14vh"
                ></textarea>
                <label for="sporamac">Sporu Ne İçin Yaptığı</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control is-invalid"
                  id="kacgunspor"
                  placeholder="Haftada Kaç Gün Spor Yapabileceği"
                  min="1"
                />
                <label for="kacgunspor"
                  >Haftada Kaç Gün Spor Yapabileceği</label
                >
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control is-invalid"
                  id="kardiyo"
                  placeholder="Günlük Yaptığı Kardiyo"
                  style="height: 14vh"
                ></textarea>
                <label for="kardiyo">Günlük Yaptığı Kardiyo</label>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control is-invalid"
                  id="calismahayati"
                  placeholder="Hafif İş / Ağır İş vb..."
                  style="height: 22vh; padding-top: 9vh"
                ></textarea>
                <label for="calismahayati"
                  >Kişinin Çalışma Hayatı <br />
                  "Hafif İş / Ağır İş vb..."</label
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="card-footer d-flex justify-content-end bg-transparent border-0"
        >
          <button class="btn btn-danger m-2">Temizle</button>
          <button type="submit" class="btn btn-success m-2">Kaydet</button>
        </div>
      </div>
    </div>
  </section>
  <div class="scrollup">
    <button name="scrollup" type="button" class="btn">
      <i class="fa-solid fa-angles-up fa-2x"></i>
    </button>
  </div>
</template>
<script setup>
    useHead({
        title: "kullanıcı kaydı",
    })
</script>
<style>
div.scrollup{
  position: fixed;
    bottom: 0;
    right: 0;
    margin: 72px;
    color: red;
}
.kisikaydi {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
}
.kisikaydi label{
  font-size: 2vw;
  font-weight: 400;
}
.kisikaydi .card {
  position: absolute !important;
  z-index: -1;
}
.kisikaydi .card-header {
  text-align: center;
}
.kisikaydi .card input,
.kisikaydi .card textarea {
  background: transparent;
}
</style>