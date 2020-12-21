
import React, { useState } from "react";
import db from "../lib/firebase";

function AddPost() {

    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        const date = new Date();
        await db.collection("posts").add({
            title,
            upVotesCount: 0,
            downVotesCount: 0,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString(),
        });

        setTitle("");
    };
    return (

        <div className="row  mt-4 mb-4">
            <div className="col-md-2">
                Add post:
            </div>
            <div className="col-md-6" >
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>
            <div className="col-md-2" ></div>
            <button className="btn btn-primary"
                onClick={handleSubmit}
            >
                Save
                  </button>
        </div>


    );
};
export default AddPost;