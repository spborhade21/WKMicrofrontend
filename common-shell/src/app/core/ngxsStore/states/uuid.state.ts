import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Uuid } from '../models/uuid.model';
import { AddUuid, RemoveUuid } from '../actions/uuid.action';


export class UuidStateModel {
    uuids: Uuid[];
}


@State<UuidStateModel>({
    name: 'uuids',
    defaults: {
        uuids: []
    }
})

export class UuidState {

    
    @Selector()
    static getUuids(state: UuidStateModel) {
        return state.uuids
    }

    
    @Action(AddUuid)
    add({getState, patchState }: StateContext<UuidStateModel>, { payload }:AddUuid) {
        const state = getState();
        patchState({
            uuids:[...state.uuids, payload]
        })
    }

    @Action(RemoveUuid)
    remove({getState, patchState }: StateContext<UuidStateModel>, { payload }:RemoveUuid) {
        patchState({
            uuids: new Array<Uuid>()
        })
    }

}