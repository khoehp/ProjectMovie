import Booking from "features/booking/pages/Booking";
import React from "react";

import _ from "lodash";


function Footer() {
 
  return (
    <div className="pt-10 bg-black">
      <footer className="py-6 dark:bg-gray-500 dark:text-gray-50">
        <div className="container flex flex-col justify-between py-8 mx-auto space-y-8 lg:flex-row lg:space-y-0 ">
          <div className="lg:w-1/5">
            <a className="flex justify-center space-x-3 lg:justify-start">
              <h3 className="tracking-wide text-gray-50 font-semibold" style={{fontSize:'25px'}}>Bookng Movie</h3>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-4/5 sm:grid-cols-4">
            <div className="space-y-3">
              <ul className="space-y-1">
                <li>
                  <a className="tracking-wide text-gray-50 font-semibold">
                    Thỏa thuận sử dụng
                  </a>
                </li>
                <li>
                  <a className="tracking-wide text-gray-50 font-semibold">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide text-gray-50 font-semibold">
                Đối tác
              </h3>
              <ul className="mt-2 flex items-center flex-wrap">
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/QPJb0sq/cgv.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/qy7Zxt6/bhd.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>

                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/Y7spP5M/cinestar.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/vZ9myZy/lotte.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/r2g97r7/megags.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/7NDTSnJ/beta.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/Hq57mwP/dongdacinema.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/VQ0wbkj/TOUCH.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/bKGdjCY/cnx.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>

                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/Yc2Jzzm/dcine.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/kMwVgNK/zalopay-icon.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/Jtqmn5J/payoo.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>

                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/2K08K6K/AGRIBANK.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/xq10kSK/viettin.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/j6xvWHm/IVB.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      width={30}
                      height={30}
                      className="bg-white rounded-full"
                      src="https://i.ibb.co/yWmpqsj/123go.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 ml-16">
              <h3 className="tracking-wide text-gray-50 font-semibold">
                MOBILE APP
              </h3>
              <ul className="mt-2 flex items-center flex-wrap">
                <li className="mr-1 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
                    />
                  </a>
                </li>
                <li className="mr-1 mb-4">
                  <a rel="noopener noreferrer" href="#">
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://banner2.cleanpng.com/20171220/tze/android-logo-png-5a3a27ae6b91c3.41912460151376068644063506.jpg"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3 ml-6">
              <h3 className="tracking-wide text-gray-50 font-semibold">
                SOCIAL MEDIA
              </h3>
              <ul className="mt-2 flex items-center flex-wrap">
                <li className="mr-4 mb-4">
                  <a>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://digital7.vn/wp-content/uploads/2019/09/instagram-png-instagram-png-logo-1455.png"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                    />
                  </a>
                </li>
                <li className="mr-4 mb-4">
                  <a>
                    <img
                      style={{ width: "30px", height: "30px" }}
                      src="https://banghevanphonghcm.com/wp-content/uploads/2022/06/icon-zalo.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto pt-3 text-sm text-center text-white font-semibold border-t border-gray-500">Booking Movie</div>
      </footer>
    </div>
  );
}

export default Footer;
