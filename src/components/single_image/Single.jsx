import './single.css';

export default function Single({imgs, handleClick, getModalData}) {
    const name = imgs.user.name  
    const username = imgs.user.username
    const thumb = imgs.urls.thumb
    const likes = imgs.likes
    const pic = imgs.user.profile_image.medium
    const totalPics = imgs.user.total_photos
    const insta = imgs.user.social.instagram_username
    const twitter = imgs.user.social.twitter_username
    const portfolio = imgs.user.social.portfolio_url
  return (
    <>
            <div className="card" onClick={() => {handleClick(imgs.urls.full); getModalData([name,pic,likes, totalPics, insta, twitter, portfolio])}}>
                    <div className="img">
                        {/* <img src={props.imgs.urls.small} alt="" /> */}
                        <img src={thumb} alt="" />
                    </div>
                    <div className="imgInfo">
                        <div className="creator">
                            <div className="creatorImg">
                                <img src={pic} alt="" />
                            </div>
                            <div className="creatorInfo">
                                <h4>{name}</h4>
                                <p>@{username}</p>
                            </div>
                        </div>
                        <div className="likes">
                            <div className="likeCount">
                                <div className="likeIcon"><i className="fa-solid fa-thumbs-up"></i></div>
                                <div className="count"><span>{likes}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
