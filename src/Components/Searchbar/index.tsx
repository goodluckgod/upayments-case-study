interface SearchbarProps {
    placeholder: string;
    className?: string;
    onValueChange: (value: string) => void;
}

export const Searchbar = ({
    placeholder,
    className,
    onValueChange
}: SearchbarProps) => {
    return (
        <div  className={`relative shadow-lg ${className}`}>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
                type="search" 
                id="search-bar" 
                className="block p-3 pl-10 w-full text-sm text-white bg-gray-brand rounded-lg border border-zinc-300" 
                placeholder={placeholder}
                onChange={(e) => onValueChange(e.target.value)}
                required 
            />
        </div>
    )
};