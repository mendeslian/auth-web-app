import axios from "axios";

const url = import.meta.env.VITE_API_URL;

async function register(body) {
  try {
    const { data } = await axios.post(`${url}/auth/register`, body);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function login(email, password) {
  try {
    const { data } = await axios.post(`${url}/auth/login`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { register, login };
