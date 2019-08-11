import React, {useEffect} from 'react';
import axios from 'axios'


export default class Home extends React.Component {


    fetchData = () => {
        axios.get('https://1xpy9fsm7h.execute-api.us-east-1.amazonaws.com/dev/api/v1/mylambda')
            .then(function (response) {
                // handle success
                alert(JSON.stringify(response))
                console.log(JSON.stringify(response));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
   
    
    render(){
        const style ={
            display:'flex',
            justifyContent:'center',
            alignItems:'center'

        }
        return (

          <div>  
                          <div className="container center">
                
                <button onClick={this.fetchData}>Click Me</button>
            </div>
                <div style={style}>
                   <div  >  
                         <div className={'container '}>
                             <h2 className={'teal-text'}>Hello World!</h2>
                             <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                         </p>
                         </div>
                    </div>
                </div>
          </div>  
        );
    }
}