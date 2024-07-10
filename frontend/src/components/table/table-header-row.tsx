export default function TableHeaderRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="sticky z-20 top-0 table-header-group font-semibold bg-gray-50">
            <div className="table-row">
                {children}
            </div>
        </div>
    )
}