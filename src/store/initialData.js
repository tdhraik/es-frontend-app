import { SCHOOLS, CLASSES } from "./dataTypes";

export const initialData = {
    modelData: {
        [SCHOOLS]: [],
        [CLASSES]: [
            {id: 1, name: "Zoom Shoes", classTeacher: "London", totalStudents: 100},
            {id: 2, name: "Cosy Gear", classTeacher: "New York", totalStudents: 200}]
    },
    stateDate: {
        editing: false,
        selectedId: -1,
        selectedType: SCHOOLS
    }
}