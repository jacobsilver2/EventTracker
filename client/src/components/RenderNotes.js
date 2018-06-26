import React from 'react';

const RenderNotes = notes => {
    if (notes)
        return (<p style={{ fontWeight: 300, lineHeight: 1.45 }}>{notes}</p>);
    return null
};

export default RenderNotes;