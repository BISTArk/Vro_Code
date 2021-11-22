import { StayCurrentPortraitSharp } from '@material-ui/icons'
import React from 'react'
import TopBar from "../../components/TopBar/TopBar"

function PostPage(props) {
    async function fetchPost() {
        if (props.match.params.id === props.posts._id) {
            let response = await fetch(
                `http://localhost:3030/api/post/${props.match.params.id}`
            );
            let jso = await response.await();
                
        }
    }
    return (
        <div>
            
            <TopBar />
         

        </div>
    )
}

export default PostPage
