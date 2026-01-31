import {useState} from 'react'

function LikeButton() {

    const [Liked, SetLiked] = useState(false)


    return (
        <div> 
            <button onClick={()=> SetLiked(!Liked)}>
                {Liked?"❤️ Liked":"🤍 Like"}
            </button>
             
        </div>
    )
}

export default LikeButton
