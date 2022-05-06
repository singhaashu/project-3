import React, { Component } from 'react'
import axios from "axios";
import Images from "../imageResult/Images";

export class Search extends Component {

    state={
        searchText:"",
        apiUrl:"https://pixabay.com/api/",
        apikey:`27061682-9cb3b68f76419e4c347451790`,
        images:[]
    }
    onTextChange=(e)=>{
this.setState({[e.target.name]:e.target.value},()=>{
    axios.get(`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText
    }&image_type=photo&safesearch=true`
    )
    .then(res=>this.setState({images:res.data.hits}))

.catch(err=>console.log(err));
});
   
    }
  render() {
      console.log(this.state.images);
    return (
      <div>
          <input type ='text' 
          style={{backgroundColor:"black",
          color:"white",
          marginLeft:570,
          marginTop:100,
          paddingTop:20,
          PaddingLeft:70,
          fontSize:30,
          borderTopStyle:"hidden",
          borderRightStyle:"hidden",
          borderLeftStyle:"hidden",
          outline:'none',
          borderBottomStyle:"groove",
          textAlign:'center'
        } }
        placeholder="search for images"
        name='searchText'
        value={this.state.searchText}
        onChange={this.onTextChange}
        />
  <br/>
   {this.state.images.length>0?(<Images images={this.state.images}/>):null}     
      </div>
    )
  }
}

export default Search