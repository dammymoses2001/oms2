import React from 'react'
import { Form } from 'react-bootstrap'

export const  SelectComp =({className,selectOption,options=[],error,input,label,labelclassname,required,...props})=> {
  return (
    <div>
       {label && (
                <label
                    className={`form-label ${labelclassname}`}
                   
                > 
                    {label}{required && <span className="text-danger">*</span>}
                </label>
            )}
        <Form.Select aria-label="Default select example" className={className} {...props}>
  <option className='text-4'>
    {selectOption}
  </option>
  {options.map((item,index)=>
    <option value={input?item[input]:item} key={index}>{input?item[input]:item}</option>
  )}

</Form.Select>
{error && (
                <p
                    className="font-helvetica small px-3 mt-2 "
                    style={{ color: "red", fontWeight: 500 }}
                >
                    {error}
                </p>
            )}
    </div>
  )
}
