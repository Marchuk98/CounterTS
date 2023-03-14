export type SettingsStateType = {
    startValue:number
    maxValue:number
}

export const initialState:SettingsStateType = {
    maxValue:5,
    startValue:0
}


export const settingsReducer = (state=initialState , action:ActionType) => {
    switch (action.type){
        case "SET-START-VALUE":{
            return {...state,startValue:action.startValue}
        }
        case "SET-MAX-VALUE":{
            return {...state,maxValue:action.maxValue}
        }
        case "SET-SETTINGS-TO-STORAGE":{
            return {...state,startValue: action.startValue, maxValue:action.maxValue}
        }
        default: return state
    }
}

export type ActionType = startValueACType | maxValueACType | setSettingsToStorageACType

export type startValueACType = ReturnType<typeof startValueAC>
export type maxValueACType = ReturnType<typeof maxValueAC>
export type setSettingsToStorageACType = ReturnType<typeof setSettingsToStorageAC>

export const startValueAC = (startValue: number) => {
    return{
        type:"SET-START-VALUE",
        startValue
    }as const
}

export const maxValueAC = (maxValue: number) => {
    return{
        type:"SET-MAX-VALUE",
        maxValue
    }as const
}

export const setSettingsToStorageAC = (startValue: number, maxValue: number) => {
    return{
        type:"SET-SETTINGS-TO-STORAGE",
        startValue,
        maxValue
    }as const
}