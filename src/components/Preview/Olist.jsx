
import LiGenerator from './LiGenerator'

const Olist = (props) => {
    const style={
        listStylePosition: 'inside',listStylePosition: 'inside',margin:'0 auto',padding:'0', width:'100%',fontSize:'0.55rem'
    }
    return (
        <ol style={style}>
            <LiGenerator props={props}/>
        </ol>
    )
}

export default Olist
