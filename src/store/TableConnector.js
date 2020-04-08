import { connect } from "react-redux";
import { deleteSchool, deleteClass } from "./modelActionCreators";
import { SCHOOLS, CLASSES } from "./dataTypes";
import { withRouter } from "react-router-dom";
import { getData } from "../rest/RestMiddleware";
import { DataGetter } from "./DataGetter";

export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData, ownProps) => {
        if (dataType === SCHOOLS) {
            return {
                schools: storeData.modelData[SCHOOLS]
            };
        } else {
            return {
                classes: storeData.modelData[CLASSES]
            };
        }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getData: (type) => dispatch(getData(type)),
            deleteCallback: dataType === SCHOOLS
                ? (...args) => dispatch(deleteSchool(...args))
                : (...args) => dispatch(deleteClass(...args))
        }
    }

    const mergeProps = (dataProps, functionProps, ownProps) => {
        let routedDispatchers = {
            editCallback: (target) => { ownProps.history.push(`/${dataType}/edit/${target.id}`); },
            deleteCallback: functionProps.deleteCallback,
            getData: functionProps.getData
        }
        return Object.assign({}, dataProps, routedDispatchers, ownProps);
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(DataGetter(dataType, presentationComponent)));
}