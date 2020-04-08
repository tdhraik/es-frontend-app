import { SCHOOLS, CLASSES } from "./dataTypes";

export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";

export const startEditingSchool = (school) =>
    ({ type: STATE_START_EDITING, dataType: SCHOOLS, payload: school })

export const startEditingClass = (clazz) =>
    ({ type: STATE_START_EDITING, dataType: CLASSES, payload: clazz })

export const endEditing = () => ({ type: STATE_END_EDITING })

export const startCreatingSchool = () =>
    ({ type: STATE_START_CREATING, dataType: SCHOOLS })

export const startCreatingClass = () =>
    ({ type: STATE_START_CREATING, dataType: CLASSES })