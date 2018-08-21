
import React from "react";
import ReactDOM from "react-dom";
import Grid from './components/Grid';

const Index = () => {
    return (
        <Grid>
            World!
        </Grid>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));
