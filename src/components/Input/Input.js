import "./Input.css";

function Input(props){
    const {size="medium" , variant = "standard", children, ...rest} = props;
    return (
    <div className="group">      
      <input className={`${size}`} type="text" required />
      <span class="highlight"></span>
      <span className={`${size} bar`}></span>
      <label>Name</label>
    </div>

    )
}

export default Input;