

export const PrimaryButton = ({ children, onClick }) => {
    const handleClick = onClick ? onClick : () => { };
    return <button onClick={handleClick} className="bg-primary md:text-lg text-[12px] font-medium text-white px-4 py-2 rounded">{children}</button>
}
export const SecondaryButton = ({ children, onClick }) => {
    const handleClick = onClick ? onClick : () => { };
    return <button onClick={handleClick} className="bg-third md:text-lg text-[10px]  font-medium text-white px-4 py-2 rounded">{children}</button>
}