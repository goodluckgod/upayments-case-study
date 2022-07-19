import { api } from '../Config/Axios';
    
export interface ProductProps {
    createdAt: number;
    avatar: string;
    name: string;
    developerEmail: string;
    id: number;
    price: number;
    category: string;
    description: string;
}

//Special interface for create product props.
export interface CreateProductProps {
    avatar: string;
    name: string;
    developerEmail: string;
    price: number;
    category: string;
    description: string;
}

export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

export const fetchProduct = async (id: string) => {
    //Replace id with query id.
    const response = await api.get('/products/<id>'.replace('<id>', id));
    return response.data;
};

export const createProduct = async (product: CreateProductProps) => {
    return api.post('/products', product);
}

export const deleteProduct = (id: string) => {
    //Replace id with query id.
    return api.delete('/products/<id>'.replace('<id>', id));
};
    
