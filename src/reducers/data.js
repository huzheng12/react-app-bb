import { BBASSET } from '../action/action_type.js'
const defaultState = {
    assetArr: [],
    list: []
}
export const count = (state = defaultState, action) => {
    switch (action.type) {
        case BBASSET:
            return { ...state, assetArr: action.asset_result, list: action.aymbol_result }
        default:
            return state;
    }
} 