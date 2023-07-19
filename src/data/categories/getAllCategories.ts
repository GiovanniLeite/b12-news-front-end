import axios, { AxiosError } from 'axios';

import { API_CATEG_URL } from '../../config/appConfig';
import { CategoryData } from '../../types/posts/category';
import { ResponseData } from '../../types/posts/response';

export const getAllCategories = async (): Promise<CategoryData[]> => {
  try {
    const response = await axios.get<ResponseData>(`${API_CATEG_URL}?sort[0]=id:asc`);

    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error('Nenhuma categoria encontrada');
    }

    return response.data.data as CategoryData[];
  } catch (err) {
    const error = err as AxiosError<ResponseData>;
    const errorMessage = error.response?.data?.error?.message ?? error.message ?? 'Erro desconhecido';
    throw new Error(`Erro ao obter categorias: ${errorMessage}`);
  }
};
