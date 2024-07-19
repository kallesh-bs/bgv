const initialstate = {
    employeeData: {},
};

export const bgvReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case "BGV_ALL_EMPLOYEE_DATA":
            return {
                ...state,
                employeeData: payload,
            };
        default:
            return state;
    }
};