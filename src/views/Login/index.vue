<template>
  <div class='login'>
    <div id="app">
      <div class="web-login">
        <div class="logo">
          <img src="@/assets/icon/logo.png">
        </div>
        <div class="login-form">
          <div>
            <form>
              <div class="form-group">
                <input
                  type="tel"
                  maxlength="13"
                  placeholder="手机号"
                  class="input-control"
                >
                <div style="display: none;">
                  <div class="clear-mobile-btn">
                    <i
                      class="iconfont icon-chongzhi-qingchu "
                      style="position: absolute; right: 90px; line-height: 40px; font-size: 23px; color: rgb(189, 192, 197);"
                    >
                    </i>
                  </div>
                </div>
                <div
                  class="getSmsCode sms-code disable"
                  style="position: absolute; right: 0px; top: 13px;"
                >
                  获取验证码
                </div>
              </div>
              <div
                class="errorTip"
                style="display: none;"
              >
              </div>
              <div
                class="errorTip"
                style="display: none;"
              >
              </div>
              <div class="form-group">
                <input
                  placeholder="验证码"
                  class="input-control"
                >
              </div>
              <div class="submit login-btn">
                <span>登录</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="vc-alert"
        style="display: none;"
      >
        <div class="vc-alert-layer"></div>
        <div class="vc-alert-wrap">
          <div
            class="vc-alert-title"
            style="display: none;"
          >
          </div>
          <div class="vc-alert-content"></div>
          <div class="vc-alert-ok">好</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang='scss' scoped>
@import '@/assets/styles/mixins.scss';
.web-login {
  font-size: 15px;
  form {
    display: block;
    margin-top: 0em;
  }
  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }
  .login-form {
    width: 100%;
    position: relative;
    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      @include border-bottom;
    }
    .input-control {
      height: 15px;
      line-height: 15px;
      padding: 20px 0;
      width: 100%;
      font-size: 15px;
      color: #191a1b;
      border: 0;
      outline-width: 0;
    }
    .getSmsCode {
      font-size: 13px;
      position: absolute;
      top: 13px;
      right: 0;
    }
    .disable {
      color: #bdc0c5;
      font-size: 10px;
    }
    .sms-code {
      line-height: 30px;
      width: 90px;
      text-align: right;
      float: right;
      font-size: 13px;
      border-radius: 3px;
      cursor: pointer;
    }
    .login-btn {
      margin-top: 70px;
    }
    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
      span {
        opacity: 0.3;
      }
    }
  }
}
</style>
