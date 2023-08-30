import { defineStore } from 'pinia';

// 获取表单次数，只请求一次
export const useToken = defineStore('token', {
  state: () => {
    return {
      token: '' as string,
      accid: '' as string,
      imToken: '' as string,
    };
  },
  actions: {
    setToken(data: string) {
      this.token = data;
    },
    setImToken(data: string) {
      this.imToken = data;
    },
    setAccid(data: string) {
      this.accid = data;
    },
  },
});
