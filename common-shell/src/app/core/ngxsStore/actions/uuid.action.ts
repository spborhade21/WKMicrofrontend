import { Uuid } from '../models/uuid.model';


export class AddUuid {
    static readonly type = '[Uuid] Add'

    constructor(public payload: Uuid) {}
}

export class RemoveUuid {
    static readonly type = '[Uuid] Remove'

    constructor(public payload: string) {}
}