
import request from '../utils/request';

// 获取试题

export let Question = (params: object)=>{
    return request.post('/exam/questions', params);
} 