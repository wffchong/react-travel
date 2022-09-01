import { RecommendProductsActionType } from '../actions/recommendProducts'
import {
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS
} from '../constants/recommendProducts'

interface RecommendProductsState {
    productList: any[]
    loading: boolean
    error: string | null
}

const defaultState: RecommendProductsState = {
    productList: [],
    loading: true,
    error: null
}

export const recommendProducts = (
    state = defaultState,
    action: RecommendProductsActionType
): RecommendProductsState => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return { ...state, loading: true, error: null }
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, productList: action.payload }
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
