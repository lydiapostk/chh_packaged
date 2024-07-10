interface HomepageNavItemProps {
    href : string;
    title: string;
    description: string
}

export default function HomepageNavItem(
    {
        href,
        title,
        description,
    }: HomepageNavItemProps
) {
    return (
        <a
          href={href}
          className="group border-transparent px-5 py-4 transition-colors hover:bg-amber-400 hover:text-slate-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`group-hover:opacity-100 m-0 max-w-[30ch] text-sm opacity-50`}>
            {description}
          </p>
        </a>
    )
}