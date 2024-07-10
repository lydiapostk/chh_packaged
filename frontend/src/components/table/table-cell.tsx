import { ReactElement } from "react";

const COLOURS = {
    'teal': 'border-2 border-teal-400 bg-teal-200 rounded-md text-center',
    'cyan': 'border-2 border-cyan-400 bg-cyan-200 rounded-md text-center',
    'sky': 'border-2 border-sky-400 bg-sky-200 rounded-md text-center',
    'blue': 'border-2 border-blue-400 bg-blue-200 rounded-md text-center',
    'indigo': 'border-2 border-indigo-400 bg-indigo-200 rounded-md text-center',
    'violet': 'border-2 border-violet-400 bg-violet-200 rounded-md text-center',
    'purple': 'border-2 border-purple-400 bg-purple-200 rounded-md text-center',
    'fuchsia': 'border-2 border-fuchsia-400 bg-fuchsia-200 rounded-md text-center',
    'pink': 'border-2 border-pink-400 bg-pink-200 rounded-md text-center',
    'orange': 'border-2 border-orange-400 bg-orange-200 rounded-md text-center',
    'slate': 'border-2 border-slate-400 bg-slate-200 rounded-md text-center',
    'stone': 'border-2 border-stone-400 bg-stone-200 rounded-md text-center',
}

export default function TableCell({ content, colourIndex } : {content: ReactElement | string, colourIndex?: number}) {
    var borderCSS = colourIndex != undefined ? Object.values(COLOURS)[colourIndex] : undefined
    // console.log(borderCSS, colourIndex ? colourIndex % 12 : "")
    return (
        <div className={`table-cell px-6`}>
            {borderCSS && <div className={borderCSS}>
                {content}
            </div>}
            {!borderCSS && content}
        </div>
    )
}