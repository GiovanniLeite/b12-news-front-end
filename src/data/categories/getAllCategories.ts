import { ResponseData, CategoryData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';
import { API_CATEG_URL } from '../../config/app-config';

export const getAllCategories = async (): Promise<CategoryData[]> => {
  try {
    const response = await fetchJson<ResponseData>(`${API_CATEG_URL}?&sort[0]=id:asc`);

    if (response.error) {
      throw new Error(response.error.message);
    }

    if (!response.data || response.data.length === 0) {
      throw new Error('Nenhuma categoria encontrada');
    }

    return response.data as CategoryData[];
  } catch (error) {
    throw new Error(`Erro ao obter categorias: ${error.message}`);
  }
};
