const ElementDescriptions = {
    0: {
      name: "Lửa",
      lack: "Thiếu nguyên tố Lửa có thể khiến bạn thiếu động lực, thiếu tự tin và khó khởi xướng những điều mới.",
      excess: "Nguyên tố Lửa quá mạnh mang lại sự bốc đồng, vội vàng và có thể khiến bạn hành động thiếu cân nhắc.",
      balance: "Bạn có sự cân bằng tuyệt vời của nguyên tố Lửa – điều này giúp bạn duy trì động lực và tự tin một cách ổn định."
    },
    1: {
      name: "Đất",
      lack: "Thiếu nguyên tố Đất có thể làm bạn thiếu sự ổn định, khó tập trung và thiếu tính tổ chức trong cuộc sống.",
      excess: "Nguyên tố Đất quá mạnh khiến bạn trở nên quá thực tế, bảo thủ và đôi khi ngại thay đổi.",
      balance: "Bạn có sự cân bằng tuyệt vời của nguyên tố Đất – điều này giúp bạn duy trì sự ổn định và thực tế trong cuộc sống."
    },
    2: {
      name: "Khí",
      lack: "Thiếu nguyên tố Khí khiến bạn gặp khó khăn trong việc giao tiếp, tư duy và thiếu sự linh hoạt trong quan điểm.",
      excess: "Nguyên tố Khí quá mạnh có thể khiến bạn sống quá lý trí, xa cách cảm xúc và hay phân tán tư tưởng.",
      balance: "Bạn có sự cân bằng tuyệt vời của nguyên tố Khí – điều này giúp bạn duy trì sự linh hoạt và khả năng giao tiếp hiệu quả."
    },
    3: {
      name: "Nước",
      lack: "Thiếu nguyên tố Nước khiến bạn khó kết nối cảm xúc, thiếu sự thấu cảm và khó thể hiện nội tâm một cách trọn vẹn.",
      excess: "Nguyên tố Nước quá mạnh có thể khiến bạn sống quá cảm xúc, dễ tổn thương và hay chìm đắm trong quá khứ.",
      balance: "Bạn có sự cân bằng tuyệt vời của nguyên tố Nước – điều này giúp bạn duy trì sự nhạy cảm và thấu cảm một cách hài hòa."
    },
    overallBalance: {
      status: "Cân bằng tổng thể",
      description: "Bạn sở hữu sự cân bằng hài hòa giữa các nguyên tố Lửa, Đất, Khí và Nước – điều này giúp bạn linh hoạt, ổn định và dễ dàng thích nghi với mọi hoàn cảnh trong cuộc sống."
    }
  };
  

  const ModalityDescriptions = {
    0: {
      name: "Tiên phong",
      lack: "Thiếu tính Tiên phong có thể khiến bạn thiếu động lực khởi xướng, dễ bị động và bỏ lỡ cơ hội quan trọng.",
      excess: "Tính Tiên phong quá mạnh có thể khiến bạn trở nên độc đoán, thiếu kiên nhẫn và dễ bỏ dở giữa chừng.",
      balance: "Bạn có sự cân bằng tuyệt vời của tính Tiên phong – điều này giúp bạn chủ động, quyết đoán và dẫn dắt hiệu quả."
    },
    1: {
      name: "Kiên định",
      lack: "Thiếu tính Kiên định có thể khiến bạn dễ thay đổi, thiếu ổn định và khó theo đuổi mục tiêu dài hạn.",
      excess: "Tính Kiên định quá mạnh có thể khiến bạn trở nên cứng nhắc, bảo thủ và khó thích nghi với thay đổi.",
      balance: "Bạn có sự cân bằng tuyệt vời của tính Kiên định – điều này giúp bạn ổn định, bền bỉ và đáng tin cậy."
    },
    2: {
      name: "Linh hoạt",
      lack: "Thiếu tính Linh hoạt có thể khiến bạn khó thích nghi, thiếu linh động và dễ bị căng thẳng khi đối mặt với thay đổi.",
      excess: "Tính Linh hoạt quá mạnh có thể khiến bạn trở nên thiếu quyết đoán, dễ bị phân tâm và khó hoàn thành công việc.",
      balance: "Bạn có sự cân bằng tuyệt vời của tính Linh hoạt – điều này giúp bạn thích nghi nhanh chóng và xử lý tình huống linh hoạt."
    },
    overallBalance: {
      status: "Cân bằng tổng thể",
      description: "Bạn sở hữu sự cân bằng hài hòa giữa các tính chất Tiên phong, Kiên định và Linh hoạt – điều này giúp bạn linh hoạt, ổn định và dễ dàng thích nghi với mọi hoàn cảnh trong cuộc sống."
    }
  };

const planetDes = [
    "Bạn sinh ra để toả sáng. Khi Mặt Trời trong lá số của bạn mạnh, điều đó cho thấy bản sắc, khí chất và ánh sáng nội tâm của bạn luôn rõ ràng, khó nhầm lẫn. Bạn mang trong mình sự tự tin, sức hút và cảm giác về mục đích sống một cách tự nhiên. Bạn thường có khát khao thể hiện bản thân, nổi bật giữa đám đông và theo đuổi những vai trò sáng tạo hoặc lãnh đạo để lại dấu ấn cá nhân. Người khác có thể bị thu hút bởi sự hiện diện của bạn, tìm đến bạn để được truyền cảm hứng, được dẫn dắt hoặc đơn giản là cảm nhận được sự ấm áp. Tuy nhiên, khi Mặt Trời trở nên quá nổi bật, bạn có thể dễ rơi vào tự cao, phụ thuộc vào sự công nhận từ bên ngoài, hoặc lo sợ bị lu mờ nếu không được chú ý. Dù vậy, nếu bạn sống tỉnh thức, bạn hoàn toàn có thể truyền cảm hứng cho người khác chỉ bằng cách sống thật với chính mình. Mặt Trời chính là động cơ bên trong bạn – và khi nó mạnh, bạn có đủ 'nhiên liệu' để theo đuổi mục tiêu lớn và lan toả ánh sáng đến mọi nơi bạn đi qua.",
    "Bạn sống bằng nhịp điệu của cảm xúc. Khi Mặt Trăng trong lá số mạnh, điều đó cho thấy bạn có sự kết nối sâu sắc với thế giới nội tâm, ký ức quá khứ và những người bạn gọi là 'gia đình'. Với bạn, cảm xúc không chỉ là thứ lướt qua – mà là kim chỉ nam. Bạn thường có khả năng cảm nhận không khí của một căn phòng, nắm bắt tâm trạng của người khác, và có phản ứng rất nhanh với những gì xảy ra quanh mình. Sự nhạy cảm này giúp bạn trở thành người biết chăm sóc, bảo vệ, và mang lại cảm giác an toàn cho người khác. Bạn có thể gắn bó mạnh mẽ với gia đình, nguồn cội hoặc truyền thống – ngay cả khi mối quan hệ ấy đôi khi phức tạp. Bạn khao khát sự an toàn về mặt cảm xúc, có thể thông qua việc chăm sóc người thân, nấu ăn, lưu giữ kỷ niệm hay tạo dựng một mái nhà đầy yêu thương. Tuy nhiên, Mặt Trăng mạnh không phải lúc nào cũng “mềm mại”. Nếu bị ảnh hưởng bởi các góc chiếu căng thẳng hoặc nằm ở những vị trí thử thách, nó có thể khiến bạn dễ bị tổn thương, thay đổi tâm trạng thất thường hoặc khó buông bỏ quá khứ. Tuy nhiên, điểm mạnh của bạn chính là sự khôn ngoan cảm xúc – bạn hiểu được nhịp điệu của cảm xúc, sự cần thiết của việc được an ủi và biết khi nào cần bảo vệ những gì quý giá. Bạn có thể không ồn ào, nhưng sự hiện diện của bạn luôn để lại dấu ấn sâu sắc.",
    "Tâm trí bạn luôn hoạt động không ngừng. Khi Thủy Tinh trong lá số mạnh, điều đó cho thấy giao tiếp, trí tò mò và sự linh hoạt trong tư duy là cách bạn kết nối với thế giới. Bạn có thể là người đọc ngấu nghiến mọi thứ, luôn đặt câu hỏi, và không thể không phân tích, giải thích hay “giải mã” mọi điều xung quanh. Ý tưởng đến với bạn nhanh như chớp, và bạn thường đi trước người khác một vài bước trong các cuộc trò chuyện—hoặc đã chuyển sang chủ đề mới rồi. Bạn có thể có tài năng trong viết lách, ngôn ngữ, thuyết trình hoặc kết nối các khái niệm tưởng chừng rời rạc. Với đôi tay khéo léo, bạn cũng có thể giỏi những việc như lập trình, thủ công, chơi nhạc cụ. Tâm trí bạn cần được chuyển động, và nó phát triển mạnh trong môi trường sôi động, nhanh nhạy. Nhiều người có Thủy Tinh mạnh là bậc thầy “bắt chước”, giao tiếp thông minh, và nhận biết mô hình cực kỳ tốt. Tuy nhiên, Thủy Tinh mạnh cũng có thể mang đến thử thách: dễ mất tập trung, tâm trí quá phân tán hoặc lo lắng vì muốn biết mọi thứ cùng một lúc. Bạn có thể làm quá nhiều thứ một lúc và khó mà hoàn thành tất cả. Sự chú ý có thể “nhảy múa” liên tục. Dù vậy, đây vẫn là món quà đáng quý: khi biết định hướng rõ ràng, bạn là người giao tiếp xuất sắc, người kết nối tự nhiên và là học sinh suốt đời với tinh thần luôn khao khát hiểu biết.",
    "Bạn có một sức hút tự nhiên. Khi Kim Tinh mạnh trong lá số, điều đó cho thấy tình yêu, cái đẹp, sự hài hòa và kết nối là những sợi chỉ vàng đan xen trong con người bạn. Bạn tỏa ra sự ấm áp và duyên dáng—dù là qua phong cách cá nhân, các mối quan hệ hay bầu không khí dễ chịu bạn tạo ra xung quanh mình. Bạn có khả năng thu hút không chỉ trong tình yêu, mà còn trong cuộc sống nói chung: biết cách mời gọi những trải nghiệm ngọt ngào đến với mình bằng sự tinh tế và nhẹ nhàng. Có thể bạn có khiếu thẩm mỹ bẩm sinh—về thời trang, nghệ thuật, màu sắc, âm nhạc, hoặc thậm chí là cách bạn sắp xếp một bàn ăn. Bạn quý trọng các mối quan hệ, và thường là người mà người khác tìm đến khi cần sự an ủi, tình cảm hay một chút dễ chịu giữa cuộc sống bộn bề. Tuy nhiên, Kim Tinh mạnh không phải lúc nào cũng chỉ là dịu dàng và lãng mạn. Nó cũng có thể hiện diện dưới dạng sự phù phiếm, khó quyết đoán trong tình cảm, hoặc xu hướng đặt vẻ ngoài lên trên chiều sâu. Bạn cũng có thể quá khao khát sự yên ổn đến mức tránh né những xung đột cần thiết. Đôi khi, để giữ hòa khí, bạn quên mất nhu cầu thật sự của bản thân. Dù vậy, Kim Tinh là món quà quý báu. Nó mang tình yêu, sự dịu dàng và cái đẹp đến với thế giới—nhắc nhở người khác rằng lòng tốt, cái ôm nhẹ nhàng hay một bản nhạc du dương đều có khả năng chữa lành.",
    "Bạn sinh ra để hành động. Khi Hỏa Tinh mạnh trong lá số, điều đó cho thấy bạn có một nguồn năng lượng dồi dào, một ý chí kiên cường và khát khao chinh phục điều mình muốn. Bạn luôn có cảm giác như bên trong đang thôi thúc mình—phải làm gì đó, phải tiến lên, phải vượt qua giới hạn. Bạn là kiểu người không chờ ai trao cơ hội—bạn tự tạo cơ hội, chủ động bắt đầu, và theo đuổi tới cùng. Bản năng của bạn mạnh mẽ, thể chất có thể bền bỉ, và bạn có xu hướng hành động theo cảm xúc rõ ràng. Khi thực sự quan tâm điều gì, bạn sẵn sàng dốc toàn bộ sức lực vào đó. Bạn có thể là người lãnh đạo bẩm sinh, dám nói dám làm, không ngại va chạm nếu cần thiết. Tuy nhiên, khi năng lượng Hỏa quá mạnh, cũng không dễ kiểm soát. Bạn có thể dễ nổi nóng, mất kiên nhẫn, hoặc hành động bốc đồng. Khi đó, thử thách là làm sao để điều tiết năng lượng này—biến nó thành động lực bền vững chứ không phải bốc cháy rồi lụi tàn. Dù vậy, Hỏa Tinh luôn là nguồn sức mạnh tiềm ẩn: giúp bạn đối mặt những điều người khác né tránh, chiến đấu vì công lý, vì người thân, hoặc vì những điều bạn tin là đúng. Ở cấp độ cao nhất, Hỏa Tinh mạnh không chỉ giúp bạn hành động—mà còn giúp bạn có trái tim đủ can đảm để đấu tranh vì những gì thực sự có ý nghĩa.",
    "Mộc Tinh không nổi bật trong lá số của bạn có thể khiến bạn dè dặt hơn khi đối mặt với thay đổi, không dễ tin vào may mắn hay triết lý sống mơ hồ. Bạn có thể thực tế, tỉnh táo, hoặc hơi hoài nghi—nhất là khi người khác luôn hô hào “cứ tin là được”. Có thể bạn không thích mạo hiểm và cảm thấy khó duy trì niềm hy vọng khi mọi thứ bấp bênh. Tuy nhiên, điều đó không có nghĩa bạn thiếu niềm tin—mà chỉ là niềm tin ấy cần được xây dựng từ trải nghiệm cá nhân và sự chứng thực thực tế. Khi bạn cho phép mình bước ra khỏi vùng an toàn, bạn sẽ thấy mình vẫn có thể phát triển, theo cách riêng, không ồn ào nhưng sâu sắc. Mộc Tinh yếu cũng có ưu điểm: bạn không dễ bị cuốn vào ảo tưởng hay thổi phồng, và thường giữ được sự tỉnh táo trong hành trình trưởng thành.",
    "Bạn chính là hiện thân của cấu trúc, trách nhiệm và sự trưởng thành. Khi Thổ Tinh mạnh trong lá số, bạn mang theo trong mình một cảm thức tự giác rất rõ—thậm chí có thể từ khi còn nhỏ. Người khác có thể mô tả bạn là “già trước tuổi”, chín chắn, hoặc rất đáng tin cậy. Bạn không chạy theo xu hướng ngắn hạn—bạn xây nên những điều bền vững. Bên trong bạn có một “bản thiết kế” về cách sống: thận trọng, kiên trì và đúng chuẩn. Mục tiêu đối với bạn là điều thiêng liêng. Kỷ luật và tiêu chuẩn sống là kim chỉ nam. Bạn thường rất nhạy cảm với thời gian—có thể hay nghĩ đến hạn chót, tuổi tác, hay hệ quả lâu dài của những quyết định hiện tại. Điều này không có nghĩa bạn khô khan, mà là bạn sống có chiều sâu và trọng giá trị. Thổ Tinh cũng ban cho bạn sự nhẫn nại. Bạn có khả năng chịu đựng, vượt qua trì hoãn và khó khăn hơn phần lớn người khác. Bạn trân trọng truyền thống, kỷ luật, và những gì được tôi luyện qua kinh nghiệm. Nếu bạn chưa ở vị trí lãnh đạo, thì có lẽ bạn vẫn là người mà người khác tìm đến mỗi khi có khủng hoảng xảy ra. Tuy nhiên, Thổ Tinh mạnh không phải lúc nào cũng dễ thở. Nó có thể mang đến cảm giác gò bó, cầu toàn đến khắc nghiệt, hoặc gánh nặng tinh thần khó gọi tên. Đôi khi bạn cảm thấy như mình luôn phải “làm người lớn” trong mọi tình huống. Thách thức ở đây là: học cách cho phép bản thân được nghỉ ngơi, mềm mại, và tận hưởng—mà không cần cảm giác phải “xứng đáng” trước. Dù vậy, Thổ Tinh là nền tảng của bạn. Nó cho bạn sức bền, khả năng vững vàng khi sóng gió, và trí tuệ để xây dựng một di sản lâu dài.",
    "",
    "",
    "",
]
  
export {ElementDescriptions, ModalityDescriptions, planetDes}