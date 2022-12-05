import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";

function Basic({ setPicture }) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    useEffect(() => {
        setPicture(acceptedFiles);
    }, [acceptedFiles, setPicture]);

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="">
            <div className="bg-gray py-3">
                <div {...getRootProps({ className: "dropzone" })}>
                    <aside>
                        <div className="text-center">
                            <MdCloudUpload size={60} className="text-muted" />
                        </div>
                        <h6 className="text-muted text-center">Drag & Drop</h6>
                        <ul className="h6">{files}</ul>
                    </aside>

                    <input {...getInputProps()} />
                    <p className="text-center text-muted mb-0">
                        your files or <i className="h6 text-primary">browse</i>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Basic;
