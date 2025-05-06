
import './HomeStyle.css'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
function Home(){
//     const [isExpanded, setIsExpanded] = useState(null)
//     const navigate = useNavigate();



//     const cardsData = [
//         { img_url:"/FortuneTeller/images/card2.jpg", number: 1, title: "The Magician - Nhà Ảo Thuật", description: "Sáng tạo, khởi đầu mới, quyền lực cá nhân." },
//         { img_url:"/FortuneTeller/images/card3.jpg", number: 2, title: "The High Priestess - Nữ Tư Tế", description: "Trực giác, tri thức ẩn giấu, kết nối tiềm thức." },
//         { img_url:"/FortuneTeller/images/card4.jpg", number: 3, title: "The Empress - Hoàng Hậu", description: "Sự phong phú, sinh sôi, tình yêu thương." },
//         { img_url:"/FortuneTeller/images/card5.jpg", number: 4, title: "The Emperor - Hoàng Đế", description: "Sức mạnh, kiểm soát, lãnh đạo." },
//         { img_url:"/FortuneTeller/images/card6.jpg", number: 5, title: "The Hierophant - Giáo Hoàng", description: "Truyền thống, niềm tin, sự hướng dẫn." },
//         { img_url:"/FortuneTeller/images/card7.jpg", number: 6, title: "The Lovers - Những Người Yêu", description: "Sự lựa chọn, tình yêu, mối quan hệ." },
//         { img_url:"/FortuneTeller/images/card8.jpg", number: 7, title: "The Chariot - Cỗ Xe Chiến Thắng", description: "Chiến thắng, quyết tâm, điều khiển." },
//         { img_url:"/FortuneTeller/images/card9.jpg", number: 8, title: "Strength - Sức Mạnh", description: "Sự can đảm, kiên nhẫn, kiểm soát bản thân." },
//         { img_url:"/FortuneTeller/images/card10.jpg", number: 9, title: "The Hermit - Ẩn Sĩ", description: "Tìm kiếm, ẩn dật, nội tâm." },
//         { img_url:"/FortuneTeller/images/card11.jpg", number: 10, title: "Wheel of Fortune - Bánh Xe Số Phận", description: "Thay đổi, chu kỳ, số phận." },
//         { img_url:"/FortuneTeller/images/card12.jpg", number: 11, title: "Justice - Công Lý", description: "Cân bằng, công bằng, trách nhiệm." },
//         { img_url:"/FortuneTeller/images/card13.jpg", number: 12, title: "The Hanged Man - Người Bị Treo Ngược", description: "Buông bỏ, hy sinh, góc nhìn mới." },
//         { img_url:"/FortuneTeller/images/card14.jpg", number: 13, title: "Death - Thần Chết", description: "Kết thúc, chuyển đổi, tái sinh." },
//         { img_url:"/FortuneTeller/images/card15.jpg", number: 14, title: "Temperance - Điều Độ", description: "Sự hòa hợp, cân bằng, chữa lành." },
//         { img_url:"/FortuneTeller/images/card16.jpg", number: 15, title: "The Devil - Ác Quỷ", description: "Cám dỗ, ràng buộc, bóng tối bên trong." },
//         { img_url:"/FortuneTeller/images/card17.jpg", number: 16, title: "The Tower - Tòa Tháp", description: "Sụp đổ, bất ngờ, khai sáng." },
//         { img_url:"/FortuneTeller/images/card18.jpg", number: 17, title: "The Star - Ngôi Sao", description: "Hy vọng, cảm hứng, sự chữa lành." },
//         { img_url:"/FortuneTeller/images/card19.jpg", number: 18, title: "The Moon - Mặt Trăng", description: "Ảo giác, cảm xúc, tiềm thức." },
//         { img_url:"/FortuneTeller/images/card20.jpg", number: 19, title: "The Sun - Mặt Trời", description: "Niềm vui, thành công, khai sáng." },
//         { img_url:"/FortuneTeller/images/card21.jpg", number: 20, title: "Judgement - Phán Xét", description: "Thức tỉnh, đánh giá, tái sinh." },
//         { img_url:"/FortuneTeller/images/card22.jpg", number: 21, title: "The World - Thế Giới", description: "Hoàn thành, thành tựu, hành trình trọn vẹn." },
//         { img_url:"/FortuneTeller/images/card1.jpg", number: 22, title: "The Fool - Kẻ Khờ", description: "Khởi đầu mới, tự do, tiềm năng." },
//       ];
      

//     const imageData = [
//         {//box_1
//             url: "/FortuneTeller/bg/background_8.png",
//             content: [
//                 {
//                     id: "block_type1",
//                     code: (

//                     <div class="popup_wrapper_inner_1">
                    

//                         <div class="block_content">
//                             <h1>Lịch sử và Nguồn gốc của Tarot</h1>
//                             <p>​Tarot là một bộ bài gồm 78 lá, được sử dụng như một công cụ để khám phá bản thân và tìm kiếm lời khuyên trong cuộc sống. Mỗi lá bài mang một hình ảnh và ý nghĩa riêng, phản ánh những khía cạnh khác nhau của trải nghiệm con người.</p>
//                             <br/>
//                             <p>Mặc dù nguồn gốc chính xác của Tarot vẫn còn nhiều tranh cãi, nhưng nhiều tài liệu cho thấy bộ bài này xuất hiện từ thế kỷ 15 tại miền Bắc nước Ý. Ban đầu, Tarot được sử dụng như một trò chơi giải trí, sau đó phát triển thành công cụ bói toán và tự khám phá bản thân</p>
//                         </div>
//                         <div class="block_image">
//                             <img src="/FortuneTeller/origin_tarot.jpeg"/>
//                         </div>
//                     </div>
//                 )
//                 },
//                 {
//                     id: "block_type2",
//                     code: (
//                     <div class="popup_wrapper_inner_2">

                     
//                         <h1>Cấu trúc của Bộ bài Tarot</h1>
//                         <h2>Bộ bài Tarot được chia thành hai phần chính:</h2>
//                         <h3>22 lá Ẩn Chính (Major Arcana): Đại diện cho những bài học và chuyển biến quan trọng trong cuộc sống.</h3>
                      

//                         <div class="tarot_banner">
//                             <img src="/FortuneTeller/tarot_banner.jpg" alt="Tarot Banner" />
//                         </div>

//                         <h3>56 lá Ẩn Phụ (Minor Arcana): Phản ánh những khía cạnh cụ thể của đời sống thường ngày, được chia thành bốn bộ (suit):</h3>
//                         <div class="box4_group">
//                             <div class="box4_group_box">
//                                 <img src="/FortuneTeller/minor_arcana_wand.jpg" alt="box 1" />
//                                 <div class="minor">
//                                     <h4>Wands (Gậy):</h4>                               
//                                     <p>Bộ Gậy đại diện cho nguyên tố Lửa – biểu tượng của đam mê, hành động và năng lượng sáng tạo, nhưng đôi khi cũng cảnh báo về sự bốc đồng và thiếu kiên nhẫn</p>
//                                 </div>
                                
//                             </div>

//                             <div class="box4_group_box mb_70">
//                                 <img src="/FortuneTeller/minor_arcana_cup.jpg" alt="box 2" />
//                                 <div class="minor">
//                                     <h4>Cups (Cốc):</h4>                               
//                                     <p>Bộ Cốc mang nguyên tố Nước – gắn liền với thế giới cảm xúc, tình yêu và trực giác. Đây là nơi tình yêu, sự kết nối và sự chữa lành diễn ra, nhưng cũng có thể gợi lên cảm giác tổn thương, mong manh và nhớ nhung..</p>
//                                 </div>
//                             </div>

//                             <div class="box4_group_box">
//                                 <img src="/FortuneTeller/minor_arcana_sword.jpg" alt="box 3" />
//                                 <div class="minor">
//                                     <h4>Swords (Kiếm):</h4>                               
//                                     <p>Bộ Kiếm đại diện cho nguyên tố Khí – sức mạnh của trí tuệ, tư duy logic và sự thật. Chúng khơi gợi sự tỉnh táo, công bằng nhưng cũng có thể làm lộ ra những tổn thương do lời nói và suy nghĩ gây nên, nhấn mạnh rằng đôi khi sự thật có thể sắc bén như lưỡi dao.</p>
//                                 </div>
//                             </div>

//                             <div class="box4_group_box mb_20">
//                                 <img src="/FortuneTeller/minor_arcana_coin.jpg" alt="box 4" />
//                                 <div class="minor">
//                                     <h4>Pentacles (Tiền):</h4>                               
//                                     <p>Bộ Tiền mang nguyên tố Đất – biểu tượng của sự ổn định, của cải và giá trị thực tế. Những lá bài này gắn với công việc, tài chính, sức khỏe và sự nỗ lực bền vững để đạt được thành tựu.</p>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type3",
//                     code: (
//                     <div class="popup_wrapper_inner_3">
//                         <h1>Ý nghĩa của Một số Lá bài Tiêu biểu</h1>
//                         <div class="box3_group">
//                             <div class="box3_group_box">
//                                 <img src="/FortuneTeller/images/card20.jpg" alt="box 1" />
//                                 <ul class="box3_group_box_text">
//                                     <li><b>Từ khóa:</b> Hạnh phúc, thành công, sự rõ ràng.</li>
//                                     <li><b>Ý nghĩa:</b> Lá bài mang năng lượng tích cực, biểu thị niềm vui, sự thành công và ánh sáng soi sáng mọi vấn đề.</li>
//                                     <li><b>Đảo ngược:</b> Ảo tưởng, thiếu thực tế.</li>
//                                 </ul>
//                             </div>
//                             <div class="box3_group_box">
//                                 <img src="/FortuneTeller/images/card21.jpg" alt="box 2" />
//                                 <ul class="box3_group_box_text">
//                                     <li><b>Từ khóa:</b> Trực giác, mơ hồ, ẩn giấu.</li>
//                                     <li><b>Ý nghĩa:</b> Nhắc đến cảm xúc sâu kín, trực giác và những điều chưa rõ ràng. Cẩn thận với ảo tưởng.</li>
//                                     <li><b>Đảo ngược:</b> Bắt đầu thấy rõ sự thật, nhưng vẫn còn hoang mang.</li>
//                                 </ul>
//                             </div>
//                             <div class="box3_group_box">
//                                 <img src="/FortuneTeller/images/card22.jpg" alt="box 3" />
//                                 <ul class="box3_group_box_text">
//                                     <li><b>Từ khóa:</b> Sự thật, công bằng, trách nhiệm.</li>
//                                     <li><b>Ý nghĩa:</b> Đại diện cho luật nhân quả, sự minh bạch và lựa chọn công tâm.</li>
//                                     <li><b>Đảo ngược:</b> Bất công, không chịu trách nhiệm.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type4",
//                     code: (
//                     <div class="popup_wrapper_inner_4">
//                         <h1>Cách Thức Xem Bài Tarot Và lưu ý</h1>
//                         <div class="video_group">
//                             <iframe 
//                             allowfullscreen
//                             src="https://www.youtube.com/embed/FQvkGoXHXXs">
//                             </iframe>
//                         </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type5",
//                     code: (
//                     <div class="popup_wrapper_inner_5">
//                         <button class='link_button' onClick={()=>{navigate('/Tarot')}}>Xem bài hôm nay<i class="fa-solid fa-arrow-right"></i>
//                         <div className="star-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-3">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-5">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-6">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                         </button>
//                     </div>
//                     )
//                 }
//             ],
            
//         },
//         {//box_2
//             url: "/FortuneTeller/bg/background_10.png",
//             content: [
//                 {
//                     id: "block_type1",
//                     code: (
//                     <div class="popup_wrapper_inner_1">
//                         <div class="block_image set_80_size">
//                             <img src="/FortuneTeller/origin_matrix.jpeg"/>
//                             </div>
//                             <div class="block_content">
//                                 <h1>Ma Trận Định Mệnh Là Gì?</h1>
//                                 <p>Ma trận định mệnh là một biểu đồ số học được xây dựng dựa trên ngày tháng năm sinh của mỗi người, kết hợp với 22 năng lượng chính trong bộ bài Tarot (22 lá Major Arcana).</p>
//                                 <br/>
//                                 <p>Phương pháp này giúp người dùng hiểu rõ về điểm mạnh, điểm yếu, sứ mệnh cá nhân và các khía cạnh quan trọng trong cuộc sống như sự nghiệp, tình yêu, sức khỏe và tài chính.</p>
//                             </div>
//                         </div>
//                     )
//             },
//             {
//                 id: "block_type1",
//                 code: (
//                 <div class="popup_wrapper_inner_1">

//                     <div class="block_content">
//                             <h1>Cấu Trúc Của Ma Trận Định Mệnh</h1>
//                             <p>Ma trận định mệnh hình lục giác là một sơ đồ gồm 7 tầng tuổi (0, 10, 20, 30, 40, 50, 60, 70) xếp thành hình lục giác, mỗi điểm trên đó mang một con số từ 1 đến 22.</p>
//                             <br/>
//                             <p>Các trục dọc, ngang và chéo tượng trưng cho hành trình phát triển bản thân và ảnh hưởng từ dòng họ (cha mẹ, ông bà). Trung tâm ma trận là số chủ đạo cuộc đời. Các số cho biết tài năng, thử thách và năng lượng mạnh yếu theo từng giai đoạn cuộc sống.</p>
//                         </div>
//                         <div class="block_image set_80_size">
//                         <img src="/FortuneTeller/matrix_information_img.png"/>
//                         </div>
//                     </div>
//                 )
//         },
            

//             {
//                 id: "block_type3",
//                 code: (
//                 <div class="popup_wrapper_inner_3">
//                     <h1>Cấu Trúc Của Ma Trận Định Mệnh</h1>
//                     <div class="block_content_wrapper_3">
//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Vùng thoải mái</p>
//                             <p>Nó phản ánh sự thoải mái của linh hồn bạn và tiết lộ những gì
// bạn cần làm để cảm thấy hài lòng. Khu vực này cũng liên quan đến chakra manipura, tập
// trung vào các hành động cụ thể bạn phải thực hiện trong cuộc sống để tìm thấy sự thoải
// mái. Hãy coi đây là lá bài cốt lõi của bạn.</p>
//                                 <div className=' block_content_3_inner_item_img'>
                                  
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_1.png'/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Vùng chân dung</p>
//                             <p>Nó giống như dấu
// hiệu tăng lên trong chiêm tinh học và đại diện cho cách bạn xuất hiện trước người khác.
// Nếu bạn muốn tạo ấn tượng tốt với ai đó, bạn nên điều chỉnh hành động và hình ảnh của
// mình theo lá bài này. Khu vực này tương ứng với cả sự tồn tại vật chất của bạn và
// chakra vương miện, liên quan đến cảm hứng. Nó giúp bạn khám phá những khía cạnh
// nào của cuộc sống có thể truyền cảm hứng cho bạn và mang lại cho bạn cảm giác mục
// đích.</p>
//                                 <div className=' block_content_3_inner_item_img'>
                                  
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_2.png'/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Đuôi nghiệp</p>
//                             <p>Một khu vực quan trọng khác trong ma trận số phận của chúng ta là Kiếp Trước. Nó
// chứa đựng gánh nặng từ các kiếp sống trước của bạn và ảnh hưởng đến những đặc
// điểm yếu nhất của bạn. Khu vực này cung cấp cơ hội cho sự phát triển và phát triển cá
// nhân. Làm việc trên những khía cạnh này là thiết yếu; nếu không, bạn có thể gặp phải
// thách thức lặp đi lặp lại và thấy khó khăn để đạt được hạnh phúc. Bằng cách phân tích lá
// bài trong khu vực này, chúng ta có thể đưa ra những phỏng đoán có giáo dục về bạn đã
// là ai trong kiếp trước và những thách thức và sai lầm bạn đã gặp phải.</p>
//                                 <div className=' block_content_3_inner_item_img'>
                                  
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_3.png'/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Vùng tài năng và cảm hứng</p>
//                             <p> Khu vực này tiết lộ những tài
// năng tiềm ẩn của bạn, thường không được khai thác. Nó đại diện cho những khía cạnh
// tích cực bạn mang theo từ các kiếp sống trước, thể hiện những gì bạn tự nhiên giỏi.
// </p>
//                                 <div className=' block_content_3_inner_item_img'>
                                  
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_4.png'/>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Vùng mối quan hệ</p>
//                             <p>Bạn sẽ nhận thấy mối liên hệ
// của nó với Kiếp trước, vì hai khu vực này thường có ảnh hưởng đáng kể đối với nhau.
// Nếu Kiếp trước của bạn tiêu cực, nó có thể dẫn đến vấn đề trong mối quan hệ của bạn.
// Khu vực này tiết lộ cái nhìn sâu sắc về linh hồn bạn đời lý tưởng của bạn trong một ý
// nghĩa tích cực và làm nổi bật những khó khăn tiềm ẩn trong các mối quan hệ tiêu cực.
// Trước khi bắt đầu một mối quan hệ mới, hãy cố gắng điều chỉnh cuộc sống của bạn với
// những đặc điểm tích cực của lá bài trong khu vực này. Lá bài trung tâm trong khu vực
// này mang ảnh hưởng 50% đối với mối quan hệ của bạn.</p>
//                                 <div className=' block_content_3_inner_item_img'>
                                 
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_5.png'/>
//                                 </div>
//                             </div>
//                         </div>

                        
//                         <div className='block_content_3_inner'>
//                             <div className='block_content_3_inner_item'>
//                             <p className='content_3_item_title'>Vùng tiền bạc</p>
//                             <p>Nó cung cấp
// hướng dẫn về cách thu hút sự giàu có, quản lý tài chính một cách khôn ngoan và phát
// triển tâm trí đúng đắn cho thành công. Mặc dù nó không xác định nghề nghiệp cụ thể của
// bạn, nhưng nó cung cấp cái nhìn sâu sắc vào các hành vi có thể nâng cao tình hình tài
// chính của bạn. Lá bài trung tâm trong khu vực này cũng giữ ảnh hưởng 50% đối với
// dòng chảy tài chính của bạn, với hai lá bài còn lại đóng góp 25% mỗi lá.</p>
//                                 <div className=' block_content_3_inner_item_img'>
                                    
//                                     <img className='set_80_size' src='/FortuneTeller/matrix_information_img_6.png'/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type4",
//                 code: (
//                 <div class="popup_wrapper_inner_4">
//                     <h1>Cách Thức Ma trận định mệnh</h1>
//                     <div class="video_group">
//                         <iframe 
//                         allowfullscreen
//                         src="https://www.youtube.com/embed/Ow8y8K87RAQ">
//                         </iframe>
//                     </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type5",
//                 code: (
//                 <div class="popup_wrapper_inner_5">
//                     <button class='link_button' onClick={()=>{navigate('/Matrix')}}>Xem bản đồ của bạn<i class="fa-solid fa-arrow-right"></i>
//                     <div className="star-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-5">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-6">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                     </button>
//                 </div>
//                 )
//             }
            
//         ]
//         },

//         {//box_3
//             url: "/FortuneTeller/bg/background_9.png",
//             content: [
//                 {
//                     id: "block_type1",
//                     code: (
//                     <div class="popup_wrapper_inner_1">

//                         <div class="block_content">
//                                 <h1>THẦN SỐ HỌC LÀ GÌ?</h1>
//                                 <p>Thần số học (Numerology) là một hệ thống huyền học nghiên cứu ý nghĩa của các con số trong cuộc sống con người. Theo lý thuyết này, mỗi con số đều mang một tần số rung động riêng và ảnh hưởng đến tính cách, tiềm năng, thử thách, thậm chí cả vận mệnh của chúng ta.</p>
//                                 <br/>
//                                 <p>Thần số học không phải mê tín, mà là công cụ giúp hiểu rõ bản thân hơn, giúp mỗi người phát huy điểm mạnh và nhận diện điểm yếu của mình để sống cuộc đời ý nghĩa hơn.</p>
//                             </div>
//                             <div class="block_image">
//                             <img src="/FortuneTeller/number_infor/Numerology_History-1.jpg"/>
//                             </div>
//                         </div>
//                     )
//             },
//             {
//                 id: "block_type1",
//                 code: (
//                 <div class="popup_wrapper_inner_1">
//                     <div class="block_image">
//                         <img src="/FortuneTeller/number_infor/origin_numerology.jpeg"/>
//                         </div>
//                         <div class="block_content">
//                             <h1>NGUỒN GỐC CỦA THẦN SỐ HỌC</h1>
//                             <p>Thần số học có nguồn gốc từ Hy Lạp cổ đại, được phát triển bởi nhà toán học và triết gia Pythagoras – người tin rằng mọi vật trong vũ trụ đều có thể được diễn tả bằng con số.</p>
//                             <br/>
//                             <p>Trải qua thời gian, nhiều trường phái thần số học xuất hiện, nổi bật là Pythagore, Chaldean, Kabbalah, và hiện đại. Trong đó, hệ thống Pythagore (sử dụng ngày sinh và tên đầy đủ) là phổ biến nhất hiện nay.</p>
//                         </div>
//                     </div>
//                 )
//             },
//             {
//                 id: "block_type6",
//                 code: (
//                 <div class="popup_wrapper_inner_6">
//                 <h1>CÁC CHỈ SỐ CƠ BẢN TRONG THẦN SỐ HỌC</h1>
//                 <div class="block_table">
//                     <div class="block_head_content">
//                         <h3>Chỉ số</h3>
//                         <h3>Ý Nghĩa</h3>
//                     </div>
//                     <div class="block_body_content">
//                         <h3>Chỉ số Đường đời (Life Path Number)</h3>
//                         <p>Chỉ ra sứ mệnh, con đường chính của bạn trong cuộc sống. (Tính từ ngày sinh)</p>
//                     </div>
//                     <div class="block_body_content">
//                         <h3>Chỉ số Linh hồn (Soul Urge)</h3>
//                         <p>Hé lộ mong muốn sâu thẳm trong trái tim bạn. (Tính từ nguyên âm trong tên)</p>
//                     </div>
//                     <div class="block_body_content">
//                         <h3>Chỉ số Nhân cách (Personality)</h3>
//                         <p>Cách bạn thể hiện ra bên ngoài, người khác nhìn thấy bạn thế nào. (Tính từ phụ âm trong tên)</p>
//                     </div>
//                     <div class="block_body_content">
//                         <h3>Chỉ số Biểu đạt (Expression)</h3>
//                         <p>Tiềm năng, kỹ năng và con người bạn hướng đến. (Tính từ toàn bộ tên)</p>
//                     </div>
//                     <div class="block_body_content">
//                         <h3>Chỉ số Thái độ (Attitude)</h3>
//                         <p>Phản ứng của bạn với thế giới, đặc biệt là trong tình huống mới.</p>                                        
//                     </div>
//                     </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type7",
//                 code: (
//                 <div class="popup_wrapper_inner_7">
//                 <h1>Ý nghĩa từng con số</h1>
//                 <div class="block_table_verical">
//                     <div class="block_table_verical_box left_v_box">
//                         <h2>Số 1</h2>
//                         <p>Lãnh đạo, độc lập, năng động, chăm chỉ, can đảm, quyết đoán, trí tuệ, tham vọng và ý chí mạnh mẽ</p>
//                         <img src='/FortuneTeller/number_infor/number1.png'/>
//                     </div>
//                     <div class="block_table_verical_box right_v_box">
//                         <h2>Số 2</h2>
//                         <p>Chu đáo, dễ tiếp thu, kiên nhẫn, nhạy cảm, trực giác, hợp tác, ngoại giao, thân thiện, dễ thích nghĩ</p>
//                         <img src='/FortuneTeller/number_infor/number2.png'/>
//                     </div>
//                     <div class="block_table_verical_box left_v_box">
//                         <h2>Số 3</h2>
//                         <p>Thể hiện bản thân, sáng tạo, nghệ thuật, hòa đồng, truyền cảm hứng, giàu trí tưởng tượng.</p>
//                         <img src='/FortuneTeller/number_infor/number3.png'/>
//                     </div>
//                     <div class="block_table_verical_box right_v_box">
//                         <h2>Số 4</h2>
//                         <p>Thực tế, có tổ chức, kỷ luật, trật tự, chăm chỉ, bền bỉ, tận tụy, đúng giờ, thận trọng, phương pháp, tiết kiệm.</p>
//                         <img src='/FortuneTeller/number_infor/number4.png'/>
//                     </div>
//                     <div class="block_table_verical_box left_v_box">
//                         <h2>Số 5</h2>
//                         <p>Yêu tự do, thay đổi, da dạng, du lịch, dễ thích nghi, đa năng, trí tuệ, nhanh trí, mạo hiểm, độc lập và ham học hỏi.</p>
//                         <img src='/FortuneTeller/number_infor/number5.png'/>
//                     </div>
//                     <div class="block_table_verical_box right_v_box">
//                         <h2>Số 6</h2>
//                         <p>Phục vụ, hòa hợp, đồng hành, gia đình, lãng mạn, lý tưởng hóa, sự tin cậy, ổn định, công bằng và thấu hiểu.</p>
//                         <img src='/FortuneTeller/number_infor/number6.png'/>
//                     </div>
//                     <div class="block_table_verical_box left_v_box">
//                         <h2>Số 7</h2>
//                         <p>Chủ nghĩa huyền bí, trí tuệ, nghiên cứu, khoa học, phát minh, trực giác, tâm linh phân tích, tĩnh tại và tìm kiếm sự thật.</p>
//                         <img src='/FortuneTeller/number_infor/number7.png'/>
//                     </div>
//                     <div class="block_table_verical_box right_v_box">
//                         <h2>Số 8</h2>
//                         <p>Tài chính, quyền lực, thành công, quyền hạn, thu hút, tham vọng, thành tích, đáng tin cậy và có tổ chức</p>
//                         <img src='/FortuneTeller/number_infor/number8.png'/>
//                     </div>
//                     <div class="block_table_verical_box left_v_box">
//                         <h2>Số 9</h2>
//                         <p>Vị tha, tinh thần, duy tâm, thông cảm, thấu hiểu, khoan dung, chủ nghĩa</p>
//                         <img src='/FortuneTeller/number_infor/number9.png'/>
//                     </div>

//                 </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type4",
//                 code: (
//                 <div class="popup_wrapper_inner_4">
//                     <h1>Cách Tính toán các chỉ số quan trọng</h1>
//                     <div class="video_group">
//                         <iframe 
//                         allowfullscreen
//                         src="https://www.youtube.com/embed/ja1vOm7nPSs">
//                         </iframe>
//                     </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type5",
//                 code: (
//                 <div class="popup_wrapper_inner_5">
//                     <button class='link_button' onClick={()=>{navigate('/Numerology')}}>Tính toán Thần số học của bạn<i class="fa-solid fa-arrow-right"></i>
//                     <div className="star-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-5">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-6">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                     </button>
//                 </div>
//                 )
//             }
//         ]
//         },

//         {//box_4
//             url: "/FortuneTeller/bg/background_16.png",
//             content: [
//                 {
//                     id: "block_type1",
//                     code: (
//                     <div class="popup_wrapper_inner_8">
//                               <div class="box_content_8">
//                                 <h2>Bản đồ Sao Chiêm Tinh Học</h2>
//                                 <p>
//                                 Bản đồ sao chiêm tinh học là một công cụ quan trọng trong chiêm tinh học, giúp chúng ta hiểu rõ hơn về bản chất và cuộc sống của mỗi cá nhân thông qua vị trí các hành tinh, ngôi sao, và cung hoàng đạo tại thời điểm chúng ta sinh ra
//                                 </p>
//                                 <p>
//                                 Đây không chỉ là một công cụ dự báo, mà còn là một tấm bản đồ tinh thần, phản ánh tính cách, khả năng, và những thử thách mà chúng ta có thể gặp phải trong suốt cuộc đời.
//                                 </p>
//                             </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type1",
//                     code: (

//                     <div class="popup_wrapper_inner_1">
                    
//                         <div class="block_image circle">
//                             <img src="/FortuneTeller/solar/horo.png"/>
//                         </div>
//                         <div class="block_content">
//                             <h1>Bản đồ sao là gì?</h1>
//                             <p>Bản đồ sao (hay còn gọi là Bản đồ chiêm tinh) là một biểu đồ chi tiết về vị trí của các hành tinh trong hệ mặt trời, các cung hoàng đạo và các yếu tố khác tại thời điểm bạn sinh ra. Mỗi điểm trên bản đồ đại diện cho một khía cạnh trong tính cách, cuộc đời và các sự kiện có thể xảy đến với bạn.</p>
//                             <br/>
//                             <p>Khi được phân tích, bản đồ sao giúp chiêm tinh gia đưa ra những dự đoán về tương lai, hiểu rõ hơn về bản chất con người, và khám phá các tiềm năng chưa được khai thác.</p>
//                         </div>
//                     </div>
//                 )
//                 },


//                 {
//                     id: "block_type1",
//                     code: (
//                     <div class="popup_wrapper_inner_11">
//                         <h1>Các Hành Tinh và Ảnh Hưởng của Chúng</h1>
//                         <ul>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet sun"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Mặt Trời:</div>
//                                 <div class="descr">Đại diện cho bản sắc cá nhân, bản chất bên trong của bạn.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet moon"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Mặt Trăng:</div>
//                                 <div class="descr">Cảm xúc, phản ứng bản năng.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet mercury"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Thủy Tinh:</div>
//                                 <div class="descr">Trí tuệ, giao tiếp, thông tin.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet venus"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Kim Tinh:</div>
//                                 <div class="descr">Tình yêu, sắc đẹp, giá trị vật chất.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet mars"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Hỏa Tinh:</div>
//                                 <div class="descr">Năng lượng, hành động, động lực.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet jupiter"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Mộc Tinh:</div>
//                                 <div class="descr">Kỷ luật, trách nhiệm, thử thách.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet saturn"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Thổ Tinh:</div>
//                                 <div class="descr">Kỷ luật, trách nhiệm, thử thách.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet uranus"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Thiên Vương Tinh:</div>
//                                 <div class="descr">Cải cách, đột phá, sự độc đáo.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet neptune"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Hải Vương Tinh:</div>
//                                 <div class="descr">Tâm linh, mơ mộng, huyền bí.</div>
//                             </li>
//                             <li>
//                                 <div class="icon">
//                                 <div class="planet-container">
//                                     <div class="planet pluto"></div>
//                                 </div>
//                                 </div>
//                                 <div class="title">Diêm Vương Tinh:</div>
//                                 <div class="descr">Tái sinh, quyền lực, chuyển hóa.</div>
//                             </li>
//                         </ul>
//                     </div>
//                     )
//             },
//             {
//                 id: "block_type7",
//                 code: (
//                 <div class="popup_wrapper_inner_7 width_90">
//                 <h1>Các Nhà (Houses)</h1>
//                 <div class="block_table_verical">
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 1 – Bản thân:</h2>
//                         <p>Thể hiện cái tôi, ngoại hình, cách bạn bắt đầu mọi thứ và ấn tượng đầu tiên bạn tạo ra.</p>
//                         <img src='/FortuneTeller/horo_icon/self.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img right_v_box">
//                         <h2>Nhà 2 – Tiền bạc & Giá trị:</h2>
//                         <p>Liên quan đến tài chính, tài sản và cảm giác an toàn vật chất, cũng như giá trị bản thân.</p>
//                         <img src='/FortuneTeller/horo_icon/money.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 3 – Giao tiếp:</h2>
//                         <p>Phản ánh cách bạn giao tiếp, học hỏi, viết lách và mối quan hệ với anh chị em.</p>
//                         <img src='/FortuneTeller/horo_icon/habit.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img right_v_box">
//                         <h2>Nhà 4 – Gia đình:</h2>
//                         <p>Nói về gốc rễ, tổ ấm, cha mẹ và cảm giác an toàn nội tâm.</p>
//                         <img src='/FortuneTeller/horo_icon/family.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 5 – Tình yêu & Sáng tạo:</h2>
//                         <p>Là nơi của niềm vui, đam mê, con cái, tình yêu lãng mạn và nghệ thuật.</p>
//                         <img src='/FortuneTeller/horo_icon/creative.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img right_v_box">
//                         <h2>Nhà 6 – Thường nhật:</h2>
//                         <p>Liên quan đến công việc hàng ngày, thói quen, sức khỏe và cách bạn phục vụ người khác.</p>
//                         <img src='/FortuneTeller/horo_icon/daily.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 7 – Quan hệ:</h2>
//                         <p>Thể hiện mối quan hệ một-một như hôn nhân, đối tác hay đối thủ.</p>
//                         <img src='/FortuneTeller/horo_icon/relationship.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img right_v_box">
//                         <h2>Nhà 8 – Biến đổi:</h2>
//                         <p>Liên quan đến tiền bạc chung, quyền lực, tình dục và sự tái sinh sau khủng hoảng.</p>
//                         <img src='/FortuneTeller/horo_icon/death.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 9 – Niềm tin & Tri thức:</h2>
//                         <p>Nói về triết lý sống, tôn giáo, giáo dục cao, du lịch và mở rộng tư duy.</p>
//                         <img src='/FortuneTeller/horo_icon/freedom.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 10 – Sự nghiệp:</h2>
//                         <p>Phản ánh danh tiếng, địa vị xã hội và mục tiêu nghề nghiệp.</p>
//                         <img src='/FortuneTeller/horo_icon/career.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 11 – Bạn bè & Ước mơ:</h2>
//                         <p>Liên quan đến cộng đồng, các mối quan hệ xã hội và lý tưởng lớn.</p>
//                         <img src='/FortuneTeller/horo_icon/community.png'/>
//                     </div>
//                     <div class="block_table_verical_box pos_img left_v_box">
//                         <h2>Nhà 12 – Tiềm thức & Tâm linh:</h2>
//                         <p>Là thế giới bên trong, những điều ẩn giấu, sự hy sinh và hành trình chữa lành.</p>
//                         <img src='/FortuneTeller/horo_icon/alone.png'/>
//                     </div>

//                 </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type4",
//                 code: (
//                 <div class="popup_wrapper_inner_4">
//                     <h1>Cách đọc Bản đồ sao Chiêm tinh</h1>
//                     <div class="video_group">
//                         <iframe 
//                         allowfullscreen
//                         src="https://www.youtube.com/embed/UodkR1ZQlnw">
//                         </iframe>
//                     </div>
//                 </div>
//                 )
//             },
//             {
//                 id: "block_type5",
//                 code: (
//                 <div class="popup_wrapper_inner_5">
//                     <button class='link_button' onClick={()=>{navigate('/Horoscope')}}>Xem bản đồ sao của bạn<i class="fa-solid fa-arrow-right"></i>
//                     <div className="star-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-3">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-4">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-5">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                         <div className="star-6">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                             <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                         </svg>
//                         </div>
//                     </button>
//                 </div>
//                 )
//             }
//         ]
//         },
//         {//box_5
//             url: "/FortuneTeller/bg/background_15.png",
//             content: [
//                 {
//                     id: "block_type1",
//                     code: (
//                     <div class="popup_wrapper_inner_8">
//                               <div class="box_content_8">
//                                 <h2>DISC là gì?</h2>
//                                 <p>
//                                 DISC là một mô hình đánh giá hành vi con người, chia thành 4 nhóm chính: Dominance (Thống trị), Influence (Ảnh hưởng), Steadiness (Ổn định), và Compliance (Tuân thủ). Mỗi nhóm phản ánh một kiểu tính cách và cách phản ứng khác nhau trong công việc và cuộc sống.
//                                 </p>
//                                 <p>
//                                 Thấu hiểu DISC giúp bạn lựa chọn nghề nghiệp phù hợp, giao tiếp hiệu quả và phát triển bản thân hài hòa hơn.
//                                 </p>
//                             </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type9",
//                     code:(
//                         <div className="popup_wrapper_inner_9">
//                         {/* Dominance */}
//                         <div className="box_content_9">
//                           <h2>D - Dominance (Thống trị)</h2>
//                           <p>Người nhóm D thường quyết đoán, định hướng mục tiêu, yêu thích thử thách và kiểm soát.</p>
//                           <p><b>Nghề nghiệp phù hợp:</b></p>
//                           <ul className="list-disc list-inside text-gray-800">
//                             <li>Lãnh đạo doanh nghiệp</li>
//                             <li>Quản lý dự án</li>
//                             <li>Doanh nhân</li>
//                             <li>Luật sư</li>
//                             <li>Quản trị chiến lược</li>
//                           </ul>
//                         </div>
                
//                         {/* Influence */}
//                         <div className="box_content_9">
//                           <h2 className="text-2xl font-bold text-yellow-600">I - Influence (Ảnh hưởng)</h2>
//                           <p className="mt-2 text-base text-gray-700">Người nhóm I nổi bật bởi khả năng giao tiếp, truyền cảm hứng, năng động và lạc quan.</p>
//                           <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
//                           <ul className="list-disc list-inside text-gray-800">
//                             <li>Marketing</li>
//                             <li>PR – Quan hệ công chúng</li>
//                             <li>Giáo viên, huấn luyện viên</li>
//                             <li>MC, diễn viên</li>
//                             <li>Bán hàng</li>
//                           </ul>
//                         </div>
                
//                         {/* Steadiness */}
//                         <div className="box_content_9">
//                           <h2 className="text-2xl font-bold text-green-600">S - Steadiness (Ổn định)</h2>
//                           <p className="mt-2 text-base text-gray-700">Người nhóm S sống tình cảm, kiên nhẫn, chu đáo và trung thành. Họ là người đáng tin cậy và ổn định.</p>
//                           <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
//                           <ul className="list-disc list-inside text-gray-800">
//                             <li>Điều dưỡng, y tá</li>
//                             <li>Giáo viên mầm non</li>
//                             <li>Chuyên viên chăm sóc khách hàng</li>
//                             <li>Nhân sự</li>
//                             <li>Tư vấn tâm lý</li>
//                           </ul>
//                         </div>
                
//                         {/* Compliance */}
//                         <div className="box_content_9">
//                           <h2 className="text-2xl font-bold text-blue-600">C - Compliance (Tuân thủ)</h2>
//                           <p className="mt-2 text-base text-gray-700">Người nhóm C có tư duy logic, cẩn thận, tập trung vào chi tiết và tuân thủ quy tắc. Họ luôn đặt tiêu chuẩn cao cho bản thân.</p>
//                           <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
//                           <ul className="list-disc list-inside text-gray-800">
//                             <li>Kế toán, kiểm toán</li>
//                             <li>Phân tích dữ liệu</li>
//                             <li>Kỹ sư, lập trình viên</li>
//                             <li>Nhà nghiên cứu</li>
//                             <li>Luật pháp, tài chính</li>
//                           </ul>
//                         </div>
//                       </div>
//                     )
//                 },
//                 {
//                     id: "blocktype7",
//                     code:(
//                         <div className="popup_wrapper_inner_7">
//                         <h2 className="inner_7_title">Hướng phát triển các xu hướng</h2>
//                         <ol className="box_content_7">
//                           <li className="box_content_7_box">
//                             <div>Giai đoạn 1: Khám phá nhóm D</div>
//                             <p className="text-gray-700">- Hiểu cách nhóm D phản ứng với áp lực và xung đột.</p>
//                             <p className="text-gray-700">- Phát triển khả năng lãnh đạo và đưa ra quyết định nhanh chóng.</p>
//                             <p className="text-gray-700">- Rèn luyện khả năng đặt mục tiêu và quản lý nhóm.</p>
//                           </li>
//                           <li className="box_content_7_box">
//                             <div>Giai đoạn 2: Khám phá nhóm I</div>
//                             <p className="text-gray-700">- Xây dựng khả năng kết nối xã hội và truyền cảm hứng cho người khác.</p>
//                             <p className="text-gray-700">- Cải thiện kỹ năng thuyết trình, đàm phán và tạo ảnh hưởng tích cực.</p>
//                             <p className="text-gray-700">- Tìm cách duy trì năng lượng tích cực trong môi trường áp lực.</p>
//                           </li>
//                           <li className="box_content_7_box">
//                             <div>Giai đoạn 3: Khám phá nhóm S</div>
//                             <p className="text-gray-700">- Thấu hiểu nhu cầu về sự ổn định và tin tưởng.</p>
//                             <p className="text-gray-700">- Học cách hỗ trợ đồng đội và duy trì tinh thần nhóm vững mạnh.</p>
//                             <p className="text-gray-700">- Phát triển kỹ năng quản lý cảm xúc và lắng nghe chủ động.</p>
//                           </li>
//                           <li className="box_content_7_box">
//                             <div>Giai đoạn 4: Khám phá nhóm C</div>
//                             <p className="text-gray-700">- Tăng cường kỹ năng phân tích, lập kế hoạch và tổ chức công việc.</p>
//                             <p className="text-gray-700">- Áp dụng tư duy phản biện để giải quyết vấn đề phức tạp.</p>
//                             <p className="text-gray-700">- Rèn luyện tính tỉ mỉ và chú ý đến chi tiết trong công việc chuyên môn.</p>
//                           </li>
//                         </ol>
//                       </div>
//                     )
//                 },
//                 {
//                     id: "blocktype10",
//                     code: (
//                         <div className="popup_wrapper_inner_10">
//                         <h2 className="inner_10_title">So sánh chéo giữa các nhóm DISC</h2>
//                         <div className="inner_10_table">
//                           <table className="min-w-full text-sm text-center border border-gray-300">
//                             <thead className="bg-gray-100">
//                               <tr>
//                                 <th className="px-4 py-2">Tiêu chí</th>
//                                 <th className="px-4 py-2">D</th>
//                                 <th className="px-4 py-2">I</th>
//                                 <th className="px-4 py-2">S</th>
//                                 <th className="px-4 py-2">C</th>
//                               </tr>
//                             </thead>
//                             <tbody className="bg-white">
//                               <tr>
//                                 <td className="px-4 py-2 font-semibold">Phong cách giao tiếp</td>
//                                 <td>Trực tiếp</td>
//                                 <td>Thân thiện</td>
//                                 <td>Điềm đạm</td>
//                                 <td>Trang trọng</td>
//                               </tr>
//                               <tr className="bg-gray-50">
//                                 <td className="px-4 py-2 font-semibold">Mục tiêu chính</td>
//                                 <td>Kiểm soát, thành công</td>
//                                 <td>Ảnh hưởng, kết nối</td>
//                                 <td>Ổn định, hài hòa</td>
//                                 <td>Chính xác, chất lượng</td>
//                               </tr>
//                               <tr>
//                                 <td className="px-4 py-2 font-semibold">Nỗi sợ lớn nhất</td>
//                                 <td>Bị kiểm soát</td>
//                                 <td>Bị từ chối</td>
//                                 <td>Thay đổi đột ngột</td>
//                                 <td>Phê bình sai sót</td>
//                               </tr>
//                               <tr className="bg-gray-50">
//                                 <td className="px-4 py-2 font-semibold">Tốc độ làm việc</td>
//                                 <td>Nhanh</td>
//                                 <td>Nhanh</td>
//                                 <td>Ổn định</td>
//                                 <td>Chậm rãi, chính xác</td>
//                               </tr>
//                               <tr>
//                                 <td className="px-4 py-2 font-semibold">Cách ra quyết định</td>
//                                 <td>Dựa vào kết quả</td>
//                                 <td>Dựa vào cảm xúc</td>
//                                 <td>Dựa vào sự đồng thuận</td>
//                                 <td>Dựa trên dữ liệu và phân tích</td>
//                               </tr>
//                               <tr className="bg-gray-50">
//                                 <td className="px-4 py-2 font-semibold">Phản ứng khi bị stress</td>
//                                 <td>Trở nên cứng rắn hơn</td>
//                                 <td>Tìm kiếm sự chú ý và hỗ trợ</td>
//                                 <td>Thu mình và nhẫn nhịn</td>
//                                 <td>Phân tích quá mức và né tránh</td>
//                               </tr>
//                               <tr>
//                                 <td className="px-4 py-2 font-semibold">Cách học hiệu quả</td>
//                                 <td>Hành động thực tế</td>
//                                 <td>Thảo luận nhóm</td>
//                                 <td>Lặp lại và làm chậm</td>
//                                 <td>Đọc – phân tích logic</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     )
//                 },
//                 {
//                     id: "block_type4",
//                     code: (
//                     <div class="popup_wrapper_inner_4">
//                         <h1>PHÂN TÍCH 4 KIỂU TÍNH CÁCH DISC</h1>
//                         <div class="video_group">
//                             <iframe 
//                             allowfullscreen
//                             src="https://www.youtube.com/embed/VWSBxKfbjno">
//                             </iframe>
//                         </div>
//                     </div>
//                     )
//                 },
//                 {
//                     id: "block_type5",
//                     code: (
//                     <div class="popup_wrapper_inner_5">
//                         <button class='link_button' onClick={()=>{navigate('/DISC')}}>Xem chỉ số của bạn<i class="fa-solid fa-arrow-right"></i>
//                         <div className="star-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-3">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-5">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                             <div className="star-6">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
//                                 <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
//                             </svg>
//                             </div>
//                         </button>
//                     </div>
//                     )
//                 }
                
//         ]
//         },
//     ]

//     useEffect(()=>{
//         const img_popup = document.getElementsByClassName('container');

//         const information_1 = document.getElementsByClassName('Question_block');
//         const information_2 = document.getElementsByClassName('slide');
//         const bg = document.getElementById("bg");
//         const moon = document.getElementById("moon");
//         const mountain = document.getElementById("mountain");
//         const road = document.getElementById("road");
//         const text = document.getElementById("text");
//         const container = document.getElementsByClassName('container');
//         const timeline = document.getElementsByClassName('timeline');
//         const slider = document.querySelector(".testimonial-slider");
//         const prevBtn = document.querySelector(".prev-btn");
//         const nextBtn = document.querySelector(".next-btn");
//         const testimonials = document.querySelectorAll(".testimonial-card");
//         const totalTestimonials = testimonials.length;
//         let index = 0;
//         let first_time = true;



//         for(let i = 0; i < img_popup.length; i++){
//             img_popup[i].onclick = () =>{
//                 console.log(imageData[i])
//                 setIsExpanded(imageData[i]);
//                 document.body.style.overflow = "hidden";
//             }
//         }

//         for(let i = 0; i < information_1.length; i++){
//             information_1[i].onclick = () =>{
//                 information_2[i].classList.toggle('slide_open');
//             }
//         } 
    

//         function scrollParalaxHome(){
//             let value = window.scrollY;
//             console.log(value)
//             if(value > 2200 && first_time){
//                timeline[0].classList.add('animate')
//                for(let i = 0; i < container.length; i++){
//                     container[i].classList.add('animate2')
//                }
//                first_time =false
//                console.log('oke')
//             }
//             bg.style.top = value * 0.5 + 'px';
//             moon.style.left = -value * 0.5 + 'px';
//             mountain.style.top = -value * 0.15 + 'px';
//             road.style.top = value * 0.15 + 'px';
//             text.style.top = value * 1 + 'px';
//         }

            
//         function updateSlider() {
//             slider.style.transform = `translateX(-${index * 100}%)`;
//         }

        



    
//         // Nút "Next"
//         nextBtn.addEventListener("click", function () {
//             index = (index + 1) % totalTestimonials;
//             updateSlider();
//         });
    
//         // Nút "Prev"
//         prevBtn.addEventListener("click", function () {
//             index = (index - 1 + totalTestimonials) % totalTestimonials;
//             updateSlider();
//         });
//         window.addEventListener("scroll", scrollParalaxHome)
    
//         // Tự động chuyển slider mỗi 3 giây

//         return () => {
//             window.removeEventListener("scroll", scrollParalaxHome);
//           };

//     },[])

    const sectionRef = useRef(null);

    const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const navigate = useNavigate();

    const handleClick = (mode) => {
    switch (mode){
        case 1: navigate('/Guide'); break;
        case 2: navigate('/Numerology'); break;
        case 3: navigate('/MatrixDestiny'); break;
        case 4: navigate('/Astrology'); break;
        case 5: navigate('/DISC'); break;
        case 6: navigate('/Tarot'); break;

    }

    ; // chuyển đến trang /dashboard
    };




    return(
        <React.Fragment>
           <section class="hero-gradient text-white py-16 md:py-24">
            <div class="container mx-auto px-4 md:px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-3xl md:text-5xl font-bold mb-6">Unlock Your True Potential by Understanding Yourself</h1>
                    <p class="text-lg md:text-xl mb-10 opacity-90">Lifemap helps you discover your unique strengths, talents, and path forward through powerful self-discovery tools designed especially for students like you.</p>
                    <button onClick={handleScroll} class="cta-button fir_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">Start Self-Discovery Journey</button>
                    <button onClick={()=>handleClick(1)} class="cta-button sec_cta px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg">Start With AI Guide</button>
                </div>
            </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p class="text-lg text-gray-600 mb-8">We empower middle and high school students to understand themselves deeply, gain clarity about their unique gifts, and grow with confidence. Your journey to self-discovery starts here!</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Self-awareness</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Personal growth</span>
                    </div>
                    <div class="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">Confidence building</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section ref={sectionRef} class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Powerful Self-Discovery Tools</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Explore these amazing tools designed to help you understand your unique personality, talents, and potential path.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {/* <!-- Numerology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-purple-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Numerology</h3>
                        <p class="text-gray-600 mb-4">Discover how numbers influence your personality, talents, and life path.</p>
                        <button onClick={()=>{handleClick(2)}} class="w-full py-2 bg-purple-100 text-purple-600 rounded-lg font-medium hover:bg-purple-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Matrix of Destiny --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-blue-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Matrix of Destiny</h3>
                        <p class="text-gray-600 mb-4">Uncover your life purpose and potential through your unique birth matrix.</p>
                        <button onClick={()=>{handleClick(3)}} class="w-full py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Astrology --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-indigo-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Astrology</h3>
                        <p class="text-gray-600 mb-4">Learn how celestial bodies at your birth influence your personality and life.</p>
                        <button onClick={()=>{handleClick(4)}} class="w-full py-2 bg-indigo-100 text-indigo-600 rounded-lg font-medium hover:bg-indigo-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- DISC Personality Test --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-green-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">DISC Personality</h3>
                        <p class="text-gray-600 mb-4">Identify your behavioral style and learn how you interact with others.</p>
                        <button onClick={()=>{handleClick(5)}} class="w-full py-2 bg-green-100 text-green-600 rounded-lg font-medium hover:bg-green-200 transition-colors">Discover</button>
                    </div>
                </div>
                
                {/* <!-- Tarot Insights --> */}
                <div class="tool-card bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-amber-500 h-3"></div>
                    <div class="p-6">
                        <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Tarot Insights</h3>
                        <p class="text-gray-600 mb-4">Gain wisdom and perspective through symbolic card readings and reflection.</p>
                        <button onClick={()=>{handleClick(6)}} class="w-full py-2 bg-amber-100 text-amber-600 rounded-lg font-medium hover:bg-amber-200 transition-colors">Discover</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How Lifemap Works</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Create your personalized life map in three simple steps</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Create Your Profile</h3>
                    <p class="text-gray-600">Sign up and enter your basic information including your birth details to get started on your journey.</p>
                </div>
                
                {/* <!-- Feature 2 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Take Quizzes</h3>
                    <p class="text-gray-600">Complete fun and insightful quizzes that help reveal different aspects of your personality and potential.</p>
                </div>
                
                {/* <!-- Feature 3 --> */}
                <div class="feature-card bg-white rounded-xl p-6 text-center">
                    <div class="feature-icon w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">Get Your Lifemap</h3>
                    <p class="text-gray-600">Receive your personalized life map with insights about your strengths, challenges, and potential paths.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What Students Say</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Hear from students who have discovered more about themselves</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">M</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Maya, 15</h4>
                            <p class="text-gray-500 text-sm">High School Sophomore</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"Lifemap helped me understand why I'm drawn to creative subjects. The numerology reading was spot on about my strengths!"</p>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">J</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Jason, 13</h4>
                            <p class="text-gray-500 text-sm">Middle School Student</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"The DISC test helped me understand why I sometimes clash with my friends. Now I know how to communicate better with them!"</p>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-indigo-600 font-bold text-lg">L</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800">Leila, 17</h4>
                            <p class="text-gray-500 text-sm">High School Senior</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"The Matrix of Destiny gave me clarity about my future path. I feel more confident about my college and career choices now."</p>
                </div>
            </div>
        </div>
    </section>


    <section class="py-16 bg-indigo-600 text-white">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Ready to Discover the Real You?</h2>
                <p class="text-lg mb-8 opacity-90">Start your self-discovery journey today and unlock insights that will help you grow with confidence.</p>
                <button class="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-50 transition-colors">Create Your Free Lifemap</button>
            </div>
        </div>
    </section>


        </React.Fragment>
    )
}
export default Home