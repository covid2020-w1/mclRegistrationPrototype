export default function Radio({labelTitle, labelDescription}){
    return(
        <label>
        <input
            type="radio"
            name="accountType"
        >
        </input>
        <div>
            <span className="label-title">{labelTitle}</span>
            <span className="label-description">{labelDescription}</span>
        </div>
        </label>
    )
}