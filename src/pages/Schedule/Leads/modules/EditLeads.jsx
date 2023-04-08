import React from 'react'
import { Input, SelectComp } from '../../../../components'
import { convertDate } from '../../../../utils'

export default function EditLeads({handleSubmitLead,FormInputValue,userData,errors,handleOnchange,isLoading}) {
  return (
    <form onSubmit={handleSubmitLead}>
    <div className="row gx-5 gy-3">
        {FormInputValue?.map((item, i) =>
            item?.type === "select" ? (
                <div className="col-lg-6">
                    <SelectComp
                        labelclassname="h6 fw-medium"
                        name={item?.name}
                        value={userData[item?.name]}
                        error={errors[item?.name]}
                        onChange={handleOnchange}
                        isDisabled={false}
                        label={item?.label}
                        options={[
                            "In Progress",
                            "New",
                            "Open",
                            "n"
                        ]}
                    />
                </div>
            ) : (
                <div className="col-lg-6">
                    <Input.Input2
                        required
                        name={item?.name}
                        label={item?.label}
                        labelclassname="h6 fw-medium"
                        onChange={handleOnchange}
                        inputclassname="py-2 border px-2 text-black  "
                        value={userData[item?.name] ?item?.type ==="date"?  convertDate(userData[item?.name]):userData[item?.name]:userData[item?.name]}
                        error={errors[item?.name]}
                        isDisabled={false}
                        type={item?.type}
                    />
                </div>
            )
        )}

        <div className="mt-5 col-12 text-end">
            <button>
                {isLoading ? "Loading..." : "Update Leads"}
            </button>
        </div>
    </div>
</form>
  )
}
