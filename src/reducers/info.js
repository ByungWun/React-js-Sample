import * as types from '../actions/ActionTypes';

const initialState ={ //스토어에 저장할 데이터의 디폴트값
    name : "user",
    mobile : "000-0000-0000",
    company: {
        name: "ese",
        ceo : "park"
    }
}

export default function info (state, action) {//스토어에 받은 액션과 데이터 두가지 처리
    console.log(state, action);
    if(typeof state === 'undefined'){
        return initialState
    }
    switch(action.type){ // 실제적으로 호출될 로직
        case types.SHOW_INFO:
            return {...state, name : action.info.name, mobile : action.info.mobile} //본인이 갖고 있던 데이터를 제외한 다른 것들은 모두 리턴 (es6 전개연산자)
        case types.HIDE_INFO:
            return {...state, name : "", mobile : ""}
        default:
            return state;

    }
}