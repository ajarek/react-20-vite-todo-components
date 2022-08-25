import './input.css'
export const Input =(props)=>{
    const{ className, ...otherProps}=props
    return (
    <input
    className={className}
    {...otherProps}
    />
    )
}
export default Input