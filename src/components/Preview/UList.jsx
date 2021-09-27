
import LiGenerator from './LiGenerator'

const UList = (props) => {
    const style={
        listStylePosition: 'inside',listStylePosition: 'inside',margin:'0 auto',padding:'0', width:'100%',fontSize:'0.55rem'
    }
    return (
        <ul style={style}>
           < LiGenerator props={props} />
        </ul>
    )
}

export default UList
