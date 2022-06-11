
import LiGenerator from './LiGenerator'

const Olist = (props) => {
    const style={
        listStylePosition: 'inside',
        margin:'0 auto',
        padding:'0', 
        width:'100%',
        fontSize:'0.55rem',
        marginTop:'0.7rem',
        marginBottom:'0.7rem'
    }
    return (
        <ol style={style}>
            <LiGenerator props={props} />
        </ol>
    )
}

export default Olist
