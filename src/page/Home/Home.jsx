
import './HomeStyle.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home(){
    const [isExpanded, setIsExpanded] = useState(null)
    const navigate = useNavigate();



    const cardsData = [
        { img_url:"/FortuneTeller/images/card2.jpg", number: 1, title: "The Magician - Nhà Ảo Thuật", description: "Sáng tạo, khởi đầu mới, quyền lực cá nhân." },
        { img_url:"/FortuneTeller/images/card3.jpg", number: 2, title: "The High Priestess - Nữ Tư Tế", description: "Trực giác, tri thức ẩn giấu, kết nối tiềm thức." },
        { img_url:"/FortuneTeller/images/card4.jpg", number: 3, title: "The Empress - Hoàng Hậu", description: "Sự phong phú, sinh sôi, tình yêu thương." },
        { img_url:"/FortuneTeller/images/card5.jpg", number: 4, title: "The Emperor - Hoàng Đế", description: "Sức mạnh, kiểm soát, lãnh đạo." },
        { img_url:"/FortuneTeller/images/card6.jpg", number: 5, title: "The Hierophant - Giáo Hoàng", description: "Truyền thống, niềm tin, sự hướng dẫn." },
        { img_url:"/FortuneTeller/images/card7.jpg", number: 6, title: "The Lovers - Những Người Yêu", description: "Sự lựa chọn, tình yêu, mối quan hệ." },
        { img_url:"/FortuneTeller/images/card8.jpg", number: 7, title: "The Chariot - Cỗ Xe Chiến Thắng", description: "Chiến thắng, quyết tâm, điều khiển." },
        { img_url:"/FortuneTeller/images/card9.jpg", number: 8, title: "Strength - Sức Mạnh", description: "Sự can đảm, kiên nhẫn, kiểm soát bản thân." },
        { img_url:"/FortuneTeller/images/card10.jpg", number: 9, title: "The Hermit - Ẩn Sĩ", description: "Tìm kiếm, ẩn dật, nội tâm." },
        { img_url:"/FortuneTeller/images/card11.jpg", number: 10, title: "Wheel of Fortune - Bánh Xe Số Phận", description: "Thay đổi, chu kỳ, số phận." },
        { img_url:"/FortuneTeller/images/card12.jpg", number: 11, title: "Justice - Công Lý", description: "Cân bằng, công bằng, trách nhiệm." },
        { img_url:"/FortuneTeller/images/card13.jpg", number: 12, title: "The Hanged Man - Người Bị Treo Ngược", description: "Buông bỏ, hy sinh, góc nhìn mới." },
        { img_url:"/FortuneTeller/images/card14.jpg", number: 13, title: "Death - Thần Chết", description: "Kết thúc, chuyển đổi, tái sinh." },
        { img_url:"/FortuneTeller/images/card15.jpg", number: 14, title: "Temperance - Điều Độ", description: "Sự hòa hợp, cân bằng, chữa lành." },
        { img_url:"/FortuneTeller/images/card16.jpg", number: 15, title: "The Devil - Ác Quỷ", description: "Cám dỗ, ràng buộc, bóng tối bên trong." },
        { img_url:"/FortuneTeller/images/card17.jpg", number: 16, title: "The Tower - Tòa Tháp", description: "Sụp đổ, bất ngờ, khai sáng." },
        { img_url:"/FortuneTeller/images/card18.jpg", number: 17, title: "The Star - Ngôi Sao", description: "Hy vọng, cảm hứng, sự chữa lành." },
        { img_url:"/FortuneTeller/images/card19.jpg", number: 18, title: "The Moon - Mặt Trăng", description: "Ảo giác, cảm xúc, tiềm thức." },
        { img_url:"/FortuneTeller/images/card20.jpg", number: 19, title: "The Sun - Mặt Trời", description: "Niềm vui, thành công, khai sáng." },
        { img_url:"/FortuneTeller/images/card21.jpg", number: 20, title: "Judgement - Phán Xét", description: "Thức tỉnh, đánh giá, tái sinh." },
        { img_url:"/FortuneTeller/images/card22.jpg", number: 21, title: "The World - Thế Giới", description: "Hoàn thành, thành tựu, hành trình trọn vẹn." },
        { img_url:"/FortuneTeller/images/card1.jpg", number: 22, title: "The Fool - Kẻ Khờ", description: "Khởi đầu mới, tự do, tiềm năng." },
      ];
      

    const imageData = [
        {//box_1
            url: "/FortuneTeller/bg/background_8.png",
            content: [
                {
                    id: "block_type1",
                    code: (

                    <div class="popup_wrapper_inner_1">
                    

                        <div class="block_content">
                            <h1>Lịch sử và Nguồn gốc của Tarot</h1>
                            <p>​Tarot là một bộ bài gồm 78 lá, được sử dụng như một công cụ để khám phá bản thân và tìm kiếm lời khuyên trong cuộc sống. Mỗi lá bài mang một hình ảnh và ý nghĩa riêng, phản ánh những khía cạnh khác nhau của trải nghiệm con người.</p>
                            <br/>
                            <p>Mặc dù nguồn gốc chính xác của Tarot vẫn còn nhiều tranh cãi, nhưng nhiều tài liệu cho thấy bộ bài này xuất hiện từ thế kỷ 15 tại miền Bắc nước Ý. Ban đầu, Tarot được sử dụng như một trò chơi giải trí, sau đó phát triển thành công cụ bói toán và tự khám phá bản thân</p>
                        </div>
                        <div class="block_image">
                            <img src="/FortuneTeller/origin_tarot.jpeg"/>
                        </div>
                    </div>
                )
                },
                {
                    id: "block_type2",
                    code: (
                    <div class="popup_wrapper_inner_2">

                     
                        <h1>Cấu trúc của Bộ bài Tarot</h1>
                        <h2>Bộ bài Tarot được chia thành hai phần chính:</h2>
                        <h3>22 lá Ẩn Chính (Major Arcana): Đại diện cho những bài học và chuyển biến quan trọng trong cuộc sống.</h3>
                      

                        <div class="tarot_banner">
                            <img src="/FortuneTeller/tarot_banner.jpg" alt="Tarot Banner" />
                        </div>

                        <h3>56 lá Ẩn Phụ (Minor Arcana): Phản ánh những khía cạnh cụ thể của đời sống thường ngày, được chia thành bốn bộ (suit):</h3>
                        <div class="box4_group">
                            <div class="box4_group_box">
                                <img src="/FortuneTeller/minor_arcana_wand.jpg" alt="box 1" />
                                <div class="minor">
                                    <h4>Wands (Gậy):</h4>                               
                                    <p>Bộ Gậy đại diện cho nguyên tố Lửa – biểu tượng của đam mê, hành động và năng lượng sáng tạo, nhưng đôi khi cũng cảnh báo về sự bốc đồng và thiếu kiên nhẫn</p>
                                </div>
                                
                            </div>

                            <div class="box4_group_box mb_70">
                                <img src="/FortuneTeller/minor_arcana_cup.jpg" alt="box 2" />
                                <div class="minor">
                                    <h4>Cups (Cốc):</h4>                               
                                    <p>Bộ Cốc mang nguyên tố Nước – gắn liền với thế giới cảm xúc, tình yêu và trực giác. Đây là nơi tình yêu, sự kết nối và sự chữa lành diễn ra, nhưng cũng có thể gợi lên cảm giác tổn thương, mong manh và nhớ nhung..</p>
                                </div>
                            </div>

                            <div class="box4_group_box">
                                <img src="/FortuneTeller/minor_arcana_sword.jpg" alt="box 3" />
                                <div class="minor">
                                    <h4>Swords (Kiếm):</h4>                               
                                    <p>Bộ Kiếm đại diện cho nguyên tố Khí – sức mạnh của trí tuệ, tư duy logic và sự thật. Chúng khơi gợi sự tỉnh táo, công bằng nhưng cũng có thể làm lộ ra những tổn thương do lời nói và suy nghĩ gây nên, nhấn mạnh rằng đôi khi sự thật có thể sắc bén như lưỡi dao.</p>
                                </div>
                            </div>

                            <div class="box4_group_box mb_20">
                                <img src="/FortuneTeller/minor_arcana_coin.jpg" alt="box 4" />
                                <div class="minor">
                                    <h4>Pentacles (Tiền):</h4>                               
                                    <p>Bộ Tiền mang nguyên tố Đất – biểu tượng của sự ổn định, của cải và giá trị thực tế. Những lá bài này gắn với công việc, tài chính, sức khỏe và sự nỗ lực bền vững để đạt được thành tựu.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    )
                },
                {
                    id: "block_type3",
                    code: (
                    <div class="popup_wrapper_inner_3">
                        <h1>Ý nghĩa của Một số Lá bài Tiêu biểu</h1>
                        <div class="box3_group">
                            <div class="box3_group_box">
                                <img src="/FortuneTeller/images/card20.jpg" alt="box 1" />
                                <ul class="box3_group_box_text">
                                    <li><b>Từ khóa:</b> Hạnh phúc, thành công, sự rõ ràng.</li>
                                    <li><b>Ý nghĩa:</b> Lá bài mang năng lượng tích cực, biểu thị niềm vui, sự thành công và ánh sáng soi sáng mọi vấn đề.</li>
                                    <li><b>Đảo ngược:</b> Ảo tưởng, thiếu thực tế.</li>
                                </ul>
                            </div>
                            <div class="box3_group_box">
                                <img src="/FortuneTeller/images/card21.jpg" alt="box 2" />
                                <ul class="box3_group_box_text">
                                    <li><b>Từ khóa:</b> Trực giác, mơ hồ, ẩn giấu.</li>
                                    <li><b>Ý nghĩa:</b> Nhắc đến cảm xúc sâu kín, trực giác và những điều chưa rõ ràng. Cẩn thận với ảo tưởng.</li>
                                    <li><b>Đảo ngược:</b> Bắt đầu thấy rõ sự thật, nhưng vẫn còn hoang mang.</li>
                                </ul>
                            </div>
                            <div class="box3_group_box">
                                <img src="/FortuneTeller/images/card22.jpg" alt="box 3" />
                                <ul class="box3_group_box_text">
                                    <li><b>Từ khóa:</b> Sự thật, công bằng, trách nhiệm.</li>
                                    <li><b>Ý nghĩa:</b> Đại diện cho luật nhân quả, sự minh bạch và lựa chọn công tâm.</li>
                                    <li><b>Đảo ngược:</b> Bất công, không chịu trách nhiệm.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                },
                {
                    id: "block_type4",
                    code: (
                    <div class="popup_wrapper_inner_4">
                        <h1>Cách Thức Xem Bài Tarot Và lưu ý</h1>
                        <div class="video_group">
                            <iframe 
                            allowfullscreen
                            src="https://www.youtube.com/embed/FQvkGoXHXXs">
                            </iframe>
                        </div>
                    </div>
                    )
                },
                {
                    id: "block_type5",
                    code: (
                    <div class="popup_wrapper_inner_5">
                        <button class='link_button' onClick={()=>{navigate('/Tarot')}}>Xem bài hôm nay<i class="fa-solid fa-arrow-right"></i>
                        <div className="star-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                        </button>
                    </div>
                    )
                }
            ],
            
        },
        {//box_2
            url: "/FortuneTeller/bg/background_10.png",
            content: [
                {
                    id: "block_type1",
                    code: (
                    <div class="popup_wrapper_inner_1">
                        <div class="block_image set_80_size">
                            <img src="/FortuneTeller/origin_matrix.jpeg"/>
                            </div>
                            <div class="block_content">
                                <h1>Ma Trận Định Mệnh Là Gì?</h1>
                                <p>Ma trận định mệnh là một biểu đồ số học được xây dựng dựa trên ngày tháng năm sinh của mỗi người, kết hợp với 22 năng lượng chính trong bộ bài Tarot (22 lá Major Arcana).</p>
                                <br/>
                                <p>Phương pháp này giúp người dùng hiểu rõ về điểm mạnh, điểm yếu, sứ mệnh cá nhân và các khía cạnh quan trọng trong cuộc sống như sự nghiệp, tình yêu, sức khỏe và tài chính.</p>
                            </div>
                        </div>
                    )
            },
            {
                id: "block_type1",
                code: (
                <div class="popup_wrapper_inner_1">

                    <div class="block_content">
                            <h1>Cấu Trúc Của Ma Trận Định Mệnh</h1>
                            <p>Ma trận định mệnh hình lục giác là một sơ đồ gồm 7 tầng tuổi (0, 10, 20, 30, 40, 50, 60, 70) xếp thành hình lục giác, mỗi điểm trên đó mang một con số từ 1 đến 22.</p>
                            <br/>
                            <p>Các trục dọc, ngang và chéo tượng trưng cho hành trình phát triển bản thân và ảnh hưởng từ dòng họ (cha mẹ, ông bà). Trung tâm ma trận là số chủ đạo cuộc đời. Các số cho biết tài năng, thử thách và năng lượng mạnh yếu theo từng giai đoạn cuộc sống.</p>
                        </div>
                        <div class="block_image set_80_size">
                        <img src="/FortuneTeller/matrix_information_img.png"/>
                        </div>
                    </div>
                )
        },
            

            {
                id: "block_type3",
                code: (
                <div class="popup_wrapper_inner_3">
                    <h1>Cấu Trúc Của Ma Trận Định Mệnh</h1>
                    <div class="block_content_wrapper_3">
                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Vùng thoải mái</p>
                            <p>Nó phản ánh sự thoải mái của linh hồn bạn và tiết lộ những gì
bạn cần làm để cảm thấy hài lòng. Khu vực này cũng liên quan đến chakra manipura, tập
trung vào các hành động cụ thể bạn phải thực hiện trong cuộc sống để tìm thấy sự thoải
mái. Hãy coi đây là lá bài cốt lõi của bạn.</p>
                                <div className=' block_content_3_inner_item_img'>
                                  
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_1.png'/>
                                </div>
                            </div>
                        </div>

                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Vùng chân dung</p>
                            <p>Nó giống như dấu
hiệu tăng lên trong chiêm tinh học và đại diện cho cách bạn xuất hiện trước người khác.
Nếu bạn muốn tạo ấn tượng tốt với ai đó, bạn nên điều chỉnh hành động và hình ảnh của
mình theo lá bài này. Khu vực này tương ứng với cả sự tồn tại vật chất của bạn và
chakra vương miện, liên quan đến cảm hứng. Nó giúp bạn khám phá những khía cạnh
nào của cuộc sống có thể truyền cảm hứng cho bạn và mang lại cho bạn cảm giác mục
đích.</p>
                                <div className=' block_content_3_inner_item_img'>
                                  
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_2.png'/>
                                </div>
                            </div>
                        </div>
                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Đuôi nghiệp</p>
                            <p>Một khu vực quan trọng khác trong ma trận số phận của chúng ta là Kiếp Trước. Nó
chứa đựng gánh nặng từ các kiếp sống trước của bạn và ảnh hưởng đến những đặc
điểm yếu nhất của bạn. Khu vực này cung cấp cơ hội cho sự phát triển và phát triển cá
nhân. Làm việc trên những khía cạnh này là thiết yếu; nếu không, bạn có thể gặp phải
thách thức lặp đi lặp lại và thấy khó khăn để đạt được hạnh phúc. Bằng cách phân tích lá
bài trong khu vực này, chúng ta có thể đưa ra những phỏng đoán có giáo dục về bạn đã
là ai trong kiếp trước và những thách thức và sai lầm bạn đã gặp phải.</p>
                                <div className=' block_content_3_inner_item_img'>
                                  
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_3.png'/>
                                </div>
                            </div>
                        </div>

                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Vùng tài năng và cảm hứng</p>
                            <p> Khu vực này tiết lộ những tài
năng tiềm ẩn của bạn, thường không được khai thác. Nó đại diện cho những khía cạnh
tích cực bạn mang theo từ các kiếp sống trước, thể hiện những gì bạn tự nhiên giỏi.
</p>
                                <div className=' block_content_3_inner_item_img'>
                                  
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_4.png'/>
                                </div>
                            </div>
                        </div>

                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Vùng mối quan hệ</p>
                            <p>Bạn sẽ nhận thấy mối liên hệ
của nó với Kiếp trước, vì hai khu vực này thường có ảnh hưởng đáng kể đối với nhau.
Nếu Kiếp trước của bạn tiêu cực, nó có thể dẫn đến vấn đề trong mối quan hệ của bạn.
Khu vực này tiết lộ cái nhìn sâu sắc về linh hồn bạn đời lý tưởng của bạn trong một ý
nghĩa tích cực và làm nổi bật những khó khăn tiềm ẩn trong các mối quan hệ tiêu cực.
Trước khi bắt đầu một mối quan hệ mới, hãy cố gắng điều chỉnh cuộc sống của bạn với
những đặc điểm tích cực của lá bài trong khu vực này. Lá bài trung tâm trong khu vực
này mang ảnh hưởng 50% đối với mối quan hệ của bạn.</p>
                                <div className=' block_content_3_inner_item_img'>
                                 
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_5.png'/>
                                </div>
                            </div>
                        </div>

                        
                        <div className='block_content_3_inner'>
                            <div className='block_content_3_inner_item'>
                            <p className='content_3_item_title'>Vùng tiền bạc</p>
                            <p>Nó cung cấp
hướng dẫn về cách thu hút sự giàu có, quản lý tài chính một cách khôn ngoan và phát
triển tâm trí đúng đắn cho thành công. Mặc dù nó không xác định nghề nghiệp cụ thể của
bạn, nhưng nó cung cấp cái nhìn sâu sắc vào các hành vi có thể nâng cao tình hình tài
chính của bạn. Lá bài trung tâm trong khu vực này cũng giữ ảnh hưởng 50% đối với
dòng chảy tài chính của bạn, với hai lá bài còn lại đóng góp 25% mỗi lá.</p>
                                <div className=' block_content_3_inner_item_img'>
                                    
                                    <img className='set_80_size' src='/FortuneTeller/matrix_information_img_6.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            },
            {
                id: "block_type4",
                code: (
                <div class="popup_wrapper_inner_4">
                    <h1>Cách Thức Ma trận định mệnh</h1>
                    <div class="video_group">
                        <iframe 
                        allowfullscreen
                        src="https://www.youtube.com/embed/Ow8y8K87RAQ">
                        </iframe>
                    </div>
                </div>
                )
            },
            {
                id: "block_type5",
                code: (
                <div class="popup_wrapper_inner_5">
                    <button class='link_button' onClick={()=>{navigate('/Matrix')}}>Xem bản đồ của bạn<i class="fa-solid fa-arrow-right"></i>
                    <div className="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                    </button>
                </div>
                )
            }
            
        ]
        },

        {//box_3
            url: "/FortuneTeller/bg/background_9.png",
            content: [
                {
                    id: "block_type1",
                    code: (
                    <div class="popup_wrapper_inner_1">

                        <div class="block_content">
                                <h1>THẦN SỐ HỌC LÀ GÌ?</h1>
                                <p>Thần số học (Numerology) là một hệ thống huyền học nghiên cứu ý nghĩa của các con số trong cuộc sống con người. Theo lý thuyết này, mỗi con số đều mang một tần số rung động riêng và ảnh hưởng đến tính cách, tiềm năng, thử thách, thậm chí cả vận mệnh của chúng ta.</p>
                                <br/>
                                <p>Thần số học không phải mê tín, mà là công cụ giúp hiểu rõ bản thân hơn, giúp mỗi người phát huy điểm mạnh và nhận diện điểm yếu của mình để sống cuộc đời ý nghĩa hơn.</p>
                            </div>
                            <div class="block_image">
                            <img src="/FortuneTeller/number_infor/Numerology_History-1.jpg"/>
                            </div>
                        </div>
                    )
            },
            {
                id: "block_type1",
                code: (
                <div class="popup_wrapper_inner_1">
                    <div class="block_image">
                        <img src="/FortuneTeller/number_infor/origin_numerology.jpeg"/>
                        </div>
                        <div class="block_content">
                            <h1>NGUỒN GỐC CỦA THẦN SỐ HỌC</h1>
                            <p>Thần số học có nguồn gốc từ Hy Lạp cổ đại, được phát triển bởi nhà toán học và triết gia Pythagoras – người tin rằng mọi vật trong vũ trụ đều có thể được diễn tả bằng con số.</p>
                            <br/>
                            <p>Trải qua thời gian, nhiều trường phái thần số học xuất hiện, nổi bật là Pythagore, Chaldean, Kabbalah, và hiện đại. Trong đó, hệ thống Pythagore (sử dụng ngày sinh và tên đầy đủ) là phổ biến nhất hiện nay.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "block_type6",
                code: (
                <div class="popup_wrapper_inner_6">
                <h1>CÁC CHỈ SỐ CƠ BẢN TRONG THẦN SỐ HỌC</h1>
                <div class="block_table">
                    <div class="block_head_content">
                        <h3>Chỉ số</h3>
                        <h3>Ý Nghĩa</h3>
                    </div>
                    <div class="block_body_content">
                        <h3>Chỉ số Đường đời (Life Path Number)</h3>
                        <p>Chỉ ra sứ mệnh, con đường chính của bạn trong cuộc sống. (Tính từ ngày sinh)</p>
                    </div>
                    <div class="block_body_content">
                        <h3>Chỉ số Linh hồn (Soul Urge)</h3>
                        <p>Hé lộ mong muốn sâu thẳm trong trái tim bạn. (Tính từ nguyên âm trong tên)</p>
                    </div>
                    <div class="block_body_content">
                        <h3>Chỉ số Nhân cách (Personality)</h3>
                        <p>Cách bạn thể hiện ra bên ngoài, người khác nhìn thấy bạn thế nào. (Tính từ phụ âm trong tên)</p>
                    </div>
                    <div class="block_body_content">
                        <h3>Chỉ số Biểu đạt (Expression)</h3>
                        <p>Tiềm năng, kỹ năng và con người bạn hướng đến. (Tính từ toàn bộ tên)</p>
                    </div>
                    <div class="block_body_content">
                        <h3>Chỉ số Thái độ (Attitude)</h3>
                        <p>Phản ứng của bạn với thế giới, đặc biệt là trong tình huống mới.</p>                                        
                    </div>
                    </div>
                </div>
                )
            },
            {
                id: "block_type7",
                code: (
                <div class="popup_wrapper_inner_7">
                <h1>Ý nghĩa từng con số</h1>
                <div class="block_table_verical">
                    <div class="block_table_verical_box left_v_box">
                        <h2>Số 1</h2>
                        <p>Lãnh đạo, độc lập, năng động, chăm chỉ, can đảm, quyết đoán, trí tuệ, tham vọng và ý chí mạnh mẽ</p>
                        <img src='/FortuneTeller/number_infor/number1.png'/>
                    </div>
                    <div class="block_table_verical_box right_v_box">
                        <h2>Số 2</h2>
                        <p>Chu đáo, dễ tiếp thu, kiên nhẫn, nhạy cảm, trực giác, hợp tác, ngoại giao, thân thiện, dễ thích nghĩ</p>
                        <img src='/FortuneTeller/number_infor/number2.png'/>
                    </div>
                    <div class="block_table_verical_box left_v_box">
                        <h2>Số 3</h2>
                        <p>Thể hiện bản thân, sáng tạo, nghệ thuật, hòa đồng, truyền cảm hứng, giàu trí tưởng tượng.</p>
                        <img src='/FortuneTeller/number_infor/number3.png'/>
                    </div>
                    <div class="block_table_verical_box right_v_box">
                        <h2>Số 4</h2>
                        <p>Thực tế, có tổ chức, kỷ luật, trật tự, chăm chỉ, bền bỉ, tận tụy, đúng giờ, thận trọng, phương pháp, tiết kiệm.</p>
                        <img src='/FortuneTeller/number_infor/number4.png'/>
                    </div>
                    <div class="block_table_verical_box left_v_box">
                        <h2>Số 5</h2>
                        <p>Yêu tự do, thay đổi, da dạng, du lịch, dễ thích nghi, đa năng, trí tuệ, nhanh trí, mạo hiểm, độc lập và ham học hỏi.</p>
                        <img src='/FortuneTeller/number_infor/number5.png'/>
                    </div>
                    <div class="block_table_verical_box right_v_box">
                        <h2>Số 6</h2>
                        <p>Phục vụ, hòa hợp, đồng hành, gia đình, lãng mạn, lý tưởng hóa, sự tin cậy, ổn định, công bằng và thấu hiểu.</p>
                        <img src='/FortuneTeller/number_infor/number6.png'/>
                    </div>
                    <div class="block_table_verical_box left_v_box">
                        <h2>Số 7</h2>
                        <p>Chủ nghĩa huyền bí, trí tuệ, nghiên cứu, khoa học, phát minh, trực giác, tâm linh phân tích, tĩnh tại và tìm kiếm sự thật.</p>
                        <img src='/FortuneTeller/number_infor/number7.png'/>
                    </div>
                    <div class="block_table_verical_box right_v_box">
                        <h2>Số 8</h2>
                        <p>Tài chính, quyền lực, thành công, quyền hạn, thu hút, tham vọng, thành tích, đáng tin cậy và có tổ chức</p>
                        <img src='/FortuneTeller/number_infor/number8.png'/>
                    </div>
                    <div class="block_table_verical_box left_v_box">
                        <h2>Số 9</h2>
                        <p>Vị tha, tinh thần, duy tâm, thông cảm, thấu hiểu, khoan dung, chủ nghĩa</p>
                        <img src='/FortuneTeller/number_infor/number9.png'/>
                    </div>

                </div>
                </div>
                )
            },
            {
                id: "block_type4",
                code: (
                <div class="popup_wrapper_inner_4">
                    <h1>Cách Tính toán các chỉ số quan trọng</h1>
                    <div class="video_group">
                        <iframe 
                        allowfullscreen
                        src="https://www.youtube.com/embed/ja1vOm7nPSs">
                        </iframe>
                    </div>
                </div>
                )
            },
            {
                id: "block_type5",
                code: (
                <div class="popup_wrapper_inner_5">
                    <button class='link_button' onClick={()=>{navigate('/Numerology')}}>Tính toán Thần số học của bạn<i class="fa-solid fa-arrow-right"></i>
                    <div className="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                    </button>
                </div>
                )
            }
        ]
        },

        {//box_4
            url: "/FortuneTeller/bg/background_16.png",
            content: [
                {
                    id: "block_type1",
                    code: (
                    <div class="popup_wrapper_inner_8">
                              <div class="box_content_8">
                                <h2>Bản đồ Sao Chiêm Tinh Học</h2>
                                <p>
                                Bản đồ sao chiêm tinh học là một công cụ quan trọng trong chiêm tinh học, giúp chúng ta hiểu rõ hơn về bản chất và cuộc sống của mỗi cá nhân thông qua vị trí các hành tinh, ngôi sao, và cung hoàng đạo tại thời điểm chúng ta sinh ra
                                </p>
                                <p>
                                Đây không chỉ là một công cụ dự báo, mà còn là một tấm bản đồ tinh thần, phản ánh tính cách, khả năng, và những thử thách mà chúng ta có thể gặp phải trong suốt cuộc đời.
                                </p>
                            </div>
                    </div>
                    )
                },
                {
                    id: "block_type1",
                    code: (

                    <div class="popup_wrapper_inner_1">
                    
                        <div class="block_image circle">
                            <img src="/FortuneTeller/solar/horo.png"/>
                        </div>
                        <div class="block_content">
                            <h1>Bản đồ sao là gì?</h1>
                            <p>Bản đồ sao (hay còn gọi là Bản đồ chiêm tinh) là một biểu đồ chi tiết về vị trí của các hành tinh trong hệ mặt trời, các cung hoàng đạo và các yếu tố khác tại thời điểm bạn sinh ra. Mỗi điểm trên bản đồ đại diện cho một khía cạnh trong tính cách, cuộc đời và các sự kiện có thể xảy đến với bạn.</p>
                            <br/>
                            <p>Khi được phân tích, bản đồ sao giúp chiêm tinh gia đưa ra những dự đoán về tương lai, hiểu rõ hơn về bản chất con người, và khám phá các tiềm năng chưa được khai thác.</p>
                        </div>
                    </div>
                )
                },


                {
                    id: "block_type1",
                    code: (
                    <div class="popup_wrapper_inner_11">
                        <h1>Các Hành Tinh và Ảnh Hưởng của Chúng</h1>
                        <ul>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet sun"></div>
                                </div>
                                </div>
                                <div class="title">Mặt Trời:</div>
                                <div class="descr">Đại diện cho bản sắc cá nhân, bản chất bên trong của bạn.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet moon"></div>
                                </div>
                                </div>
                                <div class="title">Mặt Trăng:</div>
                                <div class="descr">Cảm xúc, phản ứng bản năng.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet mercury"></div>
                                </div>
                                </div>
                                <div class="title">Thủy Tinh:</div>
                                <div class="descr">Trí tuệ, giao tiếp, thông tin.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet venus"></div>
                                </div>
                                </div>
                                <div class="title">Kim Tinh:</div>
                                <div class="descr">Tình yêu, sắc đẹp, giá trị vật chất.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet mars"></div>
                                </div>
                                </div>
                                <div class="title">Hỏa Tinh:</div>
                                <div class="descr">Năng lượng, hành động, động lực.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet jupiter"></div>
                                </div>
                                </div>
                                <div class="title">Mộc Tinh:</div>
                                <div class="descr">Kỷ luật, trách nhiệm, thử thách.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet saturn"></div>
                                </div>
                                </div>
                                <div class="title">Thổ Tinh:</div>
                                <div class="descr">Kỷ luật, trách nhiệm, thử thách.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet uranus"></div>
                                </div>
                                </div>
                                <div class="title">Thiên Vương Tinh:</div>
                                <div class="descr">Cải cách, đột phá, sự độc đáo.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet neptune"></div>
                                </div>
                                </div>
                                <div class="title">Hải Vương Tinh:</div>
                                <div class="descr">Tâm linh, mơ mộng, huyền bí.</div>
                            </li>
                            <li>
                                <div class="icon">
                                <div class="planet-container">
                                    <div class="planet pluto"></div>
                                </div>
                                </div>
                                <div class="title">Diêm Vương Tinh:</div>
                                <div class="descr">Tái sinh, quyền lực, chuyển hóa.</div>
                            </li>
                        </ul>
                    </div>
                    )
            },
            {
                id: "block_type7",
                code: (
                <div class="popup_wrapper_inner_7 width_90">
                <h1>Các Nhà (Houses)</h1>
                <div class="block_table_verical">
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 1 – Bản thân:</h2>
                        <p>Thể hiện cái tôi, ngoại hình, cách bạn bắt đầu mọi thứ và ấn tượng đầu tiên bạn tạo ra.</p>
                        <img src='/FortuneTeller/horo_icon/self.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img right_v_box">
                        <h2>Nhà 2 – Tiền bạc & Giá trị:</h2>
                        <p>Liên quan đến tài chính, tài sản và cảm giác an toàn vật chất, cũng như giá trị bản thân.</p>
                        <img src='/FortuneTeller/horo_icon/money.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 3 – Giao tiếp:</h2>
                        <p>Phản ánh cách bạn giao tiếp, học hỏi, viết lách và mối quan hệ với anh chị em.</p>
                        <img src='/FortuneTeller/horo_icon/habit.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img right_v_box">
                        <h2>Nhà 4 – Gia đình:</h2>
                        <p>Nói về gốc rễ, tổ ấm, cha mẹ và cảm giác an toàn nội tâm.</p>
                        <img src='/FortuneTeller/horo_icon/family.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 5 – Tình yêu & Sáng tạo:</h2>
                        <p>Là nơi của niềm vui, đam mê, con cái, tình yêu lãng mạn và nghệ thuật.</p>
                        <img src='/FortuneTeller/horo_icon/creative.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img right_v_box">
                        <h2>Nhà 6 – Thường nhật:</h2>
                        <p>Liên quan đến công việc hàng ngày, thói quen, sức khỏe và cách bạn phục vụ người khác.</p>
                        <img src='/FortuneTeller/horo_icon/daily.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 7 – Quan hệ:</h2>
                        <p>Thể hiện mối quan hệ một-một như hôn nhân, đối tác hay đối thủ.</p>
                        <img src='/FortuneTeller/horo_icon/relationship.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img right_v_box">
                        <h2>Nhà 8 – Biến đổi:</h2>
                        <p>Liên quan đến tiền bạc chung, quyền lực, tình dục và sự tái sinh sau khủng hoảng.</p>
                        <img src='/FortuneTeller/horo_icon/death.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 9 – Niềm tin & Tri thức:</h2>
                        <p>Nói về triết lý sống, tôn giáo, giáo dục cao, du lịch và mở rộng tư duy.</p>
                        <img src='/FortuneTeller/horo_icon/freedom.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 10 – Sự nghiệp:</h2>
                        <p>Phản ánh danh tiếng, địa vị xã hội và mục tiêu nghề nghiệp.</p>
                        <img src='/FortuneTeller/horo_icon/career.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 11 – Bạn bè & Ước mơ:</h2>
                        <p>Liên quan đến cộng đồng, các mối quan hệ xã hội và lý tưởng lớn.</p>
                        <img src='/FortuneTeller/horo_icon/community.png'/>
                    </div>
                    <div class="block_table_verical_box pos_img left_v_box">
                        <h2>Nhà 12 – Tiềm thức & Tâm linh:</h2>
                        <p>Là thế giới bên trong, những điều ẩn giấu, sự hy sinh và hành trình chữa lành.</p>
                        <img src='/FortuneTeller/horo_icon/alone.png'/>
                    </div>

                </div>
                </div>
                )
            },
            {
                id: "block_type4",
                code: (
                <div class="popup_wrapper_inner_4">
                    <h1>Cách đọc Bản đồ sao Chiêm tinh</h1>
                    <div class="video_group">
                        <iframe 
                        allowfullscreen
                        src="https://www.youtube.com/embed/UodkR1ZQlnw">
                        </iframe>
                    </div>
                </div>
                )
            },
            {
                id: "block_type5",
                code: (
                <div class="popup_wrapper_inner_5">
                    <button class='link_button' onClick={()=>{navigate('/Horoscope')}}>Xem bản đồ sao của bạn<i class="fa-solid fa-arrow-right"></i>
                    <div className="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                        <div className="star-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                            <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                        </svg>
                        </div>
                    </button>
                </div>
                )
            }
        ]
        },
        {//box_5
            url: "/FortuneTeller/bg/background_15.png",
            content: [
                {
                    id: "block_type1",
                    code: (
                    <div class="popup_wrapper_inner_8">
                              <div class="box_content_8">
                                <h2>DISC là gì?</h2>
                                <p>
                                DISC là một mô hình đánh giá hành vi con người, chia thành 4 nhóm chính: Dominance (Thống trị), Influence (Ảnh hưởng), Steadiness (Ổn định), và Compliance (Tuân thủ). Mỗi nhóm phản ánh một kiểu tính cách và cách phản ứng khác nhau trong công việc và cuộc sống.
                                </p>
                                <p>
                                Thấu hiểu DISC giúp bạn lựa chọn nghề nghiệp phù hợp, giao tiếp hiệu quả và phát triển bản thân hài hòa hơn.
                                </p>
                            </div>
                    </div>
                    )
                },
                {
                    id: "block_type9",
                    code:(
                        <div className="popup_wrapper_inner_9">
                        {/* Dominance */}
                        <div className="box_content_9">
                          <h2>D - Dominance (Thống trị)</h2>
                          <p>Người nhóm D thường quyết đoán, định hướng mục tiêu, yêu thích thử thách và kiểm soát.</p>
                          <p><b>Nghề nghiệp phù hợp:</b></p>
                          <ul className="list-disc list-inside text-gray-800">
                            <li>Lãnh đạo doanh nghiệp</li>
                            <li>Quản lý dự án</li>
                            <li>Doanh nhân</li>
                            <li>Luật sư</li>
                            <li>Quản trị chiến lược</li>
                          </ul>
                        </div>
                
                        {/* Influence */}
                        <div className="box_content_9">
                          <h2 className="text-2xl font-bold text-yellow-600">I - Influence (Ảnh hưởng)</h2>
                          <p className="mt-2 text-base text-gray-700">Người nhóm I nổi bật bởi khả năng giao tiếp, truyền cảm hứng, năng động và lạc quan.</p>
                          <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
                          <ul className="list-disc list-inside text-gray-800">
                            <li>Marketing</li>
                            <li>PR – Quan hệ công chúng</li>
                            <li>Giáo viên, huấn luyện viên</li>
                            <li>MC, diễn viên</li>
                            <li>Bán hàng</li>
                          </ul>
                        </div>
                
                        {/* Steadiness */}
                        <div className="box_content_9">
                          <h2 className="text-2xl font-bold text-green-600">S - Steadiness (Ổn định)</h2>
                          <p className="mt-2 text-base text-gray-700">Người nhóm S sống tình cảm, kiên nhẫn, chu đáo và trung thành. Họ là người đáng tin cậy và ổn định.</p>
                          <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
                          <ul className="list-disc list-inside text-gray-800">
                            <li>Điều dưỡng, y tá</li>
                            <li>Giáo viên mầm non</li>
                            <li>Chuyên viên chăm sóc khách hàng</li>
                            <li>Nhân sự</li>
                            <li>Tư vấn tâm lý</li>
                          </ul>
                        </div>
                
                        {/* Compliance */}
                        <div className="box_content_9">
                          <h2 className="text-2xl font-bold text-blue-600">C - Compliance (Tuân thủ)</h2>
                          <p className="mt-2 text-base text-gray-700">Người nhóm C có tư duy logic, cẩn thận, tập trung vào chi tiết và tuân thủ quy tắc. Họ luôn đặt tiêu chuẩn cao cho bản thân.</p>
                          <p className="mt-4 font-semibold"><b>Nghề nghiệp phù hợp:</b></p>
                          <ul className="list-disc list-inside text-gray-800">
                            <li>Kế toán, kiểm toán</li>
                            <li>Phân tích dữ liệu</li>
                            <li>Kỹ sư, lập trình viên</li>
                            <li>Nhà nghiên cứu</li>
                            <li>Luật pháp, tài chính</li>
                          </ul>
                        </div>
                      </div>
                    )
                },
                {
                    id: "blocktype7",
                    code:(
                        <div className="popup_wrapper_inner_7">
                        <h2 className="inner_7_title">Hướng phát triển các xu hướng</h2>
                        <ol className="box_content_7">
                          <li className="box_content_7_box">
                            <div>Giai đoạn 1: Khám phá nhóm D</div>
                            <p className="text-gray-700">- Hiểu cách nhóm D phản ứng với áp lực và xung đột.</p>
                            <p className="text-gray-700">- Phát triển khả năng lãnh đạo và đưa ra quyết định nhanh chóng.</p>
                            <p className="text-gray-700">- Rèn luyện khả năng đặt mục tiêu và quản lý nhóm.</p>
                          </li>
                          <li className="box_content_7_box">
                            <div>Giai đoạn 2: Khám phá nhóm I</div>
                            <p className="text-gray-700">- Xây dựng khả năng kết nối xã hội và truyền cảm hứng cho người khác.</p>
                            <p className="text-gray-700">- Cải thiện kỹ năng thuyết trình, đàm phán và tạo ảnh hưởng tích cực.</p>
                            <p className="text-gray-700">- Tìm cách duy trì năng lượng tích cực trong môi trường áp lực.</p>
                          </li>
                          <li className="box_content_7_box">
                            <div>Giai đoạn 3: Khám phá nhóm S</div>
                            <p className="text-gray-700">- Thấu hiểu nhu cầu về sự ổn định và tin tưởng.</p>
                            <p className="text-gray-700">- Học cách hỗ trợ đồng đội và duy trì tinh thần nhóm vững mạnh.</p>
                            <p className="text-gray-700">- Phát triển kỹ năng quản lý cảm xúc và lắng nghe chủ động.</p>
                          </li>
                          <li className="box_content_7_box">
                            <div>Giai đoạn 4: Khám phá nhóm C</div>
                            <p className="text-gray-700">- Tăng cường kỹ năng phân tích, lập kế hoạch và tổ chức công việc.</p>
                            <p className="text-gray-700">- Áp dụng tư duy phản biện để giải quyết vấn đề phức tạp.</p>
                            <p className="text-gray-700">- Rèn luyện tính tỉ mỉ và chú ý đến chi tiết trong công việc chuyên môn.</p>
                          </li>
                        </ol>
                      </div>
                    )
                },
                {
                    id: "blocktype10",
                    code: (
                        <div className="popup_wrapper_inner_10">
                        <h2 className="inner_10_title">So sánh chéo giữa các nhóm DISC</h2>
                        <div className="inner_10_table">
                          <table className="min-w-full text-sm text-center border border-gray-300">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-2">Tiêu chí</th>
                                <th className="px-4 py-2">D</th>
                                <th className="px-4 py-2">I</th>
                                <th className="px-4 py-2">S</th>
                                <th className="px-4 py-2">C</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              <tr>
                                <td className="px-4 py-2 font-semibold">Phong cách giao tiếp</td>
                                <td>Trực tiếp</td>
                                <td>Thân thiện</td>
                                <td>Điềm đạm</td>
                                <td>Trang trọng</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-2 font-semibold">Mục tiêu chính</td>
                                <td>Kiểm soát, thành công</td>
                                <td>Ảnh hưởng, kết nối</td>
                                <td>Ổn định, hài hòa</td>
                                <td>Chính xác, chất lượng</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 font-semibold">Nỗi sợ lớn nhất</td>
                                <td>Bị kiểm soát</td>
                                <td>Bị từ chối</td>
                                <td>Thay đổi đột ngột</td>
                                <td>Phê bình sai sót</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-2 font-semibold">Tốc độ làm việc</td>
                                <td>Nhanh</td>
                                <td>Nhanh</td>
                                <td>Ổn định</td>
                                <td>Chậm rãi, chính xác</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 font-semibold">Cách ra quyết định</td>
                                <td>Dựa vào kết quả</td>
                                <td>Dựa vào cảm xúc</td>
                                <td>Dựa vào sự đồng thuận</td>
                                <td>Dựa trên dữ liệu và phân tích</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-4 py-2 font-semibold">Phản ứng khi bị stress</td>
                                <td>Trở nên cứng rắn hơn</td>
                                <td>Tìm kiếm sự chú ý và hỗ trợ</td>
                                <td>Thu mình và nhẫn nhịn</td>
                                <td>Phân tích quá mức và né tránh</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-2 font-semibold">Cách học hiệu quả</td>
                                <td>Hành động thực tế</td>
                                <td>Thảo luận nhóm</td>
                                <td>Lặp lại và làm chậm</td>
                                <td>Đọc – phân tích logic</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                },
                {
                    id: "block_type4",
                    code: (
                    <div class="popup_wrapper_inner_4">
                        <h1>PHÂN TÍCH 4 KIỂU TÍNH CÁCH DISC</h1>
                        <div class="video_group">
                            <iframe 
                            allowfullscreen
                            src="https://www.youtube.com/embed/VWSBxKfbjno">
                            </iframe>
                        </div>
                    </div>
                    )
                },
                {
                    id: "block_type5",
                    code: (
                    <div class="popup_wrapper_inner_5">
                        <button class='link_button' onClick={()=>{navigate('/DISC')}}>Xem chỉ số của bạn<i class="fa-solid fa-arrow-right"></i>
                        <div className="star-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                            <div className="star-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}>
                                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path>
                            </svg>
                            </div>
                        </button>
                    </div>
                    )
                }
                
        ]
        },
    ]

    useEffect(()=>{
        const img_popup = document.getElementsByClassName('container');

        const information_1 = document.getElementsByClassName('Question_block');
        const information_2 = document.getElementsByClassName('slide');
        const bg = document.getElementById("bg");
        const moon = document.getElementById("moon");
        const mountain = document.getElementById("mountain");
        const road = document.getElementById("road");
        const text = document.getElementById("text");
        const container = document.getElementsByClassName('container');
        const timeline = document.getElementsByClassName('timeline');
        const slider = document.querySelector(".testimonial-slider");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        const testimonials = document.querySelectorAll(".testimonial-card");
        const totalTestimonials = testimonials.length;
        let index = 0;
        let first_time = true;



        for(let i = 0; i < img_popup.length; i++){
            img_popup[i].onclick = () =>{
                console.log(imageData[i])
                setIsExpanded(imageData[i]);
                document.body.style.overflow = "hidden";
            }
        }

        for(let i = 0; i < information_1.length; i++){
            information_1[i].onclick = () =>{
                information_2[i].classList.toggle('slide_open');
            }
        } 
    

        function scrollParalaxHome(){
            let value = window.scrollY;
            console.log(value)
            if(value > 2200 && first_time){
               timeline[0].classList.add('animate')
               for(let i = 0; i < container.length; i++){
                    container[i].classList.add('animate2')
               }
               first_time =false
               console.log('oke')
            }
            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text.style.top = value * 1 + 'px';
        }

            
        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        



    
        // Nút "Next"
        nextBtn.addEventListener("click", function () {
            index = (index + 1) % totalTestimonials;
            updateSlider();
        });
    
        // Nút "Prev"
        prevBtn.addEventListener("click", function () {
            index = (index - 1 + totalTestimonials) % totalTestimonials;
            updateSlider();
        });
        window.addEventListener("scroll", scrollParalaxHome)
    
        // Tự động chuyển slider mỗi 3 giây

        return () => {
            window.removeEventListener("scroll", scrollParalaxHome);
          };

    },[])




    return(
        <React.Fragment>
            <div className='wrap'>
                <div className='main_img'>



                    

                    <div className="stars_wrapper" id="stars">
                    <div class="star" style={{top:"19.8052%", left:"41.9932%", width:"1.89984px", height:"1.89984px", animationDelay:"3.05505s"}}></div><div class="star" style={{top:"75.0558%", left:"61.5046%", width:"2.65074px", height:"2.65074px", animationDelay:"2.51227s"}}></div><div class="star" style={{top:"91.8745%", left:"4.79258%", width:"0.273154px", height:"0.273154px", animationDelay:"2.62305s"}}></div><div class="star" style={{top:"50.0144%", left:"53.123%", width:"2.68939px", height:"2.68939px", animationDelay:"2.32408s"}}></div><div class="star" style={{top:"48.3947%", left:"60.5718%", width:"0.935171px", height:"0.935171px", animationDelay:"0.524603s"}}></div><div class="star" style={{top:"96.3899%", left:"1.83341%", width:"0.806714px", height:"0.806714px", animationDelay:"4.14544s"}}></div><div class="star" style={{top:"49.5446%", left:"54.7812%", width:"1.92081px", height:"1.92081px", animationDelay:"3.63123s"}}></div><div class="star" style={{top:"7.8947%", left:"86.8002%", width:"0.884967px", height:"0.884967px", animationDelay:"1.35296s"}}></div><div class="star" style={{top:"27.6578%", left:"17.5039%", width:"1.30815px", height:"1.30815px", animationDelay:"1.99237s"}}></div><div class="star" style={{top:"0.913537%", left:"7.22867%", width:"2.89608px", height:"2.89608px", animationDelay:"0.043261s"}}></div><div class="star" style={{top:"1.36024%", left:"29.9772%", width:"0.947202px", height:"0.947202px", animationDelay:"4.0915s"}}></div><div class="star" style={{top:"9.84494%", left:"85.0621%", width:"2.86702px", height:"2.86702px", animationDelay:"0.0155516s"}}></div><div class="star" style={{top:"95.7617%", left:"49.9693%", width:"0.370293px", height:"0.370293px", animationDelay:"4.77532s"}}></div><div class="star" style={{top:"97.2189%", left:"7.23999%", width:"1.94328px", height:"1.94328px", animationDelay:"0.68787s"}}></div><div class="star" style={{top:"86.9303%", left:"93.2047%", width:"2.4647px", height:"2.4647px", animationDelay:"4.37854s"}}></div><div class="star" style={{top:"42.9158%", left:"98.2304%", width:"0.0515086px", height:"0.0515086px", animationDelay:"0.752162s"}}></div><div class="star" style={{top:"38.5891%", left:"68.3747%", width:"2.18105px", height:"2.18105px", animationDelay:"3.98925s"}}></div><div class="star" style={{top:"77.3506%", left:"31.6645%", width:"0.0201579px", height:"0.0201579px", animationDelay:"0.0438948s"}}></div><div class="star" style={{top:"14.1308%", left:"81.8129%", width:"1.28826px", height:"1.28826px", animationDelay:"2.35296s"}}></div><div class="star" style={{top:"90.2069%", left:"95.4614%", width:"1.16672px", height:"1.16672px", animationDelay:"4.67372s"}}></div><div class="star" style={{top:"81.7658%", left:"69.2558%", width:"0.210943px", height:"0.210943px", animationDelay:"3.57772s"}}></div><div class="star" style={{top:"90.7208%", left:"95.4745%", width:"2.4339px", height:"2.4339px", animationDelay:"4.653s"}}></div><div class="star" style={{top:"65.542%", left:"55.8737%", width:"2.00849px", height:"2.00849px", animationDelay:"2.34581s"}}></div><div class="star" style={{top:"39.9606%", left:"34.0807%", width:"1.24762px", height:"1.24762px", animationDelay:"1.05648s"}}></div><div class="star" style={{top:"84.2229%", left:"28.1237%", width:"0.899002px", height:"0.899002px", animationDelay:"1.28051s"}}></div><div class="star" style={{top:"48.3216%", left:"46.7178%", width:"1.37941px", height:"1.37941px", animationDelay:"2.46729s"}}></div><div class="star" style={{top:"60.2399%", left:"60.5209%", width:"2.5825px", height:"2.5825px", animationDelay:"3.49507s"}}></div><div class="star" style={{top:"52.7124%", left:"59.8149%", width:"2.62498px", height:"2.62498px", animationDelay:"2.84826s"}}></div><div class="star" style={{top:"8.69818%", left:"28.0854%", width:"1.35819px", height:"1.35819px", animationDelay:"1.22742s"}}></div><div class="star" style={{top:"24.8536%", left:"40.653%", width:"2.27053px", height:"2.27053px", animationDelay:"4.6389s"}}></div><div class="star" style={{top:"61.241%", left:"65.4757%", width:"2.39857px", height:"2.39857px", animationDelay:"3.22073s"}}></div><div class="star" style={{top:"35.0161%", left:"2.89031%", width:"1.50062px", height:"1.50062px", animationDelay:"4.43821s"}}></div><div class="star" style={{top:"90.8031%", left:"21.0381%", width:"2.09884px", height:"2.09884px", animationDelay:"2.60551s"}}></div><div class="star" style={{top:"54.0546%", left:"23.8115%", width:"2.33233px", height:"2.33233px", animationDelay:"1.55965s"}}></div><div class="star" style={{top:"48.7482%", left:"26.3681%", width:"1.74201px", height:"1.74201px", animationDelay:"3.55362s"}}></div><div class="star" style={{top:"85.9551%", left:"37.7233%", width:"1.76759px", height:"1.76759px", animationDelay:"3.45691s"}}></div><div class="star" style={{top:"28.3464%", left:"63.9856%", width:"2.23706px", height:"2.23706px", animationDelay:"0.533519s"}}></div><div class="star" style={{top:"10.6966%", left:"92.065%", width:"1.42894px", height:"1.42894px", animationDelay:"3.58798s"}}></div><div class="star" style={{top:"86.4524%", left:"61.3166%", width:"1.67549px", height:"1.67549px", animationDelay:"0.160154s"}}></div><div class="star" style={{top:"20.6215%", left:"78.0789%", width:"0.139686px", height:"0.139686px", animationDelay:"1.8011s"}}></div><div class="star" style={{top:"4.52562%", left:"59.551%", width:"0.321204px", height:"0.321204px", animationDelay:"2.40128s"}}></div><div class="star" style={{top:"19.8703%", left:"96.7173%", width:"2.02616px", height:"2.02616px", animationDelay:"2.88542s"}}></div><div class="star" style={{top:"51.2892%", left:"65.6423%", width:"2.30063px", height:"2.30063px", animationDelay:"3.58723s"}}></div><div class="star" style={{top:"40.7673%", left:"38.4031%", width:"1.15836px", height:"1.15836px", animationDelay:"0.752357s"}}></div><div class="star" style={{top:"12.0494%", left:"29.2855%", width:"2.07737px", height:"2.07737px", animationDelay:"0.129367s"}}></div><div class="star" style={{top:"56.074%", left:"55.6455%", width:"0.667634px", height:"0.667634px", animationDelay:"4.2414s"}}></div><div class="star" style={{top:"16.8898%", left:"14.4695%", width:"0.199028px", height:"0.199028px", animationDelay:"2.45869s"}}></div><div class="star" style={{top:"12.7961%", left:"30.7607%", width:"2.22977px", height:"2.22977px", animationDelay:"0.392644s"}}></div><div class="star" style={{top:"4.1732%", left:"82.8166%", width:"0.157482px", height:"0.157482px", animationDelay:"3.52949s"}}></div><div class="star" style={{top:"95.8148%", left:"89.9964%", width:"0.150518px", height:"0.150518px", animationDelay:"1.26684s"}}></div><div class="star" style={{top:"69.0529%", left:"44.1527%", width:"1.00274px", height:"1.00274px", animationDelay:"2.79066s"}}></div><div class="star" style={{top:"91.9103%", left:"28.2756%", width:"0.554815px", height:"0.554815px", animationDelay:"4.10934s"}}></div><div class="star" style={{top:"67.1543%", left:"2.52404%", width:"2.71684px", height:"2.71684px", animationDelay:"4.10186s"}}></div><div class="star" style={{top:"76.5921%", left:"32.2153%", width:"1.20503px", height:"1.20503px", animationDelay:"3.03109s"}}></div><div class="star" style={{top:"71.1146%", left:"86.1181%", width:"2.03417px", height:"2.03417px", animationDelay:"4.17182s"}}></div><div class="star" style={{top:"98.984%", left:"58.3372%", width:"1.66486px", height:"1.66486px", animationDelay:"2.49495s"}}></div><div class="star" style={{top:"68.3667%", left:"5.9808%", width:"2.84149px", height:"2.84149px", animationDelay:"1.85223s"}}></div><div class="star" style={{top:"37.4355%", left:"63.0297%", width:"1.40763px", height:"1.40763px", animationDelay:"0.241236s"}}></div><div class="star" style={{top:"87.2186%", left:"61.3452%", width:"1.66853px", height:"1.66853px", animationDelay:"2.2465s"}}></div><div class="star" style={{top:"29.156%", left:"17.6033%", width:"2.75829px", height:"2.75829px", animationDelay:"2.87976s"}}></div><div class="star" style={{top:"72.0194%", left:"23.0451%", width:"1.80714px", height:"1.80714px", animationDelay:"3.22707s"}}></div><div class="star" style={{top:"3.89549%", left:"76.3431%", width:"1.75696px", height:"1.75696px", animationDelay:"4.45922s"}}></div><div class="star" style={{top:"57.0093%", left:"13.907%", width:"0.144961px", height:"0.144961px", animationDelay:"1.92393s"}}></div><div class="star" style={{top:"9.9969%", left:"76.5062%", width:"1.9143px", height:"1.9143px", animationDelay:"2.2912s"}}></div><div class="star" style={{top:"15.8077%", left:"11.8557%", width:"2.68745px", height:"2.68745px", animationDelay:"1.73024s"}}></div><div class="star" style={{top:"37.3922%", left:"27.2212%", width:"1.98984px", height:"1.98984px", animationDelay:"4.77044s"}}></div><div class="star" style={{top:"32.8497%", left:"15.9889%", width:"0.416604px", height:"0.416604px", animationDelay:"0.267435s"}}></div><div class="star" style={{top:"54.9699%", left:"54.2799%", width:"0.977832px", height:"0.977832px", animationDelay:"0.446749s"}}></div><div class="star" style={{top:"92.9154%", left:"11.2855%", width:"2.20789px", height:"2.20789px", animationDelay:"3.39286s"}}></div><div class="star" style={{top:"46.0172%", left:"65.8658%", width:"1.02454px", height:"1.02454px", animationDelay:"1.04196s"}}></div><div class="star" style={{top:"75.1557%", left:"22.5968%", width:"0.101426px", height:"0.101426px", animationDelay:"1.75096s"}}></div><div class="star" style={{top:"85.5141%", left:"31.7787%", width:"0.335304px", height:"0.335304px", animationDelay:"1.01035s"}}></div><div class="star" style={{top:"99.9053%", left:"33.1384%", width:"0.477101px", height:"0.477101px", animationDelay:"0.684641s"}}></div><div class="star" style={{top:"36.6028%", left:"54.9858%", width:"2.10527px", height:"2.10527px", animationDelay:"1.85659s"}}></div><div class="star" style={{top:"4.63048%", left:"85.1755%", width:"0.0166235px", height:"0.0166235px", animationDelay:"0.0761788s"}}></div><div class="star" style={{top:"24.9586%", left:"12.0708%", width:"2.21396px", height:"2.21396px", animationDelay:"3.07074s"}}></div><div class="star" style={{top:"40.7367%", left:"7.69788%", width:"2.76912px", height:"2.76912px", animationDelay:"3.91604s"}}></div><div class="star" style={{top:"61.803%", left:"38.9154%", width:"0.398273px", height:"0.398273px", animationDelay:"0.367916s"}}></div><div class="star" style={{top:"75.5764%", left:"64.5252%", width:"0.560666px", height:"0.560666px", animationDelay:"1.81791s"}}></div><div class="star" style={{top:"76.8092%", left:"47.2251%", width:"2.04297px", height:"2.04297px", animationDelay:"4.14461s"}}></div><div class="star" style={{top:"53.4326%", left:"25.4184%", width:"1.07925px", height:"1.07925px", animationDelay:"3.92808s"}}></div><div class="star" style={{top:"58.5661%", left:"39.3358%", width:"1.62001px", height:"1.62001px", animationDelay:"4.318s"}}></div><div class="star" style={{top:"82.5682%", left:"43.666%", width:"1.23392px", height:"1.23392px", animationDelay:"3.20827s"}}></div><div class="star" style={{top:"35.6025%", left:"19.9779%", width:"1.84076px", height:"1.84076px", animationDelay:"1.11409s"}}></div><div class="star" style={{top:"87.2739%", left:"83.8633%", width:"0.811251px", height:"0.811251px", animationDelay:"2.25023s"}}></div><div class="star" style={{top:"60.3708%", left:"0.15906%", width:"2.90076px", height:"2.90076px", animationDelay:"2.00416s"}}></div><div class="star" style={{top:"6.0973%", left:"87.4311%", width:"1.22179px", height:"1.22179px", animationDelay:"4.32862s"}}></div><div class="star" style={{top:"61.758%", left:"31.1689%", width:"1.29821px", height:"1.29821px", animationDelay:"1.43134s"}}></div><div class="star" style={{top:"80.6667%", left:"3.83406%", width:"2.3584px", height:"2.3584px", animationDelay:"0.693529s"}}></div><div class="star" style={{top:"71.6217%", left:"89.0661%", width:"0.468248px", height:"0.468248px", animationDelay:"3.0579s"}}></div><div class="star" style={{top:"89.1977%", left:"98.3313%", width:"1.93531px", height:"1.93531px", animationDelay:"1.06172s"}}></div><div class="star" style={{top:"35.3784%", left:"29.0264%", width:"0.789448px", height:"0.789448px", animationDelay:"1.4523s"}}></div><div class="star" style={{top:"76.8468%", left:"34.1495%", width:"2.13164px", height:"2.13164px", animationDelay:"1.64383s"}}></div><div class="star" style={{top:"7.97917%", left:"26.0764%", width:"1.74417px", height:"1.74417px", animationDelay:"4.60061s"}}></div><div class="star" style={{top:"35.4058%", left:"33.0381%", width:"0.851303px", height:"0.851303px", animationDelay:"4.62504s"}}></div><div class="star" style={{top:"75.6567%", left:"40.4932%", width:"2.64226px", height:"2.64226px", animationDelay:"2.35207s"}}></div><div class="star" style={{top:"61.6847%", left:"57.1589%", width:"0.373004px", height:"0.373004px", animationDelay:"0.0561002s"}}></div><div class="star" style={{top:"67.2273%", left:"15.5222%", width:"0.28525px", height:"0.28525px", animationDelay:"3.22356s"}}></div><div class="star" style={{top:"47.6526%", left:"0.422941%", width:"1.30639px", height:"1.30639px", animationDelay:"3.20507s"}}></div><div class="star" style={{top:"50.4993%", left:"82.1512%", width:"0.0855203px", height:"0.0855203px", animationDelay:"2.44408s"}}></div><div class="star" style={{top:"61.603%", left:"3.05892%", width:"0.313271px", height:"0.313271px", animationDelay:"2.2697s"}}></div><div class="star" style={{top:"39.6009%", left:"43.5297%", width:"0.912285px", height:"0.912285px", animationDelay:"2.8693s"}}></div><div class="star" style={{top:"9.01501%", left:"6.70229%", width:"0.83307px", height:"0.83307px", animationDelay:"2.59776s"}}></div><div class="star" style={{top:"52.4585%", left:"57.8514%", width:"2.10764px", height:"2.10764px", animationDelay:"0.225242s"}}></div><div class="star" style={{top:"19.0931%", left:"47.9641%", width:"1.88956px", height:"1.88956px", animationDelay:"3.80356s"}}></div><div class="star" style={{top:"8.92433%", left:"21.3369%", width:"1.40071px", height:"1.40071px", animationDelay:"2.54941s"}}></div><div class="star" style={{top:"55.5721%", left:"74.2876%", width:"0.440671px", height:"0.440671px", animationDelay:"1.12178s"}}></div><div class="star" style={{top:"89.9591%", left:"58.0137%", width:"0.358183px", height:"0.358183px", animationDelay:"3.20409s"}}></div><div class="star" style={{top:"3.55072%", left:"75.1401%", width:"1.14014px", height:"1.14014px", animationDelay:"4.32835s"}}></div><div class="star" style={{top:"54.6253%", left:"13.1557%", width:"2.87987px", height:"2.87987px", animationDelay:"1.62804s"}}></div><div class="star" style={{top:"61.0378%", left:"33.7639%", width:"0.580464px", height:"0.580464px", animationDelay:"1.39952s"}}></div><div class="star" style={{top:"7.06647%", left:"19.804%", width:"1.69995px", height:"1.69995px", animationDelay:"1.20982s"}}></div><div class="star" style={{top:"97.8761%", left:"23.3749%", width:"2.81919px", height:"2.81919px", animationDelay:"1.97439s"}}></div><div class="star" style={{top:"20.5195%", left:"45.5781%", width:"1.28715px", height:"1.28715px", animationDelay:"3.10643s"}}></div><div class="star" style={{top:"92.1834%", left:"71.4992%", width:"1.46869px", height:"1.46869px", animationDelay:"2.36385s"}}></div><div class="star" style={{top:"14.0602%", left:"40.342%", width:"2.4997px", height:"2.4997px", animationDelay:"0.315563s"}}></div><div class="star" style={{top:"98.8909%", left:"79.9113%", width:"1.94223px", height:"1.94223px", animationDelay:"2.60561s"}}></div><div class="star" style={{top:"93.1432%", left:"81.9088%", width:"1.76904px", height:"1.76904px", animationDelay:"0.245575s"}}></div><div class="star" style={{top:"0.88491%", left:"12.4494%", width:"0.390803px", height:"0.390803px", animationDelay:"2.21185s"}}></div><div class="star" style={{top:"3.6341%", left:"98.4111%", width:"0.625567px", height:"0.625567px", animationDelay:"0.149832s"}}></div><div class="star" style={{top:"87.7769%", left:"69.1516%", width:"2.74822px", height:"2.74822px", animationDelay:"0.560163s"}}></div><div class="star" style={{top:"1.07756%", left:"22.6205%", width:"0.582482px", height:"0.582482px", animationDelay:"1.3343s"}}></div><div class="star" style={{top:"92.521%", left:"77.4879%", width:"0.0657048px", height:"0.0657048px", animationDelay:"0.498757s"}}></div><div class="star" style={{top:"65.5838%", left:"4.38296%", width:"0.161336px", height:"0.161336px", animationDelay:"3.87357s"}}></div><div class="star" style={{top:"85.1296%", left:"8.96637%", width:"0.452308px", height:"0.452308px", animationDelay:"0.677878s"}}></div><div class="star" style={{top:"46.1433%", left:"66.7572%", width:"2.79103px", height:"2.79103px", animationDelay:"4.14635s"}}></div><div class="star" style={{top:"34.5594%", left:"84.8377%", width:"2.2811px", height:"2.2811px", animationDelay:"2.13787s"}}></div><div class="star" style={{top:"51.0217%", left:"56.662%", width:"0.896952px", height:"0.896952px", animationDelay:"3.53491s"}}></div><div class="star" style={{top:"64.7434%", left:"26.5646%", width:"0.200174px", height:"0.200174px", animationDelay:"1.73817s"}}></div><div class="star" style={{top:"77.1561%", left:"32.9349%", width:"1.03442px", height:"1.03442px", animationDelay:"1.16673s"}}></div><div class="star" style={{top:"26.0468%", left:"10.0171%", width:"2.45585px", height:"2.45585px", animationDelay:"1.0458s"}}></div><div class="star" style={{top:"44.5205%", left:"63.4678%", width:"1.72282px", height:"1.72282px", animationDelay:"3.43079s"}}></div><div class="star" style={{top:"5.00827%", left:"60.3657%", width:"0.820728px", height:"0.820728px", animationDelay:"0.303486s"}}></div><div class="star" style={{top:"35.6943%", left:"56.351%", width:"0.436219px", height:"0.436219px", animationDelay:"2.99894s"}}></div><div class="star" style={{top:"77.8272%", left:"73.385%", width:"2.25888px", height:"2.25888px", animationDelay:"4.06425s"}}></div><div class="star" style={{top:"73.8209%", left:"17.8165%", width:"2.97201px", height:"2.97201px", animationDelay:"4.8107s"}}></div><div class="star" style={{top:"65.6375%", left:"67.5483%", width:"2.35443px", height:"2.35443px", animationDelay:"0.136991s"}}></div><div class="star" style={{top:"7.74261%", left:"0.585533%", width:"0.201226px", height:"0.201226px", animationDelay:"0.808115s"}}></div><div class="star" style={{top:"94.274%", left:"5.93419%", width:"0.902153px", height:"0.902153px", animationDelay:"0.724916s"}}></div><div class="star" style={{top:"74.0051%", left:"62.702%", width:"0.0783613px", height:"0.0783613px", animationDelay:"0.996819s"}}></div><div class="star" style={{top:"2.68122%", left:"27.309%", width:"2.70733px", height:"2.70733px", animationDelay:"0.910121s"}}></div><div class="star" style={{top:"97.5819%", left:"77.2271%", width:"0.856993px", height:"0.856993px", animationDelay:"2.86282s"}}></div><div class="star" style={{top:"87.8094%", left:"68.726%", width:"2.49258px", height:"2.49258px", animationDelay:"3.91211s"}}></div><div class="star" style={{top:"75.2596%", left:"5.31249%", width:"1.07558px", height:"1.07558px", animationDelay:"2.51774s"}}></div><div class="star" style={{top:"61.1847%", left:"76.2406%", width:"2.6921px", height:"2.6921px", animationDelay:"2.17007s"}}></div><div class="star" style={{top:"87.6815%", left:"39.9403%", width:"1.40928px", height:"1.40928px", animationDelay:"1.42851s"}}></div><div class="star" style={{top:"9.07399%", left:"41.9768%", width:"0.490658px", height:"0.490658px", animationDelay:"3.65695s"}}></div><div class="star" style={{top:"56.5318%", left:"17.7716%", width:"1.90149px", height:"1.90149px", animationDelay:"3.88786s"}}></div><div class="star" style={{top:"0.0641631%", left:"0.720272%", width:"2.50248px", height:"2.50248px", animationDelay:"2.65134s"}}></div><div class="star" style={{top:"7.27275%", left:"80.3623%", width:"1.96018px", height:"1.96018px", animationDelay:"1.6958s"}}></div>
                    </div>
          
                    <div class="tarot-card-home_2 floating absolute top-1/3 right-[15%] w-16 h-24 md:w-20 md:h-32 rotate-12 z-10">
                        <div class="w-full h-full flex items-center justify-center">
                            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#D4AF37" stroke-width="1" fill="none"></circle>
                                <path d="M12 2V22M2 12H22" stroke="#D4AF37" stroke-width="1"></path>
                            </svg>
                        </div>
                    </div>


                    <div class="tarot-card-home floating-slow absolute top-1/4 left-[10%] w-16 h-24 md:w-20 md:h-32 -rotate-12 z-10">
                        <div class="w-full h-full flex items-center justify-center">
                            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D4AF37" stroke-width="1" fill="none"></path>
                            </svg>
                        </div>
                    </div>


                    <div class="constellation" style={{top: "15%", left: "15%", width: "200px", height: "200px"}}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20,20 L40,30 L60,20 L80,30 L60,50 L40,70 L20,50 Z" stroke="#D4AF37" stroke-width="0.5"></path>
                            <circle cx="20" cy="20" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="40" cy="30" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="60" cy="20" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="80" cy="30" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="60" cy="50" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="40" cy="70" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="20" cy="50" r="1.5" fill="#D4AF37"></circle>
                        </svg>
                    </div>


                    <div class="constellation" style={{top: "60%", right: "15%", width: "150px", height: "150px"}}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,50 L30,20 L50,10 L70,20 L90,50 L70,80 L50,90 L30,80 Z" stroke="#D4AF37" stroke-width="0.5"></path>
                            <circle cx="10" cy="50" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="30" cy="20" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="50" cy="10" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="70" cy="20" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="90" cy="50" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="70" cy="80" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="50" cy="90" r="1.5" fill="#D4AF37"></circle>
                            <circle cx="30" cy="80" r="1.5" fill="#D4AF37"></circle>
                        </svg>
                    </div>


                    <div class="floating absolute bottom-1/3 right-[20%] w-16 h-16 md:w-24 md:h-24 z-10">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="#D4AF37" stroke-width="1"></circle>
                            <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M15 85 L85 15" stroke="#D4AF37" stroke-width="0.5"></path>
                            <circle cx="50" cy="50" r="30" stroke="#D4AF37" stroke-width="0.5"></circle>
                            <circle cx="50" cy="50" r="15" stroke="#D4AF37" stroke-width="0.5"></circle>
                        </svg>
                    </div>

                    <div class="z-20 text-center">

                    <div class="mb-8 relative">
                        <svg class="mb-center w-32 h-32 md:w-40 md:h-40 mx-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                         
                            <circle cx="100" cy="100" r="95" stroke="#D4AF37" stroke-width="2"></circle>
                            
                           
                            <circle cx="100" cy="100" r="75" stroke="#D4AF37" stroke-width="1.5"></circle>
                          
                            <path d="M100 25 L100 175" stroke="#D4AF37" stroke-width="1"></path>
                            <path d="M25 100 L175 100" stroke="#D4AF37" stroke-width="1"></path>
                            <path d="M38 38 L162 162" stroke="#D4AF37" stroke-width="1"></path>
                            <path d="M38 162 L162 38" stroke="#D4AF37" stroke-width="1"></path>
                            
                          
                            <circle cx="100" cy="40" r="8" stroke="#D4AF37" stroke-width="1"></circle>
                            <rect x="92" y="132" width="16" height="16" stroke="#D4AF37" stroke-width="1"></rect>
                            <path d="M40 100 A20 20 0 0 1 60 80 A20 20 0 0 1 80 100" stroke="#D4AF37" stroke-width="1" fill="none"></path>
                            <path d="M120 100 A20 20 0 0 0 140 80 A20 20 0 0 0 160 100" stroke="#D4AF37" stroke-width="1" fill="none"></path>
                            
                        
                            <circle cx="100" cy="100" r="25" fill="url(#goldGradient)"></circle>
                            <path d="M100 85 L100 115 M85 100 L115 100" stroke="#050505" stroke-width="2"></path>
                            <circle cx="100" cy="100" r="10" stroke="#050505" stroke-width="1.5" fill="none"></circle>
                          
                            <defs>
                                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#D4AF37"></stop>
                                    <stop offset="50%" stop-color="#F2D06B"></stop>
                                    <stop offset="100%" stop-color="#D4AF37"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                        <h1 class="golden-text golden-glow text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Lifemap</h1>
                        <h2 class="golden-text text-xl md:text-2xl lg:text-3xl mb-8">Illuminate Your Path</h2>
                
                        <p class="text-gray-300 max-w-md mx-auto mb-10 TNR text-lg">Discover your destiny through personalized spiritual guidance and astrological insights.</p>
                    
                        <button class="golden-button py-3 px-8 rounded-full text-lg font-semibold">Start Your Journey</button>
                    </div>

                    <div class="crystal-ball floating-slower absolute bottom-1/4 left-[20%] w-20 h-20 md:w-28 md:h-28 z-10"></div>

                    {/* <div className='paralax'>
                        <img src='/FortuneTeller/background1/bg.jpg' id='bg'/>
                        <img src='/FortuneTeller/background1/moon.png' id='moon'/>
                        <img src='/FortuneTeller/background1/mountain.png' id='mountain'/>
                        <img src='/FortuneTeller/background1/road.png' id='road'/>

                        <div className='main_img_text' id='text'>
                                <h2>Hành Trình Số Phận</h2>
                                <p className='sub_title'>"Soi tỏ vận mệnh – Khai mở tiềm năng!"</p>
                        </div>
                        
                    </div>
                    <section className='shooting_stars'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section> */}

                </div>
                
                <div className='introduction'>
                            <div className='intro_img'>
                                <img src='/FortuneTeller/bg/horoscope_2.png'/>
                            </div>
                            <div className='intro_Text'>
                                <p className='intro_title'>Giới thiệu</p>
                                <h1>Thông điệp đến bạn</h1>
                                <p className='intro_content'>“Bạn có bao giờ tự hỏi vì sao mình lại có mặt trên thế giới này?
                                Vũ trụ luôn gửi đến chúng ta những tín hiệu qua Tarot, Chiêm tinh và Thần số học. Hãy giải mã những bí ẩn đó, khám phá con đường dành riêng cho bạn và mở ra một tương lai đầy tiềm năng!”</p>
                                <div className='intro_Button'>
                                    <a href='#timeline_begin'>Xem thêm</a>
                                </div>
                            </div>                      
                        </div>

                        <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>    



 
                    


            <div className='section' id='middle'>
            </div>  



            <div className='introduction_2' id='contrast'>
                    <div className='intro_2_wrapper intro_2_center'>
                    <h1>Những Câu Hỏi Định Mệnh</h1>
                    <p className='intro_content intro_3_content'>Mỗi câu hỏi là một cánh cửa dẫn lối đến sự hiểu biết sâu sắc hơn về chính bạn và cuộc sống. Hãy để các công cụ huyền bí giúp bạn khám phá câu trả lời!</p>
                    </div>
                </div>


                <div className='Question_wrapper'>
                            <div className='tool_back_img'>
                                <img src='/FortuneTeller/bg/background_11.png'/>
                            </div>         
                    <div className='Question_container'>
                        <div className='Question_box'>
                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/self_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2>Về Bản Thân</h2>
                                <ul>
                                    <li>Điểm mạnh và điểm yếu thực sự của tôi là gì?</li>
                                    <li>Tôi sinh ra với sứ mệnh gì?</li>
                                    <li>Làm thế nào để sống đúng với bản chất của mình?</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Question_box'>

                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/love_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2>Về Tình Cảm</h2>
                                <ul>
                                    <li>Người ấy có phải là tri kỷ của tôi không?</li>
                                    <li>Làm thế nào để cải thiện mối quan hệ hiện tại?</li>
                                    <li>Tôi có đang yêu đúng người không?</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Question_box'>
                            <div className='Question_img'>
                                <img src='/FortuneTeller/bg/career_icon.png'/>
                            </div>
                            <div className='Question_content'>
                                <h2> Về Công Việc</h2>
                                <ul>
                                    <li>Tôi có đang đi đúng hướng trong sự nghiệp không?</li>
                                    <li>Nghề nghiệp nào phù hợp với tôi nhất?</li>
                                    <li>Làm thế nào để thu hút tài lộc và thành công?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='section' id='middle2'>
                </div>  

                <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>  



                <div className='introduction_2'  id='timeline_begin'>
                    <div className='intro_2_wrapper'>
                    <p className='intro_title'>Công cụ</p>
                    <h1>Bạn sẽ chọn con đường nào?</h1>
                    <p className='intro_content intro_2_content'>Vũ trụ luôn gửi đến chúng ta những tín hiệu ẩn giấu. Mỗi công cụ—Tarot, Chiêm tinh, Thần số học—đều là một chìa khóa giúp bạn khám phá bản thân và định mệnh. Hãy lắng nghe trực giác và chọn con đường của riêng mình!</p>
                    <br/>
                    <p style={{color:"white"}} className='intro_content intro_2_content'>*Ấn vào từng mục để biết thêm thông tin</p>
                    </div>
                </div>


                <div className='timeline'>
                    <div className='container left-container'>
                       
                        <img src='/FortuneTeller/timeline_icon_tarot.png'/>
                        <div className='text-box'>
                            <div className='box_img box_1'></div>
                            <h2>🔮 Tarot</h2>
                            <small>Thông Điệp Vũ Trụ</small>
                            <p>Khám phá những lá bài Tarot để tìm kiếm câu trả lời, hiểu rõ bản thân và đón nhận những thông điệp sâu sắc từ vũ trụ.</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className='container right-container'>
                        <img src='/FortuneTeller/timeline_icon_matrix.png'/>
                        <div className='text-box'>
                            <div className='box_img box_2'></div>
                            <h2>🌌 Ma Trận Định Mệnh</h2>
                            <small>Chìa khóa cuộc đời</small>
                            <p>Dựa trên ngày sinh, ma trận định mệnh giúp bạn khám phá tiềm năng, sứ mệnh và con đường phát triển bản thân.</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className='container left-container'>
                     
                        <img src='/FortuneTeller/timeline_icon_numerology.png'/>
                        <div className='text-box'>
                            <div className='box_img box_3'></div>
                            <h2>🔢 Thần số học</h2>
                            <small>Bí mật con số</small>
                            <p>Những con sốs là tấm gương phản chiếu vận mệnh. Tìm hiểu con số chủ đạo và ý nghĩa ẩn sau ngày sinh của bạn!</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                    <div className='container right-container'>
                        <img src='/FortuneTeller/timeline_icon_horo.png'/>
                        <div className='text-box'>
                            <div className='box_img box_4'></div>
                            <h2>🌠 Bản đồ sao</h2>
                            <small>Khám phá bản đồ sao của bạn ngay hôm nay!</small>
                            <p> giúp bạn khám phá tính cách và tiềm năng dựa trên vị trí các hành tinh khi bạn sinh ra.</p>
                            <span className='right-container-arrow'></span>
                        </div>
                    </div>
                    <div className='container left-container'>
                        <img src='/FortuneTeller/timeline_icon_disc.png'/>
                        <div className='text-box'>
                            <div className='box_img box_5'></div>
                            <h2>🧠 DISC</h2>
                            <small>Làm bài DISC để hiểu rõ phong cách giao tiếp của bạn!</small>
                            <p>DISC là trắc nghiệm hành vi giúp bạn hiểu cách mình giao tiếp và phản ứng với thế giới.</p>
                            <span className='left-container-arrow'></span>
                        </div>
                    </div>
                </div>
      


                <div className="relative w-full">
                    {isExpanded && (
                        <div className="overlay" onClick={() => {
                            document.body.style.overflow = "auto";
                            setIsExpanded(false)
                        }}>
                        <div className="banner">
                            <img src={isExpanded.url} alt="Full" className="banner-img" />

                            <div className="wiki-content">
                            {isExpanded.content.map((block, i) => {
                                return(
                                    <div key={i} className='popup_wrapper'>
                                        {block.code}
                                    </div>
                                 
                                )
                            })}
                            </div>
                        </div>
                        </div>
                    )}

                </div>

                <div className='intro_2_img'>
                        <div className='split_img_wrapper'>
                        <img src='/FortuneTeller/bg/split_line_1.jpg'/>
                        </div>
                </div>   
                

                
                <div className='introduction_2'>
                    <div className='intro_2_wrapper'>
                    <p className='intro_title'>Nhận xét</p>
                    <h1>Đánh giá khách hàng</h1>
                    <p className='intro_content intro_2_content'>Vũ trụ luôn gửi đến chúng ta những tín hiệu ẩn giấu. Mỗi công cụ—Tarot, Chiêm tinh, Thần số học—đều là một chìa khóa giúp bạn khám phá bản thân và định mệnh. Hãy lắng nghe trực giác và chọn con đường của riêng mình!</p>
                    </div>
                </div>
                
                <section class="testimonial">
                    <div class="testimonial-container">
                        <div class="testimonial-slider">
                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img1.jpg" alt="Nguyễn Văn A"/>
                                <h3>Minh Hoàng</h3>
                                <p>(34 tuổi, Doanh nhân)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Trước đây, tôi luôn cảm thấy lạc lõng và không biết thực sự mình mạnh ở điểm nào. Sau khi làm bài phân tích thần số học, tôi nhận ra con số chủ đạo 7 của mình khiến tôi có xu hướng tìm kiếm sự thật và ham học hỏi. Điều này giúp tôi hiểu rõ bản thân hơn và tự tin theo đuổi con đường phát triển cá nhân. Giờ đây, tôi đã chọn ngành đào tạo và giảng dạy – đúng với thế mạnh của mình!</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img2.jpeg" alt="Trần Thị B"/>
                                <h3>Ngọc Anh</h3>
                                <p>(28 tuổi, Nhân sự)</p>
                                <p class="stars">⭐⭐⭐⭐</p>
                                <p class="review">Trước đây, tôi luôn cảm thấy lạc lõng và không biết thực sự mình mạnh ở điểm nào. Sau khi làm bài phân tích thần số học, tôi nhận ra con số chủ đạo 7 của mình khiến tôi có xu hướng tìm kiếm sự thật và ham học hỏi. Điều này giúp tôi hiểu rõ bản thân hơn và tự tin theo đuổi con đường phát triển cá nhân. Giờ đây, tôi đã chọn ngành đào tạo và giảng dạy – đúng với thế mạnh của mình</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img3.jpg" alt="Lê Văn C"/>
                                <h3>Thu Trang</h3>
                                <p>(24 tuổi, Freelancer)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Lần đầu tiên trải nghiệm trải bài Tarot, tôi không ngờ lại nhận được nhiều góc nhìn mới mẻ đến vậy. Tôi đã băn khoăn giữa việc tiếp tục công việc văn phòng hay chuyển hẳn sang làm tự do. Kết quả trải bài ba lá chỉ ra rằng đây là thời điểm thích hợp để tôi theo đuổi đam mê. Tôi đã dũng cảm đưa ra quyết định – và đúng như vậy, công việc freelancer của tôi giờ đây ổn định và khiến tôi hạnh phúc hơn bao giờ hết!</p>
                            </div>

                            <div class="testimonial-card">
                                <img src="/FortuneTeller/review/img4.jpg" alt="Lê Văn C"/>
                                <h3>Hải Nam</h3>
                                <p>(30 tuổi, Kỹ sư công nghệ)</p>
                                <p class="stars">⭐⭐⭐⭐⭐</p>
                                <p class="review">Tôi luôn tin rằng cuộc sống có sự sắp đặt kỳ diệu, nhưng chưa bao giờ tôi thấy rõ điều đó như khi kết hợp Thần số học và Tarot. Phân tích thần số học cho thấy tôi có con số 5 – yêu thích sự tự do và trải nghiệm. Còn trải bài Tarot đã giúp tôi tìm ra hướng đi phù hợp: khởi nghiệp trong lĩnh vực công nghệ sáng tạo. Nhờ những thông tin quý giá này, tôi đã mạnh dạn theo đuổi đam mê, và đến nay tôi chưa từng hối hận!</p>
                            </div>

                        </div>
                    </div>

                    <button class="prev-btn">❮</button>
                    <button class="next-btn">❯</button>
                </section>

         

            </div>
        </React.Fragment>
    )
}
export default Home