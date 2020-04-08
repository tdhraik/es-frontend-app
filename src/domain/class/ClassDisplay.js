import React, { Component } from "react";
import { ClassEditor } from "./ClassEditor";
import { ClassTable } from "./ClassTable";
import { connect } from "react-redux";
import { startCreatingClass } from "../../store/stateActions";
import { CLASSES } from "../../store/dataTypes";
import { EditorConnector } from "../../store/EditorConnector";
import { TableConnector } from "../../store/TableConnector";

const ConnectedEditor = EditorConnector(CLASSES, ClassEditor);
const ConnectedTable = TableConnector(CLASSES, ClassTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.classes
        .find(item => item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createClass: startCreatingClass
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ClassDisplay = connectFunction(
    class extends Component {

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={ this.props.selected.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                                onClick={ this.props.createClass }>
                            Create Class
                        </button>
                    </div>
                </div>
            }
        }
})