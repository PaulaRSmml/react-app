import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = ( value ) => {

        if ( categories.includes(value) ) return;
        setCategories([value, ...categories]);
    };

    return (
        <>
            <h1>Expert App</h1>
            <AddCategory
                onNewCategory={ onAddCategory }
            />
            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    );
}