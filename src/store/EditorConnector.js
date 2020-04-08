import { connect } from "react-redux";
import { SCHOOLS, CLASSES } from "./dataTypes";
import { saveAndEndEditing } from "./multiActionCreators";
import { withRouter } from "react-router-dom";

export const EditorConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData, ownProps) => {
        const mode = ownProps.match.params.mode;
        const id = Number(ownProps.match.params.id);
        return {
            editing: mode === "edit" || mode === "create",
            school: (storeData.modelData[SCHOOLS].find(s => s.id === id)) || {},
            clazz:(storeData.modelData[CLASSES].find(c => c.id === id)) || {}
            }
    }

    const mapDispatchToProps = {
        saveCallback: (data) => saveAndEndEditing(data, dataType)
    }

    const mergeProps = (dataProps, functionProps, ownProps) => {
        let routedDispatchers = {
            cancelCallback: () => ownProps.history.push(`/${dataType}`),
            saveCallback: (data) => {
                functionProps.saveCallback(data);
                ownProps.history.push(`/${dataType}`);
            }
        }
        return Object.assign({}, dataProps, routedDispatchers, ownProps);
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(presentationComponent));

}