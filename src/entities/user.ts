export interface isUserLogin {
  email: string;
  password: string;
}

export interface isUserToken {
  token: string;
}

export interface isSuccessfullLoginResponse {
  body: isUserToken;
  status: number;
  message: string;
}

export type isErrorLoginResponse = Omit<isSuccessfullLoginResponse, "body">;
