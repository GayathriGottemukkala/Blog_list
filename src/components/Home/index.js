import './index.css'

import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <div className="home-container">
      <UserInfo />
      <BlogList />
    </div>
  </div>
)

export default Home
