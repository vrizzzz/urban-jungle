const Socialmedia = ({sname ,style}) => {
    return (
        <button className="bg-transparent border-0 d-none d-lg-inline-block">
            <i className={`fa-brands fa-${sname}`} style={style} />
        </button>
    )
}

export default Socialmedia
