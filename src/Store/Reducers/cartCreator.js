import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../api';

const fetchCart = createAsyncThunk('Cart/fetchItems', async (payload, thunkApi) => {
    try{
        const response = await api.getCartItems();
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue('Failes to fetch. Please try again later');
    }
});

export default fetchCart;