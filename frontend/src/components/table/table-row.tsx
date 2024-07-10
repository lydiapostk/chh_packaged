export default function TableRow(
    { children, className, onClick }: 
    { children: React.ReactNode, className?: string, onClick? : ()=>void }) 
{
    return (
        <div className={`table-row ${className} hover:bg-gray-50`} onClick={onClick}>
            {children}
        </div>
    )
}