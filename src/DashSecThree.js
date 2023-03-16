import currencyImage from './image/currencyConvertIcon.jpg';
import React from 'react';
class DashSecThree extends React.Component{
    state={
        aed:'',
        convertTo:'',
        usdAmount:'',
        inrAmount:''
    }

    convertCurrency = ()=>{
        if(this.state.convertTo=="USD"){
            this.setState({
                usdAmount: this.state.aed/3.8
            });
        } else {
            this.setState({
                inrAmount: this.state.aed/22.6
            });
        }
    }
    
    render(){
        return(
            <div id="AyCard">
                <div>
                <h3>Foreign Exchange currency Converter</h3>
                <label for="currency">Enter Amount in AED</label>
                        <br/>
                        <input id="currency" name="currency" type="text"  placeholder="Amount" required onChange={(e)=>{this.setState({aed:e.target.value})}}/> 
                        <br/>
                        <br/><br/>
                        <label>To </label><br/>
                        <select onChange={(e)=>{this.setState({convertTo:e.target.value})}}>
                          <option selected disabled>Choose a currency</option>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                        </select>
                        <br/><br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                          </svg>
                        <br/><br/>
                       
                        <br/><br/><br/>
                        <button onClick={this.convertCurrency}>Convert</button>
                        <br/>
                        <br/>
                </div>
<div id="Camount">
                    <div id="currencyLeft">
                        <div>
                        <img src={currencyImage}/>
                        <h1 id="h2Currency">{this.state.convertTo=="USD"? this.state.usdAmount : this.state.inrAmount}</h1>
                        <br/><br/><br/>
                        
                        <br/>
                        <br/>
                        </div>
                    </div>
                    


                </div>

                </div>
      );
    }
}
export default DashSecThree;
    