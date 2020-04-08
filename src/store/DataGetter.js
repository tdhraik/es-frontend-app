import React, { Component } from "react";
import { SCHOOLS, CLASSES } from "./dataTypes";

export const DataGetter = (dataType, WrappedComponent) => {

    return class extends Component {

        render() {
            return <WrappedComponent { ...this.props } />
        }

        componentDidMount() {
            this.props.getData(SCHOOLS);
            if (dataType === CLASSES) {
                this.props.getData(CLASSES);
            }
        }
    }
}