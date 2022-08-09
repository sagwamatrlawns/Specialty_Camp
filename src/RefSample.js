import React,{Component} from "react";

class RefSample extends Component{
    state={
        password:'',
        clicked:false,
        validated:false
    }

    handleChange=(e)=>{
        this.setState({
            password: e.target.value
        });
    }

    handleButton=()=>{
        this.setState({
            clicked:true,
            validated:this.state.password==='000'
        })
    }

    handleButtonClick=()=>{
        this.setState
    }

    render(){
        return(
            <div>
                <input 
                ref={(ref)=>this.input=ref}
                type="password"
                value
            </div>
        )
    }
}