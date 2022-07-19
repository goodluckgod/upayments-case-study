import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Dropdown } from "../Components/Dropdown"
import { ProductCard, SkeletonProductCard } from "../Components/ProductCard"
import { Searchbar } from "../Components/Searchbar"

import { fetchProducts, ProductProps } from "../API/Producuts"
import { CategiresProps, fetchCategories } from '../API/Categories'
import { Link } from 'react-router-dom'


export const Home = () => {

    const products = useQuery(['products'], fetchProducts)
    const categories = useQuery(['categories'], fetchCategories)

    const [category, setCategory] = useState<string>("All")

    const [search, setSearch] = useState<string>("")

    return (
        <>
            <div
                className="px-16 py-12"
            >
                <div
                    className="flex items-center md:flex-row justify-between flex-col"
                >
                    <Searchbar placeholder="Search a Product" className="w-full md:w-2/5" onValueChange={setSearch}/>
                    
                    <Dropdown 
                        name="Categories" 
                        className="mt-4 w-full md:w-1/5 md:mt-0"
                        isLoading={categories.isLoading}
                        items={!categories.isLoading ? [{
                            label: 'All',
                            value: 'All',
                            onClick: () => setCategory("All"),
                        }, ...categories.data?.map((category: CategiresProps) => ({
                            label: category.name,
                            value: category.id,
                            onClick: () => setCategory(category.name),
                        }))]: []}
                    />
                </div>

                <div
                    className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-8 ${products.isLoading ? 'min-h-[340px]' : ''}`}
                >
                    {products.isLoading && (
                        <>
                            <SkeletonProductCard />
                            <SkeletonProductCard />
                            <SkeletonProductCard />
                            <SkeletonProductCard />
                            <SkeletonProductCard />
                            <SkeletonProductCard />
                        </>
                    )}
                    {products.data?.map((product: ProductProps) => {
                        return (category === "All" || product.category === category) 
                            && 
                        (!search || product.name.toLowerCase().includes(search.toLowerCase())) ? (
                            <ProductCard key={product.id} product={product} />
                        ) : null
                    })}
                </div>   
            </div>  
            <Link
                to="/add-product"
                className='fixed bottom-0 right-0 mr-4 mb-16 md:mb-24 w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]'
            >
                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 32 32">
                    <g id="plus_x5F_alt">
                        <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M24,18h-6v6h-4v-6H8v-4    h6V8h4v6h6V18z"/>
                    </g>
                </svg>
            </Link>      
        </>
    )
}