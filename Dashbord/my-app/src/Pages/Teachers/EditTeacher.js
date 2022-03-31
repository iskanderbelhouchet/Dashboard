import React, { Component } from 'react'

export default class EditTeacher extends Component {
  render () {
    return (
      <div className='content-wrapper'>
        <section className='content-header'>
          <h1>
            Add Teacher
          </h1>
          <ol className='breadcrumb'>
            <li><a href='fake-url'><i className='fa fa-dashboard' /> Home</a></li>
            <li><a href='fake-url'>Forms</a></li>
            <li className='active'>General Elements</li>
          </ol>
        </section>
        {/* Main content */}
        <section className='content'>
          <div className='row'>
            <div className='col-md-12'>

              {/* Widget: user widget style 1 */}
              <div className='box box-widget widget-user'>
                {/* Add the bg color to the header using any of the bg-* classes */}
                <div className='widget-user-header bg-aqua-active'>
                  <h3 className='widget-user-username'>Alexander Pierce</h3>
                  <h5 className='widget-user-desc'>Founder &amp; CEO</h5>
                </div>
                <div className='widget-user-image'>
                  <img className='img-circle' src='../dist/img/user1-128x128.jpg' alt='User Avatar' />
                </div>
                <div className='box-footer'>
                  <div className='row'>
                    <div className='col-sm-4 border-right'>
                      <div className='description-block'>
                        <h5 className='description-header'>0</h5>
                        <span className='description-text'>Courses</span>
                      </div>
                    </div>
                    <div className='col-sm-4 border-right'>
                      <div className='description-block'>
                        <h5 className='description-header'>13,000</h5>
                        <span className='description-text'>FOLLOWERS</span>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='description-block'>
                        <h5 className='description-header'>Technology </h5>
                        <span className='description-text'>Department</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='box box-primary '>
                <div className='box-header with-border'>
                  <h3 className='box-title'>Basic Info </h3>
                </div>
                <form role='form '>
                  <div className='box-body'>
                    <div className='form-group col-md-6'>
                      <label>First Name</label>
                      <input
                        type='text' className='form-control' value='Alexander'
                      />
                    </div>
                    <div className='form-group col-md-6'>
                      <label>Last Name</label>
                      <input type='text' className='form-control' value='Pierce' />
                    </div>
                    <div className='form-group col-md-6'>
                      <label htmlFor='exampleInputEmail1'>Email</label>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-envelope' /></span>
                        <input type='email' className='form-control' value='info@example.com' />
                      </div>
                    </div>

                    <div className='form-group col-md-6 '>
                      <label htmlFor='exampleInputId'>Id Teacher </label>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-user' /></span>
                        <input type='email' className='form-control' placeholder='Email' />
                      </div>
                    </div>

                    <div className='form-group col-md-6 '>
                      <label htmlFor='exampleInputEmail1'>Mobile Number </label>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-mobile' /></span>
                        <input type='email' className='form-control' value='+91 123 456 7890' />
                      </div>
                    </div>

                    <div className='form-group col-md-6'>
                      <label>Date:</label>
                      <div className='input-group date'>
                        <div className='input-group-addon'>
                          <i className='fa fa-calendar' />
                        </div>
                        <input type='text' className='form-control pull-right' id='datepicker' />
                      </div>
                    </div>

                    <div className='form-group col-md-6'>
                      <label htmlFor='exampleInputPassword1'>Password</label>
                      <input type='password' className='form-control' id='exampleInputPassword1' value='alex123' />
                    </div>

                    <div className='form-group col-md-6'>
                      <label htmlFor='exampleInputPassword1'>Confirm Password</label>
                      <input type='password' className='form-control' id='exampleInputPassword1' value='alex123' />
                    </div>

                    <div class='form-group col-md-4'>
                      <label>Gender</label>
                      <select class='form-control'>
                        <option>Man</option>
                        <option>Woman</option>
                      </select>
                    </div>

                    <div class='form-group col-md-4'>
                      <label>Department</label>
                      <select class='form-control'>
                        <option>Technology</option>
                        <option>Science</option>
                        <option>Physique</option>
                        <option>Mathematique</option>
                        <option>Business and Entrepreneurship</option>
                        <option>Personal Development</option>
                        <option>Marketing</option>
                        <option>Design</option>
                      </select>
                    </div>

                    <div class='form-group col-md-4'>
                      <label>Role</label>
                      <select class='form-control'>
                        <option>Admin </option>
                        <option selected>Teacher</option>
                        <option>Student</option>
                      </select>
                    </div>

                  </div>
                  <div className='box-footer '>
                    <button type='submit' className='btn btn-primary col-sm-2'>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
