import React, {useEffect, useState} from "react";
const Comments = ((postId)) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postsId/")
        .then(response => response.json())
            .then(data => setComments(data))

        }, [postId]);
    }
    
    return (
       <div>

                 <h1>Komentari</h1>
                 {comments.map((comment ) => (
                    <div key ={coment.id} clasName="mb-3">
                    <h5>{coment.name}</h5>
                    <p>{coment.body}</p>
                    <small>{coment.email}</small>
                    </div>
                 ))};

         </div> 
    ); 
      
      export default Comments;
         
               






