const initialState = {
    data: {
        user:{}
    },
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_INFOS_USER":
            let dataInfos = state.data;
            dataInfos.user = action.data;
            return {
                ...state,
                data: dataInfos
            };

        case "EDIT_TOKEN_USER":
            let dataToken = state.data;
            dataToken.infosInstallateur.token = action.token;
            return {
                ...state,
                data: dataToken
            };
        
        default:
            return state;
    }
}
export default countReducer;
