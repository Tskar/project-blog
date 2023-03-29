import './feedposts.css'
import {Link} from 'react-router-dom'

function FeedPosts () {

    return(
        <div className='feedposts'>
            <div className='feedposts-board'>
                <div className='feedposts-item'>
                    Feed Post 1
                </div>
                <div className='feedposts-item'>
                    Feed Post 2
                </div>
                <div className='feedposts-item'>
                    Feed Post 3
                </div>
                <div className='feedposts-item'>
                    Feed Post 4
                </div>
                <div className='feedposts-item'>
                    Feed Post 5
                </div>

            </div>
        </div>
    );
}

export default FeedPosts;
