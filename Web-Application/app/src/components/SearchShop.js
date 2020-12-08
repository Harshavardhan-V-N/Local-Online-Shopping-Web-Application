import FetchData from './FetchData';
import './SearchShop.css'
const React=require('react');


export default class SearchShop extends React.Component{
    constructor()
    {
        super();
        this.state={
            fetchdata:false,
            url:"http://localhost:3500/shops/items",
            value:''
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.revertstate=this.revertstate.bind(this);
    }
    revertstate(){
        this.setState({fetchdata:false});
    }
    handleClick(event)
    {
        this.setState({ fetchdata:true });
    }
    handleChange(event){
        this.setState({value:event.target.value,url:"http://localhost:3500/"+event.target.value+"/items"});
    }
    render(){
        const name="item";
        console.log(this.state);
            return(
                <div id="searchshoppagewrapper">
                <div id="searchshopbarwrapper" class="md-form mt-0">
                <input class="form-control" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Want to know what's in that shop , just type in the name" aria-label="Search" />
                <button id="searchshopbutton" type="button" class="btn btn-primary" onClick={this.handleClick}>Search</button>
                </div>
                <FetchData fetch={this.state.fetchdata} url={this.state.url} revert={this.revertstate} displaykey={name} />
                </div>
            );
    }
}