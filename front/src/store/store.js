import { createSlice, configureStore, combineReducers  } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key:'root',
    storage,
    version:1
}


const basic = {goods:[]}
const orderSlice = createSlice({
    name:'orderedGoods',
    initialState:basic,
    reducers:{
        addGood(state,action){
            state.goods.push(action.payload)
            console.log(action.payload)
        },
        removeGood(state,action){
            const filteredGoods = state.goods.filter(good=>{
                return action.payload._id !== good._id
            })
            state.goods = filteredGoods
        }
    }
})


const compBasic = {items:[]}
const compareSlice = createSlice({
    name:'comparedGoods',
    initialState:compBasic,
    reducers:{
        addToCompare(state,action){
            state.items.push(action.payload)
            console.log(action.payload)
        },
        removeFromCompare(state,action){
            const filteredGoods = state.items.filter(item=>{
                return action.payload._id !== item._id
            })
            console.log(filteredGoods)
            state.items = filteredGoods
        }
    }
})

const reducer = combineReducers({
    basketOrders:orderSlice.reducer, 
    comparison:compareSlice.reducer
})

const persistedReducer = persistReducer(persistConfig,reducer )

const store = configureStore({
    reducer: persistedReducer
})

export const orderActions = orderSlice.actions;
export const compareActions = compareSlice.actions;

export default store;