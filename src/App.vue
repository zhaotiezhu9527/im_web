<template>
  <Login />
  <IMApp v-if="uikitInit && useToken().token" />
  <div class="home" v-else></div>
</template>
<script>
import IMApp from './components/IMApp/index.vue';
import Login from './components/Login.vue';
import { IMUIKit } from '../@xkit-yx/im-kit-ui';
import { app } from './main';
import Cookies from 'js-cookie';
import { useToken } from '@/store';

export default {
  name: 'App',
  components: {
    IMApp,
    Login,
  },
  data() {
    return {
      useToken,
      uikitInit: false,
    };
  },
  created() {
    // 后期改为路由权限
    this.useToken().setToken(Cookies.get('token'));
    this.useToken().setAccid(Cookies.get('accid'));
    this.useToken().setImToken(Cookies.get('imToken'));
  },
  mounted() {
    // this.$api.get_config().then((data) => {
    //   console.log(data);
    // });
    const initOptions = {
      // appkey: 'cc64ebc7c56f3fd8afe35e0d748aee0e', // 请填写你的appkey   测试
      appkey: '9dbf3424f278453ac7850161f5106737', // 请填写你的appkey   正式
      account: this.useToken().accid, // 请填写你的account
      token: this.useToken().imToken, // 请填写你的token
    };
    const localOptions = {
      // 添加好友模式，默认需要验证
      addFriendNeedVerify: true,
      // 群组被邀请模式，默认不需要验证
      teamBeInviteMode: 'noVerify', // 'noVerify' | 'needVerify',
      // 单聊消息是否显示已读未读 默认 false
      p2pMsgReceiptVisible: true,
      // 群聊消息是否显示已读未读 默认 false
      teamMsgReceiptVisible: true,
      // 是否需要@消息 默认 true
      needMention: true,
      // 是否显示在线离线状态 默认 true
      loginStateVisible: true,
      // 是否允许转让群主
      allowTransferTeamOwner: true,
    };
    app.config.globalProperties.$uikit = new IMUIKit({
      initOptions,
      singleton: true,
      sdkVersion: 1,
      localOptions,
    });
    if (app.config.globalProperties.$uikit) {
      this.uikitInit = true;
    }
  },
};
</script>
