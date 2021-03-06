
import db from "../lib/firebase";
function Post(props) {


    const handleSubmit = async (id) => {
        console.log("id: " + String(id));


        //https://firebase.google.com/docs/firestore/manage-data/delete-data#fields
         await db.collection("posts").doc(id).delete().then(function () {
             console.log("Document successfully deleted!");
             props.changeFunction();
         }).catch(function (error) {
             console.error("Error removing document: ", error);
         });

        //EdIT
        /*
        await db.collection("posts").doc(id).update({
            title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }).then(function () {
            console.log("Document successfully Updated!");
            props.changeFunction();
        }).catch(function (error) {
            console.error("Error : ", error);
        });
*/


    };


    return (
        <div>
            <div className="row " >
                <div className="col" >Post: </div>
                <div className="col"> {props.post.id}</div>
                <div className="col" > {props.post.title}</div>
                <div className="col" > {String(props.post.createdAt)}</div>
                <div className="col" > <button className="btn btn-danger" onClick={(e) => handleSubmit(props.post.id)} >Delete  </button></div>

            </div>


        </div>
    );
};
export default Post;