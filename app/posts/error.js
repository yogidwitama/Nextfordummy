'use client'; //error component must be client componenet

import { useEffect } from "react";
const Error = ({ error, reset }) => {
    useEffect(() => {
        // log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (
        <div>
            <h2>Something when wrong 🤡 </h2>
            <button onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
            }>
                Try Again?
            </button>
        </div>
    )
}