import loadings from './loadingss.gif'

function loading({ over }) {
    return (
        over && <div className='text-center my-3'>
            <img src={loadings} alt="loading" style={{ width: '50px', marginLeft: "50%", transform: "translatex(-50%)" }} />
        </div>
    )
}

export default loading