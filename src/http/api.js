export default {
  queryTestApi: '/octokit/octokit.rb',

  // 公共模块
  login: 'login',
  // 获取全局字典项
  getGlobalDict: '', // todo

  // 测试
  getTest: '/getUserById',
  postTest: '/UpdateUser',
  putTest: '/put',
  deleteTest: '/deleteUserById',
  patchTest: '/patch',

  // java后台测试
  addUser: '/sys/status/users',
  queryUserById: '/sys/status/users/{userId}/test/{userName}',
  queryAllUser: '/sys/status/users/list',
  queryUser: '/sys/status/users/page',
  deleteUser: '/sys/status/users/{userId}',
  lockUser: 'sys/status/users/{userId}/lock',
  updateUser: '/sys/status/users/{userId}' // 更新用户信息
}
