import './home.css';

import SideFeed from "../../SideFeed/SideFeed";
import FeedPosts from "../../FeedPosts/FeedPosts";


function Home() {
  return (
    <div className="home">
      <SideFeed />
      <FeedPosts />
    </div>

  );
}

export default Home;
