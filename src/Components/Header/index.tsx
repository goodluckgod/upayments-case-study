export const Header = () => {
    return (
        <div
            className="bg-gray-brand text-white p-4 px-12 flex flex-row items-center justify-between shadow-lg rounded-b"
        >
            <a
                className="font-brand text-2xl font-bold text-left"
                href="/"
            >
                uPayments <span className="font-sans font-thin">Store</span>
            </a>

            <p
                className="text-2xl text-right font-sans hover:text-sky-400 transition-all cursor-pointer"
            >
                Register
            </p>
        </div>
    )
}