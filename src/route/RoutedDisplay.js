import React, { Component } from "react";
import { SchoolTable } from "../domain/school/SchoolTable";
import { SchoolEditor } from "../domain/school/SchoolEditor";
import { EditorConnector } from "../store/EditorConnector";
import { SCHOOLS } from "../store/dataTypes";
import { TableConnector } from "../store/TableConnector";
import { Link } from "react-router-dom";
import { ClassEditor } from "../domain/class/ClassEditor";
import { ClassTable } from "../domain/class/ClassTable";

export const RoutedDisplay = (dataType) => {

    const ConnectedEditor = EditorConnector(dataType, dataType === SCHOOLS ? SchoolEditor: ClassEditor);
    const ConnectedTable = TableConnector(dataType, dataType === SCHOOLS ? SchoolTable : ClassTable);

    return class extends Component {

        render() {
            const modeParam = this.props.match.params.mode;
            if (modeParam === "edit" || modeParam === "create") {
                return (
                    <ConnectedEditor key={ this.props.match.params.id || -1 } />
                )
            } else {
                return (
                    <div className="m-2">
                        <ConnectedTable />
                        <div className="text-center">
                            <Link to={`/${dataType}/create`} className="btn btn-primary m-1"> Create </Link>
                        </div>
                    </div>
                )
            }
        }
    }
}