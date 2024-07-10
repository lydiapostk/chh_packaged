import { usePathname } from "next/navigation";

interface NavItemProps {
    href : string;
    title: string;
}

export default function NavItem(
    {
        href,
        title,
    }: NavItemProps
) {
    const pathname = usePathname()

    return (
        <a
          href={href}
          className={`${pathname == href ? "bg-gray-100 pointer-events-none" : ""} min-h-fit min-w-full self-stretch text-left grid content-center border-transparent transition-colors hover:bg-amber-400 hover:text-slate-100`}
        >
          <h2 className={`text-lg font-semibold px-6 py-4`}>
            {title}{' '}
          </h2>
        </a>
    )
}