

export const PrimaryButton = ({ children }) => {
    return <button className="bg-primary font-medium text-white px-4 py-2 rounded">{children}</button>
}
export const SecondaryButton = ({ children }) => {
    return <button className="bg-third md:text-lg text-xs  font-medium text-white px-4 py-2 rounded">{children}</button>
}