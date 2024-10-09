
function Button({className,onClick,value,children}) {
    return (
        <button  className={`btn ${className}`} onClick={onClick} data-key={value}>
            {children}
        </button>
    )
}

export default Button
