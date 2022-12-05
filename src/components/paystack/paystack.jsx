/* eslint-disable sort-keys */
import * as React from "react";
import { PaystackButton } from "react-paystack";


export const  Paystack = ()=> {
    const auth = {
        email: "foo@bar.com",
        username: "foo",
        contact: "foo@bar.com"
    };
    const amount = 10;
    const publicKey = "foobar";

    const componentProps = {
        email: auth.email,
        amount,
        metadata: {
            userName: auth.username,
            phone: auth.contact,
            custom_field: [{ foo: "bar" }]
        },
        publicKey,
        text: "Continue",
        onSuccess: () => {
            // console.log(e);
        },
        onClose: () => {
            // alert("Wait! You need this oil, don't go!!!!");
        }
    };

    return (
        <div className="App">
            <PaystackButton   className="btn btn-outline-warning text-uppercase" {...componentProps} />
        </div>
    );
};
