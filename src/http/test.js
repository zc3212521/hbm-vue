import http from '@/base/http'
import api from './api'

const getTest = (params, urlParams) => {
  return http.get(api.getTest, params, urlParams)
}

const postTest = (params, urlParams) => {
  return http.post(api.postTest, params, urlParams)
}

const putTest = (params, urlParams) => {
  return http.put(api.putTest, params, urlParams)
}

const patchTest = (params, urlParams) => {
  return http.patch(api.patchTest, params, urlParams)
}

const deleteTest = (params, urlParams) => {
  return http.delete(api.deleteTest, params, urlParams)
}

const addUserTest = (params, urlParams) => {
  return http.post(api.addUser, params, urlParams)
}

const getUserByIdTest = (params, urlParams) => {
  return http.get(api.queryUserById, params, urlParams)
}

const getAllUserTest = (params, urlParams) => {
  return http.get(api.queryAllUser, params, urlParams)
}

const updateUser = (params, urlParams) => {
  return http.post(api.updateUser, params, urlParams)
}

const lockUserTest = (params, urlParams) => {
  return http.put(api.lockUser, params, urlParams)
}

export {
  getTest,
  postTest,
  putTest,
  deleteTest,
  patchTest,
  addUserTest,
  getUserByIdTest,
  getAllUserTest,
  updateUser,
  lockUserTest
}
