
/**
 * User authentication
 * @returns
 */
export const useAuth = (): any => {
  const LOCAL_USER_KEY = JSON.parse(window.localStorage.getItem("LOCAL_USER_KEY")!);
  const isLogin = LOCAL_USER_KEY?.hasOwnProperty("access_token");

  return {
    isLogin,
    logout() {
      return new Promise((resolve,reject)=> {
        try {
          window.localStorage.clear();
          resolve(true);
        }
        catch {
          reject(false);
        }
      });
    }
  };
}
