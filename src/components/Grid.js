import React, { Component } from 'react';
import TextView from './TextView';

const style = { backgroundColor: 'red' };

class Grid extends Component {
    
    onClickHandler(event){
    }

    render() {
        var me = this, props = me.props;

        return (
            <div style={style} onClick={me.onClickHandler} {...props}>
                <TextView>Hello {props.children}</TextView>
            </div>
        );
    }
}

export default Grid;
