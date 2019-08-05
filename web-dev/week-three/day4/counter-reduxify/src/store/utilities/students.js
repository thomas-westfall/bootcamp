//ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";

// ACTION CREATOR
const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}

// THUNK CREATOR;
export const fetchStudentsThunk = () => (dispatch) => {
    const arrayOfStudentsFromAPI = ["arrayofobjects here"]
    dispatch(fetchStudents(arrayOfStudentsFromAPI))
}

//REDUCER FUNCTION
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload
        case default:
            return state

    }
}