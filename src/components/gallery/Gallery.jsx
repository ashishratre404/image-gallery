import { useEffect, useState } from 'react';
import { searchedImg, trendingImg } from '../api/Api';
import Modal from 'react-modal'
import Single from '../single_image/Single';
import './gallery.css';

const modalStyle = {
  content:{
    border: "none",
    padding: "none",
    overflow: "none",
    width: "600px",
    height: "700px",
    margin: "auto",
  },
}

export default function Gallery({toSearch}) {
  const [imgList, setImgList] = useState([])
  const [currentImg, setCurrentImg] = useState(null)
  const [modalData, setModalData] = useState([])

  const [name, pic, like, totalPics, insta, twitter, portfolio] = modalData
    useEffect(() => {
      async function getData(){
        const data = await trendingImg()
        setImgList(data)
      }
      getData()
    }, []);

    useEffect(() =>{
      async function fetchData(){
        if (toSearch.trim() === ""){
          return;
        }
      const res = await searchedImg(toSearch)
      setImgList(res)
      console.log(res)
      }
      fetchData()
    }, [toSearch])

    Modal.setAppElement('#root')
  return (
    <>
    
        <Modal style={modalStyle} isOpen={!!currentImg} onRequestClose={()=>setCurrentImg(null)}>
          {/* <img src={currentImg} alt="modal" />
          <p>{fname}</p> */}

          <div className="modal">
            <div className="imgContainer">
              <img src={currentImg} alt="" />
            </div>
            <div className="infoContainer">
            <div className="container">
              <div className="imgCreator">
                <div className="pic">
                  <div className="img">
                    <img src={pic} alt="" />
                  </div>
                </div>
                <div className="name">
                  <p>{name}</p>
                </div>
              </div>
              <div className="creatorSocials">
                <a href={insta}><i className="icons fa-brands fa-instagram-square"></i></a>
                <a href={twitter}><i className="icons fa-brands fa-twitter-square"></i></a>
                <a href={portfolio}><i className="icons fa-solid fa-address-card"></i></a>
                
              </div>
              <div className="imageLikes">
                <i className="icons fa-solid fa-thumbs-up"></i>
                <p>{like}</p>
              </div>
              </div>
              <div className="totalPhotos">
                <h4>Total Photos : </h4>
                <span>{totalPics}</span>
              </div>
            </div>
          </div>
        </Modal>
        <div className="gallery">
            <div className="imageContainer">
            {imgList.length === 0 ? <h2 className='noImg'>No image found</h2> : null}
                { imgList.map(img => {
                  return <Single imgs={img} handleClick={setCurrentImg} getModalData={setModalData} key={img.id}/>
                }) }
            </div>
        </div>
    </>
  )
}
