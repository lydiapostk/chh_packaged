'use client'
import DSAISignature from "@/components/navigation/dsai-signature"
import NavBar from "@/components/navigation/nav-bar"
import NavItem from "@/components/navigation/nav-item";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col justify-start justify-items-start">
            <div className="bg-gray-200 max-h-fit items-center p-4 lg:px-24 lg:pb-0">
                <NavBar title="CHH Caseworker Allocation">
                    <NavItem href="/allocations/crs" title="CRS" />
                    <NavItem href="/allocations/settings" title="Configure Settings" />
                    <NavItem href="/allocations/generate" title="Generate Allocation" />
                </NavBar>
            </div>
            <div className="p-4 lg:px-24"> 
                {children}
            </div>
            <footer className="sticky p-2 min-w-max lg:hidden">
                <DSAISignature />
            </footer>
        </div>
  )
}
