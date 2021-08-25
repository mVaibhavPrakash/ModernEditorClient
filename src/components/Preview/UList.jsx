
import liGenerator from '../../js/li'

const UList = (props) => {
    const style={
        listStylePosition: 'inside',listStylePosition: 'inside',margin:'0 auto',padding:'0', width:'100%',fontSize:'0.55rem'
    }
    return (
        <ul style={style}>
            {liGenerator(props)}
        </ul>
    )
}

export default UList
