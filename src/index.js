
import React from "react";
import ReactDOM from "react-dom";
import Grid from './components/Grid';
import FormAssinatura from "./components/FormAssinatura";

const Index = () => {
    return (
        <div className="app-container">
            <Grid>
                World!
            </Grid>

            <FormAssinatura />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));
