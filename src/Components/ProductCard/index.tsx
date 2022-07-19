import { Link } from "react-router-dom";
import { ProductProps } from "../../API/Producuts";


interface ProductCardProps {
    product: ProductProps;
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <Link
            to={`/product/${product.id}`}
            className="my-4"
        >
            <div className="m-2 h-full rounded-lg border border-zinc-200 bg-zinc-900 cursor-pointer shadow-lg">
                <img className="rounded-lg aspect-square object-cover min-w-full" src={product.avatar} alt="" />
                <div className="p-5">
                    <div 
                        className="flex flex-col md:flex-row text-md md:text-lg tracking-tight text-white"
                    >
                        <p>{product.name}</p>
                        <span className="ml-0 md:ml-auto">{product.price}$</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const SkeletonProductCard = () => {
    return (
        <div role="status" className="m-2 rounded-lg border border-zinc-200 bg-zinc-900 shadow-lg">
            <div className="flex rounded-lg justify-center items-center mb-4 aspect-square bg-zinc-700">
                <svg className="w-12 h-12 text-zinc-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div 
                className="flex flex-col justify-around md:flex-row text-md md:text-lg tracking-tight text-white p-2"
            >
                <div className="h-2.5 rounded-full bg-zinc-700 w-2/5 mb-4"></div>
                <div className="h-2.5 rounded-full bg-zinc-700 w-1/5 mb-4"></div>
            </div>

  
        </div>
    )
}