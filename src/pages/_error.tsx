import React from 'react';
import Link from 'next/link';
import {NextPage} from 'next';

const Error: NextPage = () => {
    return (
        <>
            <p>
                This is an error page, it also has access to store: <code></code>
            </p>
            <nav>
                <Link href="/">Navigate to index</Link>
            </nav>
        </>
    );
};

export default Error;
