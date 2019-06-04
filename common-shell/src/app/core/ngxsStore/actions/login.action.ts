import { Login } from '../models/login.model';


export class AddLogin {
    static readonly type = '[Login] Add'

    constructor(public payload: Login) {}
}

export class RemoveLogin {
    static readonly type = '[Login] Remove'

    constructor(public payload: string) {}
}