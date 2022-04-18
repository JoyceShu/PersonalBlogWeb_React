import "./post.css"

export default function Post() {
  const today = new Date();
  const todayDate  = today.getDay();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  
  return (
    <div className="post">
          <img
        className="postImg"
        src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/277654593_109782901693924_6977124200106073547_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=a-Uch3Iz-bMAX93E9fu&_nc_ht=scontent-sjc3-1.xx&oh=00_AT-5GqeyE1YaWR65qHYj3H5EQTt4ishOwfkcvcK7nNx0oQ&oe=6261EE1B"
        alt=""
      />
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">Photo</span>
            <span className="postCat">Posts</span>
            </div>
            <span className="postTitle">My Trip to San Francisco</span>
            <hr />
            <span className="postDate">{todayYear + "/" + todayMonth + "/" + todayDate}</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus corporis? Soluta praesentium ducimus dolorem labore optio corrupti sed. Tempora officia officiis nam incidunt dicta iure explicabo laudantium ipsum nihil.</p>
        </div>
  )
}
