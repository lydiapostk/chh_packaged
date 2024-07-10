import { Switch } from "@headlessui/react";

interface ToggleButtonProp {
    enabled: boolean;
    setEnabled: (value: boolean) => void;
    enabledText?: string;
    disabledText?: string;
}

export default function ToggleButton({enabled, setEnabled, enabledText, disabledText}: ToggleButtonProp) {
    return (
        <div className="flex flex-row items-center gap-1">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-amber-400' : 'bg-yellow-100'}
                relative inline-flex h-[28px] w-[51px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
                    pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out`}
                />
            </Switch>
            <div className="transition-all duration-1000 ease-in-out">
                {enabled ? enabledText : disabledText}
            </div>
        </div>
    )
}