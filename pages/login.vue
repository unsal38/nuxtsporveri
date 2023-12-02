<template>
    <div class="loginsingup">
        <div class="row">
            <div class="">
                <div class="card">
                    <div class="login-box">
                        <div class="login-snip">
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1"
                                class="tab">Giriş Yap</label>
                            <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Kayıt
                                Ol</label>
                            <div class="login-space">
                                <div class="login">
                                    <div class="group">
                                        <label for="user" class="label">Mail</label>
                                        <input id="user" type="text" class="input" placeholder="Mailinizi Giriniz">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Şifre</label>
                                        <input id="pass" type="password" class="input" data-type="password"
                                            placeholder="Şifrenizi Giriniz">
                                    </div>
                                    <div class="group">
                                        <input id="check" type="checkbox" class="check" checked>
                                        <label for="check"><span class="icon me-1"></span>Oturumu Açık Tut</label>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Giriş Yap">
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot">
                                        <a href="#">Şifreni mi Unuttunuz ??</a>
                                    </div>
                                </div>
                                <div class="sign-up-form">
                                    <div class="group">
                                        <label for="user" class="label">İsim Soyad</label>
                                        <input id="user" type="text" class="input" placeholder="İsim Soyad Giriniz">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Şifre</label>
                                        <input id="pass" type="password" class="input" data-type="password"
                                            placeholder="Şifre Oluşturunuz">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Şifre Tekrarı</label>
                                        <input id="pass" type="password" class="input" data-type="password"
                                            placeholder="Oluşturduğunuz Şifreyi Tekrar Giriniz">
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Mail</label>
                                        <input id="pass" type="text" class="input" placeholder="Mail Adresinizi Giriniz">
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Kayıt Ol">
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
<script>

</script>