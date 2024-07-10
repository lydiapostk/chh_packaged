import { Switch } from '@headlessui/react'

interface FormToggleInputProp {
    enabled: boolean;
    setEnabled: (value: boolean) => void;
    description: string;
    enabledText?: string;
    disabledText?: string;
    disableChange?: boolean;
}

export default function FormToggleInput({enabled, setEnabled, description, enabledText, disabledText, disableChange}: FormToggleInputProp) {

    return (
        <div className="flex flex-row justify-between items-center gap-1 text-gray-700 text-sm font-medium"> 
            <div className="transition-all duration-75">
                {description}
            </div>

            <div className="flex flex-row items-center gap-1">
                <div className="transition-all duration-75">
                    {enabled ? (enabledText ? enabledText : "Yes") : (disabledText ? disabledText : "No")}
                </div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    disabled={disableChange}
                    className={`${enabled ? 'bg-amber-400' : 'bg-yellow-100'}
                    relative inline-flex h-[28px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
                        pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                </Switch>
            </div>
        </div>
    )
}
