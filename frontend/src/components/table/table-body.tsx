export default function TableBody({ children }: { children: React.ReactNode }) {
    return (
        <div className="table-row-group border-spacing-y-1">
            {children}
        </div>
    )
}