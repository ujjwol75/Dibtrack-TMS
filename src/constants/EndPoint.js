const APIS = {
  // AUTH
  LOGIN: `/token/create/`,
  VERIFY: `/auth/jwt/verify/`,
  REFRESH: `/auth/jwt/refresh/`,
  CURRENT_USER_PROFILE: "/auth/users/me/",
  CURRENT_USER_CHANGE_PASSWORD: `/user/set_password/`,

  // TASKS
  TASK: `/task/`,
  KANBAN_TASK: `/task/status-wise-task/`,
  //Work Space 
  WORKSPACE:`/work-space/filter_work_space/`
};

export default APIS;
