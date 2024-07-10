import { ReactElement } from "react";

export default function TableHeaderCell({ content } : {content: ReactElement | string }) {
    return (
        <div className="table-cell align-bottom px-6">
            {content}
        </div>
    )
}