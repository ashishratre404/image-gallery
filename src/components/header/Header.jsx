import './header.css'
import headerImg from '../../images/header.png';

export default function Header() {
  return (
    <>
        <div className="header" style={{ backgroundImage: `url(${headerImg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <h2>Download High Quality Images by creators</h2>
            <p>Over 2.4 million+ stock Images by our talented community</p>
            <input type="text" placeholder='Search high resolution Images, categories, wallpapers' />
        </div>

    </>
  )
}
