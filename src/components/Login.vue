<template>
  <div class="login-wrapper">
    <div class="title">验证码登录</div>
    <p class="sub_title">未注册的账号验证通过后将自动注册</p>
    <a-form ref="formRef" :rules="rules" layout="vertical" :model="form">
      <a-form-item label="账号：" name="userName">
        <a-input
          size="large"
          v-model:value="form.userName"
          placeholder="请输入账号"
        />
      </a-form-item>
      <a-form-item label="密码：" name="loginPwd">
        <a-input-password
          size="large"
          v-model:value="form.loginPwd"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          class="button"
          size="large"
          block
          type="primary"
          @click="submit"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import { useToken } from '@/store';
export default {
  name: 'Login-app',
  data() {
    return {
      form: {
        userName: '',
        loginPwd: '',
      },
      useToken,
      rules: {
        userName: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ],
        loginPwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 6,
            message: '请输入6位数以上的密码',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.$refs.formRef.validate().then(() => {
        this.loginFn()
          .then((data) => {
            if (data.code == -1) {
              // 暂无账号，去注册
              this.registerFn();
              this.$message.info('账号未注册，验证通过自动注册');
            } else {
              // 登录成功
              this.useToken().setToken(data.token);
              this.useToken().setImToken(data.imToken);
              this.useToken().setAccid(data.accid);
              Cookies.set('token', data.token);
              Cookies.set('accid', data.accid);
              Cookies.set('imToken', data.imToken);
            }
          })
          .catch(() => {});
      });
    },
    loginFn() {
      return new Promise((resolve, reject) => {
        this.$api
          .get_login(this.form)
          .then((data) => {
            resolve(data);
          })
          .catch(() => {
            reject();
          });
      });
    },
    /***
     *  注册：
     * 先登录，检测账号是否存在，存在则去登陆，不存在则注册
     */
    registerFn() {
      this.$api.get_register(this.form).then((data) => {
        // 注册成功
        this.useToken().setToken(data.token);
        this.useToken().setImToken(data.imToken);
        this.useToken().setAccid(data.accid);
        Cookies.set('token', data.token);
        Cookies.set('accid', data.accid);
        Cookies.set('imToken', data.imToken);
      });
    },
  },
};
</script>
<style>
.login-wrapper {
  width: 520px;
  height: 510px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #ebedf0;
  box-shadow: 0px 2px 6px rgba(23, 23, 26, 0.1);
  border-radius: 8px;
  padding: 74px 30px 80px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
}
.sub_title {
  text-align: center;
  color: #666666;
  font-size: 14px;
  margin-bottom: 30px;
  padding-top: 10px;
}
.button {
  border-radius: 2px !important;
}
</style>
