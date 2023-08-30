import request from './request';

/**
 * 登录
 * @param {*} params
 */
async function get_login(params: any) {
  return request({
    url: 'user/login',
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
    url: 'user/register',
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
    url: 'user/logout',
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
    url: 'system/config',
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
