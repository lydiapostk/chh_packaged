type ButtonColours = 'grey' | 'blue' | 'yellow' | 'green' | 'red'

export const ButtonColourToCSS: Record<ButtonColours, string> = {
    'grey': 'bg-gray-400 bg-opacity-20 text-gray-700 hover:bg-opacity-30',
    'blue': 'bg-blue-100 text-blue-900 hover:bg-blue-200',
    'yellow': 'bg-yellow-300 text-yellow-700 hover:bg-yellow-200', 
    'green': 'bg-lime-300 text-lime-700 hover:bg-lime-200 focus:ring-0',
    'red': 'bg-red-300 text-red-700 hover:bg-red-200',
}

export interface ButtonProp {
    onClick: () => void,
    text?: string,
    colour: ButtonColours,
}