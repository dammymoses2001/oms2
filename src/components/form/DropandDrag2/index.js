import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";

export const Basic2 = ({ setPicture }) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    useEffect(() => {
        setPicture(acceptedFiles);
    }, [acceptedFiles, setPicture]);
    acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className=" rounded bg-8 py-3 border22">
            <div className="bg-gray py-3">
                <div {...getRootProps({ className: "dropzone" })}>
                    <aside>
                        <div className="text-center mb-3">
                            <BsCloudUpload size={40} className="text-muted" />
                        </div>
                        <h5 className=" text-center fw-1 mb-3">
                            Drop your image here
                        </h5>
                        {/* <ul className="h6">{files}</ul> */}
                    </aside>

                    <input {...getInputProps()} />
                    <div className="text-center text-muted mb-0 small">
                        (Only *.jpeg and *.png images will be accepted)
                    </div>
                </div>
            </div>
        </section>
    );
};
