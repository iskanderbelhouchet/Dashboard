import React from 'react'

export default class Menu extends React.Component {
  render () {
    return (
      <div>
        <aside className='main-sidebar'>
          {/* sidebar: style can be found in sidebar.less */}
          <section className='sidebar'>
            {/* Sidebar user panel */}
            <div className='user-panel'>
              <div className='pull-left image'>
                <img src='dist/img/user2-160x160.jpg' className='img-circle' alt='User' />
              </div>
              <div className='pull-left info'>
                <p>Alexander Pierce</p>
                <a href='fake_url'><i className='fa fa-circle text-success' /> Online</a>
              </div>
            </div>
            {/* search form */}
            <form action='#' method='get' className='sidebar-form'>
              <div className='input-group'>
                <input type='text' name='q' className='form-control' placeholder='Search...' />
                <span className='input-group-btn'>
                  <button type='submit' name='search' id='search-btn' className='btn btn-flat'>
                    <i className='fa fa-search' />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className='sidebar-menu' data-widget='tree'>
              <li className='header'>MAIN NAVIGATION</li>
              <li className='active treeview menu-open'>
                <a href='fake_url'>
                  <i className='fa fa-dashboard' /> <span>Dashboard</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='src/ages/Dashboard/Dashboard.js'><i className='fa fa-circle-o' /> Dashboard Admin</a></li>
                  <li className='active'><a href='fake_url'><i className='fa fa-circle-o' /> Dashboard Teacher</a></li>
                </ul>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-user' />
                  <span>Teachers</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='pages/charts/chartjs.html'><i className='fa fa-circle-o' /> All Teachers</a></li>
                  <li><a href='pages/charts/morris.html'><i className='fa fa-circle-o' /> Add Teacher</a></li>
                  <li><a href='pages/charts/flot.html'><i className='fa fa-circle-o' /> Edit Teacher</a></li>
                </ul>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-users' />
                  <span>Students</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='pages/UI/general.html'><i className='fa fa-circle-o' /> All Students</a></li>
                  <li><a href='pages/UI/icons.html'><i className='fa fa-circle-o' /> Add Student</a></li>
                  <li><a href='pages/UI/buttons.html'><i className='fa fa-circle-o' /> Edit Student</a></li>
                </ul>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-book' /> <span>Courses</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='pages/forms/general.html'><i className='fa fa-circle-o' /> All Courses</a></li>
                  <li><a href='pages/forms/advanced.html'><i className='fa fa-circle-o' /> Add Courses</a></li>
                  <li><a href='pages/forms/editors.html'><i className='fa fa-circle-o' /> Edit Courses</a></li>
                </ul>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-table' /> <span>Departments</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='pages/tables/simple.html'><i className='fa fa-circle-o' /> All Departments</a></li>
                  <li><a href='pages/tables/data.html'><i className='fa fa-circle-o' /> Add Departments</a></li>
                  <li><a href='pages/tables/data.html'><i className='fa fa-circle-o' /> Edit Departments</a></li>
                </ul>
              </li>
              <li>
                <a href='pages/calendar.html'>
                  <i className='fa fa-calendar' /> <span>Calendar</span>
                  <span className='pull-right-container'>
                    <small className='label pull-right bg-red'>3</small>
                    <small className='label pull-right bg-blue'>17</small>
                  </span>
                </a>
              </li>
              <li>
                <a href='pages/mailbox/mailbox.html'>
                  <i className='fa fa-envelope' /> <span>Mailbox</span>
                  <span className='pull-right-container'>
                    <small className='label pull-right bg-yellow'>12</small>
                    <small className='label pull-right bg-green'>16</small>
                    <small className='label pull-right bg-red'>5</small>
                  </span>
                </a>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-folder' /> <span>Examples</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='pages/examples/invoice.html'><i className='fa fa-circle-o' /> Invoice</a></li>
                  <li><a href='pages/examples/profile.html'><i className='fa fa-circle-o' /> Profile</a></li>
                  <li><a href='pages/examples/login.html'><i className='fa fa-circle-o' /> Login</a></li>
                  <li><a href='pages/examples/register.html'><i className='fa fa-circle-o' /> Register</a></li>
                  <li><a href='pages/examples/lockscreen.html'><i className='fa fa-circle-o' /> Lockscreen</a></li>
                  <li><a href='pages/examples/404.html'><i className='fa fa-circle-o' /> 404 Error</a></li>
                  <li><a href='pages/examples/500.html'><i className='fa fa-circle-o' /> 500 Error</a></li>
                  <li><a href='pages/examples/blank.html'><i className='fa fa-circle-o' /> Blank Page</a></li>
                  <li><a href='pages/examples/pace.html'><i className='fa fa-circle-o' /> Pace Page</a></li>
                </ul>
              </li>
              <li className='treeview'>
                <a href='fake_url'>
                  <i className='fa fa-share' /> <span>Roles and Permissions</span>
                  <span className='pull-right-container'>
                    <i className='fa fa-angle-left pull-right' />
                  </span>
                </a>
                <ul className='treeview-menu'>
                  <li><a href='fake_url'><i className='fa fa-circle-o' /> All Roles </a></li>
                  <li><a href='fake_url'><i className='fa fa-circle-o' /> Add Role </a></li>
                  <li><a href='fake_url'><i className='fa fa-circle-o' /> Edit Role</a></li>
                </ul>
              </li>
              <li><a href='https://adminlte.io/docs'><i className='fa fa-book' /> <span>Documentation</span></a></li>
              <li className='header'>LABELS</li>
              <li><a href='fake_url'><i className='fa fa-circle-o text-red' /> <span>Important</span></a></li>
              <li><a href='fake_url'><i className='fa fa-circle-o text-yellow' /> <span>Warning</span></a></li>
              <li><a href='fake_url'><i className='fa fa-circle-o text-aqua' /> <span>Information</span></a></li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
      </div>

    )
  }
}
export { Menu }
