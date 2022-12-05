import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5">
            <h4>Ooops!</h4>

            <p>
                Looks like this page does not exist
                <span role="img" aria-label="Face down">
                    😔
                </span>
            </p>
            <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-success btn-inline-block btn-lg gradient-custom-4 text-uppercase text-white"
                style={{
                    backgroundColor: "rgba(70, 60, 116, 1)",
                    border: "1px solid #463c74",
                    borderRadius: 50,
                    fontSize: 14,
                    padding: ".5rem 1rem"
                }}
            >
                Go Back
            </button>
        </div>
    );
};
