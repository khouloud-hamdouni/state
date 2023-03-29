import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Profil from "./components/Profil";

export default class App extends Component {
    constructor(){
        super()
        this.state={
            shows:false
        }
        this.person ={
            fullName:"userName",
            bio:"hey there",
            profession:"web developer",
            picture:"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
        }

        
    }

    handleclick=()=>{
        this.setState ({shows: !this.state.shows})
        console.log(this.state.shows);
    }
    render(){
        return (
            <div style={{border:"1px solid red",display:"flex",flexdirection:"column",alignItems:"center",borderRadius:"50%"}}>
            {this.state.shows ?
            <div>
            <img src={this.person.picture}alt="profile"width="250px" height="250px"/>
            <h1>{this.person.fullName}</h1>
            <h4>{this.person.profession}</h4>
            <p>{this.person.bio}</p>
            </div>:<div></div>}
            <button onClick={this.handleClick}>click</button>
            {this.state.shows && <Profil/>}
        </div>
    )

            }
        }
        
    