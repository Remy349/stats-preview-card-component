import React from 'react'
import { Stats } from './components/Stats'
import headerDesktop from './images/image-header-desktop.jpg'
import headerMobile from './images/image-header-mobile.jpg'

function App () {
  return (
    <main className='stats'>
      <div className='stats__card'>
        <div className='stats__card-content'>
          <h1 className='stats__card-content_title'>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className='stats__card-content_desc'>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.
          </p>
          <div className='stats__card-content_info'>
            <Stats
              value='10k+'
              text='companies'
            />
            <Stats
              value='314'
              text='templates'
            />
            <Stats
              value='12m+'
              text='queries'
            />
          </div>
        </div>
        <div className='stats__card-image'>
          <picture>
            <source media='(max-width:1000px)' srcSet={headerMobile} />
            <img
              className='stats__card-image_img'
              src={headerDesktop}
              alt='Image header desktop'
            />
          </picture>
        </div>
      </div>
    </main>
  )
}

export default App
