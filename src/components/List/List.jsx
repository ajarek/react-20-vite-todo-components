import './list.css'
import {Button} from '../Button/Button'
import {Input} from '../Input/Input'
export const List =(props)=>{
    const{btnDelete,  children, className, ...otherProps}=props
    return (
    <li
    className={className}
    {...otherProps}
    > 
    <div className="row">
     <Input
     type={'checkbox'}
     className={'checkbox'}
     />
        { children}
        </div>
        <div className="row">
        <Button
       className={'btn-delete'}
     > 🖊️
     </Button>
     <Button
       className={'btn-delete'}
       onClick={btnDelete}
     > ❌
     </Button>
     </div>
    </li>
    )
}
export default List