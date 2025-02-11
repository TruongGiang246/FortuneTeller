import "./TarotResultStyle.css"
import { useLocation } from "react-router-dom";
function TarotResult(){
    const BaseUrl = "/FortuneTeller";
    const location = useLocation();
    const cards_info = [
        { name: "The Fool", description: "Lá bài này đại diện cho sự khởi đầu mới, lòng nhiệt huyết và sự tự do. Nó tượng trưng cho tinh thần phiêu lưu và sẵn sàng chấp nhận rủi ro để khám phá những cơ hội mới trong cuộc sống." },
        { name: "The Magician", description: "Lá bài biểu thị sức mạnh cá nhân, sự sáng tạo và khả năng kiểm soát số phận. Bạn có đầy đủ công cụ và kiến thức cần thiết để biến ước mơ thành hiện thực." },
        { name: "The High Priestess", description: "Đại diện cho sự trực giác, tri thức tiềm ẩn và những bí ẩn chưa được khám phá. Lá bài nhắc nhở bạn hãy tin tưởng vào trực giác và khám phá sự thật ẩn giấu." },
        { name: "The Empress", description: "Tượng trưng cho sự nuôi dưỡng, sự phong phú và tình yêu vô điều kiện. Đây là dấu hiệu của sự sáng tạo và khả năng sinh trưởng trong mọi khía cạnh của cuộc sống." },
        { name: "The Emperor", description: "Biểu thị sự ổn định, quyền lực và cấu trúc. Lá bài này khuyến khích bạn kiểm soát tình huống và thiết lập nền tảng vững chắc cho tương lai." },
        { name: "The Hierophant", description: "Đại diện cho các truyền thống, niềm tin và hệ thống giáo dục. Lá bài khuyến khích bạn học hỏi từ những nguồn tri thức đáng tin cậy và giữ vững đạo đức của mình." },
        { name: "The Lovers", description: "Tượng trưng cho tình yêu, sự kết nối và những quyết định quan trọng trong mối quan hệ. Nó nhắc nhở bạn về tầm quan trọng của sự hài hòa và trung thực trong tình yêu." },
        { name: "The Chariot", description: "Biểu thị sức mạnh ý chí, sự kiểm soát và chiến thắng trước thử thách. Lá bài khuyến khích bạn tập trung vào mục tiêu và điều hướng cuộc sống một cách tự tin." },
        { name: "Strength", description: "Lá bài này nói về lòng can đảm, sự kiên nhẫn và khả năng kiểm soát cảm xúc. Nó nhắc nhở bạn rằng sức mạnh thực sự đến từ bên trong, chứ không phải từ sức mạnh thể chất." },
        { name: "The Hermit", description: "Đại diện cho hành trình tìm kiếm tri thức và sự thông thái. Lá bài khuyến khích bạn dành thời gian để suy ngẫm và khám phá chiều sâu nội tâm." },
        { name: "Wheel of Fortune", description: "Biểu thị sự thay đổi, vận may và chu kỳ cuộc sống. Lá bài nhắc nhở rằng số phận không ngừng xoay chuyển và mỗi giai đoạn đều mang đến những bài học giá trị." },
        { name: "Justice", description: "Tượng trưng cho sự công bằng, sự thật và trách nhiệm cá nhân. Lá bài khuyến khích bạn hành động trung thực và đưa ra quyết định đúng đắn dựa trên đạo đức và công lý." },
        { name: "The Hanged Man", description: "Lá bài này cho thấy sự cần thiết của việc nhìn nhận tình huống từ một góc độ khác. Đôi khi, buông bỏ sự kiểm soát có thể dẫn đến sự giác ngộ và phát triển." },
        { name: "Death", description: "Tượng trưng cho sự kết thúc và khởi đầu mới. Lá bài này không phải là dấu hiệu của sự tiêu cực mà là một sự thay đổi cần thiết để tiến lên phía trước." },
        { name: "Temperance", description: "Đại diện cho sự cân bằng, kiên nhẫn và điều độ. Lá bài này nhắc nhở bạn kết hợp các yếu tố khác nhau trong cuộc sống để đạt được sự hài hòa." },
        { name: "The Devil", description: "Biểu thị sự ràng buộc, cám dỗ và nỗi sợ hãi. Lá bài khuyến khích bạn nhận thức được những thói quen tiêu cực và tìm cách giải phóng bản thân khỏi những ảnh hưởng không lành mạnh." },
        { name: "The Tower", description: "Đại diện cho sự thay đổi đột ngột, sự sụp đổ và tái sinh. Lá bài này báo hiệu một biến cố lớn, nhưng cũng mang đến cơ hội xây dựng lại trên nền tảng vững chắc hơn." },
        { name: "The Star", description: "Biểu tượng của hy vọng, sự chữa lành và cảm hứng. Lá bài này khuyến khích bạn giữ vững niềm tin và tin tưởng vào tương lai tươi sáng." },
        { name: "The Moon", description: "Tượng trưng cho ảo tưởng, trực giác và những điều ẩn giấu. Lá bài này nhắc nhở bạn nên cẩn trọng với những gì chưa rõ ràng và tin vào cảm giác bên trong của mình." },
        { name: "The Sun", description: "Biểu thị hạnh phúc, thành công và năng lượng tích cực. Đây là dấu hiệu của sự lạc quan và thành tựu lớn trong cuộc sống." },
        { name: "Judgement", description: "Lá bài này đại diện cho sự thức tỉnh, phán xét và quyết định quan trọng. Nó nhắc nhở bạn nhìn nhận quá khứ và học hỏi để tiến lên phía trước." },
        { name: "The World", description: "Biểu tượng của sự hoàn thành, thành tựu và sự viên mãn. Lá bài này báo hiệu rằng bạn đã đạt được mục tiêu và sẵn sàng bước sang một chương mới trong cuộc sống." },
    
    
        // Bộ Pentacles
        { name: "Ace of Pentacles", description: "Lá bài này báo hiệu một cơ hội mới về tài chính, sự ổn định và thịnh vượng. Đây là thời điểm tốt để đầu tư vào sự nghiệp hoặc các dự án dài hạn." },
        { name: "Two of Pentacles", description: "Biểu tượng của sự cân bằng giữa các trách nhiệm tài chính và cuộc sống cá nhân. Lá bài nhắc nhở bạn phải linh hoạt và quản lý thời gian hợp lý." },
        { name: "Three of Pentacles", description: "Lá bài này đại diện cho sự hợp tác, làm việc nhóm và phát triển kỹ năng chuyên môn. Bạn đang xây dựng nền tảng vững chắc cho sự thành công." },
        { name: "Four of Pentacles", description: "Tượng trưng cho sự bảo vệ tài sản, sự ổn định nhưng cũng có thể là nỗi lo lắng về việc mất đi những gì mình có." },
        { name: "Five of Pentacles", description: "Biểu thị sự khó khăn tài chính, cảm giác bị bỏ rơi hoặc thiếu thốn. Lá bài nhắc nhở bạn tìm kiếm sự hỗ trợ khi cần thiết." },
        { name: "Six of Pentacles", description: "Lá bài này nói về sự cho đi, nhận lại và sự cân bằng tài chính. Nếu bạn có khả năng giúp đỡ, hãy làm điều đó một cách rộng lượng." },
        { name: "Seven of Pentacles", description: "Tượng trưng cho sự kiên nhẫn và chờ đợi kết quả từ những nỗ lực trong quá khứ. Lá bài nhắc nhở rằng thành công không đến ngay lập tức." },
        { name: "Eight of Pentacles", description: "Lá bài này đại diện cho sự rèn luyện kỹ năng, chăm chỉ và tập trung vào công việc. Nó khuyến khích bạn tiếp tục học hỏi để đạt được thành tựu." },
        { name: "Nine of Pentacles", description: "Biểu thị sự thành công, tự do tài chính và tận hưởng những thành quả mà bạn đã làm việc chăm chỉ để đạt được." },
        { name: "Ten of Pentacles", description: "Lá bài này đại diện cho sự giàu có, truyền thống gia đình và sự ổn định lâu dài. Nó báo hiệu một giai đoạn an toàn và bền vững về tài chính." },
        { name: "Page of Pentacles", description: "Tượng trưng cho sự học hỏi, phát triển và cơ hội mới trong công việc hoặc học tập." },
        { name: "Knight of Pentacles", description: "Biểu thị sự kiên trì, đáng tin cậy và khả năng làm việc chăm chỉ để đạt được mục tiêu." },
        { name: "Queen of Pentacles", description: "Lá bài này đại diện cho sự nuôi dưỡng, ổn định tài chính và khả năng chăm sóc bản thân cũng như gia đình." },
        { name: "King of Pentacles", description: "Tượng trưng cho sự giàu có, thành công và khả năng quản lý tài chính một cách xuất sắc." },
        
        // Bộ Wands
        { name: "Ace of Wands", description: "Lá bài này báo hiệu một sự khởi đầu tràn đầy cảm hứng, sáng tạo và đam mê. Đây là lúc bạn nên hành động để biến ý tưởng thành hiện thực." },
        { name: "Two of Wands", description: "Tượng trưng cho việc lập kế hoạch, mở rộng tầm nhìn và đưa ra quyết định quan trọng cho tương lai. Lá bài này khuyến khích bạn chủ động nắm bắt cơ hội." },
        { name: "Three of Wands", description: "Biểu thị sự tiến bộ, mở rộng cơ hội và chờ đợi kết quả từ những nỗ lực trước đó. Lá bài này báo hiệu rằng tương lai đang rộng mở với bạn." },
        { name: "Four of Wands", description: "Lá bài này tượng trưng cho sự ổn định, hạnh phúc gia đình và những khoảnh khắc ăn mừng. Đây là thời điểm bạn có thể tận hưởng những thành quả đã đạt được." },
        { name: "Five of Wands", description: "Biểu thị sự cạnh tranh, mâu thuẫn và thử thách. Lá bài này khuyến khích bạn đối mặt với xung đột một cách khôn ngoan và không để bị cuốn vào tranh cãi vô ích." },
        { name: "Six of Wands", description: "Lá bài này đại diện cho chiến thắng, công nhận và thành tựu. Đây là dấu hiệu cho thấy bạn đang trên đường đạt được thành công mà mình mong muốn." },
        { name: "Seven of Wands", description: "Tượng trưng cho sự bảo vệ lập trường, đấu tranh vì niềm tin và vượt qua thử thách. Lá bài này nhắc nhở bạn rằng kiên trì là chìa khóa để đạt được mục tiêu." },
        { name: "Eight of Wands", description: "Biểu thị sự di chuyển nhanh, thay đổi đột ngột và những cơ hội bất ngờ. Lá bài này khuyến khích bạn sẵn sàng nắm bắt cơ hội khi nó đến." },
        { name: "Nine of Wands", description: "Lá bài này thể hiện sự kiên trì, sức mạnh nội tại và khả năng vượt qua khó khăn. Dù bạn có thể cảm thấy mệt mỏi, nhưng bạn vẫn cần tiếp tục cố gắng." },
        { name: "Ten of Wands", description: "Tượng trưng cho gánh nặng, trách nhiệm và áp lực quá mức. Lá bài này nhắc nhở bạn cần tìm cách giải tỏa căng thẳng và không tự gánh vác quá nhiều." },
        { name: "Page of Wands", description: "Biểu thị sự tò mò, khám phá và những cơ hội mới đầy đam mê. Lá bài này khuyến khích bạn hãy mạnh dạn bước ra khỏi vùng an toàn." },
        { name: "Knight of Wands", description: "Tượng trưng cho sự nhiệt huyết, táo bạo và sẵn sàng chấp nhận thử thách. Lá bài này nhắc nhở bạn tận dụng nguồn năng lượng mạnh mẽ của mình để theo đuổi ước mơ." },
        { name: "Queen of Wands", description: "Lá bài này đại diện cho sự tự tin, cuốn hút và khả năng lãnh đạo. Đây là dấu hiệu cho thấy bạn đang ở thời điểm tốt nhất để thể hiện bản thân." },
        { name: "King of Wands", description: "Biểu thị tầm nhìn xa, sức mạnh lãnh đạo và khả năng kiểm soát số phận. Lá bài này khuyến khích bạn tự tin vào năng lực của mình và theo đuổi những mục tiêu lớn lao." },

        // Bộ Cups
        { name: "Ace of Cups", description: "Lá bài này đại diện cho tình yêu thuần khiết, cảm xúc tràn đầy và sự khởi đầu mới trong các mối quan hệ. Đây là thời điểm bạn mở lòng để đón nhận tình cảm và sự kết nối sâu sắc với những người xung quanh." },
        { name: "Two of Cups", description: "Biểu tượng của sự hòa hợp, tình yêu đôi lứa và mối quan hệ cân bằng. Đây là dấu hiệu của một mối quan hệ chân thành, có sự gắn kết bền vững giữa hai người." },
        { name: "Three of Cups", description: "Đại diện cho niềm vui, tình bạn và sự đoàn kết. Lá bài này báo hiệu các cuộc hội họp, ăn mừng và thời gian hạnh phúc bên những người thân yêu." },
        { name: "Four of Cups", description: "Lá bài thể hiện sự chán nản, bỏ lỡ cơ hội hoặc không nhận ra những điều tốt đẹp đang ở trước mắt. Nó nhắc nhở bạn hãy mở rộng tầm nhìn để không bỏ lỡ cơ hội quan trọng." },
        { name: "Five of Cups", description: "Đại diện cho sự mất mát, hối tiếc và tập trung vào những điều tiêu cực. Tuy nhiên, lá bài cũng nhắc nhở rằng vẫn còn những điều tốt đẹp đang chờ đón bạn nếu bạn biết nhìn về phía trước." },
        { name: "Six of Cups", description: "Biểu thị sự hoài niệm, những ký ức đẹp trong quá khứ và sự kết nối với tuổi thơ. Lá bài này khuyến khích bạn trân trọng những giá trị tình cảm chân thành." },
        { name: "Seven of Cups", description: "Tượng trưng cho sự ảo tưởng, mơ mộng và nhiều lựa chọn. Lá bài này khuyên bạn hãy cẩn trọng với những quyết định dựa trên mong muốn không thực tế." },
        { name: "Eight of Cups", description: "Lá bài này báo hiệu sự từ bỏ một điều gì đó để tìm kiếm điều có ý nghĩa hơn. Đôi khi, rời đi là cách tốt nhất để tìm lại chính mình." },
        { name: "Nine of Cups", description: "Đại diện cho sự hài lòng, ước mơ thành hiện thực và niềm vui cá nhân. Lá bài này báo hiệu một giai đoạn hạnh phúc và tràn đầy sự viên mãn." },
        { name: "Ten of Cups", description: "Biểu tượng của hạnh phúc gia đình, tình yêu bền vững và sự hoàn thành trong các mối quan hệ. Lá bài này cho thấy một cuộc sống đầy đủ cả về tinh thần lẫn vật chất." },
        { name: "Page of Cups", description: "Lá bài này thể hiện sự sáng tạo, trực giác mạnh mẽ và những thông điệp tình cảm bất ngờ. Nó khuyến khích bạn lắng nghe trái tim và khám phá những cảm xúc bên trong." },
        { name: "Knight of Cups", description: "Tượng trưng cho sự lãng mạn, theo đuổi giấc mơ và lòng nhiệt huyết. Lá bài này báo hiệu một lời mời hấp dẫn hoặc một cuộc hành trình đầy cảm xúc." },
        { name: "Queen of Cups", description: "Biểu thị sự từ bi, nhạy cảm và trực giác mạnh mẽ. Lá bài này khuyến khích bạn tin tưởng vào cảm xúc của mình và chăm sóc bản thân cũng như những người khác." },
        { name: "King of Cups", description: "Đại diện cho sự kiểm soát cảm xúc, sự thấu hiểu và lòng trắc ẩn. Lá bài này khuyên bạn nên cân bằng giữa lý trí và cảm xúc trong cuộc sống." },
    
        // Bộ Swords
        { name: "Ace of Swords", description: "Lá bài này đại diện cho sự khai sáng, tư duy sắc bén và sự thật. Đây là thời điểm bạn có thể nhìn nhận vấn đề một cách rõ ràng và đưa ra quyết định sáng suốt." },
        { name: "Two of Swords", description: "Biểu tượng của sự do dự, bế tắc và khó khăn trong việc đưa ra lựa chọn. Lá bài khuyên bạn hãy cân nhắc kỹ lưỡng trước khi quyết định." },
        { name: "Three of Swords", description: "Tượng trưng cho nỗi đau, sự mất mát và tổn thương tình cảm. Dù vậy, đây cũng là cơ hội để bạn học cách chữa lành và phát triển mạnh mẽ hơn." },
        { name: "Four of Swords", description: "Lá bài này báo hiệu thời gian nghỉ ngơi, hồi phục và tìm lại sự bình yên sau những căng thẳng. Nó nhắc nhở bạn rằng đôi khi, im lặng và thư giãn là điều cần thiết." },
        { name: "Five of Swords", description: "Biểu thị sự xung đột, chiến thắng không trọn vẹn hoặc mất mát do tranh chấp. Lá bài này cảnh báo về những hậu quả của sự ích kỷ và tham vọng cá nhân." },
        { name: "Six of Swords", description: "Tượng trưng cho sự thay đổi, di chuyển và bước tiếp khỏi những tình huống khó khăn. Dù hành trình này có thể đau lòng, nhưng nó là cần thiết để tìm kiếm một tương lai tốt hơn." },
        { name: "Seven of Swords", description: "Lá bài thể hiện sự lừa dối, mưu mô hoặc hành động bí mật. Nó nhắc nhở bạn cần cẩn trọng với những ai có thể không thành thật với bạn." },
        { name: "Eight of Swords", description: "Biểu tượng của sự mắc kẹt, giới hạn bản thân và lo lắng quá mức. Lá bài này cho thấy rằng rào cản lớn nhất của bạn có thể chính là tâm trí của bạn." },
        { name: "Nine of Swords", description: "Tượng trưng cho sự căng thẳng, mất ngủ và lo lắng tột độ. Lá bài này nhắc nhở bạn cần kiểm soát suy nghĩ tiêu cực và tìm cách giải tỏa áp lực." },
        { name: "Ten of Swords", description: "Lá bài này đại diện cho sự kết thúc đau đớn, sự phản bội và thất bại. Dù vậy, nó cũng báo hiệu một khởi đầu mới sau những mất mát." },
        { name: "Page of Swords", description: "Biểu thị sự tò mò, ham học hỏi và khám phá những ý tưởng mới. Lá bài này khuyến khích bạn hãy luôn tìm kiếm tri thức và đón nhận sự thật." },
        { name: "Knight of Swords", description: "Tượng trưng cho sự nhanh nhẹn, quyết đoán và sẵn sàng đối mặt với thử thách. Tuy nhiên, lá bài cũng nhắc nhở bạn không nên hành động quá vội vàng." },
        { name: "Queen of Swords", description: "Lá bài này đại diện cho sự thông minh, sắc sảo và khả năng nhìn thấu sự thật. Nó nhắc nhở bạn phải có tư duy logic và khách quan trong mọi tình huống." },
        { name: "King of Swords", description: "Biểu thị sức mạnh trí tuệ, quyền lực và sự công bằng. Lá bài này khuyến khích bạn đưa ra quyết định dựa trên lý trí thay vì cảm xúc." },
    
        
    ];

    const cards = location.state.group_card;
    return(
    
    <div className="result_container">
        <div className="result_information">
            <div className="result_img">
                <img src={`${BaseUrl}/images/card${cards[0]+1}.jpg`}/>
            </div>
            <div className="result_text">
                <h2>{`Card 1: ${cards_info[cards[0]].name}`}</h2>
                <p>{`${cards_info[cards[0]].description}`}</p>
            </div>    
        </div>
        <div className="result_information">
            <div className="result_img">
                <img src={`${BaseUrl}/images/card${cards[1]+1}.jpg`}/>
            </div>
            <div className="result_text">
                <h2>{`Card 2: ${cards_info[cards[1]].name}`}</h2>
                <p>{`${cards_info[cards[1]].description}`}</p>
            </div>    
        </div>
        <div className="result_information">
            <div className="result_img">
                <img src={`${BaseUrl}/images/card${cards[2]+1}.jpg`}/>
            </div>
            <div className="result_text">
                <h2>{`Card 3: ${cards_info[cards[2]].name}`}</h2>
                <p>{`${cards_info[cards[2]].description}`}</p>
            </div>    
        </div>
    </div>
  
)}
export default TarotResult