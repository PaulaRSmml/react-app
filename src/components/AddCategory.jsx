import React, { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const changeFunction = ( {target} ) =>{
        setInputValue(target.value);
    }

    const submitFunction = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );

    }

    return (
        <form onSubmit={ submitFunction }>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={ changeFunction }
            />
        </form>
    );
}



