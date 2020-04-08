import React, { Component } from "react";
import { SchoolTableRow } from "./SchoolTableRow";

export class SchoolTable extends Component {

    render() {
        return (
            <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="5" className="bg-primary text-white text-center h4 p-2"> Schools </th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.schools.map(s =>
                            <SchoolTableRow
                                school={ s }
                                key={ s.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback }
                            />
                        )
                    }
                </tbody>
            </table>
        )
    }
}