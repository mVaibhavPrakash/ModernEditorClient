
import liGenerator from '../../js/li'

const UList = (props) => {
    const style={
        listStylePosition: 'inside',textIndent: '5px',listStylePosition: 'inside',margin:'0 auto',padding:'0', width:'60vw',fontSize:'0.30rem',marginTop:'0.5rem'
    }
    return (
        <ul style={style}>
            {liGenerator(props)}
        </ul>
    )
}

export default UList
