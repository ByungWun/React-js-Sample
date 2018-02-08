import React, {Component} from 'react';
import {connect } from 'react-redux'; 
//connect는 function을 리턴해준다. 그리고 function에다가 내가 생성한 component를 매개변수로 준다
//바인딩 해줄 때 쓰는 것

class Display extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.mobile}</h1>
            </div>
        )
    }
}

const mapStateToProps = (_data) => {
    return{
        name : _data.info.name,
        mobile : _data.info.mobile
    }
}
export default connect(mapStateToProps, null)(Display);

