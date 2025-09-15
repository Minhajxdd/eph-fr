import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/auth";

export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
}

export const authService = {
  signup: (data: SignupRequest) =>
    axios.post(`${API_URL}/signup`, data),
};
