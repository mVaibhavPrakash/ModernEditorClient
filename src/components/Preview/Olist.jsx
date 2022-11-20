
import LiGenerator from './LiGenerator'

const Olist = (props) => {
    return (
        <ol className='editor-ol' style={style}>
            <LiGenerator props={props} />
        </ol>
    )
}

export default Olist
