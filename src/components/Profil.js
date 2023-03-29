import React,{component}from 'react'

export default class Profil extends component{
constructor(){
    super()
    this.state={
        interval:0,
        timer:0
    }
}
componentDidMount(){
    this.setState({
        interval:setInterval(()=>{
            this.setState({timer: this.state.timer +1})}
        
    })
}
componentWillUnmount(){
    clearInterval(this.state.interval)
}
render(){
    return (
        <div>
        <h1>Interval Time : {this.state.timer}</h1>
        </div>
    )
}
}


    
    