import {useEffect,useState} from 'react';
import './Row.css';
import axios from 'axios';
import Card from '../card/Card';

function Row(props){
    const [movies,setMovies] =useState([]);

    const fetchMovies=async ()=>{
        const response =await axios.get(props.url);
        setMovies(response.data.results);
    };
    useEffect(()=>{
        fetchMovies();
    },[]);
    return (
       <div className='row_wrapper'>
        <h2 className='row_title'>
            {props.title}
        </h2>
        <div className='row_card'>
        {
             movies.map((el)=>{
                return <Card title={el.title} poster={el.backdrop_path} id={el.id} />
            })
        }
        </div>
       </div>
    )
}

export default Row;