
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

        <div>


            <div>

                <div>Post title</div>
                <input
                    type="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

            </div>



            <button className="btn btn-primary"
                onClick={handleSubmit}
            >
                Save
                  </button>




        </div>

    );
};
export default AddPost;