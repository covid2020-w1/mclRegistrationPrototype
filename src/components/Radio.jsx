export default function Radio({
    labelTitle, 
    hasLabelDescription, 
    labelDescription, 
    value,
    checked,
    onChange
}){
    return(
        <label className="radio-label">
            <input
                type="radio"
                name="accountType"
                value={value}
                checked={checked}
                onChange={e => onChange(e.target.value)}
            >
            </input>
            <div>
                <span className="label-title">{labelTitle}</span>
                {hasLabelDescription && <span className="label-description">{labelDescription}</span>}
            </div>
        </label>
    )
}