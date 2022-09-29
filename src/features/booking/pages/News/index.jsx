import React from 'react'
import { Tabs } from 'antd';
function News() {
    return (
        <div id='news' className='container mt-10 px-5 py-5 w-11/12'>
            <Tabs defaultActiveKey="1" centered >
                <Tabs.TabPane tab={<span className=' font-semibold' style={{fontSize:'23px'}}>Điện ảnh 24h</span>} key="1">
                    <div className='ant-row'>
                        <div className='ant-col ant-col-12 px-5' >
                            <img src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png" alt="Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất" />
                            <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h3>
                            <p>Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                        </div>
                        <div className='ant-col ant-col-12 px-5'>
                            <img src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất" />
                            <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”...</h3>
                            <p>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='ant-row mx-5'>
                            <div className='ant-col ant-col-8 px-5'>
                                <img className='bg-cover object-cover rounded-md bg-center w-full' src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù..." />

                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h3>
                                <p className='text-md mt-2'>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <img className='bg-cover object-cover rounded-md bg-center w-full' src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png" alt="[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI..." />


                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI...</h3>
                                <p className='text-md mt-2'>Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Tabs.TabPane>
                <Tabs.TabPane tab={<span className=' font-semibold' style={{fontSize:'23px'}}>Review</span>} key="2">
                    <div className='ant-row'>
                        <div className='ant-col ant-col-12 px-5' >
                            <img className='bg-cover object-cover rounded-md bg-center w-full' src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png" alt="[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI..." />

                            <h3 className=' text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</h3>
                            <p className='text-md mt-2'>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                        </div>
                        <div className='ant-col ant-col-12 px-5'>
                            <img src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png" alt="Review: Dinh Thự Oan Khuất (Ghost Of War)" />

                            <h3 className=' text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>Review: Dinh Thự Oan Khuất (Ghost Of War)</h3>
                            <p className='text-md mt-2'>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='ant-row mx-5'>
                            <div className='ant-col ant-col-8 px-5'>
                                <img src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù..." />

                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h3>
                                <p className='text-md mt-2'>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <img src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”..." />

                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”...</h3>
                                <p className=''>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span className=' font-semibold' style={{fontSize:'23px'}}>Khuyến mãi</span>} key="3">
                    <div className='ant-row'>
                        <div className='ant-col ant-col-12 px-5' >
                            <img src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg" alt="BHD 59K/VÉ CẢ TUẦN !!!" />

                            <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>BHD 59K/VÉ CẢ TUẦN !!!</h3>
                            <p className='text-md mt-2'>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</p>
                        </div>
                        <div className='ant-col ant-col-12 px-5'>
                            <img src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg" alt="TIX 1K/VÉ NGẠI CHI GIÁ VÉ" />

                            <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h3>
                            <p className='text-md mt-2'>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='ant-row mx-5'>
                            <div className='ant-col ant-col-8 px-5'>
                                <img src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png" alt="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù..." />

                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù...</h3>
                                <p className='text-md mt-2'>Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <img src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png" alt="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”..." />

                                <h3 className='text-xl font-semibold mt-3 block hover:text-orange-600 uppercase'>VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”...</h3>
                                <p className=''>Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</p>
                            </div>
                            <div className='ant-col ant-col-8 px-5'>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg" alt="Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png" alt="Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công</h3>
                                    </div>
                                </div>
                                <div className='ant-row mt-5'>
                                    <div className='ant-col ant-col-8 px-0.5'>
                                        <img className="rounded-md bg-center w-13 bg-cover object-cover" src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg" alt="NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT" />
                                    </div>
                                    <div className='ant-col ant-col-16'>
                                        <h3 className='m-2 text-md font-semibold mt-3 block hover:text-orange-600'>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default News