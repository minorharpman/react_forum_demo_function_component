
import db from "../lib/firebase";
function Post(props) {

    //https://stackoverflow.com/questions/62268617/how-to-delete-doc-in-firebase-with-react-application
    //https://firebase.google.com/docs/firestore/manage-data/delete-data
    //Cloud Firestore
    //https://console.firebase.google.com/u/0/project/react-forum-demo-42cd4/firestore/data~2Fposts~2F3KqPYmZ9WiGTNyew9RY1
    //https://stackoverflow.com/questions/47180076/how-to-delete-document-from-firestore-using-where-clause
    const handleSubmit = async (id) => {
        console.log("id: " + String(id));


        //https://firebase.google.com/docs/firestore/manage-data/delete-data#fields
        await db.collection("posts").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });



        //delete by content
        /*await db.collection("posts").where("title", "==", "xxxx").get()
               .then(querySnapshot => {
                   console.log("querySnapshot");
                   console.log(querySnapshot);
                   querySnapshot.forEach(function (doc) {
                       doc.ref.delete();
                   });
               });*/


    };


    return (
        <div className="row" >
            <div className="col" >post: </div>
            <div className="col"> {props.post.id}</div>
            <div className="col" > {props.post.title}</div>
            <div className="col" > {String(props.post.createdAt)}</div>
            <div className="col" > <button className="btn btn-danger" onClick={(e) => handleSubmit(props.post.id)} >Delete  </button></div>

        </div>
    );
};
export default Post;