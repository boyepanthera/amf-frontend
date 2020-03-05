import React from 'react';

export const ErrFlash = (props) => {
    return (
        <div className="bg-red-100 w-3/5 mx-auto my-8 text-center rounded-md border border-red-300 text-red-500 text-sm">
            {props.err}
        </div>
    )
}
