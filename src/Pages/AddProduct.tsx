import { useState } from "react"

import { useMutation, useQuery } from "@tanstack/react-query";

import { CategiresProps, fetchCategories } from "../API/Categories"
import { Dropdown } from "../Components/Dropdown"
import { createProduct } from "../API/Producuts";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {

    const categories = useQuery(['categories'], fetchCategories)

    const navigate = useNavigate();

    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [avatar, setAvatar] = useState<string>("")
    const [category, setCategory] = useState<string>("")

    const [error, setError] = useState<string>("")

    const createProductMutation = useMutation(createProduct)


    return (
        <div className="px-8 sm:px-16 md:px-40 lg:px-80 py-12">
            {error && (
                <div className="p-4 mb-4 text-sm rounded-lg bg-red-200 text-red-800" role="alert">
                    <span className="font-medium">Error:</span> {error}
                </div>
            )}
            {createProductMutation.isLoading && (
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-200 text-gray-800" role="alert">
                    <span className="font-medium">Product Adding</span>
                </div>
            )}

            {createProductMutation.isSuccess && (
                <div className="p-4 mb-4 text-sm  rounded-lg bg-green-200 text-green-800" role="alert">
                    <span className="font-medium">Product Added</span>
                </div>
            )}

            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-white">Product Name</label>
                    <input 
                        type="text" 
                        id="product_name"
                        className="bg-zinc-900 border border-zinc-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="iPhone" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                    <textarea   
                        id="description"
                        cols={30}
                        className="bg-zinc-900 border border-zinc-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="Description" 
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-white">Image URL</label>
                    <input 
                        type="url" 
                        id="image_url"
                        className="bg-zinc-900 border border-zinc-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        placeholder="https://example.com/image.png" 
                        required
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="categories" className="block mb-2 text-sm font-medium text-white">Categories</label>
                    <Dropdown 
                        name="Categories" 
                        className="w-full"
                        isLoading={categories.isLoading}
                        items={!categories.isLoading ? categories.data?.map((category: CategiresProps) => ({
                            label: category.name,
                            value: category.id,
                            onClick: () => setCategory(category.name),
                        })): []}
                    />
                </div>
          
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-white">Price</label>
                    <input
                        type="number"
                        id="price"
                        className="bg-zinc-900 border border-zinc-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="$0.00"
                        required
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                </div>
            </div>
            <button 
                type="button"
                className="float-right focus:outline-none transition-all text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                onClick={() => {
                    if (name && description && price && avatar && category) {
                        createProductMutation.mutate({
                            name,
                            description,
                            price,
                            avatar,
                            category,
                        }, {
                            onError: (error: any) => setError(error.message),
                            onSuccess: () => {
                                setTimeout(() => {
                                    navigate("/")
                                    window.location.reload()
                                }, 1000)
                            }
                        });
                    } else {
                        console.log(name, description, price, avatar, category)
                        setError("Please fill all fields")
                    }
                }}
            >
                Add
            </button>
        </div>

    )

}