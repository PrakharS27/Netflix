import './Content.css'
import RowData from '../../constants/URLS';
import Row from '../row/Row';
function Content (){
    
    return (
        <div className='content-wrapper'>
            {RowData.map((el)=>{
                return <Row title={el.title} url={el.url} />
            })}
        </div> 
    )
}

export default Content;


//