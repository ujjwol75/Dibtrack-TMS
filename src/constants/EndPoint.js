const APIS = {
  // AUTH
  LOGIN: `/token/create/`,
  VERIFY: `/auth/jwt/verify/`,
  REFRESH: `/auth/jwt/refresh/`,
  CURRENT_USER_PROFILE: "/auth/users/me/",
  CURRENT_USER_CHANGE_PASSWORD: `/user/set_password/`,

  // TASKS
  TASK: `/task/`,    // FOR EDIT AND DELETE BOARD
  KANBAN_TASK: `/task/status-wise-task/`,   
  CREATE_BOARD: `/task/create-board/`,
  //Work Space 
  WORKSPACE: `/work-space/filter_work_space/`
};

export default APIS;
