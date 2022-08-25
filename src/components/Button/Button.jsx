import './button.css'
export const Button =(props)=>{
    const{children, className, ...otherProps}=props
    return (
    <button
    className={className}
    {...otherProps}
    >
       { children}
    </button>
    )
}
export default Button