import "./TarotResultStyle.css"
import { useLocation } from "react-router-dom";
function TarotResult(){
    const BaseUrl = "/FortuneTeller";
    const location = useLocation();
    const cards_info = [
        { name: "The Fool", description: "Khởi đầu mới, ngây thơ, tự do, tiềm năng vô hạn." },
        { name: "The Magician", description: "Sáng tạo, sức mạnh cá nhân, khả năng thực hiện ý định." },
        { name: "The High Priestess", description: "Trực giác, trí tuệ tiềm ẩn, bí ẩn, tâm linh." },
        { name: "The Empress", description: "Nuôi dưỡng, phong phú, sáng tạo, thiên nhiên." },
        { name: "The Emperor", description: "Lãnh đạo, ổn định, cấu trúc, quyền lực." },
        { name: "The Hierophant", description: "Truyền thống, tâm linh, giáo dục, niềm tin." },
        { name: "The Lovers", description: "Tình yêu, lựa chọn, quan hệ đối tác, sự hài hòa." },
        { name: "The Chariot", description: "Kiểm soát, ý chí mạnh mẽ, chiến thắng, định hướng." },
        { name: "Strength", description: "Can đảm, kiên nhẫn, kiểm soát cảm xúc, nội lực." },
        { name: "The Hermit", description: "Tìm kiếm sự thật, hướng nội, cô lập, trí tuệ." },
        { name: "Wheel of Fortune", description: "Sự thay đổi, số phận, chu kỳ, cơ hội." },
        { name: "Justice", description: "Công lý, sự thật, trách nhiệm, đạo đức." },
        { name: "The Hanged Man", description: "Hy sinh, thay đổi quan điểm, buông bỏ, giác ngộ." },
        { name: "Death", description: "Chuyển đổi, kết thúc, tái sinh, thay đổi." },
        { name: "Temperance", description: "Cân bằng, kiên nhẫn, điều độ, hài hòa." },
        { name: "The Devil", description: "Ràng buộc, cám dỗ, vật chất, sợ hãi." },
        { name: "The Tower", description: "Sụp đổ, thay đổi đột ngột, biến cố, khai sáng." },
        { name: "The Star", description: "Hy vọng, chữa lành, cảm hứng, tinh thần lạc quan." },
        { name: "The Moon", description: "Ảo tưởng, trực giác, giấc mơ, lo âu." },
        { name: "The Sun", description: "Hạnh phúc, thành công, lạc quan, năng lượng tích cực." },
        { name: "Judgement", description: "Thức tỉnh, quyết định quan trọng, sự giải thoát." },
        { name: "The World", description: "Hoàn thành, viên mãn, thành tựu, chu kỳ khép lại." },
    
        // Bộ Pentacles
        { name: "Ace of Pentacles", description: "Khởi đầu tài chính, cơ hội vật chất, thịnh vượng." },
        { name: "Two of Pentacles", description: "Cân bằng tài chính, linh hoạt, sắp xếp ưu tiên." },
        { name: "Three of Pentacles", description: "Hợp tác, công việc nhóm, kỹ năng nghề nghiệp." },
        { name: "Four of Pentacles", description: "Kiểm soát tài chính, tích lũy, an toàn." },
        { name: "Five of Pentacles", description: "Mất mát tài chính, khó khăn, cảm giác bị bỏ rơi." },
        { name: "Six of Pentacles", description: "Chia sẻ tài sản, từ thiện, cân bằng tài chính." },
        { name: "Seven of Pentacles", description: "Kiên nhẫn, đầu tư dài hạn, chờ đợi kết quả." },
        { name: "Eight of Pentacles", description: "Học tập, siêng năng, rèn luyện kỹ năng." },
        { name: "Nine of Pentacles", description: "Độc lập tài chính, thành tựu cá nhân, tận hưởng." },
        { name: "Ten of Pentacles", description: "Gia đình, tài sản lâu dài, sự ổn định." },
        { name: "Page of Pentacles", description: "Học tập, cơ hội mới, phát triển nghề nghiệp." },
        { name: "Knight of Pentacles", description: "Kiên trì, làm việc chăm chỉ, thực tế." },
        { name: "Queen of Pentacles", description: "Độc lập tài chính, nuôi dưỡng, ổn định." },
        { name: "King of Pentacles", description: "Thành công tài chính, doanh nhân, giàu có." },
        
        // Bộ Wands
        { name: "Ace of Wands", description: "Khởi đầu sáng tạo, đam mê, nguồn cảm hứng mới." },
        { name: "Two of Wands", description: "Lập kế hoạch, hướng ra thế giới, quyết định quan trọng." },
        { name: "Three of Wands", description: "Mở rộng tầm nhìn, cơ hội phát triển, chờ đợi kết quả." },
        { name: "Four of Wands", description: "Lễ hội, thành tựu, hạnh phúc gia đình." },
        { name: "Five of Wands", description: "Cạnh tranh, xung đột, thử thách, tranh luận." },
        { name: "Six of Wands", description: "Chiến thắng, công nhận, thành tựu, tự tin." },
        { name: "Seven of Wands", description: "Bảo vệ lập trường, chiến đấu vì niềm tin." },
        { name: "Eight of Wands", description: "Chuyển động nhanh, tin tức đến, thay đổi tích cực." },
        { name: "Nine of Wands", description: "Kiên trì, phòng thủ, sức mạnh nội tại." },
        { name: "Ten of Wands", description: "Gánh nặng, trách nhiệm, căng thẳng quá tải." },
        { name: "Page of Wands", description: "Nhiệt huyết, khám phá, sáng tạo, thử thách mới." },
        { name: "Knight of Wands", description: "Phiêu lưu, bốc đồng, đam mê, hành động mạnh mẽ." },
        { name: "Queen of Wands", description: "Tự tin, cuốn hút, độc lập, đam mê." },
        { name: "King of Wands", description: "Lãnh đạo, tầm nhìn, truyền cảm hứng, kiểm soát số phận." },

        // Bộ Cups
        { name: "Ace of Cups", description: "Tình yêu mới, cảm xúc tràn đầy, cơ hội tình cảm." },
        { name: "Two of Cups", description: "Quan hệ đối tác, sự hòa hợp, tình yêu chân thành." },
        { name: "Three of Cups", description: "Tình bạn, lễ hội, niềm vui, đoàn tụ." },
        { name: "Four of Cups", description: "Buồn chán, bỏ lỡ cơ hội, suy ngẫm." },
        { name: "Five of Cups", description: "Mất mát, hối tiếc, tập trung vào điều tiêu cực." },
        { name: "Six of Cups", description: "Hoài niệm, kỷ niệm, quá khứ, tình cảm chân thành." },
        { name: "Seven of Cups", description: "Ảo tưởng, nhiều lựa chọn, tưởng tượng, quyết định khó khăn." },
        { name: "Eight of Cups", description: "Buông bỏ, tìm kiếm điều mới, rời bỏ tình huống cũ." },
        { name: "Nine of Cups", description: "Hạnh phúc, ước mơ thành hiện thực, thỏa mãn cá nhân." },
        { name: "Ten of Cups", description: "Gia đình, hạnh phúc viên mãn, sự hài lòng trọn vẹn." },
        { name: "Page of Cups", description: "Thông điệp tình cảm, trực giác, sáng tạo." },
        { name: "Knight of Cups", description: "Lãng mạn, theo đuổi cảm xúc, quyến rũ, lý tưởng hóa." },
        { name: "Queen of Cups", description: "Từ bi, trực giác mạnh, thấu hiểu cảm xúc." },
        { name: "King of Cups", description: "Điều khiển cảm xúc, nhạy cảm nhưng mạnh mẽ, hỗ trợ." },
    
        // Bộ Swords
        { name: "Ace of Swords", description: "Làm rõ tư duy, sự thật, ý tưởng mới." },
        { name: "Two of Swords", description: "Tiến thoái lưỡng nan, bế tắc, cần đưa ra quyết định." },
        { name: "Three of Swords", description: "Đau khổ, tổn thương tình cảm, chia ly." },
        { name: "Four of Swords", description: "Nghỉ ngơi, hồi phục, tĩnh tâm, suy ngẫm." },
        { name: "Five of Swords", description: "Xung đột, tranh cãi, chiến thắng không trọn vẹn." },
        { name: "Six of Swords", description: "Di chuyển, rời bỏ quá khứ, khởi đầu mới." },
        { name: "Seven of Swords", description: "Lừa dối, mưu mẹo, trốn tránh, hành động bí mật." },
        { name: "Eight of Swords", description: "Bị mắc kẹt, tự giới hạn, lo âu." },
        { name: "Nine of Swords", description: "Mất ngủ, căng thẳng, lo lắng, ác mộng." },
        { name: "Ten of Swords", description: "Kết thúc đau đớn, phản bội, gục ngã." },
        { name: "Page of Swords", description: "Tò mò, học hỏi, thông tin mới, quan sát." },
        { name: "Knight of Swords", description: "Hành động nhanh chóng, quyết đoán, tham vọng." },
        { name: "Queen of Swords", description: "Sắc sảo, thông minh, logic, độc lập." },
        { name: "King of Swords", description: "Lý trí, công bằng, quyền lực, trí tuệ." },
    
        
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
                <h2>{`${cards_info[cards[2]].name}`}</h2>
                <p>{`${cards_info[cards[2]].description}`}</p>
            </div>    
        </div>
    </div>
  
)}
export default TarotResult