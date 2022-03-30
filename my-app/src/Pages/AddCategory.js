import React, { Component } from 'react'

export default class AddCategory extends Component {
  render () {
    return (
      <div>
        <section className='gray pt-4'>
          <div class='container-fluid'>
            <div class='row'>
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
                      <div className='elkios'>
                        <a href='#' className='add_new_btn' data-toggle='modal' data-target='#catModal'><i className='fas fa-plus-circle mr-1' />Add New Category Parent</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Row */}
                <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='dash_crs_cat'>
                      <a href='#' className='remove_tools'><i className='fas fa-trash-alt' /></a>
                      <div className='dash_crs_cat_thumb'>
                        <img src='https://via.placeholder.com/1200x800' alt className='img-fluid' />
                      </div>
                      <div className='dash_crs_cat_caption'>
                        <div className='dash_crs_cat_head'>
                          <h4>Web Development</h4>
                          <span>5 Sub Category</span>
                        </div>
                        <div className='dash_crs_cat_body'>
                          <ul>
                            <li><span>Responsive Design</span></li>
                            <li><span>HTML5 &amp; CSS3</span></li>
                            <li><span>Java Script</span></li>
                            <li><span>Bootstrap</span></li>
                            <li><span>PHP Coding</span></li>
                          </ul>
                        </div>
                        <div className='dash_crs_cat_bottom'>
                          <a href='#' className='btn full-width theme-bg-light theme-cl'>Edit Category</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='dash_crs_cat'>
                      <a href='#' className='remove_tools'><i className='fas fa-trash-alt' /></a>
                      <div className='dash_crs_cat_thumb'>
                        <img src='https://via.placeholder.com/1200x800' alt className='img-fluid' />
                      </div>
                      <div className='dash_crs_cat_caption'>
                        <div className='dash_crs_cat_head'>
                          <h4>Graphic Design</h4>
                          <span>5 Sub Category</span>
                        </div>
                        <div className='dash_crs_cat_body'>
                          <ul>
                            <li><span>Photoshop</span></li>
                            <li><span>Illustrator</span></li>
                            <li><span>InDesign</span></li>
                            <li><span>Logo Design</span></li>
                            <li><span>Figma</span></li>
                          </ul>
                        </div>
                        <div className='dash_crs_cat_bottom'>
                          <a href='#' className='btn full-width theme-bg-light theme-cl'>Edit Category</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='dash_crs_cat'>
                      <a href='#' className='remove_tools'><i className='fas fa-trash-alt' /></a>
                      <div className='dash_crs_cat_thumb'>
                        <img src='https://via.placeholder.com/1200x800' alt className='img-fluid' />
                      </div>
                      <div className='dash_crs_cat_caption'>
                        <div className='dash_crs_cat_head'>
                          <h4>Bank &amp; Finance</h4>
                          <span>5 Sub Category</span>
                        </div>
                        <div className='dash_crs_cat_body'>
                          <ul>
                            <li><span>Banking</span></li>
                            <li><span>Business Idea</span></li>
                            <li><span>Business Planning</span></li>
                            <li><span>Finance</span></li>
                            <li><span>Meetings</span></li>
                          </ul>
                        </div>
                        <div className='dash_crs_cat_bottom'>
                          <a href='#' className='btn full-width theme-bg-light theme-cl'>Edit Category</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='dash_crs_cat'>
                      <a href='#' className='remove_tools'><i className='fas fa-trash-alt' /></a>
                      <div className='dash_crs_cat_thumb'>
                        <img src='https://via.placeholder.com/1200x800' alt className='img-fluid' />
                      </div>
                      <div className='dash_crs_cat_caption'>
                        <div className='dash_crs_cat_head'>
                          <h4>Interior Design</h4>
                          <span>5 Sub Category</span>
                        </div>
                        <div className='dash_crs_cat_body'>
                          <ul>
                            <li><span>Color Combination</span></li>
                            <li><span>Lighting Design</span></li>
                            <li><span>Home Improvement</span></li>
                            <li><span>3D Lighting</span></li>
                            <li><span>Bedroom Decorate</span></li>
                          </ul>
                        </div>
                        <div className='dash_crs_cat_bottom'>
                          <a href='#' className='btn full-width theme-bg-light theme-cl'>Edit Category</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                    <div className='dash_crs_cat'>
                      <a href='#' className='remove_tools'><i className='fas fa-trash-alt' /></a>
                      <div className='dash_crs_cat_thumb'>
                        <img src='https://via.placeholder.com/1200x800' alt className='img-fluid' />
                      </div>
                      <div className='dash_crs_cat_caption'>
                        <div className='dash_crs_cat_head'>
                          <h4>2D/ 3D Animation</h4>
                          <span>5 Sub Category</span>
                        </div>
                        <div className='dash_crs_cat_body'>
                          <ul>
                            <li><span>Motion Effect</span></li>
                            <li><span>Blender</span></li>
                            <li><span>Maya Tools</span></li>
                            <li><span>After Effect</span></li>
                            <li><span>Pro Tools</span></li>
                          </ul>
                        </div>
                        <div className='dash_crs_cat_bottom'>
                          <a href='#' className='btn full-width theme-bg-light theme-cl'>Edit Category</a>
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
