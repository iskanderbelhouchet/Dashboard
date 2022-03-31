import React from 'react'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className='col-lg-3 col-md-3'>
        <div class='dashboard-navbar'>
          <div className='d-user-avater'>
            <img src='https://via.placeholder.com/500x500' className='img-fluid avater' alt />
            <h4>Iskander Belhouchet</h4>
            <span>Administrator</span>
            <div className='elso_syu89'>
              <ul>
                <li><a href='fake-url'><i className='ti-facebook' /></a></li>
                <li><a href='fake-url'><i className='ti-github' /></a></li>
                <li><a href='fake-url'><i className='ti-linkedin' /></a></li>
              </ul>
            </div>
          </div>
          <div className='d-navigation'>
            <ul id='side-menu'>
              <li className='active'><a href='/'><i className='fas fa-th' />Dashboard</a></li>
              <li className='dropdown'>
                <a href='void(0);'><i className='fas fa-gem' />Category<span className='ti-angle-left' /></a>
                <ul className='nav nav-second-level'>
                  <li><a href='/ManageCategory'>Manage Category</a></li>
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
                  <li><a href='/SystemSettings'>System Settings</a></li>
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
