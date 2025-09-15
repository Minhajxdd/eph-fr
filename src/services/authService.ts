import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/v1/auth",
  withCredentials: true,
});

export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
}

export const authService = {
  signup: (data: SignupRequest) => API.post("/signup", data),
};
