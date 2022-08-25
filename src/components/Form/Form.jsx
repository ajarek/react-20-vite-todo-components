import './form.css'
import {Button} from '../Button/Button'
import {Input} from '../Input/Input'
export const Form =(props)=>{
    const{ className, addNewTask, newTaskText, onChange, ...otherProps}=props
    return (
    <form
    className={className}
    onSubmit={addNewTask}
    {...otherProps}
    >  
      <Input
      className={'input'}
      type={"text"}
      placeholder={'what needs to be done?'}
      value={newTaskText}
      onChange={onChange}
      />
      
       <Button
      className={'btn-submit'}
      >
       &#43;
      </Button>
    </form>
    )
}
export default Form