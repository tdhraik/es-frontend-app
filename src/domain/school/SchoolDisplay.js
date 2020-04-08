import React, { Component } from "react";
import { SchoolTable } from "./SchoolTable";
import { SchoolEditor } from "./SchoolEditor";
import { connect } from "react-redux";
import { EditorConnector } from "../../store/EditorConnector";
import { SCHOOLS } from "../../store/dataTypes";
import { TableConnector } from "../../store/TableConnector";
import { startCreatingSchool } from "../../store/stateActions";


const ConnectedEditor = EditorConnector(SCHOOLS, SchoolEditor);
const ConnectedTable = TableConnector(SCHOOLS, SchoolTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.schools
        .find(item =>  item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createSchool: startCreatingSchool
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const SchoolDisplay = connectFunction(
    class extends Component {

        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={ this.props.selected.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                                onClick={ this.props.createSchool }>
                            Create School
                        </button>
                    </div>
                </div>
            }
        }
    }
)
