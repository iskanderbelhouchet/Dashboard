import React, { Component } from 'react'

export default class AddAdmin extends Component {
  render () {
    return (
      <div id='main-wrapper'>
        <section className='gray pt-4'>
          <div className='container-fluid'>
            <div className='row justify-content-between'>
              <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
                <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
                  <div className='arion'>
                    <nav className='transparent'>
                      <ol className='breadcrumb'>
                        <li className='breadcrumb-item'><a href='#'>Home</a></li>
                        <li className='breadcrumb-item active' aria-current='page'>Add New Course</li>
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
                        <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
                          <div className='nav flex-column nav-pills me-3' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
                            <button className='nav-link active' id='v-pills-basic-tab' data-toggle='pill' data-target='#v-pills-basic' type='button' role='tab' aria-controls='v-pills-basic' aria-selected='true'>Basic</button>
                            <button className='nav-link' id='v-pills-login-tab' data-toggle='pill' data-target='#v-pills-login' type='button' role='tab' aria-controls='v-pills-login' aria-selected='false'>Login Details</button>
                            <button className='nav-link' id='v-pills-social-tab' data-toggle='pill' data-target='#v-pills-social' type='button' role='tab' aria-controls='v-pills-social' aria-selected='false'>Social Info</button>
                            <button className='nav-link' id='v-pills-finish-tab' data-toggle='pill' data-target='#v-pills-finish' type='button' role='tab' aria-controls='v-pills-finish' aria-selected='false'>Finish</button>
                          </div>
                        </div>
                        <div className='col-xl-9 col-lg-8 col-md-7 col-sm-12'>
                          <div className='tab-content' id='v-pills-tabContent'>
                            {/* Basic */}
                            <div className='tab-pane fade show active' id='v-pills-basic' role='tabpanel' aria-labelledby='v-pills-basic-tab'>
                              <div className='form-group smalls'>
                                <label>First Name*</label>
                                <input type='text' className='form-control' placeholder='First Name' />
                              </div>
                              <div className='form-group smalls'>
                                <label>Last Name</label>
                                <input type='text' className='form-control' placeholder='Last Name' />
                              </div>
                              <div className='form-group smalls'>
                                <label>Bio Description</label>
                                <textarea className='summernote' defaultValue='' />
                              </div>
                              <div className='form-group smalls'>
                                <label>User Image</label>
                                <div className='custom-file'>
                                  <input type='file' className='custom-file-input' id='customFile' />
                                  <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                                </div>
                              </div>
                              <div className='d-flex align-items-center justify-content-center'>
                                <ul className='alios_slide_nav'>
                                  <li><a href='#' className='btn btn_slide disabled'><i className='fas fa-arrow-left' /></a></li>
                                  <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                                </ul>
                              </div>
                            </div>
                            {/* login */}
                            <div className='tab-pane fade' id='v-pills-login' role='tabpanel' aria-labelledby='v-pills-login-tab'>
                              <div className='form-group smalls'>
                                <label>User Name</label>
                                <input type='text' className='form-control' placeholder='User or email' />
                              </div>
                              <div className='form-group smalls'>
                                <label>Password</label>
                                <input type='password' className='form-control' placeholder='*******' />
                              </div>
                              <div className='d-flex align-items-center justify-content-center'>
                                <ul className='alios_slide_nav'>
                                  <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                                  <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                                </ul>
                              </div>
                            </div>
                            {/* social */}
                            <div className='tab-pane fade' id='v-pills-social' role='tabpanel' aria-labelledby='v-pills-social-tab'>
                              <div className='form-group smalls'>
                                <label>Facebook</label>
                                <input type='text' className='form-control' placeholder='Facebook URL' />
                              </div>
                              <div className='form-group smalls'>
                                <label>Twitter</label>
                                <input type='text' className='form-control' placeholder='Twitter URL' />
                              </div>
                              <div className='form-group smalls'>
                                <label>YouTube</label>
                                <input type='text' className='form-control' placeholder='YouTube URL' />
                              </div>
                              <div className='form-group smalls'>
                                <label>Dribbble</label>
                                <input type='text' className='form-control' placeholder='Dribbble URL' />
                              </div>
                              <div className='form-group smalls'>
                                <label>LinkedIN</label>
                                <input type='text' className='form-control' placeholder='LinkedIN URL' />
                              </div>
                              <div className='d-flex align-items-center justify-content-center'>
                                <ul className='alios_slide_nav'>
                                  <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                                  <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className='tab-pane fade' id='v-pills-finish' role='tabpanel' aria-labelledby='v-pills-finish-tab'>
                              <div className='succ_wrap'>
                                <div className='succ_121'><i className='fas fa-thumbs-up' /></div>
                                <div className='succ_122'>
                                  <h4>Admin Successfully Added</h4>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className='succ_123'><a href='#' className='btn theme-bg text-white'>View Admin</a></div>
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
        </section>
      </div>

    )
  }
}
