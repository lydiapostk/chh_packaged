import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavigationTab({tabTitles}: {tabTitles: string[]}) {

    var numCols = tabTitles.length > 6 ? 6 : tabTitles.length

    function tabStyle (selected: boolean) {
        return classNames(
            'w-full rounded-lg py-2.5 px-2 text-sm font-semibold leading-5',
            'focus:outline-none',
            selected
            ? 'bg-gray-100 pointer-events-none'
            : 'opacity-50 hover:opacity-100 hover:bg-amber-400 hover:text-slate-100'
        )
    }

    return (
        <Tab.List className={`flex flex-row rounded-xl bg-gray-300 p-1 my-1`}>
            {tabTitles.map(
                title=>
                <Tab key={title} className={({ selected }) => tabStyle(selected)}>
                    {title}
                </Tab>
            )}
        </Tab.List>
    )
}