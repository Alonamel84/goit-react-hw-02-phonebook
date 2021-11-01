// import { Children } from "react";

const FilterName = ({ value, onChange }) => {
    console.log(onChange)
    return(
        <>
    <label>
          Find contacts by name
                <input name='filter'
            type="text"
            placeholder="Enter name"
            value={value}
             onChange={onChange}
                    
          />
    </label >
         
   </>
    )
};
export default FilterName;