import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {showLeftNavbar && (
            <div className="lvb-container">
              <h1 className="lnb-head">Left Navbar Menu</h1>
              <ul className="lnb-list-container">
                <li className="lnb-list-item">Item 1</li>
                <li className="lnb-list-item">Item 2</li>
                <li className="lnb-list-item">Item 3</li>
                <li className="lnb-list-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="lnb-head">Content</h1>
              <p className="lnb-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eget sem et mi aliquet rhoncus et eget turpis. Curabitur lectus
                metus
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="lvb-container">
              <h1 className="lnb-head">Right Navbar</h1>
              <div className="rnb-cc">
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
