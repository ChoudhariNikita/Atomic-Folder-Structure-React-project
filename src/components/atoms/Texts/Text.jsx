import React from "react";

const Text = ({ level, children }) => {
    const Tag = level ? `h${level}` : 'p';
    return <Tag className="text">{children}</Tag>;
};

export default Text;
