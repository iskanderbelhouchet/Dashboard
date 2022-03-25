import React from 'react'

export default class ManageProfile extends React.Component {
  render () {
    return (
      <div>
        <section className='gray pt-4'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-9 col-md-9 col-sm-12'>
                {/* Row */}
                <div className='row justify-content-between'>
                  <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
                    <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
                      <div className='arion'>
                        <nav className='transparent'>
                          <ol className='breadcrumb'>
                            <li className='breadcrumb-item'><a href='#'>Home</a></li>
                            <li className='breadcrumb-item active' aria-current='page'>My Profile</li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Row */}
                <div className='row'>
                  <div className='col-xl-7 col-lg-6 col-md-12'>
                    <div className='dashboard_wrap'>
                      <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                          <h6 className='m-0'>Basic Detail</h6>
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-xl-12 col-lg-12 col-md-12'>
                          <form>
                            <div className='form-group smalls'>
                              <label>First Name*</label>
                              <input type='text' className='form-control' defaultValue='Suraj' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Last Name</label>
                              <input type='text' className='form-control' defaultValue='Singh' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Email</label>
                              <input type='email' className='form-control' defaultValue='support@themezhub.com' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Phone</label>
                              <input type='text' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>About Yourself in Short</label>
                              <textarea className='form-control' defaultValue='' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Biography</label>
                              <textarea className='form-control summernote' defaultValue='' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Facebook Link</label>
                              <input type='text' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Twitter Link</label>
                              <input type='text' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>LinkedIn Link</label>
                              <input type='text' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Gplus Link</label>
                              <input type='text' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <button className='btn theme-bg text-white' type='button'>Save Change</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-5 col-lg-6 col-md-12'>
                    <div className='dashboard_wrap'>
                      <div className='row justify-content-center'>
                        <div className='col-xl-12 col-lg-12 col-md-12'>
                          <form>
                            <div className='form-group smalls'>
                              <label>Current Password</label>
                              <input type='password' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>New Password</label>
                              <input type='password' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <label>Confirm Password</label>
                              <input type='password' className='form-control' />
                            </div>
                            <div className='form-group smalls'>
                              <button className='btn theme-bg text-white' type='button'>Save Change</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
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
