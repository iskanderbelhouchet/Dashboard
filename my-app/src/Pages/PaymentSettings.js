import React from 'react'

export default class PaymentSettings extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>Currency Settings</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>System Currency*</label>
                      <div className='simple-input'>
                        <select id='crn' className='form-control'>
                          <option value>&nbsp;</option>
                          <option value={1}>USD</option>
                          <option value={2}>NRI</option>
                          <option value={3}>Yuro</option>
                          <option value={4}>Pound</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Currency Position</label>
                      <div className='simple-input'>
                        <select id='psst' className='form-control'>
                          <option value>&nbsp;</option>
                          <option value={1}>Left</option>
                          <option value={2}>Right</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <button className='btn theme-bg text-white' type='button'>Save &amp; Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>PayPal Setup</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Status</label>
                      <div className='d-flex'>
                        <div className='drios'>
                          <input id={458} className='checkbox-custom' name='paypal' type='radio' defaultChecked />
                          <label htmlFor={458} className='checkbox-custom-label'>Enable</label>
                        </div>
                        <div className='drios ml-3'>
                          <input id={459} className='checkbox-custom' name='paypal' type='radio' />
                          <label htmlFor={459} className='checkbox-custom-label'>Disable</label>
                        </div>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Client ID</label>
                      <input type='text' className='form-control' defaultValue='JHKJHSJKFHKSJHFKJS54824' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Client ID Production</label>
                      <input type='text' className='form-control' placeholder={123245} />
                    </div>
                    <div className='form-group smalls'>
                      <label>Secret Key</label>
                      <input type='text' className='form-control' placeholder='JKHSKGFJSGJTEYUFJSFGSJ' />
                    </div>
                    <div className='form-group smalls'>
                      <button className='btn theme-bg text-white' type='button'>Save Change</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>Stripe Settings</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Status</label>
                      <div className='d-flex'>
                        <div className='drios'>
                          <input id={448} className='checkbox-custom' name='stripe' type='radio' defaultChecked />
                          <label htmlFor={448} className='checkbox-custom-label'>Enable</label>
                        </div>
                        <div className='drios ml-3'>
                          <input id={449} className='checkbox-custom' name='stripe' type='radio' />
                          <label htmlFor={449} className='checkbox-custom-label'>Disable</label>
                        </div>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Client ID</label>
                      <input type='text' className='form-control' defaultValue='JHKJHSJKFHKSJHFKJS54824' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Client ID Production</label>
                      <input type='text' className='form-control' placeholder={123245} />
                    </div>
                    <div className='form-group smalls'>
                      <label>Secret Key</label>
                      <input type='text' className='form-control' placeholder='JKHSKGFJSGJTEYUFJSFGSJ' />
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
