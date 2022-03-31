import React from 'react'

function Example() {
    return (
        <div>
            <div className='content-wrapper'>
                {/* Content Header (Page header) */}
                <section className='content-header'>
                    <h1>
                        Dashboard
                        <small>Version 2.0</small>
                    </h1>
                    <ol className='breadcrumb'>
                        <li><a href='fake_url'><i className='fa fa-dashboard' /> Home</a></li>
                        <li className='active'>Dashboard</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className='content'>
                    <h1>Fake Page</h1>
                </section>
            </div>
        </div>

    )
}

export default Example;