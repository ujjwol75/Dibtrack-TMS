const APIS = {
  // AUTH
  LOGIN: `/token/create/`,
  VERIFY: `/auth/jwt/verify/`,
  REFRESH: `/auth/jwt/refresh/`,
  CURRENT_USER_PROFILE: "/auth/users/me/",
  CURRENT_USER_CHANGE_PASSWORD: `/user/set_password/`,

  //Work Space 
  WORKSPACE:`/work-space/filter_work_space/`
};

export default APIS;
