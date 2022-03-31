import React, { Component } from 'react'

export default class AddCertifications extends Component {
  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div className='row justify-content-between'>
          <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
            <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
              <div className='arion'>
                <nav className='transparent'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><a href='#'>Home</a></li>
                    <li className='breadcrumb-item active' aria-current='page'>Add New Certification</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Row */}
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='form_blocs_wrap'>
                <form>
                  <div className='row justify-content-between'>
                    <div className='col-xl-4 col-lg-4 col-md-5 col-sm-12'>
                      <div className='nav flex-column nav-pills me-3' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
                        <button className='nav-link active' id='v-pills-basic-tab' data-toggle='pill' data-target='#v-pills-basic' type='button' role='tab' aria-controls='v-pills-basic' aria-selected='true'>Upload new Certification</button>
                      </div>
                    </div>
                    <div className='col-xl-9 col-lg-8 col-md-7 col-sm-12'>
                      <div className='tab-content' id='v-pills-tabContent'>
                        <div className='tab-pane fade show active' id='v-pills-basic' role='tabpanel' aria-labelledby='v-pills-basic-tab'>
                          <div className='form-group smalls'>
                            <label>User Image</label>
                            <div className='custom-file'>
                              <input type='file' className='custom-file-input' id='customFile' />
                              <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
