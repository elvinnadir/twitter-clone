import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        userName: 'codder123',
        fullName: './codder123',
        avatar: 'https://th.bing.com/th/id/OIP.Q5ckg0ok2IcchUdHM7lNEQHaLH?pid=ImgDet&rs=1'
    },
    accounts: [
        {
            id: 1,
            userName: 'codder123',
            fullName: './codder123',
            avatar: 'https://th.bing.com/th/id/OIP.Q5ckg0ok2IcchUdHM7lNEQHaLH?pid=ImgDet&rs=1'
        },
        {
            id: 2,
            userName: 'bella',
            fullName: './bella',
            avatar: 'https://th.bing.com/th/id/OIP.im5EDTZxA4kS9Kq1B863agHaHH?pid=ImgDet&rs=1'
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        }
    }
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;