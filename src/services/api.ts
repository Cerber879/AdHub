import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Функция для входа в систему
export const login = async (login: string, password: string) => {
  try {
    const response = await api.post('/login', { login, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для регистрации
export const register = async (login: string, password: string, email: string) => {
  try {
    const response = await api.post('/register', { login, password, email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для создания объявления
export const createAdvertisement = async (advertisement: any) => {
  try {
    const response = await api.post('/advertisements', advertisement);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для получения всех объявлений
export const getAdvertisements = async () => {
  try {
    const response = await api.get('/advertisements');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для получения категорий
export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для отправки сообщения в чат
export const sendMessage = async (message: any) => {
  try {
    const response = await api.post('/messages', message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Функция для получения сообщений из чата
export const getMessages = async (chatId: string) => {
  try {
    const response = await api.get(`/messages/${chatId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Добавьте другие функции по мере необходимости
