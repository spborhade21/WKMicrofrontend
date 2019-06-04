import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login } from '../models/login.model';
import { AddLogin, RemoveLogin } from '../actions/login.action';


export class LoginStateModel {
    logins: Login[];
}


@State<LoginStateModel>({
    name: 'logins',
    defaults: {
        logins: []
    }
})

export class LoginState {

    
    @Selector()
    static getLogins(state: LoginStateModel) {
        return state.logins
    }

    
    @Action(AddLogin)
    add({getState, patchState }: StateContext<LoginStateModel>, { payload }:AddLogin) {
        const state = getState();
        patchState({
            logins:[...state.logins, payload]
        })
    }

    @Action(RemoveLogin)
    remove({getState, patchState }: StateContext<LoginStateModel>, { payload }:RemoveLogin) {
        patchState({
            logins: new Array<Login>()//getState().logins.filter(a => a.name != payload)
        })
    }

}