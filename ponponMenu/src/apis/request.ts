import { API_URI } from "../constants";

function getToken() {
  const plexToken = localStorage.getItem("Auth_PlexToken");
  const email = localStorage.getItem("Auth_email");
  const role = localStorage.getItem("Auth_role");

  if (!plexToken || !email || !role) {
    throw new Error("User is not authenticated");
  }

  return `${email}:${plexToken}:${role}`;
}

export async function request<Type = any>(url: string, options?: RequestInit) {
  const res = await fetch(url, { ...options, mode: "cors" });
  return res.json() as Type;
}

export async function apiRequest<Type = any>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: RequestInit
) {
  return request<Type>(`${API_URI}/${url}`, {
    ...options,
    method,
    mode: "no-cors",
    headers: {
      PlexToken: getToken(),
      "Content-Type": "application/json",
    },
  });
}
