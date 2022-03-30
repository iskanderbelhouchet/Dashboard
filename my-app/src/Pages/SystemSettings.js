import React from 'react'

export default class SystemSettings extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>System Settings</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Website Name*</label>
                      <input type='text' className='form-control' placeholder='SkillUp' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Website Title*</label>
                      <input type='text' className='form-control' placeholder='SkillUp Education' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Keyword with comma's</label>
                      <input type='text' className='form-control' placeholder='skill, lms, etc' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Website Description</label>
                      <textarea className='form-control summernote' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Author Name</label>
                      <input type='text' className='form-control' placeholder='Themezhub' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Slogan*</label>
                      <input type='text' className='form-control' placeholder='Best Education Platform' />
                    </div>
                    <div className='form-group smalls'>
                      <label>System Email*</label>
                      <input type='text' className='form-control' placeholder='Themezhub@gmail.com' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Phone</label>
                      <input type='text' className='form-control' placeholder={8556068402} />
                    </div>
                    <div className='form-group smalls'>
                      <label>Address</label>
                      <textarea className='form-control' placeholder='Canada, USA' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>YouTube API Key*</label>
                      <input type='text' className='form-control' placeholder='https://www.youtube.com/watch?v=ExXhmuH-cw8' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Vimeo API Key*</label>
                      <input type='text' className='form-control' placeholder='https://www.vimeo.com/watch?v=ExXhmuH-cw8' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Purchase Code*</label>
                      <input type='text' className='form-control' placeholder='JDNFHF9876DDND8' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Student Email Verification</label>
                      <div className='simple-input'>
                        <select id='yn' className='form-control'>
                          <option value>&nbsp;</option>
                          <option value={1}>Disable</option>
                          <option value={2}>Enable</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Choose Language</label>
                      <div className='simple-input'>
                        <select id='lgu' className='form-control'>
                          <option value>&nbsp;</option>
                          <option value={1}>Hindi</option>
                          <option value={2}>English</option>
                          <option value={3}>Spanish</option>
                          <option value={4}>French</option>
                          <option value={5}>Japani</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Footer Text</label>
                      <input type='text' className='form-control' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Footer Link</label>
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
        </div>
      </div>

    )
  }
}
