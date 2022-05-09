import React from "react";

interface Copyright {
    author: string
}

const Footer: React.FC<Copyright> = ({author}) => {
    return (
        <div>
            <p>&copy;2021-{new Date().getFullYear()} Copyright ~{author}</p>
        </div>
    )
}

export default Footer
