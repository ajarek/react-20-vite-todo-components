import './list.css'
import {Button} from '../Button/Button'
import {Input} from '../Input/Input'
export const List =(props)=>{
    const{onChange, checked, btnDelete,btnEdit,children, className, ...otherProps}=props
    return (
    <li
    className={className}
   
    {...otherProps}
    > 
    <div className="row">
     <Input
      checked={checked}
     type={'checkbox'}
      onChange={onChange}
     className={'checkbox'}
     id={children}
     />
        <label htmlFor={children}>{ children}</label>
        </div>
        <div className="row">
        <Button
       className={'btn-delete'}
       onClick={btnEdit}
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