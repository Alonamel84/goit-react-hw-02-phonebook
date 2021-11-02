import s from '../FilterName/FilterName.module.css'
const FilterName = ({ value, onChange }) => {
    return(
        <>
            <label className={ s.label}>
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