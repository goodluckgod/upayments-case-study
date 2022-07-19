import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface ItemProps {
    label: string;
    value: string;
    onClick: () => void;
}

interface DropdownProps {
    name: string;
    className?: string;
    items: ItemProps[];
    isLoading?: boolean;
}

export const Dropdown = ({
    name,
    className = "w-1/5",
    items,
    isLoading
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const [dropdownText, setDropdownText] = useState(name);

    return (
    
        <div
            className={`relative shadow-lg ${className}`}
        >
            <OutsideClickHandler
                onOutsideClick={() => setIsOpen(false)}
            >
                <button 
                    id="dropdownDefault" 
                    className={`
                        text-white w-full bg-gray-brand 
                        border
                        border-zinc-300
                        hover:bg-zinc-900 transition-all
                        focus:outline-none
                        font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center
                        z-10
                        ${isOpen ? "rounded-t-lg" : "rounded-lg"}
                    `}
                    type="button"
                    onClick={() => !isLoading && setIsOpen(!isOpen)}
                >
                        {isLoading ? "Loading" : dropdownText}
                        <svg className="ml-auto w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div id="dropdown" className={`absolute border border-t-0 border-zinc-300 w-full bg-gray-brand divide-y divide-zinc-100 shadow ${!isOpen && "hidden"} `}>
            
                    <ul className="py-1 text-sm text-white" aria-labelledby="dropdownDefault">
                        {items.map((item, i) => (
                            <li
                                key={i}
                            >
                                <p onClick={() => {
                                    setIsOpen(false);
                                    setDropdownText(item.label);
                                    item.onClick();
                                }} className="block py-2 hover:underline px-4 hover:bg-zinc-900 cursor-pointer">{item.label}</p>
                            </li>
                        ))} 
                    </ul>
                </div>
            </OutsideClickHandler>
        </div>
           
  
    );
};