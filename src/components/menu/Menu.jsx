import './menu.css';

export default function Menu({input, setInput}) {
  return (
    <>
        <div className="menu">
            <div className="topLeft">Image Gallery</div>
            <div className="topCenter">
                <input 
                type="text" 
                placeholder='search image here' 
                name='photo search'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className="topRight">
              <ul className="list1">
                <li className="listItem">Explore</li>
                <li className="listItem">Collection</li>
                <li className="listItem">Community</li>
              </ul>
              <ul className="list2">
                <li className="listItem">Light Mode</li>
              </ul>
            </div>
        </div>
    </>
  )
}
