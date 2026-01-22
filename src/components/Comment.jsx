import "./services.css"

const Comment = ({com ,cimg ,cname ,classes}) => {

    return (
        <div className={classes}>
            <div className="">
                <i className="fa-solid fa-quote-left fs-1 c-icon" style={{ color: '#88ad35' }} />
            </div>
            <p className="comment mt-3">
                {com}
            </p>
            <div className="c-profile">
                <div className="col-6 d-flex gap-3 align-items-baseline mt-3">
                    <div className="p-img">
                        <img src={cimg} alt="" className="rounded-circle" style={{width : "65px"}}/>
                    </div>
                    <p className="p-name d-flex justify-content-center align-content-center">{cname}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
