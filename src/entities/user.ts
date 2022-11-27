export interface isUserLogin {
  email: string;
  password: string;
}

export interface isUserName {
  firstName: string;
  lastName: string;
}

export interface isUserToken {
  token: string;
}

export type isErrorLoginResponse = Omit<isSuccessfullLoginResponse, "body">;
export interface isSuccessfullLoginResponse {
  body: isUserToken;
  status: number;
  message: string;
}

export interface isUserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export type isErrorProfileResponse = Omit<isSuccessfullProfileResponse, "body">;
export interface isSuccessfullProfileResponse {
  body: isUserProfile;
  status: number;
  message: string;
}
