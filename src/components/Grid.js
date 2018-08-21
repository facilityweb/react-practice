import React from 'react';
import TextView from './TextView';

const style = { backgroundColor: 'red' };

const Grid = (props) => {
    return (
        <div style={style}>
            <TextView>Hello {props.children}</TextView>
        </div>
    );
};

export default Grid;