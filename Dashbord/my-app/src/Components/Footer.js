import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer className='main-footer'>
          <div className='pull-right hidden-xs'>
            <b>Version</b> 2.4.0
          </div>
          <strong>Copyright © 2014-2016 <a href='https://adminlte.io'>Almsaeed Studio</a>.</strong> All rights
          reserved.
        </footer>
      </div>

    )
  }
}
export { Footer }