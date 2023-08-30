import request from './request';

/**
 * 登录
 * @param {*} params
 */
async function get_login(params: any) {
  return request({
    url: 'im-qtapi-test/user/login',
    method: 'post',
    data: params,
  });
}

/**
 * 注册
 * @param {*} params
 */
async function get_register(params: any) {
  return request({
    url: 'im-qtapi-test/user/register',
    method: 'post',
    data: params,
  });
}

/**
 * 退出登录
 * @param {*} params
 */
async function get_logout(params: any) {
  return request({
    url: 'im-qtapi-test/user/logout',
    method: 'post',
    data: params,
  });
}

/**
 * 系统
 * @param {*} params
 */
async function get_config(params: any) {
  return request({
    url: 'im-qtapi-test/system/config',
    method: 'get',
    params: params,
  });
}

export default {
  get_register,
  get_login,
  get_logout,
  get_config,
};
