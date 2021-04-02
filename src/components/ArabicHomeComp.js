import React from 'react';
import ArabicHeaderComp from './ArabicHeaderComp';
import Footer from './FooterComponent';
import ArabicCarouselComp from './ArabicCarouselComp';

function Home(props) {
    return(
      <>
        <ArabicHeaderComp auth={props.auth}
          loginUser={props.loginUser}
          logoutUser={props.logoutUser}
          />
        <div className="container col-12">
            <ArabicCarouselComp />
        </div>
        <div className="container marketing"style={{ background: "rgba(0,0,0,0.1)", width: "100%" }}>
          <div className="row row-content" style={{ width: "100%" }}>
            <div className="col-lg-4 offset-sm-0" style={{ color: "#DDD"  }}>
              <div className="offset-lg-3">
              <svg width="7em" height="7em" viewBox="0 0 16 16" className="col-12 col-md-6 offset-sm-3 offset-lg-1 bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              </svg>
              </div>
              <div className="text-center">
                <h2>الشراء</h2>
              </div>
              <p className="align-self-center text-center">تقريبا على جميع الأسس والمناطق في مصر الوسطى، بعد أن غطت مساحة مع فئات الأسعار المختلفة</p>
            </div>
            <div className="col-lg-4" style={{ color: "#DDD"  }}>
              <div className="offset-lg-3">
                <svg width="7em" height="7em" viewBox="0 0 16 16" className="col-12 col-md-6 offset-sm-3 offset-lg-1 bi bi-cash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
                  <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                </svg>
              </div>
              <div className="text-center">
                <h2>الخدمات</h2>
              </div>
              <p className="align-self-center text-center">خدماتنا مناسبة للجميع، وأسعار مثالية مع توصيات مثالية</p>
            </div>
            <div className="col-lg-4" style={{ color: "#DDD"  }}>
              <div className="offset-lg-3">
                <svg width="7em" height="7em" viewBox="0 0 16 16" className="col-12 col-md-6 offset-sm-3 offset-lg-1 bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                </svg>
                </div>
                <div className="text-center">
                  <h2>تواصل معنا</h2>
                </div>
                <p className="align-self-center text-center">نحاول أن يكون من السهل الوصول من أجل ضمان أفضل نوعية قد يتعرض أي شخص</p>
              </div>
            </div>
          </div>
        <Footer />
      </>
    );
}

export default Home;
