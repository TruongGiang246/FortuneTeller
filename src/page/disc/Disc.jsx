import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

import "./DiscStyle.css"
const COLORS4 = ['#FF0000', '#FFD700', '#00C49F', '#0088FE'];

const DISCStudyTips = {
  "D":{
    type: "Dominance",
    tips: [
      { title: "Đặt mục tiêu rõ ràng và thời hạn", body: "Chia nhỏ buổi học thành các thử thách có giới hạn thời gian với kết quả cụ thể." },
      { title: "Tập trung vào ứng dụng", body: "Kết nối các khái niệm lý thuyết với ứng dụng thực tế và giải quyết vấn đề." },
      { title: "Tận dụng yếu tố cạnh tranh", body: "Thách thức bản thân vượt qua các tiêu chuẩn hoặc thành tích trước đây." },
      { title: "Đóng vai trò lãnh đạo trong nhóm học", body: "Tổ chức và dẫn dắt các buổi học nhóm để củng cố sự hiểu biết của bạn." },
      { title: "Sử dụng phương pháp học trực tiếp", body: "Ưu tiên các bản tóm tắt ngắn gọn, flashcard và bài kiểm tra thực hành thay vì đọc tài liệu dài dòng." }
    ]
  },
  "I":{
    type: "Influence",
    tips: [
      { title: "Học qua giao tiếp", body: "Thảo luận bài học với bạn bè hoặc giảng giải lại cho người khác." },
      { title: "Tạo không khí tích cực", body: "Học ở nơi bạn cảm thấy thoải mái, vui vẻ và có thể tương tác." },
      { title: "Dùng hình ảnh và kể chuyện", body: "Liên kết kiến thức với câu chuyện hoặc hình ảnh sinh động để ghi nhớ lâu hơn." },
      { title: "Hợp tác nhóm", body: "Làm việc nhóm để trao đổi ý tưởng và nhận phản hồi." },
      { title: "Đặt phần thưởng cá nhân", body: "Tự thưởng cho bản thân sau khi hoàn thành mục tiêu học tập." }
    ]
  },
  "S":{
    type: "Steadiness",
    tips: [
      { title: "Tạo lịch học đều đặn", body: "Học theo kế hoạch ổn định, tránh gấp gáp hoặc học dồn." },
      { title: "Ưu tiên sự thoải mái", body: "Học ở môi trường yên tĩnh, ít xao nhãng." },
      { title: "Ôn tập thường xuyên", body: "Sử dụng kỹ thuật lặp lại cách quãng để củng cố kiến thức." },
      { title: "Làm việc cùng bạn học thân quen", body: "Học cùng người quen giúp bạn cảm thấy an tâm và dễ tiếp thu." },
      { title: "Chia nhỏ mục tiêu", body: "Hoàn thành từng phần nhỏ để giảm áp lực và tăng sự tự tin." }
    ]
  },
  "C":{
    type: "Conscientiousness",
    tips: [
      { title: "Lập kế hoạch chi tiết", body: "Viết ra danh sách việc cần học và theo dõi tiến độ." },
      { title: "Tập trung vào chất lượng", body: "Ưu tiên hiểu sâu thay vì chỉ học thuộc lòng." },
      { title: "Sử dụng sơ đồ tư duy", body: "Tóm tắt thông tin bằng bảng biểu, sơ đồ để hệ thống hóa kiến thức." },
      { title: "Tự đánh giá", body: "Kiểm tra lại kiến thức bằng các câu hỏi hoặc bài tập mẫu." },
      { title: "Chuẩn bị trước", body: "Đọc trước tài liệu và chuẩn bị câu hỏi trước khi đến lớp hoặc nhóm học." }
    ]
  }
};


const questions = [
  {
    text: "1. Mẹ tôi nói rằng khi còn là một đứa trẻ, tôi là đứa",
    options: [
      { id: "D", text: "Chững chạc trước tuổi, khó bắt nạt được tôi" },
      { id: "I", text: "Vui vẻ và trò chuyện với mọi người thoải mái" },
      { id: "S", text: "Ngoan ngoãn và bình tĩnh" },
      { id: "C", text: "Ít nói, tự túc làm việc và không thích người khác đụng vào đồ của tôi vì tôi đã sắp xếp nó" },
    ],
  },
  {
    text: "2. Ở trong nhà hàng, tôi gọi món và phục vụ nói là còn 10 phút sẽ lên món nhưng hai mươi phút vẫn chưa thấy ra món:",
    options: [
      { id: "D", text: "Tôi bực bội và nói với người phục vụ rằng thời gian đã trôi qua gấp đôi, và tôi hỏi anh ta rằng liệu còn đợi bao lâu nữa?" },
      { id: "I", text: "Tôi không chú ý hoặc, ngay cả khi tôi nhận ra, tôi nghĩ là món sắp lên rồi, kệ, nói chuyện tiếp với bạn." },
      { id: "S", text: "Tôi không nhận ra điều đó, bởi vì tôi đang đắm chìm trong cuộc trò chuyện." },
      { id: "C", text: "Tôi nói với người phục vụ chính xác thời gian tôi đến và chính xác thời gian đã trôi qua, tôi yêu cầu anh ta vui lòng cho tôi biết chính xác là còn bao nhiêu thời gian nữa trước khi có thể đưa ra quyết định." },
    ],
  },
  {
    text: "3. Cả nhóm hẹn đi uống cà phê, với bạn việc chọn địa điểm cả phê thì:",
    options: [
      { id: "D", text: "Chỗ nào có phục vụ nhanh gọn, chuyên nghiệp thì tốt nhất" },
      { id: "I", text: "Chỗ nào đẹp, tiện nghi, ngồi thoải mái để còn hỏi thăm nhau chứ lâu rồi không gặp" },
      { id: "S", text: "Chỗ nào thuận tiện cho tất cả mọi người, đi làm sao không bị kẹt xe, có chỗ để xe thuận lợi" },
      { id: "C", text: "Chỗ nào đảm bảo đồ uống sạch sẽ, phục vụ chu đáo, bảo vệ giữ xe cần thận." },
    ],
  },
  {
    text: "4. Tôi rất đói và vội vàng, người phục vụ mang đến cho tôi một món khác mà tôi đã không gọi:",
    options: [
      { id: "D", text: "Tôi rất bực mình và hỏi anh ta rõ ràng hồi nãy anh ấy ghi chép rất kỹ, sao lại có thể nhầm, quy trình nhà hàng có vấn đề." },
      { id: "I", text: "Tôi nói thẳng với người phục vụ rằng đó không phải là món tôi yêu cầu." },
      { id: "S", text: "Tôi bảo với họ là không phải món của tôi, nhưng tôi thấy nó cũng ngon mà người phục vụ xin lỗi tận tình nên tôi dùng món luôn." },
      { id: "C", text: "Tôi nói chuyện với người phục vụ để giải thích rằng đó không phải là những gì tôi yêu cầu." },
    ],
  },
  {
    text: "5. Trong một buổi họp mặt bạn bè:",
    options: [
      { id: "D", text: "Tôi nói rất nhiều hoặc kể chuyện cười, tôi nói nhiều hơn tôi lắng nghe." },
      { id: "I", text: "Tôi thích thuyết phục người khác về ý kiến của mình và tôi thích nói về những điều liên quan đến công việc của mình." },
      { id: "S", text: "Tôi thích lắng nghe, tôi thích nhường mọi người kể trước." },
      { id: "C", text: "Tôi quan sát mọi người, tôi chỉ đưa ra ý kiến nếu tôi biết chủ đề, và mọi thứ rõ ràng, cần thiết thì nói" },
    ],
  },
  {
    text: "6. Khi tôi đi mua sắm:",
    options: [
      { id: "D", text: "Tôi biết mình muốn gì và tôi không tiêu tiền nếu không tìm được." },
      { id: "I", text: "Tôi thích mua sắm và tôi thích mua quà, họ nói rằng tôi là một người thích mua sắm." },
      { id: "S", text: "Tôi chưa quyết định vội, tôi cân nhắc mua các món đồ và đi thêm cửa hàng để xem rồi lựa chọn." },
      { id: "C", text: "Tôi đang tìm kiếm các sản phẩm giá tốt, hợp lý, đảm bảo tiêu chuẩn chất lượng nguồn gốc." },
    ],
  },
  {
    text: "7. Bạn muốn được người khác tin tưởng bạn ở điểm này:",
    options: [
      { id: "D", text: "Chắc chắn chinh phục những mục tiêu mới, mang lại giá trị cho bản thân, cho mọi người" },
      { id: "I", text: "Là người kết nối, có những ý tưởng hay đóng góp giá trị cho người khác" },
      { id: "S", text: "Tốt bụng, sẵn sàng giúp đỡ, tin cậy bạn có mặt bên họ" },
      { id: "C", text: "Vững chãi, bình ổn, đâu vào đó, không phải lo lắng khi làm việc với bạn" },
    ],
  },
  {
    text: "8. Bạn cảm nhận khả năng nổi trội của mình là gì?",
    options: [
      { id: "D", text: "Lý trí và tháo vát" },
      { id: "I", text: "Phát huy hết khả năng tiềm ẩn của bạn" },
      { id: "S", text: "Kết nối trực quan và cảm nhận sự hòa hợp rất rõ" },
      { id: "C", text: "Hành động có cân nhắc và sắp xếp mọi thứ trật tự" },
    ],
  },
  {
    text: "9. Điều gì thiêng liêng trong cuộc sống của bạn?",
    options: [
      { id: "D", text: "Chinh phục tiềm năng trong mình, bứt phá." },
      { id: "I", text: "Vẻ đẹp, nghệ thuật, sự cân bằng, lạc quan" },
      { id: "S", text: "Tình yêu, sự thân mật, các mối quan hệ" },
      { id: "C", text: "Chính bản thân được trải nghiệm thực tế cuộc sống" },
    ],
  },
  {
    text: "10. Bạn muốn người khác khen mình có điềm nổi bật gì?",
    options: [
      { id: "D", text: "Sức mạnh, lòng dũng cảm, quyền lực, sự độc lập" },
      { id: "I", text: "Thu hút, truyền cảm hứng đến người khác, sự hào phóng" },
      { id: "S", text: "Bao dung, cảm thông với người khác, lòng trắc ẩn, sự bình tĩnh" },
      { id: "C", text: "Sự thật, bền bỉ, có sự chính xác, phân rõ trắng đen" },
    ],
  },
  {
    text: "11. Đâu là điểm yếu lớn nhất của bạn mà bạn cần khắc phục:",
    options: [
      { id: "D", text: "Bướng bình, quá lý trí (ít lắng nghe người khác)" },
      { id: "I", text: "Hay quên, chưa sâu sát vấn đề" },
      { id: "S", text: "Chần chừ, nước đến chân mới nhày" },
      { id: "C", text: "Khó tính, quá cầu toàn" },
    ],
  },
  {
    text: "12. Bạn thấy điều gì mang lại năng lượng và ý nghĩa cho bạn?",
    options: [
      { id: "D", text: "Truyển cảm hứng cho người khác, làm gương đi đầu, tìm kiếm lý tưởng cao nhất" },
      { id: "I", text: "Dẫn dắt và thúc đẩy người khác hoàn thành công việc đạt mục tiêu lớn hơn" },
      { id: "S", text: "Yêu thương, hướng dẫn, giúp đỡ người khác ra khỏi những khó khăn của họ" },
      { id: "C", text: "Tập trung tâm trí vào sự thật, khái niệm hoặc nguyên tắc để mọi việc thuận lợi." },
    ],
  },
  {
    text: "13. Bạn thấy điều gì đáng quý ở con người bạn?",
    options: [
      { id: "D", text: "Nắm bắt cơ hội và quyết tâm, tự lựa chọn con đường riêng của mình" },
      { id: "I", text: "Giúp người khác sử dụng năng lực của họ để họ đạt được mục tiêu" },
      { id: "S", text: "Nhân ái và bao dung với người khác " },
      { id: "C", text: "Cải tiến, tư duy, học hỏi để tạo ra hệ thống chuẩn chỉnh" },
    ],
  },
  {
    text: "14. Mong muốn của bạn khi phối hợp với người khác là gì?",
    options: [
      { id: "D", text: "Làm theo mục tiêu chung, chủ động, năng nổ và đạt thành tích" },
      { id: "I", text: "Chung tay sáng tạo và thực hiện những điều mới mẻ" },
      { id: "S", text: "Cùng nhau tạo thành một tập thể gắn kết và hòa hợp lâu dài" },
      { id: "C", text: "Tạo ra sự liên kết rõ ràng và ổn định" },
    ],
  },
  {
    text: "15. Điều gì thực sự khiến bạn phấn khích trong cuộc sống?",
    options: [
      { id: "D", text: "Những thách thức, sự mới mẻ, rủi ro và cơ hội." },
      { id: "I", text: "Sự bất ngờ thú vị, linh hoạt, tận hưởng, thoải mái" },
      { id: "S", text: "Sự ấm áp, tình cảm, đầy đủ trọn vẹn những người tôi quý mến." },
      { id: "C", text: "Học hỏi, rõ ràng, trật tự, ổn định." },
    ],
  },
  {
    text: "16. Khi đánh giá cho điểm nhận xét người khác, bạn ưu tiên điểm tốt của người đó:",
    options: [
      { id: "D", text: "Người đó cần mạnh mẽ hơn, đưa ra giải pháp để đạt kết quả" },
      { id: "I", text: "Người đó có ý tưởng hay áp dụng được để mang giá trị cho người khác" },
      { id: "S", text: "Biết đặt tập thể lên trên, không cá nhân" },
      { id: "C", text: "Đúng sai rõ ràng, có phân tích lập luận cụ thể" },
    ],
  },
  {
    text: "17. Bạn có tính cách nào đúng nhất:",
    options: [
      { id: "D", text: "Tự tin, bộc trực, mạnh mẽ, chấp nhận rủi ro và thích: cạnh tranh, chiến thắng, thành công" },
      { id: "I", text: "Nhiệt tình, hòa đồng, lạc quan, nói nhiều và thích: hoạt động nhóm, nơi có mối quan hệ thân thiện" },
      { id: "S", text: "Kiên nhẫn, bình tĩnh tiếp cận, ưu tiên người khác và thích: làm việc với những người chân thành, cùng nhau hợp tác, sẵn sàng giúp đỡ người khác" },
      { id: "C", text: "Chính xác, phân tích, hoài nghi, dự trữ, yên tĩnh và thích: mọi thứ chuẩn chỉnh, như thế mới yên tâm" },
    ],
  },
  {
    text: "18. Bạn sợ nhất điều gì:",
    options: [
      { id: "D", text: "Mất cơ hội, cuộc sống không có mục tiêu" },
      { id: "I", text: "Cuộc sống nhàm chán, mất kết nối với người khác" },
      { id: "S", text: "Mình không thể giúp cho gia đình con cái bạn bè, ngại sự lạnh lùng của người thân, bạn bè, đồng nghiệp" },
      { id: "C", text: "Sợ sự không rõ ràng, luẩn quần, bừa bộn" },
    ],
  },

  {
    text: "19. Những đặc điểm mô tả nhiều nhất về bạn:",
    options: [
      { id: "D", text: "Hành động, thuyết phục, quyết tâm" },
      { id: "I", text: "Có sức hút, năng lượng, cười nhiều" },
      { id: "S", text: "Khiêm tốn, nhân ái đối với mọi người" },
      { id: "C", text: "Có hệ thống, hoài nghi, thận trọng" },
    ],
  },
  {
    text: "20. Cảm xúc mà tôi thường thể hiện khi gặp vấn đề bất như ý với người khác là:",
    options: [
      { id: "D", text: "Giận dữ nói to hoặc hỏi dồn người đó" },
      { id: "I", text: "Dễ vui nhanh, dễ buồn lại khi người đó phản ứng với tôi" },
      { id: "S", text: "Tôi thấy khó chịu với người đó và không muốn làm việc chung nữa (nhưng tôi tự rút lui, người đó không biết)." },
      { id: "C", text: "Tôi thấy khó chịu và hỏi ngay với người đó cho rõ" },
    ],
  },
  {
    text: "21. Ngày trước đi học, giáo viên đã nhận ra tôi bởi vì:",
    options: [
      { id: "D", text: "Tôi đã tranh luận rất nhiều, và tôi thắc mắc thì tôi hỏi, tôi không ngại giáo viên." },
      { id: "I", text: "Tôi rất thân thiện, vui vẻ và nói nhiều." },
      { id: "S", text: "Tôi yên lặng, ngoan ngoãn và chăm chỉ." },
      { id: "C", text: "Tôi là học sinh chăm chỉ, có thể phát hiện ra lỗi nhỏ và hay phân tích." },
    ],
  },
  {
    text: "22. Những đặc điểm mô tả bạn chính xác nhất:",
    options: [
      { id: "D", text: "Tự lập và tham vọng." },
      { id: "I", text: "Hợp tác và dễ thích nghi với mọi người." },
      { id: "S", text: "Vô tư và bình dân, hòa đồng với mọi người." },
      { id: "C", text: "Chính xác và chỉn chu." },
    ],
  },
  {
    text: "23. Nếu nói về mình/ giới thiệu bản thân với người khác",
    options: [
      { id: "D", text: "Tôi thích nói về những dự định của tôi, biết đâu có người cùng chung chí hướng về làm cùng." },
      { id: "I", text: "Tôi nói những điều tự nhiên thuộc về tôi, tôi không ngại người khác nghĩ gì" },
      { id: "S", text: "Tôi nói một số điểm cần thiết chứ không nhất thiết phải cho người khác biết tôi rõ." },
      { id: "C", text: "Tôi không thích nói về mình, tôi nói nhanh cho xong, tôi không thích người khác chú ý" },
    ],
  },
  {
    text: "24. Người khác nhận xét về tôi khi tôi hướng dẫn họ:",
    options: [
      { id: "D", text: "Nói xong họ thấy có động lực làm việc, nhắm tới mục tiêu rõ ràng" },
      { id: "I", text: "Nói xong họ thấy mình muốn tham gia cùng và đóng góp ý tưởng chung" },
      { id: "S", text: "Nói xong họ thấy yên tâm, thấy được khích lệ" },
      { id: "C", text: "Nói xong là người khác biết làm gì từng bước, từng bước" },
    ],
  },
  {
    text: "25. Trong cuộc sống, bạn thường:",
    options: [
      { id: "D", text: "Bạn thường tập trung để tạo ra những điều mới hoặc khái niệm mới." },
      { id: "I", text: "Bạn thường suy nghĩ nhiều về tương lai và những gì có thể xảy ra trong tương lai rất xa." },
      { id: "S", text: "Bạn thường suy nghĩ nhiều về hiện tại và những việc đang diễn ra hoặc tương lai gần." },
      { id: "C", text: "Khi học hoặc thu thập thông tin, bạn muốn bắt đầu từ đầu và tiến hành từng bước một." },
    ],
  }, 
];

const descriptions = {
  D: "Bạn có tính cách lãnh đạo mạnh mẽ, quyết đoán và thích thử thách.",
  I: "Bạn là người hướng ngoại, giao tiếp tốt và truyền cảm hứng cho người khác.",
  S: "Bạn là người điềm tĩnh, đáng tin cậy và luôn hỗ trợ người khác.",
  C: "Bạn cẩn thận, có hệ thống và chú trọng đến chi tiết.",
};


const discProfiles = {
  "D":{
    type: "Dominance (D) 🔥",
    title: "Người thống lĩnh 💼",
    description: "⚡ Bạn là người quyết đoán, định hướng kết quả và sẵn sàng đương đầu với thử thách. Bạn thích kiểm soát và dẫn dắt người khác đến mục tiêu.",
    traits: [
      "🧭 Lãnh đạo tự nhiên",
      "🏁 Quyết đoán",
      "🚀 Chấp nhận thử thách",
      "📢 Giao tiếp thẳng thắn"
    ],
    growthAreas: [
      "👂 Luyện tập lắng nghe chủ động",
      "💗 Xem xét cảm xúc của người khác",
      "⏳ Phát triển sự kiên nhẫn",
      "🤝 Cân bằng giữa quyết đoán và hợp tác"
    ],
    workStyle: "⚙️ Bạn phát triển tốt trong môi trường nhanh, có mục tiêu rõ ràng và kết quả đo lường được. Bạn ưa thích giao tiếp trực tiếp và có quyền tự quyết. 🚀 Hãy tìm kiếm các vai trò lãnh đạo và dự án tạo ra thay đổi thực chất."
  },
  "I":{
    type: "Influence (I) ✨",
    title: "Người truyền cảm hứng 🎤",
    description: "🌟 Bạn hướng ngoại, tràn đầy năng lượng và có khả năng ảnh hưởng tích cực đến người khác. Bạn yêu thích giao tiếp và xây dựng mối quan hệ.",
    traits: [
      "🌈 Lạc quan",
      "🔥 Nhiệt huyết",
      "🗣️ Thuyết phục tốt",
      "🤗 Thân thiện, dễ gần"
    ],
    growthAreas: [
      "📋 Tập trung vào chi tiết",
      "👂 Lắng nghe nhiều hơn nói",
      "⏱️ Quản lý thời gian hiệu quả",
      "⚖️ Cân bằng giữa công việc và tương tác"
    ],
    workStyle: "🎯 Bạn làm tốt trong môi trường năng động, nhiều tương tác. Thích hợp với vai trò sáng tạo, giao tiếp và kết nối con người. ✨ Hãy chọn những vị trí giúp bạn truyền cảm hứng và lan tỏa năng lượng tích cực."
  },
  "S":{
    type: "Steadiness (S) 🌱",
    title: "Người ổn định và hỗ trợ 🛠️",
    description: "🕊️ Bạn trung thành, kiên định và tạo ra sự ổn định cho tập thể. Luôn sẵn sàng hỗ trợ người khác một cách âm thầm và hiệu quả.",
    traits: [
      "🧘 Tính kiên nhẫn",
      "🛡️ Đáng tin cậy",
      "👂 Lắng nghe tốt",
      "🤝 Tinh thần hợp tác"
    ],
    growthAreas: [
      "📣 Chủ động chia sẻ quan điểm",
      "🎢 Chấp nhận thay đổi",
      "🧱 Thiết lập ranh giới cá nhân",
      "🙅 Học cách từ chối khi cần thiết"
    ],
    workStyle: "🏡 Bạn làm việc tốt trong môi trường ổn định, ít căng thẳng. Phù hợp với vai trò hỗ trợ, quản lý quy trình và chăm sóc đội nhóm. 🌿 Hãy chọn nơi mà bạn có thể tạo nên sự vững vàng và tin cậy."
  },
  "C":{
    type: "Conscientiousness (C) 🧠",
    title: "Người chính xác và phân tích 🧮",
    description: "📏 Bạn logic, cẩn trọng và có tiêu chuẩn cao. Bạn theo đuổi sự hoàn hảo, chú trọng vào chất lượng và chi tiết.",
    traits: [
      "🔍 Tư duy phân tích",
      "📌 Chính xác",
      "🧾 Có trách nhiệm",
      "📚 Tuân thủ quy định"
    ],
    growthAreas: [
      "🎯 Tránh cầu toàn quá mức",
      "🤝 Tin tưởng người khác nhiều hơn",
      "💬 Giao tiếp linh hoạt",
      "⚡ Biết khi nào nên hành động"
    ],
    workStyle: "🧑‍🔬 Bạn phát triển tốt trong môi trường có quy trình rõ ràng, kỳ vọng cao và cần sự tỉ mỉ. 🎓 Phù hợp với các vai trò phân tích, đánh giá và cải tiến hiệu suất."
  }
};


const DISCQuiz = () => {
  
  const [inputValue, setInputValue] = useState('');


  const startButton = document.getElementById('startButton');

  
  const wellcome = document.getElementById('wellcome')
  const questionSection = document.getElementById('questions-section');
  const resultsSection = document.getElementById('results-section');
  const tipsSection = document.getElementById('tips-section');
  const progressDot = document.getElementsByClassName('progress-dot')


  function handleNext1(){
    wellcome.classList.add('hidden')
    questionSection.classList.remove('hidden')
  }

  function handleNext2(){
    questionSection.classList.add('hidden')
    resultsSection.classList.remove('hidden')
  }

  function handleNext3(){
    resultsSection.classList.add('hidden')
    tipsSection.classList.remove('hidden')
  }

  function handleBackResult(){
    tipsSection.classList.add('hidden')
    resultsSection.classList.remove('hidden')
  }

  function handleBacktoStart(){
    resultsSection.classList.add('hidden');
    wellcome.classList.remove('hidden')
    for(let i = 1; i < progressDot.length; i++){
      progressDot[i].classList.remove('bg-purple-600')
      progressDot[i].classList.add('bg-gray-300')
    }
    setInputValue("")
      setStep(0);
      setAnswers([])
      setItems(questions[0].options)
  }

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor) // để hỗ trợ điện thoại
  );

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');      // 09
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 04 (tháng bắt đầu từ 0)
  const year = today.getFullYear();                          // 2025

  const formattedDate = `${day}-${month}-${year}`;

  const randomNumber = Math.floor(Math.random() * 9) + 1;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [items, setItems] = useState(questions[0].options);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);



  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleNext = () => {
    setAnswers([...answers, items]);
    if (step + 1 < questions.length) {
      setStep(step + 1);
      setItems(questions[step + 1].options);
      progressDot[step+1].classList.remove('bg-gray-300')
      progressDot[step+1].classList.add('bg-purple-600')
      
    } else {
   
      handleNext2()
      

      

      const disc = Object.entries(calculateScores());

      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        // Nếu chưa có gì trong localStorage
        const user = {
          [inputValue]: {
            disc: disc,
            highest_disc: highestCategory,
            time: formattedDate,
            avt: randomNumber
          },
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User mới đã được lưu.");
      } else {
        // Nếu đã có user trong localStorage
        const user = JSON.parse(storedUser);

        if (!user[inputValue]) {
          // Nếu chưa có người dùng này
          user[inputValue] = { 
            disc: disc,
            highest_disc: highestCategory,
            time: formattedDate,
            avt: randomNumber
          };
          console.log("Đã thêm người dùng mới vào user.");
        } else {
          // Nếu đã có người dùng này, cập nhật numerology
          user[inputValue].disc = disc;
          user[inputValue].highest_disc = highestCategory;
          if(!user[inputValue].time){
            user[inputValue].time = formattedDate;
            user[inputValue].avt = randomNumber
          }
          console.log("Đã cập nhật disc cho người dùng.");
        }

        // Lưu lại toàn bộ object user
        localStorage.setItem("user", JSON.stringify(user));
      }

      
    }
  };

  const calculateScores = () => {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    answers.forEach((answerSet) => {
      answerSet.forEach((item, index) => {
        scores[item.id] += 4 - index;
      });
    });
    return scores;
  };

  

  const highestCategory = Object.keys(calculateScores()).reduce((a, b) =>
    calculateScores()[a] > calculateScores()[b] ? a : b
  );


  return (
      <>
      <div className="disc_inner flex justify-center">

      
      <div id="wellcome" className="relative disc_wrapper flex flex-col items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating text-4xl" style={{ top: '15%', left: '10%', animationDuration: '6s', opacity: 0.6 }}>🧠</div>
            <div className="floating text-3xl" style={{ top: '25%', right: '15%', animationDuration: '7s', opacity: 0.6 }}>🔍</div>
            <div className="floating text-4xl" style={{ bottom: '20%', left: '15%', animationDuration: '8s', opacity: 0.6 }}>💭</div>
            <div className="floating text-3xl" style={{ bottom: '30%', right: '10%', animationDuration: '9s', opacity: 0.6 }}>✨</div>
            <div className="floating text-4xl" style={{ top: '60%', left: '20%', animationDuration: '7.5s', opacity: 0.6 }}>🌟</div>
            <div className="floating text-3xl" style={{ top: '40%', right: '25%', animationDuration: '6.5s', opacity: 0.6 }}>📊</div>
        </div>

        <header className="w-full max-w-4xl mb-8 flex justify-center items-center">

          
          {/* <!-- DISC Type Preview --> */}
          <div className="hidden md:flex items-center gap-2">

              <div className="disc-icon bg-red-500" title="Dominant" style={{ transform: 'scale(1)' }}>D</div>
              <div className="disc-icon bg-yellow-500" title="Influential" style={{ transform: 'scale(1)' }}>I</div>
              <div className="disc-icon bg-green-500" title="Steady" style={{ transform: 'scale(1)' }}>S</div>
              <div className="disc-icon bg-blue-500" title="Conscientious" style={{ transform: 'scale(1)' }}>C</div>

          </div>
        </header>

        <main className="w-full max-w-2xl">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl fade-in">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Khám Phá Kiểu Tính Cách DISC Của Bạn</h2>
                <p className="text-gray-600 leading-relaxed">
                Tìm hiểu xem bạn thuộc kiểu Dominant, Influential, Steady, hay Conscientious – và khám phá cách phát triển dựa trên phong cách tự nhiên của mình.
                </p>
            </div>
            
            {/* <!-- Mobile DISC Icons --> */}
            <div className="md:hidden flex justify-center gap-3 mb-8">
                <div className="disc-icon bg-red-500 text-sm" title="Dominant">D</div>
                <div className="disc-icon bg-yellow-500 text-sm" title="Influential">I</div>
                <div className="disc-icon bg-green-500 text-sm" title="Steady">S</div>
                <div className="disc-icon bg-blue-500 text-sm" title="Conscientious">C</div>
            </div>
            
            {/* <!-- Name Input --> */}
            <div className="mb-8">
                <label for="name" className="block text-gray-700 font-medium mb-2">Nhập tên của bạn để bắt đầu hành trình khám phá</label>
                <input  value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" id="name" className="input-field w-full px-5 py-4 bg-white/70 rounded-xl text-gray-800 text-lg outline-none" placeholder="e.g., Alex, Linh, or Jaden"/>
            </div>
            
            {/* <!-- Start Button --> */}
            <div className="flex justify-center">
                <button onClick={handleNext1} id="startButton" className="start-btn w-full md:w-2/3 py-4 rounded-xl text-white font-bold text-lg shadow-lg disabled:opacity-70" disabled={inputValue.trim() === ''}>
                    Bắt đầu bài test DISC
                </button>
            </div>
            
            {/* <!-- Test Info --> */}
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>Bài trắc nghiệm này chỉ mất khoảng 5–10 phút để hoàn thành</p>
                <p className="mt-1">Kết quả sẽ giúp bạn hiểu rõ hơn về điểm mạnh của bản thân</p>
            </div>
        </div>
        
        {/* <!-- DISC Type Explanation --> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 fade-in" style={{animationDelay: "0.3s"}}>
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4">
                <div className="disc-icon bg-red-500 text-sm">D</div>
                <div>
                    <h3 className="font-bold text-gray-800">Người Thống trị</h3>
                    <p className="text-sm text-gray-600">Thẳng thắn, ý chí mạnh mẽ</p>
                </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4">
                <div className="disc-icon bg-yellow-500 text-sm">I</div>
                <div>
                    <h3 className="font-bold text-gray-800">Người Ảnh hưởng</h3>
                    <p className="text-sm text-gray-600">Hòa đồng, lạc quan</p>
                </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4">
                <div className="disc-icon bg-green-500 text-sm">S</div>
                <div>
                    <h3 className="font-bold text-gray-800">Người Ổn định</h3>
                    <p className="text-sm text-gray-600">Kiên nhẫn, trung thành, hỗ trợ</p>
                </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4">
                <div className="disc-icon bg-blue-500 text-sm" style={{transform: "scale(1)"}}>C</div>
                <div>
                    <h3 className="font-bold text-gray-800">Người Tỉ mỉ</h3>
                    <p className="text-sm text-gray-600">Phân tích tốt, chính xác</p>
                </div>
            </div>
        </div>
    </main>
      </div>



      <div id="questions-section" className="disc_wrapper_small flex justify-center flex-col items-center hidden">
            {/* <!-- Progress Indicator --> */}
            <div id="ProgressGroup" className="flex justify-center mb-8">
                <div className="flex space-x-4">
                    <div className="progress-dot w-4 h-4 rounded-full bg-purple-600"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="progress-dot w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
            </div>
            
            {/* <!-- Question 1 --> */}
            <div id="question-1" className="question-card bg-white bg-opacity-70 rounded-3xl p-8 shadow-lg glow mb-8 fade-in">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-800 mb-8">{questions[step].text}</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">



                    
                <DndContext collisionDetection={closestCenter} sensors={sensors} onDragEnd={handleDragEnd}>
                    <SortableContext items={items} strategy={verticalListSortingStrategy}>
                      {items.map((item) => (

                        <SortableItem key={item.id} id={item.id} text={item.text} />
                      ))}
                    </SortableContext>
                  </DndContext>

                </div>
            </div>
            
      
            <div className="mb-8 flex justify-center">
                <button onClick={handleNext} className="continue_btn start-btn  md:w-2/3 py-4 rounded-xl text-white font-bold text-lg shadow-lg disabled:opacity-70">
                    Tiếp theo
                </button>
            </div>
            </div>
      



        <div id="results-section" className="mb-[5rem] hidden">

            <div className="result-card-disc mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg glow mt-20 mb-8">

            {highestCategory ? (
              <>
                <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">Nhóm Tính Cách DISC Của Bạn</h2>
                <p className="text-lg text-gray-600 mb-6">Dựa trên câu trả lời của bạn, <span id="user-name-display">you</span> bạn chủ yếu là:</p>

                <div id="personality-type" className="text-5xl font-bold mb-4">{highestCategory}</div>
                <div id="personality-title" className="text-2xl text-purple-700 mb-8">{DISCStudyTips[highestCategory].type}: {discProfiles[highestCategory].description}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">Điểm mạnh:</h3>
                    <ul id="strengths-list" className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>{discProfiles[highestCategory].traits[0]}</li>
                      <li>{discProfiles[highestCategory].traits[1]}</li>
                      <li>{discProfiles[highestCategory].traits[2]}</li>
                      <li>{discProfiles[highestCategory].traits[3]}</li>
                    </ul>
                </div>

                <div className="bg-indigo-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Tiềm năng phát triển:</h3>
                    <ul id="growth-list" className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>{discProfiles[highestCategory].growthAreas[0]}</li>
                      <li>{discProfiles[highestCategory].growthAreas[1]}</li>
                      <li>{discProfiles[highestCategory].growthAreas[2]}</li>
                      <li>{discProfiles[highestCategory].growthAreas[3]}</li>
                    </ul>
                </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Cách bạn làm việc hiệu quả nhất</h3>
                <p id="work-style" className="text-gray-700">
                {discProfiles[highestCategory].workStyle}
                </p>
                </div>
                </>
            ) : ""}
                
                <div className="text-center">
                    <button onClick={handleNext3} id="tips-btn" className="mr-0 sm:mr-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 mb-4">
                        Xem gợi ý phát triển
                    </button>
                    
                    <button onClick={handleBacktoStart} id="restart-btn" className="bg-white text-indigo-600 border border-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-50 transition duration-300">
                        Làm lại bài Test
                    </button>
                </div>
            </div>
            

        </div>







        <div id="tips-section" className="mt-[3rem] hidden">
            <div className="tips_card mx-auto bg-white bg-opacity-80 rounded-3xl p-8 md:p-12 shadow-lg glow mb-8 fade-in">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-indigo-800">Mẹo phát triển</h2>
                    <button onClick={handleBackResult} id="back-to-results" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                        Quay lại kết quả
                    </button>
                </div>
                
                <div id="tips-content" className="space-y-6">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">Mẹo dành cho nhóm tính cách {DISCStudyTips[highestCategory].type}</h3>
                  <ul className="space-y-4">
                    <li className="bg-white rounded-xl p-4 shadow-sm"><strong>{DISCStudyTips[highestCategory].tips[0].title}</strong> - {DISCStudyTips[highestCategory].tips[0].body}</li>
                    <li className="bg-white rounded-xl p-4 shadow-sm"><strong>{DISCStudyTips[highestCategory].tips[1].title}</strong> - {DISCStudyTips[highestCategory].tips[1].body}</li>
                    <li className="bg-white rounded-xl p-4 shadow-sm"><strong>{DISCStudyTips[highestCategory].tips[2].title}</strong> - {DISCStudyTips[highestCategory].tips[2].body}</li>
                    <li className="bg-white rounded-xl p-4 shadow-sm"><strong>{DISCStudyTips[highestCategory].tips[3].title}</strong> - {DISCStudyTips[highestCategory].tips[3].body}</li>
                    <li className="bg-white rounded-xl p-4 shadow-sm"><strong>{DISCStudyTips[highestCategory].tips[4].title}</strong> - {DISCStudyTips[highestCategory].tips[4].body}</li>
                  </ul>
                </div>
            </div>
        </div>
      </div>

      </>
  );
};

export default DISCQuiz;
