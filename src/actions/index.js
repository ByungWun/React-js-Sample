import * as types from './ActionTypes'; /* ActinoTypes에서 export한것을 한번에 가져와 types로 묶어준다*/

export function showInfo(info){
    return {
        type : types.SHOW_INFO,
        info : info /*어떤 info를 가져다줄지*/
    }
}

export function hideInfo(){
    return{
        type : types.HIDE_INFO
    }
}