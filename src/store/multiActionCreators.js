import {SCHOOLS } from "./dataTypes";
import { saveSchool, saveClass } from "./modelActionCreators";
import { endEditing } from "./stateActions";

export const saveAndEndEditing = (data, dataType) =>
    [dataType === SCHOOLS ? saveSchool(data) : saveClass(data), endEditing()];