const Button = ({label, onClick, type = 'button' }) => {
    <button onClick={onClick} type={type} className="btn">
        {label}        
    </button>
}

export default Button