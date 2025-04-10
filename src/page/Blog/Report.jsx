import { useLocation } from "react-router-dom"
import domtoimage from "dom-to-image-more";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend, Pie, PieChart } from "recharts";
function Report(){
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [open, setOpen] = useState(false);


    

    const COLORS4 = ['#FF0000', '#FFD700', '#00C49F', '#0088FE'];
    const COLORS3 = ['#0088FE', '#00C49F', '#FFBB28'];
    const location = useLocation()
    const infor = location.state.user_information;
    const username = location.state.user_name;
    console.log(infor.matrix)
    const handleScreenshot = async () => {
        
        const element = document.getElementById("report_screen");

        domtoimage.toPng(element).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "profile_screenshot.png";
        link.href = dataUrl;
        
        link.click();
        });
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setAvatarUrl(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    return (
        <>
        <div className="report_wrapper" >
            <div className="inner_report" id="report_screen">
                <div className="header_report">
                    <div className="header_report_img">
                
                        <img 
                            src={avatarUrl || '/FortuneTeller/default_avt.jpeg'}
                            alt="Avatar"
                        />
                    </div>
                    <div className="header_report_content">
                        <div className="header_report_content_name">
                            <h1>{username}</h1>
                            <p>Báo cáo cá nhân - ZanFortune</p>
                        </div>
                        <div className="header_report_content_des">
                            
                        </div>
                    </div>
                </div>

                <div className="body_report">
                    <div className="body_report_1_column">
                        <div className="body_report_1_column_1">

                        <h2 className="numerology_report_title">THẦN SỐ HỌC</h2>
                {(!infor.numerology) ? (
                    <p>Chưa có dữ liệu</p>
                ) : (
                    <div className='result_inner report_num_inner'>
                        <div className='item report_num_inner_item'>
 
                            <div className='number_circle report_num'>
                                <h2>{infor.numerology[0]}</h2>
                            </div>
                            <div className='number_name'>
                                <h2>Số chủ đạo</h2> 
                            </div>
                        </div>
                        <div className='item report_num_inner_item'>

                            <div className='number_circle report_num'>
                                <h2>{infor.numerology[1]}</h2>
                            </div>
                            <div className='number_name'>
                                <h2>Số vận mệnh</h2> 
                            </div>
                        </div>
                        <div className='item report_num_inner_item'>

                            <div className='number_circle report_num'>
                                <h2>{infor.numerology[2]}</h2>
                            </div>
                            <div className='number_name'>
                                <h2>Số nội tâm</h2> 
                            </div>
                        </div>
                        </div>
                )}


                        </div>
                        <div className="body_report_1_column_2">
                        <h2 className="numerology_report_title">BẢN ĐỒ SAO</h2>
                        {(!infor.horoscope) ? (
                            <p>Chưa có dữ liệu</p>
                        ) : (
                    
                        <div className="feature_box horoscope_img full_width" dangerouslySetInnerHTML={{ __html: infor.horoscope[3][0] }} />
                        )}
                        </div>
                        <div className="body_report_1_column_3">
                            <div className="body_report_1_column_disc">
                            <h2 className="numerology_report_title">CHỈ SỐ DISC</h2>
                                {(!infor.disc) ? (
                                    <p>Chưa có dữ liệu</p>
                                ) : (
                                <div className="Disc_result disc_report">
                                <ResponsiveContainer width="100%" height={100}>
                                    <BarChart data={infor.disc.map(([key, value]) => ({ name: key, score: value }))}>
                                    <XAxis tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '10px'} }} dataKey="name"/>
                                    <YAxis tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '10px'} }} allowDecimals={false} />
                                    <Tooltip active={false}/>
                                    <Bar dataKey="score" fill="#8884d8">
                                        {COLORS4.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry} />
                                        ))}
                                    </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                                
                                </div> 
                                )}  

                            </div>
                            <div className="body_report_1_column_planet">
                            <h2 className="numerology_report_title">YẾU TỐ HÀNH TINH</h2>
                            {(!infor.horoscope) ? (
                            <p>Chưa có dữ liệu</p>
                            ) : (
                                <div className="feature_box full_width">
                                    <div className="feature_wrapper_2 no_padding">
                                    <ResponsiveContainer width="100%" height={120}>
                                        <BarChart data={infor.horoscope[2]}>
                                            <XAxis tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '10px'} }} dataKey="name"/>
                                            <YAxis domain={[0, 100]} tickCount={6}  tick={{ style: { fontWeight: 'bold', fill: 'white', fontSize: '10px'} }}allowDecimals={false} />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#8884d8">
                                                {infor.horoscope[2].map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                                                ))}
                                    
                                            </Bar>
                                        </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>           
                            )}
                            </div>
                        </div>
                    </div>
   
                    <div className="body_report_2_column">
                        <div className="body_report_2_column_1">
                        <h2 className="numerology_report_title">MA TRẬN ĐỊNH MỆNH</h2>
                {(!infor.matrix) ? (
                    <p className="matrix_no_data">Chưa có dữ liệu</p>
                ) : (
                <div className='result_img_matrix fix_width'>
                    <img src='/FortuneTeller/sample/sample.webp'/>
                        <p className='result_text_matrix number_1 fix_size'>{infor.matrix[0]}</p>
                        <p className='result_text_matrix number_2 fix_size'>{infor.matrix[1]}</p>
                        <p className='result_text_matrix number_3 fix_size'>{infor.matrix[2]}</p>
                        <p className='result_text_matrix number_4 fix_size'>{infor.matrix[3]}</p>
                        <p className='result_text_matrix number_5 fix_size'>{infor.matrix[4]}</p>
                        <p className='result_text_matrix number_6 fix'>{infor.matrix[5]}</p>
                        <p className='result_text_matrix number_7 fix'>{infor.matrix[6]}</p>
                        <p className='result_text_matrix number_8 fix'>{infor.matrix[7]}</p>
                        <p className='result_text_matrix number_9 fix'>{infor.matrix[8]}</p>
                        <p className='result_text_matrix number_10 fix'>{infor.matrix[9]}</p>
                        <p className='result_text_matrix number_11 fix'>{infor.matrix[10]}</p>
                        <p className='result_text_matrix number_12 fix'>{infor.matrix[11]}</p>
                        <p className='result_text_matrix number_13 fix'>{infor.matrix[12]}</p>
                        <p className='result_text_matrix number_14 fix'>{infor.matrix[13]}</p>
                        <p className='result_text_matrix number_15 fix'>{infor.matrix[14]}</p>
                        <p className='result_text_matrix number_16 fix'>{infor.matrix[15]}</p>
                        <p className='result_text_matrix number_17 fix_size'>{infor.matrix[16]}</p>
                        <p className='result_text_matrix number_18 fix_size'>{infor.matrix[17]}</p>
                        <p className='result_text_matrix number_19 fix_size'>{infor.matrix[18]}</p>
                        <p className='result_text_matrix number_20 fix_size'>{infor.matrix[19]}</p>
                        <p className='result_text_matrix number_21 fix'>{infor.matrix[20]}</p>
                        <p className='result_text_matrix number_22 fix'>{infor.matrix[21]}</p>
                        <p className='result_text_matrix number_23 fix'>{infor.matrix[22]}</p>
                        <p className='result_text_matrix number_24 fix'>{infor.matrix[23]}</p>
                        <p className='result_text_matrix number_25 fix'>{infor.matrix[24]}</p>
                        <p className='result_text_matrix number_26 fix'>{infor.matrix[25]}</p>
                        <p className='result_text_matrix number_27 fix'>{infor.matrix[26]}</p>
                        <p className='result_text_matrix number_28 fix'>{infor.matrix[27]}</p>
                        <p className='result_text_matrix number_29 fix'>{infor.matrix[28]}</p>
                        <p className='result_text_matrix number_30 fix'>{infor.matrix[29]}</p>
                    </div>
                    )} 

                        </div>
                        <div className="body_report_2_column_2">
                        <h2 className="numerology_report_title">Tính chất</h2>
                        {(!infor.horoscope) ? (
                            <p>Chưa có dữ liệu</p>
                        ) : (
                            <div className="feature_box_1_2">

                            <div className="feature_wrapper text_1">
                            <ResponsiveContainer width="100%" height={150}>
                                <PieChart>
                                <Pie  data={infor.horoscope[1]} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" dataKey="value">
                                    {infor.horoscope[1].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                                    ))}
                                </Pie>
                                <Tooltip active={false}/>
                                <Legend />
                                </PieChart>
                            </ResponsiveContainer>     
                            </div>       
                            </div>   
                        )}

                        <h2 className="numerology_report_title last_title">Tính chất</h2>
                        {(!infor.horoscope) ? (
                            <p>Chưa có dữ liệu</p>
                        ) : (
                            <div className="feature_box_1_2">

                                <div className="feature_wrapper text_2">
                                <ResponsiveContainer width="100%" height={160}>
                                    <PieChart>
                                    <Pie data={infor.horoscope[0]} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" dataKey="value">
                                        {infor.horoscope[0].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip active={false}/>
                                    <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                                </div>
     
                            </div>   
                        )}


                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        
 
       <div class="menu">
                    <div class="label">Công cụ ⚙</div>
                    <div class="spacer"></div>
                    <div class="item_tool">
                        <button onClick={handleScreenshot}>📷 Chụp hình</button> 
                    </div>
                    <div class="item_tool">
                        <input type="file" id="upload" style={{display: 'none'}} accept="image/*" onChange={handleImageChange}/>  
                        <label htmlFor="upload" className="fake_upload_btn">
                            📁 Chọn ảnh 
                        </label>
                    </div>
                </div>
        </>
    )
}
export default Report