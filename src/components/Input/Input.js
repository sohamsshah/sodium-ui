import "./Input.css";

function Input(props){
    const {size="medium" , variant = "standard", children, ...rest} = props;
    return (
    <div className="group">      
      <input className={`${size} ${variant}`} type="text" required />
      <span class="highlight"></span>
      <span className={`${size} bar`}></span>
      <label className={`${variant}-label`}>Name</label>
    </div>

    )
}

export default Input;