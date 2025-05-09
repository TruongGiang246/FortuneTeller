

const tarotCards = [
    {
      name: "The Fool",
      keywords: "Khởi đầu mới, ngây thơ, tự phát",
      description: "The Fool đại diện cho khởi đầu mới, niềm tin vào tương lai, sự ngây thơ, không biết trước điều gì, may mắn của người mới bắt đầu, khả năng ứng biến và niềm tin vào vũ trụ.",
      image: "🃏"
    },
    {
      name: "The Magician",
      keywords: "Hiện thực hóa, tài khéo léo, quyền năng",
      description: "The Magician đại diện cho khả năng giao tiếp rõ ràng, thể hiện bản thân và sự sáng tạo. Lá bài này tượng trưng cho việc bạn có đủ công cụ để biến ước mơ thành hiện thực.",
      image: "✨"
    },
    {
      name: "The High Priestess",
      keywords: "Trực giác, tri thức thiêng liêng, nữ tính thần thánh",
      description: "The High Priestess tượng trưng cho sự khai sáng tinh thần, hiểu biết nội tâm và trí tuệ thiêng liêng. Lá bài nhấn mạnh tầm quan trọng của việc tin tưởng vào trực giác.",
      image: "🌙"
    },
    {
      name: "The Empress",
      keywords: "Nữ tính, vẻ đẹp, thiên nhiên, nuôi dưỡng",
      description: "The Empress thể hiện sự kết nối mạnh mẽ với năng lượng nữ tính như vẻ đẹp, sự sáng tạo, sinh sản, và chăm sóc. Đây là nguồn năng lượng cân bằng cuộc sống.",
      image: "👑"
    },
    {
      name: "The Emperor",
      keywords: "Quyền lực, cấu trúc, kiểm soát, người cha",
      description: "The Emperor đại diện cho ảnh hưởng mạnh mẽ, cấu trúc, sự ổn định và an toàn. Ông thiết lập luật lệ và tạo nên trật tự để mang lại sự an toàn.",
      image: "⚔️"
    },
    {
      name: "The Hierophant",
      keywords: "Trí tuệ tâm linh, truyền thống, tuân thủ",
      description: "The Hierophant tượng trưng cho giá trị truyền thống và hệ thống tín ngưỡng. Có thể là đại diện cho hôn nhân, hoặc một người thầy tinh thần hướng dẫn bạn.",
      image: "🔮"
    },
    {
      name: "The Lovers",
      keywords: "Tình yêu, hòa hợp, mối quan hệ, lựa chọn",
      description: "The Lovers thể hiện sự kết nối và những lựa chọn trong tình yêu. Nó báo hiệu những quyết định quan trọng liên quan đến tình cảm hoặc đối tác.",
      image: "❤️"
    },
    {
      name: "The Chariot",
      keywords: "Kiểm soát, ý chí, thành công, quyết tâm",
      description: "The Chariot tượng trưng cho việc vượt qua trở ngại bằng sự quyết tâm, tập trung và ý chí mạnh mẽ. Thành công sẽ đến nếu bạn kiên định với mục tiêu.",
      image: "🏆"
    },
    {
      name: "Strength",
      keywords: "Dũng cảm, kiên nhẫn, từ bi, kiểm soát mềm mại",
      description: "Strength thể hiện sức mạnh nội tại, lòng dũng cảm, sự kiên nhẫn và lòng trắc ẩn. Bạn có khả năng vượt qua mọi thử thách bằng tình yêu và sự dịu dàng.",
      image: "🦁"
    },
    {
      name: "The Hermit",
      keywords: "Tìm kiếm bản thân, nội tâm, cô độc",
      description: "The Hermit là dấu hiệu của thời gian chiêm nghiệm và lắng nghe nội tâm. Đây là lúc bạn nên rút lui để hiểu rõ con đường và mục đích sống của mình.",
      image: "🔦"
    },
    {
      name: "Wheel of Fortune",
      keywords: "May mắn, nghiệp báo, số mệnh, thay đổi",
      description: "Wheel of Fortune thể hiện sự thay đổi của số phận, vòng quay may rủi. Mọi thứ luôn luân chuyển – có thể là bước ngoặt quan trọng trong cuộc sống.",
      image: "🎡"
    },
    {
      name: "Justice",
      keywords: "Công lý, sự thật, luật lệ, nhân quả",
      description: "Justice đại diện cho sự công bằng, chân lý và trách nhiệm. Bạn được kêu gọi phải chịu trách nhiệm cho hành động của mình và đưa ra quyết định công tâm.",
      image: "⚖️"
    },
    {
      name: "The Hanged Man",
      keywords: "Tạm dừng, buông bỏ, chấp nhận, góc nhìn mới",
      description: "The Hanged Man biểu thị việc cần tạm dừng, buông bỏ kiểm soát và nhìn nhận mọi việc từ một góc độ khác để có sự thấu suốt mới.",
      image: "🙃"
    },
    {
      name: "Death",
      keywords: "Kết thúc, chuyển hóa, thay đổi",
      description: "Death đại diện cho sự kết thúc cần thiết để mở ra một khởi đầu mới. Lá bài là biểu tượng của sự thay đổi sâu sắc và giải phóng.",
      image: "💀"
    },
    {
      name: "Temperance",
      keywords: "Cân bằng, tiết chế, hòa hợp, mục đích",
      description: "Temperance khuyên bạn nên sống điều độ và biết dung hòa. Đây là biểu tượng của sự chữa lành và kết hợp các yếu tố để đạt sự toàn vẹn.",
      image: "🏺"
    },
    {
      name: "The Devil",
      keywords: "Nghiện ngập, vật chất, giam cầm, mặt tối",
      description: "The Devil cho thấy sự ràng buộc bởi ham muốn, mối quan hệ độc hại hoặc niềm tin hạn chế. Nó mời gọi bạn đối mặt với bóng tối trong chính mình.",
      image: "😈"
    },
    {
      name: "The Tower",
      keywords: "Thay đổi đột ngột, hỗn loạn, thức tỉnh",
      description: "The Tower báo hiệu sự kiện bất ngờ có thể làm đảo lộn cuộc sống. Nhưng đó cũng là cơ hội để loại bỏ ảo tưởng và xây dựng lại từ đầu.",
      image: "🌩️"
    },
    {
      name: "The Star",
      keywords: "Hy vọng, cảm hứng, chữa lành, tái sinh",
      description: "The Star là ánh sáng soi đường trong đêm tối, biểu tượng của sự lạc quan và bình an sau khủng hoảng. Hãy tin tưởng vào con đường phía trước.",
      image: "🌟"
    },
    {
      name: "The Moon",
      keywords: "Ảo ảnh, sợ hãi, trực giác, tiềm thức",
      description: "The Moon tiết lộ những cảm xúc ẩn sâu và những điều chưa rõ ràng. Hãy lắng nghe trực giác và chấp nhận những điều chưa thể lý giải rõ ràng.",
      image: "🌕"
    },
    {
      name: "The Sun",
      keywords: "Niềm vui, thành công, sức sống, lạc quan",
      description: "The Sun là dấu hiệu của hạnh phúc, năng lượng tích cực và sự thành công. Nó mang lại ánh sáng, sự thật và sự thịnh vượng cho bạn.",
      image: "☀️"
    },
    {
      name: "Judgement",
      keywords: "Suy ngẫm, thức tỉnh, đánh giá lại",
      description: "Judgement là lời kêu gọi bạn nhìn lại bản thân, tha thứ quá khứ và hướng tới một khởi đầu mới. Đây là sự tái sinh và giác ngộ.",
      image: "📯"
    },
    {
      name: "The World",
      keywords: "Hoàn tất, thành tựu, hòa hợp",
      description: "The World là sự kết thúc viên mãn của một chu kỳ. Nó biểu thị thành công, sự trọn vẹn và sẵn sàng cho chương tiếp theo của cuộc đời.",
      image: "🌍"
    }
  ];
  

export default tarotCards