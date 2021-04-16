//Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

//Create a react component
class App extends React.Component {
    state={email:'',password:''}
    handleEmailChange (e) {
        this.setState({email: e.target.value});
     }
     handlePasswordChange (e) {
        this.setState({password: e.target.value});
     }
     render () {
           return (
             <form>
               <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
               <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
               <button type="button" onClick={this.handleLogin.bind(this)}>Login</button>
             </form>);
     }
     handleLogin (){
         console.log("EMail: " + this.state.email);
         console.log("Password: " + this.state.password);
     }
}
  
ReactDom.render(
 <App />,
 document.querySelector('#root')

);