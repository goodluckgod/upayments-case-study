import { api } from '../Config/Axios';
    
export interface CategiresProps {
    createdAt: string;
    name: string;
    id: number;
}

export const fetchCategories = async () => {
    const response = await api.get('/categories');
    return response.data;
};
    
