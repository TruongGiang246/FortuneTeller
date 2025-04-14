
import './Matrixdes.css'
import { useEffect, useState } from 'react';
import { energies, safeZone, karmaInfo, talentInfo, relationshipInfo, financialInfo } from './MatrixInfo';
function Matrixdes(){
    const [value, setValue] = useState([])



    useEffect(()=>{
      const ButtonSubmit = document.getElementById("buttonLmao");
      const days = document.getElementById('days').value;
      const months = document.getElementById('months').value;
      const years = document.getElementById('years').value;
      const impression = document.getElementById('impression');
      const safe = document.getElementById('safe_zone');
      const talent = document.getElementById('talent')
      const karmaText = document.getElementById('karma')
      const relationshipText = document.getElementById('relationship')
      const financialText = document.getElementById('financial')

 
      function Sum(dateString){
        let ans = 0;
        for(let i = 0; i < dateString.length; i++){
          let number = parseInt(dateString[i], 10);
          ans += number;
        }
        
        while (ans > 22) {
            ans = ans.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return ans;
      }
  
      function handleClick(){

        const HoTen = document.getElementById("Firstname").value
        const newDays = Sum([days]);
        const newYears = Sum([years])
        const karma = Sum([days, months, years]);
        const comfort_zone = Sum([newDays, months, newYears, karma])
        const number_6 = Sum([karma, comfort_zone]);
        const number_7 = Sum([newDays, comfort_zone]);
        const number_8 = Sum([months, comfort_zone]);
        const number_9 = Sum([newYears, comfort_zone]);
        const number_10 = Sum([number_6, number_9]);
        const number_11 = Sum([number_6, number_10]);
        const number_12 = Sum([number_9, number_10]);
        const number_13 = Sum([karma, number_6]);
        const number_14 = Sum([number_8, months]);
        const number_15 = Sum([newDays, number_7]);
        const number_16 = Sum([newYears, number_9]);
        const number_17 = Sum([newDays, months]);
        const number_18 = Sum([months, newYears]);
        const number_19 = Sum([newYears, karma]);
        const number_20 = Sum([karma, newDays]);
        const number_21 = Sum([number_7, comfort_zone]);
        const number_22 = Sum([number_8, comfort_zone]);
        const number_23 = Sum([number_17, comfort_zone]);
        const number_24 = Sum([number_23, number_17]);
        const number_25 = Sum([number_18, comfort_zone])
        const number_26 = Sum([number_25, number_18]);
        const number_27 = Sum([number_19, comfort_zone]);
        const number_28 = Sum([number_19, number_27]);
        const number_29 = Sum([number_20, comfort_zone]);
        const number_30 = Sum([number_29, number_20]);
  
  
        console.log(comfort_zone)
        
        impression.innerHTML = `
        <h2>${energies[newDays-1].title}</h2>
        <p>${energies[newDays-1].description}</p>
      `;
      
        safe.innerHTML = `
        <h2>${safeZone[comfort_zone-1].title}</h2>
        <p>${safeZone[comfort_zone-1].description}</p>
        `
  
        karmaText.innerHTML = karmaInfo[karma-1].content;
        relationshipText.innerHTML = relationshipInfo[number_6-1].content
        financialText.innerHTML = financialInfo[number_10-1].content
        talent.innerHTML = talentInfo[Number(months)-1].content;
  
        setValue([newDays, months, newYears, karma, comfort_zone, number_6, number_7,
          number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
          number_25, number_26, number_27, number_28, number_29, number_30
        ]);
        

        const matrix = [newDays, Number(months), newYears, karma, comfort_zone, number_6, number_7,
          number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
          number_25, number_26, number_27, number_28, number_29, number_30
        ]



      const storedUser = localStorage.getItem("user");

      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');      // 09
      const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
      const year = today.getFullYear();                          // 2025
      const randomNumber = Math.floor(Math.random() * 9) + 1;
    
      const formattedDate = `${day}-${month}-${year}`;
      console.log(formattedDate); // "09-04-2025"
    

      if (!storedUser) {
        // Nếu chưa có gì trong localStorage
        const user = {
          [HoTen]: {
            matrix: matrix,
            time: formattedDate,
            avt: randomNumber
          },
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User mới đã được lưu.");
      } else {
        // Nếu đã có user trong localStorage
        const user = JSON.parse(storedUser);

        if (!user[HoTen]) {
          // Nếu chưa có người dùng này
          user[HoTen] = { 
            matrix: matrix,
            time: formattedDate,
            avt: randomNumber
           };
          console.log("Đã thêm người dùng mới vào user.");
        } else {
          // Nếu đã có người dùng này, cập nhật numerology
          user[HoTen].matrix = matrix;
          if(!user[HoTen].time){
            user[HoTen].time = formattedDate,
            user[HoTen].avt = randomNumber
          }
          console.log("Đã cập nhật disc cho người dùng.");
        }

        // Lưu lại toàn bộ object user
        localStorage.setItem("user", JSON.stringify(user));
      }
        
      }



      ButtonSubmit.addEventListener("click", handleClick);
    },[])



    
    useEffect(()=>{
      const titleButton = document.body.getElementsByClassName('information_matrix_text');
      const infoGroups = document.body.getElementsByClassName('information_text_slide');

      for(let i = 0; i < titleButton.length; i++){
        titleButton[i].onclick = () =>{
          infoGroups[i].classList.toggle('ani');
        }
      }
    },[])

    

    return(
        <>
    <div className="wrap_Matrix">
    <div className="container_Matrix">

        <div className='matrix_header'>
          <div className='background_img'>
              <img src='/FortuneTeller/bg/background_12.png'/>

          </div>  
          <div className='matrix_header_sidebar'>

            <div className='matrix_header_content'>
              <div className='matrix_header_title'>
                    <h1>MA TRẬN ĐỊNH MỆNH</h1>
                </div>
              <div className='quote_img'>
                <img src='/FortuneTeller/bg/quote_icon.png'/>
                <p>Vận mệnh không phải là một con đường cố định, mà là tấm gương phản chiếu những lựa chọn, hành động và niềm tin của bạn. Hiểu rõ bản thân chính là chìa khóa để viết nên câu chuyện cuộc đời theo cách bạn mong muốn</p>
              </div>
              <div className='matrix_header_button_wrapper'>
                <div className='matrix_header_button'>
                  <a href='#matrix_begin'>Bắt đầu ngay</a>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className='title_number_wrapper'>
        <div className='title_number' id="matrix_begin">
            <h1>~Ma Trận Định Mệnh~<br/>Giải Mã Hành Trình Cuộc Đời</h1>
            <p>Mỗi con người sinh ra với một bản đồ định mệnh riêng, phản ánh tiềm năng, thử thách và con đường phát triển của họ. Ma trận định mệnh giúp bạn nhìn sâu vào chính mình, tìm ra những thông điệp vũ trụ đã an bài. Nhập ngày sinh để khám phá số phận của bạn!</p>
        </div>
        </div>
        <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='Firstname' required="true" />
                <label form="name" className="form__label">Họ và Tên</label>
        </div>

        <div className='input'>
          <div className='label_pos'>
          <label form='days'>Ngày:</label>
          <select name='days' className = "container_input" id="days">
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
          </div>
          <div className='label_pos'>
          <label form='months'>Tháng:</label>
          <select name='months' className = "container_input" id="months">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          </div>
          <div className='label_pos'>
          <label form='years'>Năm:</label>
          <select name='years' className = "container_input" id="years">
            <option value="1935">1935</option>
            <option value="1936">1936</option>
            <option value="1937">1937</option>
            <option value="1938">1938</option>
            <option value="1939">1939</option>
            <option value="1940">1940</option>
            <option value="1941">1941</option>
            <option value="1942">1942</option>
            <option value="1943">1943</option>
            <option value="1944">1944</option>
            <option value="1945">1945</option>
            <option value="1946">1946</option>
            <option value="1947">1947</option>
            <option value="1948">1948</option>
            <option value="1949">1949</option>
            <option value="1950">1950</option>
            <option value="1951">1951</option>
            <option value="1952">1952</option>
            <option value="1953">1953</option>
            <option value="1954">1954</option>
            <option value="1955">1955</option>
            <option value="1956">1956</option>
            <option value="1957">1957</option>
            <option value="1958">1958</option>
            <option value="1959">1959</option>
            <option value="1960">1960</option>
            <option value="1961">1961</option>
            <option value="1962">1962</option>
            <option value="1963">1963</option>
            <option value="1964">1964</option>
            <option value="1965">1965</option>
            <option value="1966">1966</option>
            <option value="1967">1967</option>
            <option value="1968">1968</option>
            <option value="1969">1969</option>
            <option value="1970">1970</option>
            <option value="1971">1971</option>
            <option value="1972">1972</option>
            <option value="1973">1973</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          </div>
          <div className='label_pos'>
          <button id="buttonLmao">Giải mã ngay</button>
          </div>
          
        </div>


      </div>
      <div className="result">
        <div className='result_img_matrix'>
          <img src='/FortuneTeller/sample/sample.webp'/>

            <p className='result_text_matrix number_1'>{value[0]}</p>
            <p className='result_text_matrix number_2'>{value[1]}</p>
            <p className='result_text_matrix number_3'>{value[2]}</p>
            <p className='result_text_matrix number_4'>{value[3]}</p>
            <p className='result_text_matrix number_5'>{value[4]}</p>
            <p className='result_text_matrix number_6'>{value[5]}</p>
            <p className='result_text_matrix number_7'>{value[6]}</p>
            <p className='result_text_matrix number_8'>{value[7]}</p>
            <p className='result_text_matrix number_9'>{value[8]}</p>
            <p className='result_text_matrix number_10'>{value[9]}</p>
            <p className='result_text_matrix number_11'>{value[10]}</p>
            <p className='result_text_matrix number_12'>{value[11]}</p>
            <p className='result_text_matrix number_13'>{value[12]}</p>
            <p className='result_text_matrix number_14'>{value[13]}</p>
            <p className='result_text_matrix number_15'>{value[14]}</p>
            <p className='result_text_matrix number_16'>{value[15]}</p>
            <p className='result_text_matrix number_17'>{value[16]}</p>
            <p className='result_text_matrix number_18'>{value[17]}</p>
            <p className='result_text_matrix number_19'>{value[18]}</p>
            <p className='result_text_matrix number_20'>{value[19]}</p>
            <p className='result_text_matrix number_21'>{value[20]}</p>
            <p className='result_text_matrix number_22'>{value[21]}</p>
            <p className='result_text_matrix number_23'>{value[22]}</p>
            <p className='result_text_matrix number_24'>{value[23]}</p>
            <p className='result_text_matrix number_25'>{value[24]}</p>
            <p className='result_text_matrix number_26'>{value[25]}</p>
            <p className='result_text_matrix number_27'>{value[26]}</p>
            <p className='result_text_matrix number_28'>{value[27]}</p>
            <p className='result_text_matrix number_29'>{value[28]}</p>
            <p className='result_text_matrix number_30'>{value[29]}</p>
        </div>
       
        <div className='result_information_matrix'>
          <h2>Những góc nhìn độc quyền từ Ma trận Định mệnh độc nhất của bạn</h2>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Vùng thoải mái</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Trung tâm cốt lõi của ma trận năng lượng</h2>
              <p>Tại trung tâm ma trận của bạn là năng lượng cốt lõi ảnh hưởng đến mọi khía cạnh trong cuộc sống. Năng lượng này đại diện cho bản chất thực sự của bạn, định hình tính cách, thế mạnh và bản sắc tổng thể. Nằm ở vị trí trung tâm của ma trận, nó đóng vai trò như nền tảng cho sự phát triển cá nhân và sự chuyển hóa, mở ra con đường giúp bạn nâng cao mọi lĩnh vực trong cuộc sống.</p>
              <p id="safe_zone">Hãy chọn ngày-tháng-năm sinh để hiện thông tin...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Ấn tượng ban đầu</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Lĩnh vực Ảnh hưởng và Sự Hiển lộ</h2>
              <p>
Một khía cạnh quan trọng trong bản đồ năng lượng cá nhân của bạn là năng lượng xác định phạm vi ảnh hưởng của bạn đối với người khác và khả năng hiện thực hóa tiềm năng thực sự của mình. 
<br/>Năng lượng này chi phối ấn tượng bạn để lại cho mọi người và giúp bạn biến những khát vọng của mình thành hiện thực, kết nối thế giới vô hình với hữu hình.
Khi bạn mất đi động lực hoặc cảm hứng, tập trung vào nguồn năng lượng này có thể giúp bạn khơi lại niềm đam mê và tìm lại cảm giác trọn vẹn trong cuộc sống. Bằng cách hướng hành động tích cực vào khía cạnh này, bạn có thể khôi phục tinh thần và sống một cách trọn vẹn, chân thực hơn. Đây chính là lời nhắc nhở rằng bạn có khả năng tác động đến thế giới và biến những tầm nhìn bên trong thành thành tựu cụ thể.
              </p>
              <p id='impression'>Hãy chọn ngày-tháng-năm sinh để hiện thông tin...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Điểm yếu - bài học cuộc đời</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Hiểu về "Đuôi Nghiệp"</h2>
              <p>"Đuôi nghiệp" là điểm khởi đầu trong hành trình cá nhân của chúng ta khi làm việc với ma trận số phận. Nó đại diện cho những vấn đề chưa được giải quyết từ các kiếp trước, tiếp tục ảnh hưởng đến thực tại hiện tại của chúng ta. Trong thế giới của thần số học và ma trận số phận, mọi thứ đều có sự kết nối chặt chẽ. Bằng cách giải quyết đuôi nghiệp, chúng ta bắt đầu làm việc trên những khía cạnh quan trọng của cuộc sống như các mối quan hệ, tài chính và mục đích linh hồn cốt lõi trong kiếp này.</p>
              <p id='karma'>Hãy chọn ngày-tháng-năm sinh để hiện thông tin...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Mối quan hệ</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Những góc nhìn về mối quan hệ lý tưởng của bạn</h2>
              <p>Phần này trong biểu đồ cá nhân của bạn đặc biệt thú vị, vì nó tiết lộ những năng lượng và phẩm chất cần có ở một người bạn đời để tạo nên một mối quan hệ hài hòa và viên mãn. Nó nhấn mạnh những đặc điểm cốt lõi phù hợp với mong muốn sâu thẳm của linh hồn bạn về tình yêu và sự kết nối.</p>
              <h3>Hướng dẫn thu hút người bạn đời phù hợp</h3>
              <p>Bên cạnh việc xác định những phẩm chất bạn tìm kiếm ở một người bạn đời, phần này trong biểu đồ của bạn cũng cung cấp những hướng dẫn quý giá về sự phát triển bản thân. Bằng cách làm việc để hoàn thiện chính mình và điều chỉnh bản thân theo những năng lượng này, bạn sẽ tạo ra điều kiện cần thiết để thu hút người bạn đời lý tưởng vào cuộc sống của mình.</p>
              <p id='relationship'>Hãy chọn ngày-tháng-năm sinh để hiện thông tin...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Tiền bạc</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Chào mừng đến với lĩnh vực tài chính trong Ma trận của bạn</h2>
              <p>Chào mừng bạn đến với một lĩnh vực nơi những bí ẩn về tiền bạc và tài chính được hé mở. Trong lĩnh vực này, các Bí ẩn (Arcana) đóng vai trò trung tâm, thu hút toàn bộ sự chú ý và tập trung của bạn. Những Bí ẩn mạnh mẽ này sẽ trở thành người hướng dẫn đáng tin cậy, soi sáng con đường dẫn đến sự thịnh vượng và thành công về tài chính của bạn.</p>
              <h3>Hành trình hướng tới sự thịnh vượng tài chính</h3>
              <p>Hãy sẵn sàng bước vào một hành trình khám phá, nơi các Bí ẩn tiết lộ những hiểu biết vô giá về cách bạn có thể:</p>
              <ul>
                <li>Tối đa hóa thu nhập của mình</li>
                <li>Khám phá những cơ hội nghề nghiệp mới</li>
                <li>Biến đổi hành vi để thu hút sự giàu có và thịnh vượng</li>
              </ul>
              <p>Những bài học này sẽ giúp bạn mở cánh cửa dẫn đến thành công tài chính lâu dài. Hãy sẵn sàng khai thác năng lượng của các Bí ẩn để biến những giấc mơ tài chính của bạn thành hiện thực!</p>
              <p id='financial'>Hãy chọn ngày-tháng-năm sinh để hiện thông tin...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Tài năng</h2>
            </div>
            <div className='information_text_slide'>
              <h2>Khai Thác Sức Mạnh Tiền Kiếp Để Thành Công</h2>
              <p>Chúng ta đến với thế giới này không chỉ mang theo những thử thách mà còn sở hữu những kinh nghiệm quý báu đã tích lũy từ các kiếp trước. Những trải nghiệm này có thể giúp hành trình hiện tại của chúng ta trở nên suôn sẻ hơn và mang lại những phẩm chất mạnh mẽ mà đôi khi chúng ta coi là hiển nhiên nhưng thực ra không nên đánh giá thấp.
                <br/>Những sức mạnh vốn có này là của bạn, và bạn có khả năng vượt trội trong những lĩnh vực mà người khác có thể gặp khó khăn. Đây là những phẩm chất riêng biệt của bạn, có thể được áp dụng ngay vào cuộc sống hiện tại. Khi nhận ra và tận dụng chúng, bạn có thể đóng góp tích cực cho thế giới và đạt được thành công nhanh hơn. Chúng tôi khuyến khích bạn tích hợp những thế mạnh này vào môi trường làm việc của mình, vì điều đó sẽ giúp bạn nổi bật và tiến nhanh hơn trên con đường hướng tới mục tiêu.
              </p>
              <p id='talent'>Hãy chọn ngày-tháng-năm sinh để hiện thông tin....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default Matrixdes;
