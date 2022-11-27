import type {
  isUserLogin,
  isSuccessfullLoginResponse,
  isErrorLoginResponse,
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
  console.log(response);
  return response;
}
