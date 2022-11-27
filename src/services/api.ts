import type {
  isUserLogin,
  isUserName,
  isSuccessfullLoginResponse,
  isErrorLoginResponse,
  isSuccessfullProfileResponse,
  isErrorProfileResponse,
} from "../entities/user";

const BASE_URL = "http://localhost:3001/api/V1";

export async function connectUser(
  payload: isUserLogin
): Promise<isErrorLoginResponse | isSuccessfullLoginResponse> {
  const request = await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const response = await request.json();
  return response;
}

export async function getUserProfile(
  token: string
): Promise<isErrorProfileResponse | isSuccessfullProfileResponse> {
  const request = await fetch(`${BASE_URL}/user/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  });
  const response = await request.json();
  return response;
}

export async function updateUserProfile(
  payload: isUserName,
  token: string
): Promise<isErrorProfileResponse | isSuccessfullProfileResponse> {
  const request = await fetch(`${BASE_URL}/user/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const response = await request.json();
  return response;
}
