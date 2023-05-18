import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="config-container">
          <h1 className="layout-head">Layout</h1>
          <div>
            <div className="input-container">
              <input
                type="checkbox"
                checked={showContent}
                id="context"
                onChange={onToggleShowContent}
              />
              <label htmlFor="context">Content</label>
            </div>

            <div className="input-container">
              <input
                type="checkbox"
                checked={showLeftNavbar}
                id="leftNavbar"
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>

            <div className="input-container">
              <input
                type="checkbox"
                checked={showRightNavbar}
                id="rightNavbar"
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
