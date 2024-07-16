export default function Table({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-x-scroll max-w-full max-h-screen flex flex-col justify-items-center">
            <div className="table bg-white">
                {children}
            </div>
        </div>
    )
}