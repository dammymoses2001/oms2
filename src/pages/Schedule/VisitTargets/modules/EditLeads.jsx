import React from 'react'
import { Input, SelectComp } from '../../../../components'
import { convertDate } from '../../../../utils'

export default function EditLeads({handleSubmitLead,FormInputValue,userData,errors,handleOnchange,isLoading}) {
  return (
    <form onSubmit={handleSubmitLead}>
    <div className="row gx-5 gy-3">
        {FormInputValue?.map((item, i) =>
            item?.type === "select" ? (
                <div className="col-lg-6" key={i}>
                    <SelectComp
                        labelclassname="h6 fw-medium"
                        name={item?.name}
                        value={userData[item?.name]}
                        error={errors[item?.name]}
                        onChange={handleOnchange}
                        className={'text-lowercase'}
                        disabled={item?.disabled}
                        label={item?.label}
                        options={[
                            "pending",
                            "completed",
                            
                        ]}
                    />
                </div>
            ) : (
                <div className="col-lg-6"  key={i}>
                    <Input.Input2
                        required
                        name={item?.name}
                        label={item?.label}
                        labelclassname="h6 fw-medium"
                        onChange={handleOnchange}
                        inputclassname="py-2 border px-2 text-black  "
                        value={userData[item?.name] ?item?.type ==="date"?  convertDate(userData[item?.name]):userData[item?.name]:userData[item?.name]}
                        error={errors[item?.name]}
                        isdisabled={true}
                        type={item?.type}
                    />
                </div>
            )
        )}

        <div className="mt-5 col-12 text-end">
            <button>
                {isLoading ? "Loading..." : "Update Visitation Status"}
            </button>
        </div>
    </div>
</form>
  )
}
