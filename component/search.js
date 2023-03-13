import React,{useState} from 'react';


function Search(){
  const {inputvalue, setInputValue} = React.useState('lets code')


  const handleChange = (Event) =>{
    setInputValue(Event.target.value)
  }


  //return{
   // <input type='text' onChange={handleChange} title='search'/>
 // }
}

export default Search