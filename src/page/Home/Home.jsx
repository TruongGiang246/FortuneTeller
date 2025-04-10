
import './HomeStyle.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home(){
    const [isExpanded, setIsExpanded] = useState(null)
    const navigate = useNavigate();
    const imageData = [
        {//box_1
            url: "/FortuneTeller/bg/background_8.png",
            content: [
                {
                    id: "block_type1",
                    code: (

                    <div class="popup_wrapper_inner_1">
                    
                        <div class="block_image">
                            <img src="/FortuneTeller/origin_tarot.jpeg"/>
                        </div>
                        <div class="block_content">
                            <h1>Lịch sử và Nguồn gốc của Tarot</h1>
                            <p>​Tarot là một bộ bài gồm 78 lá, được sử dụng như một công cụ để khám phá bản thân và tìm kiếm lời khuyên trong cuộc sống. Mỗi lá bài mang một hình ảnh và ý nghĩa riêng, phản ánh những khía cạnh khác nhau của trải nghiệm con người.</p>
                            <br/>
                            <p>Mặc dù nguồn gốc chính xác của Tarot vẫn còn nhiều tranh cãi, nhưng nhiều tài liệu cho thấy bộ bài này xuất hiện từ thế kỷ 15 tại miền Bắc nước Ý. Ban đầu, Tarot được sử dụng như một trò chơi giải trí, sau đó phát triển thành công cụ bói toán và tự khám phá bản thân</p>
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

                            <div class="box4_group_box">
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

                            <div class="box4_group_box">
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
                                    <li><b>Từ khóa:</b>Trực giác, mơ hồ, ẩn giấu.</li>
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
                        <div class="block_image">
                            <img src="/FortuneTeller/number_infor/Numerology_History-1.jpg"/>
                            </div>
                            <div class="block_content">
                                <h1>Lịch sử và Nguồn gốc của Tarot</h1>
                                <p>​Tarot là một bộ bài gồm 78 lá, được sử dụng như một công cụ để khám phá bản thân và tìm kiếm lời khuyên trong cuộc sống. Mỗi lá bài mang một hình ảnh và ý nghĩa riêng, phản ánh những khía cạnh khác nhau của trải nghiệm con người.</p>
                                <br/>
                                <p>Mặc dù nguồn gốc chính xác của Tarot vẫn còn nhiều tranh cãi, nhưng nhiều tài liệu cho thấy bộ bài này xuất hiện từ thế kỷ 15 tại miền Bắc nước Ý. Ban đầu, Tarot được sử dụng như một trò chơi giải trí, sau đó phát triển thành công cụ bói toán và tự khám phá bản thân</p>
                            </div>
                        </div>
                    )
            },
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
                        <h3>Chỉ số Biểu đạt (Expression/Destiny)</h3>
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
        console.log(window.scrollY)

        window.addEventListener("scroll", ()=>{
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
        })

        const slider = document.querySelector(".testimonial-slider");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
    
        let index = 0;
        const testimonials = document.querySelectorAll(".testimonial-card");
        const totalTestimonials = testimonials.length;
    
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
    
        // Tự động chuyển slider mỗi 3 giây


    },[])




    return(
        <React.Fragment>
            <div className='wrap'>
                <div className='main_img'>
                    <div className='paralax'>
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
                    </section>

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
                                    <p>Xem thêm</p>
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



                <div className='introduction_2'>
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