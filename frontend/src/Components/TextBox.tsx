
function TextBox({label, placeholder, onChange}:any) {
  return (
    <div className="flex flex-col ">
        <div className="pb-2">{label}</div>
        <input placeholder={placeholder} onChange={onChange} className="border h-9 w-72 px-2 py-1"></input>
    </div>
  )
}

export default TextBox