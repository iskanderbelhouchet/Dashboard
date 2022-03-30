import React from 'react'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className='col-lg-3 col-md-3'>
                <div class='dashboard-navbar'>
                  <div className='d-user-avater'>
                    <img src='https://via.placeholder.com/500x500' className='img-fluid avater' alt />
                    <h4>Adam Harshvardhan</h4>
                    <span>Senior Designer</span>
                    <div className='elso_syu89'>
                      <ul>
                        <li><a href='fake-url'><i className='ti-facebook' /></a></li>
                        <li><a href='fake-url'><i className='ti-twitter' /></a></li>
                        <li><a href='fake-url'><i className='ti-instagram' /></a></li>
                        <li><a href='fake-url'><i className='ti-linkedin' /></a></li>
                      </ul>
                    </div>
                    <div className='elso_syu77'>
                      <div className='one_third'><div className='one_45ic text-warning bg-light-warning'><i className='fas fa-star' /></div><span>Ratings</span></div>
                      <div className='one_third'><div className='one_45ic text-success bg-light-success'><i className='fas fa-file-invoice' /></div><span>Courses</span></div>
                      <div className='one_third'><div className='one_45ic text-purple bg-light-purple'><i className='fas fa-user' /></div><span>Enrolled User</span></div>
                    </div>
                  </div>
                  <div className='d-navigation'>
                    <ul id='side-menu'>
                      <li className='active'><a href='/Dashboard'><i className='fas fa-th' />Dashboard</a></li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-gem' />Category<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/AddCategory'>Add New Category</a></li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-archive' />Certifications<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/AddCertifications'>Add New Certification</a></li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-user-shield' />Admins<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/ManageAdmins'>Manage Admins</a></li>
                          <li><a href='/AddAdmin'>Add New Admins</a></li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-toolbox' />Instructors<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/ManageInstructors'>Manage Instructors</a></li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-user' />Students<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/ManageStudents'>Manage Students</a></li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-gem' />Roles & Permessions<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/Roles'>Manage Role and permission</a></li>
                        </ul>
                      </li>
                      <li><a href='/MailBox'><i className='fas fa-comments' />MailBox</a></li>
                      <li><a href='/ManageProfile'><i className='fas fa-address-card' />My Profile</a></li>
                      <li className='dropdown'>
                        <a href='void(0);'><i className='fas fa-cog' />Settings<span className='ti-angle-left' /></a>
                        <ul className='nav nav-second-level'>
                          <li><a href='/WebsiteSettings'>Website Settings</a></li>
                          <li><a href='/SystemSetings'>System Settings</a></li>
                          <li><a href='/PaymentSettings'>Payment Settings</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
      </div>
    )
  }
}
