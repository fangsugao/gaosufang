import {observable , action} from 'mobx'

import {login} from '../../service/user'
import { LoginForm} from '../../types/index'


class Question {
    @observable public isLogin:boolean = false;

    @action public async  getQuestion(form: LoginForm): Promise<any>{
        const result: any = await this.getQuestion(form);
        
        return result.code;
}
}
export default Question
