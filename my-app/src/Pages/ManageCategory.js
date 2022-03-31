import React, { Component } from 'react'

export default class ManageCategory extends Component {
  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        {/* Row */}
        <div className='row justify-content-between'>
          <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
            <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
              <div className='arion'>
                <nav className='transparent'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><a href='#'>Home</a></li>
                    <li className='breadcrumb-item active' aria-current='page'>Manage Category</li>
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
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>All Category List</h6>
                </div>
              </div>
              <div className='row align-items-end mb-5'>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group smalls'>
                    <label>Category Title</label>
                    <input type='text' className='form-control' placeholder='First Name' />
                  </div>

                </div>
                <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <button type='button' className='btn text-white full-width theme-bg'>Add</button>
                  </div>
                </div>
              </div>
              <div className='row justify-content-between'>
                <div className='col-xl-2 col-lg-3 col-md-6'>
                  <div className='form-group smalls row align-items-center'>
                    <label className='col-xl-3 col-lg-3 col-sm-2 col-form-label'>Show</label>
                    <div className='col-xl-9 col-lg-9 col-sm-10'>
                      <select id='show' className='form-control'>
                        <option value>&nbsp;</option>
                        <option value={1}>10</option>
                        <option value={2}>25</option>
                        <option value={3}>35</option>
                        <option value={3}>50</option>
                        <option value={3}>100</option>
                        <option value={3}>250</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-5 col-md-6'>
                  <div className='form-group smalls row align-items-center'>
                    <label className='col-xl-2 col-lg-2 col-sm-2 col-form-label'>Search</label>
                    <div className='col-xl-10 col-lg-10 col-sm-10'>
                      <input type='text' className='form-control' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-2'>
                  <div className='table-responsive'>
                    <table className='table dash_list'>
                      <thead>
                        <tr>
                          <th scope='col'>#</th>
                          <th scope='col'>Title</th>
                          <th scope='col'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>1</th>
                          <td><h6>UI/UX Design Pattern For Succesfull Software Applications</h6></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>2</th>
                          <td><h6>Basic Knowledge About Hodiernal Bharat In History</h6></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>3</th>
                          <td><h6>Advance PHP Knowledge With Laravel To Make Smart Web</h6></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>4</th>
                          <td><h6>The Complete Accounting &amp; Bank Financial Course 2021</h6></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='row align-items-center justify-content-between'>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <p className='p-0'>Showing 1 to 15 of 15 entire</p>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <nav className='float-right'>
                    <ul className='pagination smalls m-0'>
                      <li className='page-item disabled'>
                        <a className='page-link' href='#' tabIndex={-1}><i className='fas fa-arrow-circle-left' /></a>
                      </li>
                      <li className='page-item'><a className='page-link' href='#'>1</a></li>
                      <li className='page-item active'>
                        <a className='page-link' href='#'>2 <span className='sr-only'>(current)</span></a>
                      </li>
                      <li className='page-item'><a className='page-link' href='#'>3</a></li>
                      <li className='page-item'>
                        <a className='page-link' href='#'><i className='fas fa-arrow-circle-right' /></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
