import { ThunkAction } from 'redux-thunk'
import { RootStateType } from '../index'
import axios from 'axios'
import {
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    FETCH_RECOMMEND_PRODUCTS_FAIL
} from '../constants/recommendProducts'

interface RecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface RecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS
    payload: any
}

interface RecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
    payload: any
}

export const recommendProductStartAction = (): RecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const recommendProductSuccessAction = (data): RecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const recommendProductFailAction = (error): RecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}

export type RecommendProductsActionType =
    | RecommendProductStartAction
    | RecommendProductSuccessAction
    | RecommendProductFailAction

export type RootThunkAction = ThunkAction<void, RootStateType, unknown, RecommendProductsActionType>

export const getRecommendProducts = (): RootThunkAction => {
    return async dispatch => {
        dispatch(recommendProductStartAction())
        const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections')
        dispatch(recommendProductSuccessAction(data))
    }
}
