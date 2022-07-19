import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'

import { deleteProduct, fetchProduct, ProductProps } from "../API/Producuts"
import { useEffect } from 'react'



export const Product = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { isLoading, error, data } : {isLoading: boolean, error: any, data: ProductProps} = useQuery(['product'], () => fetchProduct(id || ''))

    const deleteProductMutation = useMutation(deleteProduct)

    return (
        <>
            {isLoading && (
                    <div
                        className="px-16 py-12 text-center text-white text-6xl"
                    >
                        <h1>Loading...</h1>
                    </div>
            ) || (error && (error.response.status === 500 || error.response.status === 404)) && (
                <div
                    className="px-16 py-12 text-center text-white text-6xl"
                >
                    <h1>404</h1>
                    <p className='text-5xl'>Product not found</p>
                </div>
            ) || (error) && (
                
                <div
                    className="px-16 py-12 text-center text-white text-6xl"
                >
                    <h1>404</h1>
                    <p className='text-5xl'>Unexpected error.</p>
                </div>
            )  || (
                <div
                    className="px-12 md:px-48 py-12 divide-y"
                >
                    {deleteProductMutation.isLoading &&  
                        <div
                            className="px-16 py-12 text-center text-white text-6xl"
                        >
                            <h1>Deleting...</h1>
                        </div>
                    }
                    {deleteProductMutation.isError && (
                        <div className="p-4 mb-4 text-sm rounded-lg bg-red-200 text-red-800" role="alert">
                            <span className="font-medium">Error:</span> {deleteProductMutation.error.message}
                        </div>    
                    )}
                    <div
                        className="p-2 flex items-center lg:flex-row flex-col min-w-full"
                    >
                        <img className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] aspect-square object-cover rounded-lg' alt={data?.name} src={data?.avatar}></img>
                        <div className='flex flex-col justify-between ml-0 mt-4 lg:mt-8 lg:ml-12 text-center md:text-left h-100 lg:h-[380px]'>
                            <p className='text-5xl text-white'>{data?.name}</p>
                            <div>
                                <p className='text-3xl text-white'>{data?.price}$</p>
                                <p className='text-2xl text-white'>Category: {data?.category}</p>
                                <p onClick={() => deleteProductMutation.mutate(data?.id, {
                                    onSuccess: () => {
                                        navigate('/')
                                        window.location.reload()    
                                    }
                                })} className='text-2xl text-white hover:underline'>Delete it</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-4 mt-4"
                    >
                        <p
                            className="text-white text-3xl font-bold"
                        >
                            Description
                        </p>
                        <p
                            className="text-white text-lg"
                        >
                            {data?.description}
                        </p>
                    </div>
                
                </div>    
            )}
             
        </>
    )
}