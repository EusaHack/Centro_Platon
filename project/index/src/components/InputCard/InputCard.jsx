import './InputCard.css'


export function InputCard({ id, label, type = "text", placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="txt-reg">{label}</label>
      <input
        id={id}
        className="input-reg"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
