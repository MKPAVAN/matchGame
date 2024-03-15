import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTab, activeTabIdClassname} = props
  const {displayText, tabId} = tabDetails

  const classname = activeTabIdClassname ? 'active' : 'tab-button'

  const onClickTabItem = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="list-item">
      <button className={classname} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
