interface FormInputFieldProp {
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function FormInputField({title, description, children}: FormInputFieldProp) {
    return (
        <div className="flex flex-col my-2 w-full">
            <label className="tracking-wide text-gray-700 text-m mb-2">
                {title}
                <p className="text-sm text-gray-600">{description}</p>
            </label>
            <div className="flex flex-col flex-nowrap relative w-auto gap-1">
                {children}
            </div>
        </div>
    )
}