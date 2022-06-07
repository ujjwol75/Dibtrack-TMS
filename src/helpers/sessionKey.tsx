//  set session key
export function setKey(key: string, value: string) {
  window.sessionStorage.setItem(key, value);
}

//  get value from session storage
export const getKey = (key: string) => {
  if (typeof window === "undefined") {
    return false;
  }
  if (sessionStorage.getItem(key)) {
    return sessionStorage.getItem(key);
  } else {
    return false;
  }
};

//  remove key from session storage
export const removeKey = (key: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(key);
  }
};


export const accessToken = () => {
  const authToken: any = JSON.parse(getKey('userAuth') || "");
  const { accessToken, refreshToken, permissions, user } = authToken;
  return accessToken
}

export const permissions = () => {
  const authToken: any = JSON.parse(getKey('userAuth') || "");
  const { accessToken, refreshToken, permissions, user } = authToken;
  return permissions
}