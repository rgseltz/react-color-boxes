import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor : '',
        width : '',
        height : ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (evt) => {
        evt.preventDefault();
        const {name, value} = evt.target
        setFormData(formData => ({...formData, [name] : value}))
        }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const {backgroundColor, width, height} = formData
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <div>
            <form 
                className="NewBoxForm"
                onSubmit={handleSubmit}
                >
                <label 
                    htmlFor="backgroundColor"
                    className="NewBoxForm-label"
                    >Color
                </label>
                <input
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />

                <label 
                    htmlFor="width"
                    className="NewBoxForm-label"
                    >Width
                </label>
                <input
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />

                <label 
                    htmlFor="height"
                    className="NewBoxForm-label"
                    >Height
                </label>
                <input 
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;