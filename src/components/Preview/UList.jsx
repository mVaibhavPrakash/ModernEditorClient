
import LiGenerator from './LiGenerator'

const UList = (props) => {
    return (
        <ul className='editor-ul' style={style}>
           < LiGenerator props={props} />
        </ul>
    )
}

export default UList
