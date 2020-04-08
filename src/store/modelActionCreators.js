import { SCHOOLS, CLASSES } from "./dataTypes";
import { STORE, UPDATE, DELETE } from "./modelActionTypes";

let idCounter = 100;

export const saveSchool = (school) => {
    return createSaveEvent(SCHOOLS, school);
}

export const saveClass = (clazz) => {
    return createSaveEvent(CLASSES, clazz);
}

const createSaveEvent = (dataType, payload) => {

    if (!payload.id) {
        return (
            { type: STORE,
                dataType: dataType,
                payload: { ...payload, id: idCounter++ } }
        )
    } else {
        return (
            { type: UPDATE,
                dataType: dataType,
                payload: payload }
        )
    }
}

export const deleteSchool = (school) => ({
        type: DELETE,
        dataType: SCHOOLS,
        payload: school.id
})

export const deleteClass = (clazz) => ({
    type: DELETE, dataType: CLASSES, payload: clazz.id
})