const energies = [
    {
      id: 1,
      title: "1 - Năng lượng của Lãnh đạo và Sáng tạo",
      description:
        "Những người mang năng lượng số 1 sở hữu khả năng phi thường và coi trọng sự tự hoàn thiện cá nhân cũng như xã hội. Họ có động lực để tạo ra con đường độc đáo và riêng biệt trong cuộc sống, tự nhiên đảm nhận vai trò của những nhà sáng tạo và lãnh đạo, truyền cảm hứng cho người khác bằng ý tưởng của mình. Lạc quan, năng động và thích phiêu lưu, họ không ngừng cố gắng để nổi bật và sẵn sàng chia sẻ kiến thức, kinh nghiệm. Thông qua nỗ lực cá nhân, họ thường đạt đến sự thành thạo, coi trọng tự do và phản kháng lại sự kiểm soát độc đoán.",
    },
    {
      id: 2,
      title: "2 - Năng lượng của Ngoại giao và Hài hòa nội tâm",
      description:
        "Những người mang năng lượng số 2 sở hữu khả năng ngoại giao bẩm sinh, xuất sắc trong việc giải quyết xung đột, xoa dịu căng thẳng và hấp thụ năng lượng tiêu cực. Với chiều sâu cảm xúc mạnh mẽ và tầm nhìn tinh tế, họ có thể nhận ra những sự thật ẩn giấu vượt xa sự hiểu biết thông thường. Thường bí ẩn và thận trọng, họ che giấu con người thật của mình sau một vẻ ngoài điềm tĩnh, chỉ bộc lộ thế giới nội tâm với một số ít người được chọn.Là những người đồng cảm và có khả năng chữa lành, họ thuyết phục và trấn an người khác một cách dễ dàng, khiến họ trở thành những nhà hòa giải hoặc nhà ngoại giao bẩm sinh. Họ bị thu hút bởi những điều bí ẩn và phát triển mạnh mẽ khi tin tưởng vào bản thân cũng như trực giác của mình.",
    },
    {
      id: 3,
      title: "3 - Năng lượng của Sự sung túc và Thịnh vượng",
      description:
        "Những người mang năng lượng số 3 đại diện cho sự giàu có về vật chất và những phước lành của cuộc sống trần thế. Họ coi trọng gia đình, con cái, địa vị xã hội và vị trí của mình trong cộng đồng. Bản chất hướng đến vai trò lãnh đạo, họ giỏi trong việc quản lý và tổ chức. Những người này có tài năng đặc biệt trong việc thu hút và quản lý tài chính, thành công trong các lĩnh vực kinh doanh, giao dịch tiền bạc, đồng thời duy trì trật tự và sự thoải mái trong môi trường sống của họ. Họ biết yêu thương bản thân, chăm sóc cơ thể, gia đình và những người thân yêu. Trách nhiệm và tận tụy, họ thường trở thành những người giải quyết vấn đề cho những người xung quanh."
    },
    {
      id: 4,
      title: "4 - Năng lượng của Lãnh đạo và Ổn định",
      description:
        "Năng lượng số 4 đại diện cho sức mạnh mãnh liệt và bao trùm của ngọn lửa. Đây là nguồn năng lượng của sự quyết đoán, lãnh đạo và tinh thần trách nhiệm đối với bản thân cũng như người khác. Những ai mang năng lượng này thường có cơ hội lớn và sự thăng tiến xã hội đáng kể, thể hiện sự kiên định và cam kết không lay chuyển với mục tiêu của họ. Họ tuân theo 'quy tắc của hoàng đế,' lấy hiệu quả, trách nhiệm và sự ảnh hưởng làm kim chỉ nam. Với kỹ năng quản lý và tổ chức thiên bẩm, họ giỏi lãnh đạo nhóm, phân công nhiệm vụ và đạt được kết quả đáng kể."
    },
    {
      id: 5,
      title: "5 - Năng lượng của Luật pháp, Trật tự và Truyền thống",
      description:
        "Những người mang năng lượng số 5 đề cao luật pháp, trật tự và tuân thủ nghiêm ngặt các quy tắc, truyền thống. Họ coi trọng gia đình, luật lệ xã hội và các thực hành tôn giáo, đồng thời luôn tôn kính những người có thẩm quyền cũng như các chuẩn mực đã được thiết lập. Do nguyên tắc vững chắc, họ không bị cuốn hút bởi những cuộc phiêu lưu hay rủi ro, mà thích sự ổn định và cấu trúc. Gia đình đóng vai trò trung tâm trong cuộc sống của họ, đặc biệt là trong việc nuôi dạy con cái. Với tài năng thuyết phục, giảng dạy và hùng biện bẩm sinh, họ tin tưởng mạnh mẽ vào quan điểm của mình và hiếm khi chấp nhận những góc nhìn khác biệt. Những cá nhân này đặc biệt xuất sắc trong diễn thuyết trước công chúng, thu hút người nghe bằng sự uyên bác của mình."
    },
    {
      id: 6,
      title: "6 - Năng lượng của Kết nối, Vẻ đẹp và Sự quyến rũ",
      description:
        "Những người mang năng lượng số 6 nổi bật với khả năng giao tiếp mạnh mẽ, xây dựng các mối quan hệ sâu sắc và sở hữu sự quyến rũ tự nhiên. Họ có tài trò chuyện, dễ dàng kết nối với người khác bằng thái độ thân thiện và khả năng giải quyết mâu thuẫn một cách nhẹ nhàng. Sự duyên dáng của họ giúp xoa dịu những góc cạnh thô ráp trong các mối quan hệ, để lại ấn tượng tích cực. Họ bị thu hút bởi cái đẹp, sự thanh lịch và nghệ thuật, luôn thể hiện gu thẩm mỹ tinh tế. Tình yêu đóng vai trò quan trọng trong cuộc đời họ, và họ tìm kiếm đam mê cũng như sự trọn vẹn trong mọi điều họ làm. Xung quanh họ luôn có vẻ đẹp, những người bạn thú vị và một phong cách sống sang trọng."
    },
    {
      id: 7,
      title: "7 - Năng lượng của Lãnh đạo và Quyết tâm",
      description:
        "Những người mang năng lượng số 7 là hiện thân của tinh thần lãnh đạo và chiến binh, luôn có khát khao chiến thắng và đạt được mục tiêu bằng chính sức mình. Rõ ràng trong định hướng và tập trung vào kết quả là điều thiết yếu để họ thành công. Họ xuất sắc trong việc lập kế hoạch kinh doanh, biết cách điều phối năng lượng hiệu quả để tránh lãng phí công sức. Hành động và di chuyển là nguyên tắc sống của họ. Với kỹ năng lái xe xuất sắc và niềm yêu thích du lịch, họ duy trì một lối sống năng động và lạc quan. Vận động thể chất đóng vai trò quan trọng đối với sức khỏe của họ, vì sự trì trệ có thể dẫn đến cảm giác bế tắc trong cuộc sống."
    },
    {
      id: 8,
      title: "8 - Năng lượng của Công lý và Trách nhiệm",
      description:
        "Những người mang năng lượng số 8 được dẫn dắt bởi các nguyên tắc về trách nhiệm, công bằng và sự chính trực. Họ thường suy ngẫm về nguyên nhân của các sự kiện trong cuộc sống, luôn tìm cách thấu hiểu bản chất thật sự của vấn đề để đưa ra những lựa chọn đúng đắn hơn cho tương lai. Họ không ngừng nỗ lực để cải thiện nghiệp báo của mình, luôn sẵn sàng bảo vệ kẻ yếu và duy trì sự công bằng. Cởi mở, dũng cảm và quyết đoán, họ đặc biệt giỏi trong các tình huống thử thách, thường tìm thấy sứ mệnh của mình trong các lĩnh vực liên quan đến pháp luật, lập pháp hoặc kiểm soát xã hội."
    },
    {
      id: 9,
      title: "9 - Năng lượng của Trí tuệ và Sự cô độc",
      description:
        "Những người mang năng lượng số 9 là hiện thân của trí tuệ và sự tự chủ, thường được xem là những người cố vấn có giá trị mà người khác tìm đến để xin lời khuyên. Họ yêu thích sự tĩnh lặng hơn là những cuộc hội họp ồn ào và có một cách tiếp cận triết lý đối với cuộc sống. Được xem là những người chữa lành tâm hồn, họ đặc biệt xuất sắc trong các cuộc trò chuyện ý nghĩa và đưa ra lời khuyên thực tế. Với khả năng chữa lành bẩm sinh, họ tiếp cận kiến thức một cách chậm rãi và sâu sắc, luôn đào sâu vào các chủ đề mà họ quan tâm. Họ biết giá trị của hiểu biết và sẵn sàng chia sẻ những ý tưởng đổi mới vì lợi ích chung."
    },
    {
      id: 10,
      title: "10 - Năng lượng của May mắn và Dòng chảy",
      description:
        "Những người mang năng lượng số 10 thường được coi là những 'đứa con cưng của số phận.' Ngay từ khi sinh ra, họ dường như được dẫn dắt và bảo vệ bởi một loại may mắn đặc biệt, giúp họ có khả năng tìm thấy cơ hội và tránh được rắc rối một cách kỳ diệu. Khi họ đưa ra quyết định, vũ trụ dường như tự động sắp xếp để hỗ trợ họ: cánh cửa mở ra, những người có ích xuất hiện đúng lúc, và thông tin cần thiết đến với họ một cách tình cờ. Dòng chảy năng lượng này sẽ luôn hỗ trợ họ miễn là họ không cố gắng làm phức tạp hóa mọi thứ hoặc đi ngược lại nhịp điệu tự nhiên của mình."
    },
    {
      id: 11,
      title: "11 - Năng lượng của Sức mạnh và Cá tính độc lập",
      description:
        "Những người mang năng lượng số 11 là hiện thân của sức mạnh trên mọi khía cạnh—tinh thần, trí tuệ, lời nói và thể chất. Cuộc đời họ thường trải qua những thăng trầm lớn, minh chứng cho sự thật rằng không ai có thể mãi đứng trên đỉnh cao. Sức mạnh to lớn này có thể được sử dụng để tác động đến thế giới bên ngoài hoặc để rèn luyện nội tâm. Điều quan trọng đối với họ là kiểm soát cảm xúc và sử dụng năng lượng của mình một cách xây dựng. Họ thường rất kiên trì, thậm chí có xu hướng nghiện công việc, vì vậy họ cần học cách thư giãn và sử dụng sức mạnh của mình một cách sáng tạo."
    },
    {
      id: 12,
      title: "12 - Năng lượng của Lòng trắc ẩn và Sáng tạo",
      description:
        "Những người mang năng lượng số 12 có một sứ mệnh cao cả: mang lại sự tử tế, lòng trắc ẩn và lòng nhân ái cho thế giới. Họ là hình mẫu của sự cho đi vô điều kiện, luôn sẵn sàng giúp đỡ và hỗ trợ người khác, đồng thời truyền cảm hứng cho những cách nghĩ sáng tạo. Với góc nhìn độc đáo về cuộc sống, họ là kho tàng của những ý tưởng mới mẻ, mang đến sự sinh động và khám phá. Họ duy trì một kết nối mạnh mẽ với những năng lượng cao hơn, luôn tin tưởng vào những điều kỳ diệu và phép màu trong cuộc sống."
    },
    {
      id: 13,
      title: "13 - Năng lượng của Biến đổi và Tái sinh",
      description:
        "Năng lượng của số 13 mang tính huyền bí và khó đoán. Những người mang năng lượng này thường có tính cách khó hiểu, khiến họ trở nên bí ẩn đối với người khác. Họ là những nhân tố của sự đổi mới và biến đổi, giúp loại bỏ những điều đã lỗi thời để tạo ra sự phát triển. Tuy nhiên, tác động của họ đôi khi có thể gây ra sự xáo trộn đối với những ai chưa sẵn sàng thay đổi. Họ không thích sự đơn điệu, luôn tìm kiếm những trải nghiệm đầy cảm xúc và nguồn cảm hứng mới. Với bản tính tò mò, sáng tạo và kiên cường, họ thích nghi nhanh chóng và giữ vững sự bình tĩnh ngay cả trong những hoàn cảnh thử thách."
    },
    {
      id: 14,
      title: "14 - Năng lượng của Nhạy cảm và Chữa lành",
      description:
        "Những người mang năng lượng số 14 có một độ nhạy cảm cao và khả năng thấu hiểu sâu sắc về thế giới, con người và các sự kiện trong cuộc sống. Họ có một đời sống nội tâm phong phú, thường là dấu hiệu của một linh hồn trưởng thành. Họ quan tâm đến nhiều lĩnh vực khác nhau và là những người trò chuyện lôi cuốn. Họ có năng khiếu chữa lành tự nhiên, đặc biệt là thông qua thảo dược và phương pháp chữa bệnh tự nhiên."
    },
    {
      id: 15,
      title: "15 - Năng lượng của Thử thách và Biến đổi",
      description:
        "Những người mang năng lượng số 15 sở hữu sức mạnh to lớn và khả năng nhận diện điểm yếu của con người như thể họ có thể nhìn thấu tâm can. Sự hiện diện của họ thường khiến người khác đối diện với những thiếu sót của bản thân. Họ có sứ mệnh kiểm tra sự sẵn sàng của mọi người trong hành trình phát triển tâm linh. Bằng cách đưa ra những thử thách và cám dỗ, họ giúp người khác trở nên mạnh mẽ hơn."
    },
    {
      id: 16,
      title: "16 - Năng lượng của Thức tỉnh và Nhận thức",
      description:
        "Năng lượng số 16 nhấn mạnh tầm quan trọng của việc trải nghiệm những cám dỗ trần thế, những thăng trầm cảm xúc như một cách để mở rộng nhận thức và đạt được sự hiểu biết sâu sắc hơn về cuộc sống. Đối với những người mang năng lượng này, mọi thử thách và biến cố đều mang ý nghĩa – chúng không chỉ là những trở ngại mà còn là bài học cần thiết để họ thức tỉnh và trưởng thành.Họ thường phải trải qua những thay đổi mạnh mẽ và đột ngột trong cuộc đời, đôi khi giống như mất mát hoặc sụp đổ, nhưng những trải nghiệm đó chính là cơ hội để họ nhìn nhận lại bản thân và tái định hướng con đường của mình. Họ học được rằng sự gắn bó với những giá trị cũ kỹ có thể cản trở sự tiến hóa của họ, và chỉ khi họ sẵn sàng buông bỏ, họ mới có thể tiếp cận một chân trời mới. Những người có năng lượng này thường có sự liên kết mạnh mẽ với thế giới tâm linh và thường trải qua những khoảnh khắc “khai sáng” sau những biến cố lớn trong đời. Họ học cách chấp nhận dòng chảy của số phận, trở nên mạnh mẽ hơn và đạt được sự bình an nội tâm thông qua những bài học đầy thử thách mà cuộc sống mang lại."
    },
    {
      id: 17,
      title: "17 - Năng lượng của Ngôi sao và Sự sáng tạo",
      description:
        "Những người mang năng lượng số 17 là những linh hồn đặc biệt, được đánh dấu bởi ánh sáng và sự khác biệt ngay từ khi sinh ra. Họ thường có một sức hút tự nhiên và tỏa ra một nguồn năng lượng tích cực, khiến người khác cảm thấy được truyền cảm hứng khi ở bên họ.Họ là những người có khả năng kết nối với các tầng năng lượng cao hơn, đôi khi giống như đang được một thế lực thiêng liêng dẫn dắt. Điều này giúp họ trở thành những cá nhân có óc sáng tạo mạnh mẽ, nghệ sĩ tài năng, hoặc những người có sức ảnh hưởng lớn trong cộng đồng. Tuy nhiên, với nguồn năng lượng đặc biệt này, họ cần học cách cân bằng giữa thế giới mộng mơ và thực tế. Nếu không giữ được sự ổn định, họ có thể bị cuốn vào những ảo tưởng hoặc lạc lối trong những suy nghĩ viển vông. Những người mang năng lượng số 17 cần nuôi dưỡng sự sáng tạo của mình nhưng đồng thời phải học cách đặt nền tảng vững chắc để có thể thực hiện ước mơ một cách thực tế và hiệu quả."
    },
    {
      id: 18,
      title: "18 - Năng lượng của Mặt trăng và Trực giác",
      description:
        "Những người mang năng lượng số 18 có một thế giới nội tâm vô cùng phong phú, bí ẩn và đầy sức hút. Họ có trực giác mạnh mẽ, thường xuyên có những giấc mơ tiên tri hoặc những linh cảm chính xác về sự việc trong tương lai. Họ cũng rất nhạy cảm với các chu kỳ của Mặt trăng, và năng lượng của họ thường thay đổi theo từng giai đoạn trăng tròn và trăng non. Họ có một khả năng đặc biệt trong việc tiếp cận những điều huyền bí, những chiều không gian vô hình mà người khác không nhận thấy. Điều này có thể khiến họ trở thành những nhà tâm linh, nhà huyền học hoặc những nghệ sĩ với trí tưởng tượng phong phú. Tuy nhiên, họ cũng dễ bị ảnh hưởng bởi những cảm xúc tiêu cực hoặc bị cuốn vào những nỗi sợ hãi không rõ nguyên do. Vì vậy, những người mang năng lượng này cần học cách làm chủ cảm xúc, giữ vững tinh thần và tập trung vào những suy nghĩ tích cực. Khi họ có thể kiểm soát năng lượng của mình, họ sẽ trở thành những người có ảnh hưởng lớn, có thể hướng dẫn và chữa lành cho người khác bằng trí tuệ và sự nhạy bén đặc biệt của họ."
    },
    {
      id: 19,
      title: "19 - Năng lượng của Mặt trời và Sự tỏa sáng",
      description:
        "Những người mang năng lượng số 19 giống như Mặt trời – họ luôn tỏa sáng và lan tỏa năng lượng mạnh mẽ đến những người xung quanh. Họ có tinh thần cởi mở, lạc quan và luôn nhìn thấy cơ hội ngay cả trong những tình huống khó khăn nhất. Họ sở hữu một khả năng lãnh đạo tự nhiên và thường nhanh chóng trở thành tâm điểm của sự chú ý. Năng lượng của họ rất thu hút, khiến người khác dễ dàng tin tưởng và đi theo. Họ cũng có tài năng sáng tạo, đặc biệt trong lĩnh vực nghệ thuật, diễn thuyết, hoặc bất kỳ lĩnh vực nào đòi hỏi sự thể hiện bản thân. Tuy nhiên, giống như Mặt trời có thể quá nóng bức, những người mang năng lượng này cũng có thể trở nên kiêu ngạo hoặc quá tự tin nếu không kiểm soát tốt bản thân. Họ cần học cách lắng nghe ý kiến của người khác và hiểu rằng sức mạnh thực sự không đến từ việc áp đảo người khác, mà từ sự chân thành và khả năng truyền cảm hứng. Khi họ phát triển theo hướng tích cực, họ sẽ trở thành những nhà lãnh đạo, những người truyền động lực mạnh mẽ và những biểu tượng của sự thành công."
    },
    {
      id: 20,
      title: "20 - Năng lượng của Trí tuệ thế hệ và Kết nối tâm linh",
      description:
        "Những người mang năng lượng số 20 có một mối liên kết vô cùng sâu sắc với tổ tiên, gia đình và nguồn gốc của họ. Họ không chỉ là cá nhân đơn lẻ mà còn là đại diện cho trí tuệ và kinh nghiệm của nhiều thế hệ trước đó.Họ có khả năng tiếp cận những ký ức và tri thức từ quá khứ, đôi khi qua giấc mơ hoặc những linh cảm mạnh mẽ. Chính vì vậy, họ có xu hướng quan tâm đến lịch sử, huyền học, tôn giáo hoặc bất kỳ lĩnh vực nào giúp họ khám phá những sự thật ẩn giấu về thế giới. Năng lượng số 20 cũng mang đến khả năng kết nối với các cõi tâm linh. Họ có thể là những nhà tiên tri, những người chữa lành bằng năng lượng hoặc những cá nhân có nhận thức tâm linh rất cao. Họ có xu hướng nhận được sự hướng dẫn từ những thế lực vô hình, giúp họ đưa ra những quyết định đúng đắn và có cái nhìn sâu sắc về cuộc sống. Tuy nhiên, vì sở hữu trực giác mạnh mẽ, họ cũng có thể dễ bị ảnh hưởng bởi những cảm xúc hoặc năng lượng tiêu cực từ môi trường xung quanh. Họ cần học cách bảo vệ bản thân trước những tác động tiêu cực và sử dụng năng lượng của mình một cách có ý thức, để không chỉ giúp chính họ mà còn giúp đỡ những người khác trên hành trình tâm linh của mình."
    },
    {
      id: 21,
      title: "21 - Năng lượng của Kết nối toàn cầu và Hòa hợp",
      description:
        "Những người mang năng lượng số 21 có một mối liên kết sâu sắc với toàn bộ thế giới và vạn vật xung quanh. Họ sở hữu trực giác nhạy bén, sự thấu hiểu tinh tế và một tinh thần hòa bình bẩm sinh. Là những người chữa lành tâm hồn và những nhà ngoại giao thiên bẩm, họ có khả năng giải quyết xung đột và mang lại sự cân bằng trong các mối quan hệ. Họ không chỉ quan tâm đến những vấn đề cá nhân mà còn hướng đến những mục tiêu rộng lớn hơn, bao gồm các vấn đề xã hội, đất nước, và thậm chí cả nhân loại. Họ thường có ý thức sâu sắc về trách nhiệm đối với hành tinh này, quan tâm đến môi trường và sự tiến bộ chung của con người. Từ khi còn nhỏ, những người mang năng lượng này đã có cảm giác rằng họ được hướng dẫn bởi những thế lực cao hơn. Họ tin vào sự vô hạn của vũ trụ và hiếm khi đặt ra giới hạn cho ước mơ của mình. Họ luôn tìm kiếm sự hòa hợp giữa con người, thiên nhiên và vũ trụ, và có khả năng truyền cảm hứng mạnh mẽ đến những người xung quanh."
    },
    {
      id: 22,
      title: "22 - Năng lượng của Tự do và Khám phá vô tận",
      description:
        "Những người mang năng lượng số 22 có một tâm hồn tự do, không muốn bị trói buộc bởi những quy tắc cứng nhắc hay những khuôn khổ do xã hội áp đặt. Họ xem cuộc sống như một chuyến hành trình đầy thú vị, nơi mỗi ngày là một cơ hội mới để khám phá, học hỏi và trưởng thành. Họ sở hữu một tinh thần lạc quan mạnh mẽ, luôn đối mặt với thử thách bằng sự hài hước và một trái tim rộng mở. Họ không sợ thất bại, vì họ hiểu rằng mỗi trải nghiệm, dù tốt hay xấu, đều mang lại bài học quý giá. Chính vì thế, họ có xu hướng thử nghiệm nhiều con đường khác nhau trong cuộc sống mà không sợ hãi hay lo lắng về kết quả. Những người này có sự kết nối mạnh mẽ với thiên nhiên và cảm thấy bình yên nhất khi được hòa mình vào thế giới rộng lớn. Họ không coi trọng vật chất mà thay vào đó, họ hướng đến những trải nghiệm phong phú, sự đa dạng trong các mối quan hệ và sự tự do tuyệt đối về tinh thần. Với khả năng thích nghi nhanh chóng và tinh thần không ngừng mở rộng, những người mang năng lượng số 22 thường truyền cảm hứng cho người khác bằng chính cách sống của họ – một cuộc sống không ràng buộc, không giới hạn và đầy những trải nghiệm đáng nhớ"
    },
  ];



  const safeZone = [
    {
      title: "1",
      description: "how?"
    },
    {
      title: "2",
      description: "how?"
    },
    {
      title: "3 - Năng lượng của Sự Giàu Có Vật Chất và Khả Năng Lãnh Đạo",
      description: 
        "Những người chịu ảnh hưởng của năng lượng số 3 mang trong mình sự thịnh vượng và những phước lành của trần thế. Đối với họ, gia đình, con cái, địa vị xã hội và vai trò lãnh đạo là những yếu tố quan trọng nhất. Họ xuất sắc trong các công việc đòi hỏi tổ chức và quản lý, thường tự tin và có khả năng đảm nhận những vị trí lãnh đạo. Những cá nhân này có khả năng yêu thương bản thân và chăm sóc sức khỏe thể chất, gia đình cũng như không gian sống của mình. Họ có tài quản lý tài chính và tài sản, duy trì sự cân bằng giữa trách nhiệm và kiểm soát với hiệu quả đáng kinh ngạc. Nhờ khả năng thu hút và xử lý tiền bạc, họ thường thành công trong kinh doanh và các giao dịch tài chính."
    },
    {
      title: "4 – Năng lượng Nam Tính: Lãnh Đạo và Quyết Tâm",
      description: 
        "Năng lượng số 4 đại diện cho sức mạnh của lửa—mạnh mẽ, biến đổi và hướng đến hành động. Nó tượng trưng cho khả năng ra quyết định, đảm nhận trách nhiệm và chấp nhận vai trò lãnh đạo. Những người sở hữu năng lượng này thường bị thu hút bởi quyền lực và ảnh hưởng xã hội, định sẵn để gặp nhiều cơ hội và thành công. Những người này tuân theo “quy tắc của hoàng đế” – một tư duy tập trung vào hiệu quả, trách nhiệm và ảnh hưởng có cấu trúc. Họ có khả năng quản lý và tổ chức bẩm sinh, biết cách điều hành con người, phân công nhiệm vụ và đạt được kết quả. Họ thường đảm nhận những vai trò trong chính trị, chính phủ hoặc tổ chức, nơi họ có thể mang lại trật tự và kiểm soát."
    },
    {
      title: "5 – Năng lượng của Luật Pháp, Trật Tự và Truyền Thống",
      description: 
        "Những người có năng lượng số 5 coi trọng luật pháp, trật tự và sự tuân thủ nghiêm ngặt đối với các quy tắc và truyền thống. Họ đặc biệt coi trọng phong tục gia đình, luật lệ xã hội và tín ngưỡng tôn giáo, luôn dành sự tôn trọng lớn đối với những người có thẩm quyền và các chuẩn mực đã được thiết lập. Vì những nguyên tắc này, họ không thích những cuộc phiêu lưu hay các hoạt động mang tính rủi ro, thay vào đó, họ ưa chuộng sự ổn định và cấu trúc. Gia đình đóng vai trò trung tâm trong cuộc sống của họ, đặc biệt là trong việc nuôi dạy con cái. Họ có năng khiếu bẩm sinh về giảng dạy, thuyết phục và diễn thuyết. Vì rất tin tưởng vào quan điểm của mình, họ thường có lập trường kiên định, ít khi chấp nhận ý kiến trái chiều. Những người này có tài năng xuất chúng trong việc diễn thuyết trước công chúng, thu hút và thuyết phục người nghe."
    },
    {
      title: "6 – Năng lượng của Giao Tiếp, Kết Nối và Sự Quyến Rũ",
      description: 
        "Những người sở hữu năng lượng số 6 nổi bật với khả năng giao tiếp xuất sắc, khả năng xây dựng mối quan hệ và sự quyến rũ tự nhiên. Họ có khả năng trò chuyện một cách duyên dáng, dễ dàng kết nối với mọi người và hóa giải xung đột, khiến mọi thứ trở nên nhẹ nhàng và dễ chịu hơn. Họ bị thu hút bởi cái đẹp, sự thanh lịch và nghệ thuật, đồng thời có con mắt thẩm mỹ tinh tế. Họ thích tận hưởng cuộc sống với những món ăn ngon, không gian sang trọng và thường là người định hình xu hướng thời trang. Các mối quan hệ đóng vai trò quan trọng trong cuộc đời họ, và họ luôn tìm kiếm sự đam mê cũng như sự trọn vẹn trong mọi điều mình làm."
    },
    {
      title: "7 – Năng lượng của Lãnh Đạo và Quyết Tâm",
      description: 
        "Năng lượng số 7 thể hiện tinh thần của một người lãnh đạo và chiến binh, luôn có khao khát mạnh mẽ để đạt được mục tiêu một cách độc lập và chính xác. Những cá nhân này có định hướng kết quả rất cao, xuất sắc trong việc lập kế hoạch chiến lược và tận dụng tối đa nỗ lực của mình. Họ luôn đặt hành động và chuyển động lên hàng đầu, vì họ chỉ cảm thấy thực sự sống động khi được hoạt động và phát triển. Những người này tin rằng sự ngưng trệ sẽ dẫn đến trì trệ cả về thể chất lẫn tinh thần. Vì vậy, họ cần duy trì một lối sống năng động để đạt được sự cân bằng trong cuộc sống."
    },
    {
      title: "8 – Năng lượng của Trách Nhiệm, Công Lý và Nhân Quả",
      description: 
        "Những cá nhân mang năng lượng số 8 thường suy ngẫm về nguyên nhân đằng sau các thử thách trong cuộc sống và tìm cách hiểu rõ hơn về hậu quả của hành động. Họ bị dẫn dắt bởi nguyên tắc cải thiện nghiệp quả (karma) thông qua những nỗ lực không ngừng nghỉ và quyết định thấu đáo. Những người này có tinh thần trách nhiệm cao, luôn bảo vệ kẻ yếu và đứng lên vì lẽ phải. Họ không sợ hãi và phản ứng rất nhanh trong các tình huống khẩn cấp, khiến họ trở thành người đáng tin cậy khi gặp khó khăn. Họ thường tìm thấy mục đích của mình trong các lĩnh vực liên quan đến luật pháp, thực thi pháp luật hoặc kiểm soát."
    },
    {
      title: "9 – Năng lượng của Trí Tuệ và Sự Tự Tại",
      description: 
        "Những người mang năng lượng số 9 thể hiện trí tuệ sâu sắc, sự độc lập và cái nhìn triết lý về cuộc sống. Họ thường được người khác tìm đến để xin lời khuyên, vì họ có khả năng chữa lành tâm hồn và giúp đỡ người khác thông qua những cuộc trò chuyện ý nghĩa. Họ có khả năng tư duy chậm rãi nhưng sâu sắc, không chạy theo tốc độ mà tập trung vào chất lượng và chiều sâu. Những người này trân trọng trí tuệ và hiểu biết của mình, sẵn sàng chia sẻ tri thức và khuyến khích tư duy đổi mới để mang lại lợi ích cho cộng đồng."
    },
    {
      title: "10 – Năng lượng của Sự May Mắn và Thiên Mệnh",
      description: 
        "Những người mang năng lượng số 10 thường được coi là vô cùng may mắn, như thể họ được số phận đặc biệt ưu ái. Ngay từ khi còn nhỏ, họ dường như được che chở và hỗ trợ bởi vận may, có khả năng tự nhiên để tìm thấy cơ hội và tránh được những rắc rối lớn. Khi đưa ra quyết định, cuộc sống của họ diễn ra một cách suôn sẻ: cánh cửa mở ra, người giúp đỡ xuất hiện, thông tin quan trọng đến với họ đúng thời điểm. Có cảm giác như vũ trụ luôn cung cấp cho họ những dấu hiệu và sự hỗ trợ. Cuộc hành trình của họ trôi chảy miễn là họ biết chấp nhận sự đơn giản và làm theo dòng chảy tự nhiên của cuộc sống. Những người này thường không cần phải cố gắng quá mức để đạt được thành công—họ chỉ cần tin tưởng vào số phận và bước đi theo con đường của mình."
    },
    {
      title: "11 – Năng lượng của Sức Mạnh và Cá Tính Độc Nhất",
      description: 
        "Năng lượng số 11 đại diện cho sự thể hiện mạnh mẽ của cá tính thông qua tinh thần, tư duy, lời nói và hành động thể chất. Cuộc sống của những người này thường trải qua những thăng trầm lớn, và sức mạnh của họ đóng vai trò trung tâm trong mọi trải nghiệm.Sức mạnh này có thể trở thành động lực sáng tạo hoặc phá hủy, tùy thuộc vào cách nó được định hướng. Học cách kiểm soát cảm xúc và chuyển hóa nguồn năng lượng mạnh mẽ này một cách có ích là điều vô cùng quan trọng đối với họ. Những người này thường rất tham vọng và chăm chỉ, nhưng đôi khi họ gặp khó khăn trong việc thư giãn. Các phương pháp như thiền định hoặc nghệ thuật có thể giúp họ tận dụng sức mạnh của mình một cách sáng tạo. Họ cũng có xu hướng chống lại áp lực từ bên ngoài và thường phản ứng bằng cách thể hiện sức mạnh của bản thân một cách mạnh mẽ."
    },
    {
      title: "12 – Năng lượng của Lòng Trắc Ẩn và Sáng Tạo",
      description: 
        "Những người mang năng lượng số 12 có sứ mệnh mang lại điều tốt đẹp, lòng nhân từ và sự cảm thông cho thế giới. Họ dẫn dắt bằng chính hành động của mình, luôn sẵn lòng giúp đỡ và hỗ trợ người khác một cách vô tư. Góc nhìn độc đáo và sáng tạo của họ khuyến khích những cách tư duy mới, và sự hiện diện của họ thường đem đến những khám phá thú vị. Cuộc sống trở nên sống động và ý nghĩa hơn khi ở bên họ, vì họ luôn duy trì kết nối mạnh mẽ với một nguồn lực cao hơn và tin vào phép màu của cuộc sống."
    },
    {
      title:"13",
      description:"how"
    },
    {
      title:"14",
      description:"how"
    },
    {
      title:"15",
      description:"how"
    },
    {
      title: "16 – Năng lượng của Sự Biến Đổi và Thức Tỉnh Tâm Linh",
      description: 
        "Năng lượng số 16 tập trung vào việc học hỏi từ những thăng trầm của cuộc sống và những cám dỗ trần thế để đạt được trí tuệ và mở rộng tầm nhìn. Những trải nghiệm này định hình sự hiểu biết của họ, giúp họ thay đổi nhận thức về cuộc sống và tận hưởng trọn vẹn từng khoảnh khắc hiện tại. Mặc dù hoàn cảnh bên ngoài có thể không thay đổi ngay lập tức, nhưng khả năng cảm nhận và chấp nhận của họ biến đổi, mang lại sự bình yên nội tâm. Những người phát triển về mặt tâm linh chấp nhận những bài học khó khăn mà số phận mang lại, trở nên mạnh mẽ và kiên cường hơn. Họ được hướng dẫn bởi luật nhân quả và điều hướng các sự kiện trong cuộc sống bằng sự thấu hiểu và sức mạnh nội tâm. Những người này thường có năng lượng mãnh liệt, có thể được chuyển hóa thành những kết quả tích cực. Họ cũng là những người nhân hậu, thường trở thành điểm tựa tinh thần cho người khác. Tuy nhiên, họ cần nhớ rằng, cũng như họ chữa lành cho người khác, họ cũng phải quan tâm đến chính mình."
    },
    {
      title:"17",
      description:"how"
    },
    {
      title: "18 – Năng lượng của Mặt Trăng: Huyền Bí và Trí Tưởng Tượng",
      description: 
        "Những người sinh ra dưới năng lượng mặt trăng mang vẻ đẹp huyền bí và cuốn hút, với một thế giới nội tâm phong phú và trí tưởng tượng sống động. Họ có sự kết nối sâu sắc với mặt trăng, điều này ảnh hưởng đến chu kỳ cuộc sống và trạng thái cảm xúc của họ. Trực giác của họ rất mạnh, thường xuất hiện dưới dạng những giấc mơ tiên tri. Họ đạt được tiềm năng lớn nhất khi trăng tròn, vì đây là thời điểm sức mạnh của họ tỏa sáng rực rỡ nhất. Họ có khả năng biến suy nghĩ thành hiện thực một cách mạnh mẽ, vì vậy, duy trì một tư duy tích cực là điều cần thiết để họ có thể phát triển và đạt được thành công."
    },
    {
      title:"19",
      description:"how"
    },
    {
      title: "20 – Năng lượng của Thế Hệ: Huyền Bí và Sự Kết Nối Tổ Tiên",
      description: 
        "Những người mang năng lượng số 20 sở hữu một dòng năng lượng đa dạng, mang tính thế hệ, kết nối sâu sắc với tổ tiên của họ trong ít nhất bảy thế hệ. Họ có những phẩm chất huyền bí và duy trì mối liên kết mạnh mẽ với thế giới tâm linh, thường bộc lộ qua khả năng ngoại cảm và trực giác nhạy bén. Họ thường xuyên có những giấc mơ tiên tri và những khoảnh khắc thức tỉnh sâu sắc, bị thu hút bởi những điều bí ẩn và chưa được khám phá. Họ cũng rất giỏi trong các lĩnh vực liên quan đến thu thập và xử lý thông tin. Những người này có nguồn năng lượng mạnh mẽ và nhận được sự hướng dẫn từ các cõi cao hơn. Từ khi sinh ra, họ đã được bảo vệ và hỗ trợ bởi một thiên thần hộ mệnh. Sự kết nối sâu sắc với thần linh giúp họ luôn tìm kiếm ý nghĩa cao cả hơn trong cuộc sống."
    },
    {
      title:"21",
      description:"how"
    },
    {
      title: "22 – Năng lượng của Tự Do và Khám Phá Không Giới Hạn",
      description: 
        "Những người mang năng lượng số 22 được thúc đẩy bởi nhu cầu về tự do—tự do khỏi những giáo điều, giới hạn và sự gò bó. Họ coi cuộc sống như một chuyến hành trình đầy niềm vui, đối mặt với thử thách bằng sự hài hước và trái tim rộng mở. Cuộc sống của họ tràn ngập những sự kiện đa dạng, vô số kết nối và tình bạn. Họ không quá bận tâm đến của cải vật chất, mà tập trung vào sự phát triển tinh thần và hành trình khám phá. Họ nhìn nhận tất cả các tôn giáo như một thể thống nhất, coi nhân loại là một cộng đồng chung và xem Trái Đất là ngôi nhà của mình.Với sự sáng tạo, trực giác và tinh thần phiêu lưu mạnh mẽ, họ không thích bị trói buộc ở một nơi hay một ý tưởng cố định. Họ luôn bị thu hút bởi những chân trời mới, tìm kiếm sự thật và ý nghĩa sâu sắc trong cuộc sống."
    },
  ]

  const talentInfo = [
    {
      content:
      `
          <h2>1 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 1</h2>
          <ul>
              <li>Khả năng lãnh đạo: Người có năng lượng số 1 sở hữu tố chất lãnh đạo xuất sắc, tự nhiên dẫn dắt và truyền cảm hứng cho người khác.</li>
              <li>Sẵn sàng khám phá con đường mới: Không sợ hãi trước những điều chưa biết, họ luôn sẵn sàng tìm kiếm cơ hội và ý tưởng mới.</li>
              <li>Trí thông minh vượt trội: Ở bên cạnh một người có năng lượng số 1, bạn sẽ cảm nhận được sự năng động, thú vị và sự phát triển không ngừng.</li>
              <li>Hướng dẫn và làm gương: Họ sẵn lòng chia sẻ kinh nghiệm và kiến thức để giúp người khác phát triển.</li>
              <li>Niềm tin vào khả năng vô hạn: Những người này tin rằng không có gì là không thể, nhờ vào sự lạc quan và quyết tâm mạnh mẽ.</li>
              <li>Tài năng đặc biệt: Họ thường có những khả năng và tài năng vượt trội.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>2 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 2</h2>
          <ul>
              <li>Kỹ năng giải quyết xung đột: Họ có khả năng ngoại giao xuất sắc, giúp họ điều hướng và giải quyết mâu thuẫn một cách hiệu quả.</li>
              <li>Tài năng diễn xuất: Họ có thể nhập vai vào bất kỳ tình huống nào, đôi khi có thể sử dụng khả năng này để nói dối một cách thuyết phục.</li>
              <li>Lắng nghe chủ động và thấu cảm: Họ là những người trò chuyện tuyệt vời, luôn sẵn sàng lắng nghe và đưa ra những lời khuyên sâu sắc.</li>
              <li>Thu thập và tạo ra thông tin quan trọng: Họ xuất sắc trong việc thu thập thông tin quý giá và biết cách sử dụng chúng khi cần thiết.</li>
              <li>Kiến thức đa dạng: Sự tò mò thúc đẩy họ khám phá nhiều lĩnh vực, giúp họ tích lũy một vốn kiến thức phong phú.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>3 – Những Phẩm Chất Chính của Phụ Nữ Mang Năng Lượng Số 3</h2>
          <ul>
              <li>Khả năng làm mẹ và người vợ lý tưởng: Họ tự nhiên xuất sắc trong vai trò làm mẹ và vợ, mang lại tình yêu, sự chăm sóc và nuôi dưỡng.</li>
              <li>Thanh lịch và nữ tính tự nhiên: Họ có gu thẩm mỹ tinh tế, biết cách ăn mặc đẹp và tạo ra sự thoải mái, hài hòa ở bất cứ đâu.</li>
              <li>Khả năng thu hút những điều tốt đẹp: Họ có năng lực mạnh mẽ trong việc thu hút những phước lành và biến mong muốn thành hiện thực.</li>
              <li>Sáng tạo: Những người phụ nữ này có trí tưởng tượng phong phú, thường xuất sắc trong các lĩnh vực nghệ thuật.</li>
              <li>Khả năng sinh sản và nuôi dưỡng: Họ có xu hướng thiên về sinh nở và chăm sóc sự sống mới.</li>
              <li>Nhận được lợi ích một cách tự nhiên: Họ thu hút sự giàu có và phước lành thông qua sự yên bình và thụ động.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>4 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 4</h2>
          <ul>
              <li>Tố chất lãnh đạo: Họ xuất sắc trong vai trò lãnh đạo, quản lý nhóm và đàm phán trong những tình huống quan trọng.</li>
              <li>Trách nhiệm cao: Họ đối mặt với thử thách bằng tinh thần trách nhiệm mạnh mẽ.</li>
              <li>Khả năng tạo ra thu nhập lớn: Những người này có khả năng kiếm tiền giỏi và tạo ra các dòng thu nhập đáng kể.</li>
              <li>Sáng tạo: Họ có tư duy sáng tạo mạnh mẽ, thường đổi mới trong nhiều lĩnh vực.</li>
              <li>Tiên phong mở đường: Họ mở ra những con đường mới và xây dựng những điều mới mẻ, mang lại sự phát triển và thay đổi.</li>
              <li>Quyền lực và ảnh hưởng: Họ có khả năng tác động mạnh mẽ đến môi trường xung quanh.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>5 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 5</h2>
          <ul>
              <li>Khả năng thuyết phục: Họ có thể thuyết phục người khác một cách mạnh mẽ, đôi khi còn xây dựng được những nhóm người tin tưởng tuyệt đối vào họ.</li>
              <li>Giao tiếp rõ ràng: Họ có thể truyền đạt thông tin phức tạp một cách đơn giản và dễ hiểu.</li>
              <li>Tiếp thu kiến thức nhanh chóng: Những người này học hỏi và thích nghi với thông tin mới rất nhanh.</li>
              <li>Kỹ năng tổ chức: Họ giỏi trong việc sắp xếp thông tin và tổ chức không gian làm việc một cách hiệu quả.</li>
              <li>Trung tâm tinh thần: Họ có khả năng kết nối mọi người, tạo ra các giá trị chung và bầu không khí gắn kết.</li>
          </ul>
      `
    },
    {
      content:
          `
          <h2>6 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 6</h2>
          <ul>
              <li><strong>Gu thời trang và phong cách</strong>: Họ có khiếu thẩm mỹ tốt, biết cách chọn và phối đồ để luôn xuất hiện một cách chỉn chu và đẹp mắt.</li>
              <li><strong>Khả năng tạo ra vẻ đẹp và sự thoải mái</strong>: Họ có năng khiếu tạo ra môi trường hài hòa, giúp không gian trở nên đẹp mắt và dễ chịu hơn.</li>
              <li><strong>Tư duy tích cực</strong>: Với cái nhìn lạc quan, họ luôn thấy được mặt tốt của mọi vấn đề và tập trung vào những điều tích cực trong cuộc sống.</li>
              <li><strong>Cởi mở và sẵn lòng giúp đỡ</strong>: Họ có tấm lòng rộng mở, luôn sẵn sàng hỗ trợ người khác và góp phần tạo nên một môi trường hòa hợp.</li>
              <li><strong>Lòng trung thành</strong>: Trong vai trò bạn bè và đối tác, họ luôn trung thành và đáng tin cậy.</li>
          </ul>`
    },
    {
      content:
      `
          <h2>7 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 7</h2>
          <ul>
              <li>Lãnh đạo bẩm sinh: Họ có khả năng thu hút, truyền cảm hứng và thúc đẩy mọi người hướng tới những mục tiêu chung.</li>
              <li>Mức độ hoạt động cao: Người mang năng lượng số 7 luôn bận rộn, tràn đầy năng lượng và sẵn sàng đương đầu với thử thách.</li>
              <li>Tập trung vào mục tiêu: Họ có năng lực đặc biệt trong việc tập trung vào mục tiêu và đạt được những thành tựu khi hướng năng lượng của mình theo cách tích cực.</li>
              <li>Quyết đoán và ra quyết định nhanh: Họ có thể đưa ra quyết định một cách nhanh chóng và tự tin, ngay cả trong những tình huống căng thẳng.</li>
              <li>Khả năng vượt qua trở ngại: Họ có ý chí mạnh mẽ và kiên trì vượt qua khó khăn.</li>
          </ul>
      `
    },
    {
      content: 
      `
          <h2>8 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 8</h2>
          <ul>
              <li>Công bằng và chính trực: Họ luôn đấu tranh cho lẽ phải và bảo vệ những người bị đối xử bất công.</li>
              <li>Hiểu biết sâu sắc về nhân quả: Họ có sự nhận thức mạnh mẽ về cách vạn vật vận hành và cách hành động của con người tác động đến cuộc sống.</li>
              <li>Tình bạn chân thành: Họ là những người bạn trung thành, luôn sẵn sàng hỗ trợ và giúp đỡ khi cần.</li>
              <li>Kỹ năng phối hợp: Họ có khả năng điều phối công việc và con người, đảm bảo sự vận hành trơn tru trong mọi hoạt động.</li>
              <li>Sức mạnh tiềm ẩn: Họ có trực giác nhạy bén, ý thức cao và sự hiểu biết sâu sắc về các quy luật tâm linh.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>9 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 9</h2>
          <ul>
              <li>Trí tuệ bẩm sinh: Họ có sự thông thái tự nhiên, giúp họ thấu hiểu cuộc sống một cách sâu sắc.</li>
              <li>Lòng trung thành trong tình bạn và quan hệ: Họ luôn đáng tin cậy và là người bạn, đối tác vững chắc trong mọi mối quan hệ.</li>
              <li>Khả năng truyền đạt tri thức và hỗ trợ: Với sự khôn ngoan sẵn có, họ giỏi chia sẻ kiến thức và giúp đỡ người khác.</li>
              <li>Tìm kiếm tri thức ẩn giấu: Họ đặc biệt xuất sắc trong các lĩnh vực như khoa học, triết học và huyền học, luôn khao khát khám phá những chân lý sâu xa.</li>
              <li>Chính trực: Họ sống có đạo đức, luôn giữ gìn sự toàn vẹn và tự chủ trong cuộc sống.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>10 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 10</h2>
          <ul>
              <li>May mắn bẩm sinh: Họ có sự may mắn tự nhiên và thường xuyên gặp những cơ hội thuận lợi trong cuộc sống.</li>
              <li>Khả năng thu hút và tạo sự kết nối: Họ có tài giao tiếp tuyệt vời, dễ dàng thu hút và làm quen với mọi người.</li>
              <li>Trân trọng niềm vui cuộc sống: Họ biết tận hưởng những điều tốt đẹp và có khả năng lan tỏa niềm vui đến những người xung quanh.</li>
              <li>Kiểm soát vận mệnh và thay đổi thực tại: Những người này có khả năng định hình số phận của mình và tác động đến các sự kiện theo hướng có lợi cho họ.</li>
              <li>Kết nối với sức mạnh tâm linh: Họ có mối liên kết mạnh mẽ với năng lượng cao hơn, nhận được sự hỗ trợ và hướng dẫn từ vũ trụ.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>11 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 11</h2>
          <ul>
              <li>Khả năng lãnh đạo: Họ có thể dẫn dắt và truyền cảm hứng cho những nhóm lớn, hướng họ tới những mục tiêu chung.</li>
              <li>Sức bền bỉ và khả năng đa nhiệm: Họ có thể xử lý nhiều nhiệm vụ cùng lúc mà vẫn duy trì sự kiên trì và hiệu quả cao.</li>
              <li>Bản năng nhạy bén: Họ có trực giác mạnh, giúp họ dự đoán và tìm ra giải pháp ngay cả trước khi vấn đề xuất hiện.</li>
              <li>Bảo vệ và mang lại may mắn trong kinh doanh: Họ có trực giác sắc bén trong việc kinh doanh, giúp họ tránh rủi ro và đạt được thành công.</li>
              <li>Nguồn năng lượng sống: Họ có khả năng chữa lành và tiếp thêm sinh lực cho những người xung quanh.</li>
          </ul>
      `
    },
    {
      content:
      `
          <h2>12 – Những Phẩm Chất Chính của Người Mang Năng Lượng Số 12/h2>
          <ul>
              <li>Lòng tốt và sự cởi mở: Họ có tấm lòng nhân hậu, luôn sẵn sàng giúp đỡ và chia sẻ với mọi người.</li>
              <li>Sự đồng cảm sâu sắc: Họ có khả năng cảm nhận và thấu hiểu cảm xúc của người khác, từ đó hỗ trợ và an ủi họ.</li>
              <li>Tầm nhìn xa: Họ có thể nhìn nhận vấn đề từ nhiều góc độ khác nhau và nhanh chóng tìm ra giải pháp sáng tạo.</li>
              <li>Phục vụ và hy sinh vì mục tiêu cao cả: Họ sẵn sàng cống hiến bản thân cho những lý tưởng cao đẹp hơn.</li>
              <li>Hiểu biết tâm lý: Họ có năng lực sâu sắc trong việc phân tích tâm lý con người và giúp họ tìm ra con đường đúng đắn trong cuộc sống.</li>
          </ul>
      `
    }
  ]

const karmaInfo = [
      {
        content:
        `
        <h2>How</h2>
        `
      },
      {
        content:
        `
        <h2>How</h2>
        `
      },
      {
        content:
        `
          <h2>Số 3 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng này thường gặp phải những thách thức lặp đi lặp lại như lòng tham, khao khát quyền lực mạnh mẽ, sự kiểm soát, kiêu ngạo và quá khắt khe trong đánh giá. Năng lượng tiêu cực sâu sắc có thể dẫn đến các vấn đề nghiêm trọng như vô sinh. Các đặc điểm phổ biến bao gồm chủ nghĩa độc đoán, áp đặt và kiểm soát quá mức đối với con cái và người thân. Họ có xu hướng đánh giá người khác dựa trên địa vị xã hội thay vì phẩm chất bên trong và thường bị ám ảnh bởi lo lắng, sợ hãi về cuộc sống, sức khỏe và sự thành công của những người xung quanh.</p>
        `
      },
      {
        content:
        `
          <h2>Số 4 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng Hoàng Đế thường gặp khó khăn trong việc kiểm soát, hành vi cứng nhắc và độc đoán. Khi họ cảm thấy mất kiểm soát trong các lĩnh vực khác của cuộc sống, họ có thể trở nên tàn nhẫn với những người yếu thế. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Không chấp nhận thẩm quyền hoặc thiếu tôn trọng ranh giới của người khác.</li>
            <li>Kiểm soát quá mức, tước đoạt sự tự do của người khác.</li>
            <li>Chủ nghĩa vật chất và sự keo kiệt về mặt cảm xúc.</li>
            <li>Sợ trách nhiệm và thiếu cân bằng giữa giá trị tinh thần và vật chất.</li>
            <li>Khó khăn trong mối quan hệ với cha và những người có quyền lực, cùng với lòng kiêu hãnh và sự cứng nhắc trong tư duy.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 5 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng Người Thầy thường gặp phải những sự kiện lặp lại trong cuộc đời gắn liền với các mô thức nghiệp chưa được giải quyết. Những thách thức phổ biến bao gồm:</p>
          <ul>
            <li>Không muốn học hỏi, chia sẻ kiến thức hoặc tiếp nhận quan điểm mới.</li>
            <li>Bám vào các truyền thống lỗi thời và chống lại sự thay đổi.</li>
            <li>Kiêu ngạo, vấn đề gia đình và tranh chấp pháp lý.</li>
            <li>Thích giảng dạy, áp đặt quan điểm và phân loại con người.</li>
            <li>Ham muốn thống trị, thiếu khả năng thỏa hiệp và lòng tự tôn quá mức</li>
            <li>Khó chấp nhận sai lầm, phán xét hoặc có hành vi hung hăng.</li>
            <li>Sự gắn bó mạnh mẽ với gia đình, nỗi ám ảnh kiểm soát, cảm giác bất an và kỳ vọng phi thực tế.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 6 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 6 thường phải đối mặt với những thử thách lặp lại liên quan đến các mối quan hệ và quá trình ra quyết định. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Xung đột, ly hôn và cô đơn.</li>
            <li>Khó khăn trong việc đưa ra lựa chọn và gánh vác trách nhiệm.</li>
            <li>Sự tự tổn thương hoặc hành vi hung hăng đối với người khác.</li>
            <li>Bị mắc kẹt trong các mối quan hệ hoặc ký ức cũ, cản trở sự phát triển trong hiện tại.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 7 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 7 thường đối mặt với những thách thức xuất phát từ nghiệp chưa được giải quyết và các sự kiện lặp lại trong cuộc sống. Những vấn đề này có thể kìm hãm hoặc thúc đẩy quá trình tự nhận thức bản thân. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Sự tức giận do cảm thấy thiếu công bằng.</li>
            <li>Khó tập trung và hành động thiếu định hướng.</li>
            <li>Sợ trách nhiệm và có xu hướng độc đoán.</li>
            <li>Sự hung hăng không kiểm soát và lối sống thiếu lành mạnh.</li>
            <li>Tư duy cứng nhắc về thiện và ác, theo đuổi công lý ảo tưởng.</li>
            <li>Khó khăn trong việc tự kỷ luật và kiểm soát người khác.</li>
            <li>Nhìn cuộc sống như một cuộc chiến hơn là một hành trình hài hòa.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 8 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng số 8 thường gặp phải các biểu hiện nghiệp và khó khăn trong hành vi. Những vấn đề này bao gồm:</p>
          <h4>Biểu hiện nghiệp:</h4>
          <ul>
            <li>Khó hiểu về công lý cao hơn.</li>
            <li>Đổ lỗi cho thế giới về những bất hạnh cá nhân.</li>
            <li>Phải chịu hậu quả ngay lập tức vì thiếu nhận thức.</li>
          </ul>
          <h4>Vấn đề hành vi:</h4>
          <ul>
            <li>Hay phán xét, tranh đấu và kiện tụng.</li>
            <li>Nhạy cảm quá mức và thường xuyên phàn nàn về sự bất công trong cuộc sống.</li>
            <li>Tin rằng công lý không tồn tại, dẫn đến hành vi bốc đồng, hung hăng và trầm cảm.</li>
            <li>Lặp lại sai lầm mà không rút ra bài học, cố chấp, tự cao và mất cân bằng.</li>
            <li>Có xu hướng đổ lỗi cho người khác và kháng cự sự thay đổi.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 9 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng số 9 thường gặp các biểu hiện nghiệp và khó khăn trong hành vi, bao gồm:</p>
          <h4>Biểu hiện nghiệp:</h4>
          <ul>
            <li>Cảm giác cô đơn và không muốn chia sẻ trí tuệ với người khác.</li>
            <li>Nhạy cảm quá mức và có xu hướng rút lui khỏi các mối quan hệ.</li>
            <li>Lặp đi lặp lại những trải nghiệm tiêu cực mà không rút ra bài học.</li>
          </ul>
          <h4>Vấn đề hành vi:</h4>
          <ul>
            <li>Kiêu ngạo về trí tuệ và phán xét người khá</li>
            <li>Chia con người thành nhóm "thông minh" và "ngu ngốc".</li>
            <li>Khó tin tưởng người khác, ngại mở lòng và hình thành các kết nối thân thiết.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 10 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 10 thường gặp khó khăn với dòng chảy tự nhiên của cuộc sống. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Cảm thấy mất kết nối với cuộc sống.</li>
            <li>Muốn che giấu bản thân hoặc đi ngược lại xu hướng chung.</li>
            <li>Bỏ lỡ các dấu hiệu và cơ hội, thường ở sai nơi vào sai thời điểm.</li>
            <li>Trì trệ, thiếu động lực, không có khát vọng.</li>
            <li>Bám víu vào quá khứ, cản trở sự phát triển và tiến bộ.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 11 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 11 thường đối mặt với những tình huống đau đớn, thử thách khắc nghiệt, dẫn đến cảm giác cô đơn và kiệt sức. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Áp đặt nguyên tắc cá nhân, tính hung hăng, không khoan nhượng.</li>
            <li>Tạo áp lực quá mức, thô lỗ, dễ cáu gắt, không biết thư giãn.</li>
            <li>Thiếu quyết đoán, mất động lực, trạng thái lãnh đạm, thiếu cảm hứng.</li>
            <li>Tính cách bướng bỉnh, kiểm soát quá mức để chứng minh bản thân.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 12 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 12 thường đấu tranh với cảm giác tiêu cực về bản thân. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Sự ghét bỏ bản thân và cảm giác không xứng đáng.</li>
            <li>Sợ hãi mất đi người thân.</li>
            <li>Luôn cảm thấy là nạn nhân, thường xuyên than phiền về sự bất công của cuộc sống.</li>
            <li>Hấp dẫn những tình huống mà họ bị lợi dụng, không được trân trọng hoặc đánh giá thấp.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 13 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 13 thường trải qua những sự kiện đột ngột, gây mất cân bằng hoặc liên quan đến sự sống và cái chết. Những vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Tính sắc bén, hung hăng, không muốn hoàn thành nhiệm vụ.</li>
            <li>Thiếu tập trung, tư duy phi lý, thái độ hời hợt.</li>
            <li>Liều lĩnh quá mức, bị ám ảnh về cái chết.</li>
            <li>Sợ hãi sự thay đổi, lo lắng về tương lai và người thân.</li>
            <li>Quá gắn bó với người đã khuất, sống trong ký ức quá khứ.</li>
            <li>Giữ lại những vật dụng cũ một cách thái quá, tạo ra sự lộn xộn và trì trệ.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 14 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 14 thường gặp vấn đề với sự cân bằng cảm xúc. Các vấn đề bao gồm:</p>
          <ul>
            <li>Sự vô tâm, lạnh lùng, các dạng phụ thuộc (nghiện ngập).</li>
            <li>Nhạy cảm quá mức, dễ bị mất cân bằng cảm xúc.</li>
            <li>Cực đoan, thiếu sự điều độ trong hành vi.</li>
            <li>Không lắng nghe trực giác và cảm xúc của chính mình.</li>
            <li>Bị ảnh hưởng tiêu cực từ cha mẹ, bị kìm hãm khả năng sáng tạo.</li>
            <li>Nhầm lẫn giữa tâm linh và tôn giáo, sợ hãi về tâm linh.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 15 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 15 thường bị cuốn vào những cám dỗ và lối sống tiêu cực. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Hay vu khống, ám ảnh, bị phụ thuộc vào người khác.</li>
            <li>Bị lôi kéo giữa các thế lực ánh sáng và bóng tối.</li>
            <li>Ham muốn quyền lực, vật chất, kiểm soát và thao túng người khác.</li>
            <li>Sự giả dối, không trung thực, dính líu đến các hoạt động phi đạo đức.</li>
            <li>Mê đắm công danh, sự nghiệp, quá chấp vào vật chất.</li>
            <li>Cờ bạc, nghiện ngập và những hoạt động mang tính chất tiêu cực.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 16 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 16 thường đối mặt với những biến cố lớn nhằm thúc đẩy sự thức tỉnh tâm linh. Các vấn đề bao gồm:</p>
          <ul>
            <li>Gắn bó quá mức với vật chất và các mối quan hệ.</li>
            <li>Các sự kiện tiêu cực như tai nạn, mất mát tài sản, bệnh tật.</li>
            <li>Nóng nảy, bùng phát cảm xúc, nhìn đời theo hướng tiêu cực.</li>
            <li>Chống lại sự phát triển tinh thần, có tư duy hạn hẹp.</li>
            <li>Hành động bốc đồng, liều lĩnh dẫn đến sự hỗn loạn</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 17 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 17 có xu hướng tự mãn và không tận dụng tài năng của mình. Các vấn đề bao gồm:</p>
          <ul>
            <li>Dễ rơi vào trạng thái kiêu ngạo, tự mãn.</li>
            <li>Thiếu động lực, lười biếng, không nỗ lực phát triển.</li>
            <li>Phụ thuộc vào người khác, dễ bị chi phối</li>
            <li>Thiếu hiểu biết về thực tế, sống xa rời thế giới.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 18 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 18 thường bị chi phối bởi nỗi sợ hãi và suy nghĩ tiêu cực. Các vấn đề phổ biến bao gồm:</p>
          <ul>
            <li>Đánh mất bản thân, bị nhấn chìm trong những nghi ngờ và sợ hãi.</li>
            <li>Bị cám dỗ bởi ma thuật hắc ám hoặc thao túng người khác.</li>
            <li>Tự lập trình bản thân cho những rắc rối bằng tư duy tiêu cực.</li>
            <li>Không hiểu được quy luật nhân quả trong cuộc sống.</li>
            <li>Tạo ra thực tại tiêu cực do liên tục chìm đắm trong nỗi sợ hãi và nghi ngờ.</li>
          </ul>
        `
      },
      {
        content:
        `
          <h2>Số 19 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng số 19 có thể gặp phải những sự kiện tiêu cực lặp đi lặp lại và các biểu hiện nghiệp nếu họ không kết nối được với ánh sáng bên trong mình. Các thách thức chính bao gồm:</p>
          <ul>
            <li>Cảm giác tự hủy hoại bản thân và thiếu tình yêu thương dành cho chính mình.</li>
            <li>Xu hướng thích thống trị, kiêu ngạo và có cảm giác vượt trội hơn người khác.</li>
            <li>Luôn bận rộn, sống trong hỗn loạn, bị mắc kẹt trong quá khứ hoặc lối suy nghĩ tiêu cực.</li>
            <li>Đặt ra những mục tiêu ích kỷ và đấu tranh với chứng nghiện công việc.</li>
            <li>Không thể thư giãn hoặc giải phóng sự sáng tạo, dẫn đến bế tắc và căng thẳng.</li>
            <li>Kiểm soát và áp đặt quá mức, tạo ra bầu không khí nặng nề trong gia đình hoặc nơi làm việc.</li>
            <li>Tự trách móc và không hài lòng về bản thân, làm cạn kiệt năng lượng và cản trở sự phát triển.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 20 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người chịu ảnh hưởng của năng lượng số 20 thường gặp phải xung đột trong gia đình và cảm giác thiếu sự hỗ trợ từ người thân. Các thách thức chính bao gồm:</p>
          <ul>
            <li>Mâu thuẫn với người thân, đòi hỏi họ phải kết nối lại với cội nguồn gia đình.</li>
            <li>Khó chấp nhận người thân và thiếu sự thấu hiểu lẫn nhau.</li>
            <li>Thử thách trong việc tha thứ cho cha mẹ và phá vỡ những khuôn mẫu truyền đời.</li>
            <li>Khó khăn trong việc đón nhận tình cảm gia đình và sự công nhận từ người thân.</li>
          </ul>
        `
      },
        {
        content:
        `
          <h2>Số 21 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người mang năng lượng số 21 có thể đối mặt với những thách thức sau:</p>
          <ul>
            <li>Khép mình, sợ hãi sự mở rộng, chống lại sự thay đổi và phát triển.</li>
            <li>Sống cứng nhắc theo những khuôn mẫu có sẵn, thiếu sự linh hoạt.</li>
            <li>Phụ thuộc vào truyền thông, ám ảnh bởi nỗi sợ hãi, hoặc trốn tránh thực tại bằng ảo tưởng hay thế giới ảo.</li>
            <li>Thù địch và hung hăng với người khác, phản ánh những cuộc đấu tranh nội tâm.</li>
          </ul>
        `
      },
          {
        content:
        `
          <h2>Số 22 – Những thách thức chính và nhiệm vụ nghiệp</h2>
          <h3>Những thách thức chính</h3>
          <p>Những người có năng lượng số 22 thường đối mặt với các rào cản sau:</p>
          <ul>
            <li>Sự ràng buộc và giới hạn tự do cá nhân.</li>
            <li>Phụ thuộc vào người khác, mắc bệnh mãn tính, hoặc cảm giác buồn bã kéo dài.</li>
            <li>Kiểm soát, ghen tuông và cảm giác bị mắc kẹt.</li>
            <li>Thiếu ý chí và tham vọng về tiền bạc, quyền lực.</li>
            <li>Sợ hãi điều chưa biết và do dự khi bắt đầu những chu kỳ mới.</li>
            <li>Sống trong những khuôn khổ cứng nhắc, thường do ảnh hưởng từ cha mẹ nghiêm khắc, khiến họ bị hạn chế trong việc thể hiện bản thân.</li>
          </ul>
        `
      },
      
    ]

const relationshipInfo = [
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 3 – Đặc điểm của người bạn đời lý tưởng</h2>
            <h4>Mô tả chung</h4>
            <p>Một người có bản tính dịu dàng, biết trân trọng sự đồng hành của phụ nữ và hiểu họ rất rõ. Họ khéo léo trong việc đối xử với phụ nữ bằng sự tinh tế và quan tâm. Người này sáng tạo, yêu thích trẻ con, động vật, hoa cỏ và đánh giá cao vẻ đẹp trong mọi thứ. Họ coi trọng sự thoải mái trong gia đình và một cuộc sống có tổ chức. Luôn chỉnh chu, gọn gàng, tự lập và đáng tin cậy, họ có khả năng tự chăm lo cho bản thân và đáp ứng những nhu cầu của chính mình.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 6 – Đặc điểm của người bạn đời lý tưởng</h2>
            <h4>Mô tả chung</h4>
            <p>Một người hòa đồng, quyến rũ và có ngoại hình thu hút. Họ thường là tâm điểm của các bữa tiệc và là linh hồn của mọi cuộc tụ họp. Họ có nhiều mối quan hệ, thích giao tiếp qua những cử chỉ thân mật và đánh giá cao cái đẹp dưới mọi hình thức. Có thể họ sẽ sưu tầm đồ cổ và hào phóng chia sẻ tình yêu thương của mình. Họ là một nhà tổ chức xuất sắc, có nhiều bạn bè và quen biết, giỏi tập hợp những người có chung chí hướng. Dù không chủ động tìm kiếm sự chú ý, nhưng họ vẫn thu hút người khác bằng cá tính độc đáo của mình. Họ quan tâm đến lợi ích của người khác không kém gì bản thân.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 9 – Đặc điểm của người bạn đời lý tưởng</h2>
            <h4>Mô tả chung</h4>
            <p>Một người thông minh, uyên bác và hướng nội, luôn tìm kiếm ý nghĩa trong mọi thứ, kể cả trong các mối quan hệ. Nếu họ không tìm thấy ý nghĩa, rất có thể họ sẽ chấm dứt mối quan hệ. Họ coi trọng không gian cá nhân, suy nghĩ nhiều nhưng ít nói. Tuy nhiên, khi họ lên tiếng, lời nói của họ luôn thú vị và hữu ích. Họ không thích những cuộc tụ tập ồn ào, mà thích dành thời gian bên những cuốn sách. Họ biết cách cân bằng cuộc sống và các mối quan hệ, duy trì sự kết nối với tập thể và người bạn đời trong khi vẫn đảm bảo có thời gian riêng để nạp lại năng lượng. Họ tin tưởng người khác nhưng cũng trân trọng sự cô độc.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 12 – Đặc điểm của người bạn đời lý tưởng</h2>
            <h4>Mô tả chung</h4>
            <p>Người này có lòng vị tha, biết quan tâm, nhân hậu và giàu tính sáng tạo. Họ sẽ vui vẻ giúp bạn xoa bóp và hỗ trợ bạn trong bất kỳ tình huống nào. Họ yêu trẻ con, động vật, thiên nhiên và nghệ thuật. Với một tâm hồn rộng mở, sẵn sàng giúp đỡ người khác một cách vô tư, họ sở hữu một góc nhìn độc đáo và có cái nhìn khác lạ về thực tại. Họ biết cân bằng giữa việc cho đi và nhận lại, chỉ giúp đỡ khi được yêu cầu và biết cách bảo vệ ranh giới cá nhân của mình. Họ chịu trách nhiệm về cuộc đời mình và không đóng vai nạn nhân hay đổ lỗi cho người khác về vấn đề của mình.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 15 – Người quyến rũ, đầy đam mê và tỏa sáng</h2>
            <p>Người này tràn đầy năng lượng, sức hút và đam mê, với niềm yêu thích cuộc sống xa hoa và đẹp đẽ. Họ thường tận hưởng những thú vui xa xỉ, thích ẩm thực tinh tế và thường xuyên tặng những món quà xa hoa. Họ có tài kết nối với mọi người một cách tự nhiên. Thường đảm nhận vị trí lãnh đạo, họ luôn phấn đấu để đạt được quyền lực và thành công. Với tham vọng lớn, họ biết cách giúp đỡ người khác đạt được những đỉnh cao mới bằng khả năng của mình. Trung thực và cởi mở, họ không bị ràng buộc bởi bất kỳ sự phụ thuộc nào và luôn bày tỏ quan điểm của mình một cách khéo léo, nhẹ nhàng.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 18 – Người tinh tế, nghệ thuật và huyền bí</h2>
            <p>Người này tinh tế, nghệ thuật và mang vẻ huyền bí, sở hữu một hào quang bí ẩn thu hút người khác. Họ có trực giác nhạy bén và khả năng sáng tạo mạnh mẽ, thường chọn những ngành nghề cho phép họ hiện thực hóa trí tưởng tượng phong phú của mình. Mặc dù có thể gặp khó khăn với sự bất an và nỗi sợ hãi, nhưng họ vẫn giữ được sự gắn kết với hiện tại, tập trung vào việc xây dựng các mối quan hệ hài hòa và luôn cân nhắc đến nhu cầu của người khác.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
    {
        content:
        `
            <h2>Số 21 – Người kiến tạo hòa bình với trái tim rộng mở</h2>
            <p>Người này là một người kiến tạo hòa bình thực thụ, sống với trái tim rộng mở và không bị giới hạn bởi những rào cản bên trong. Họ nhìn nhận tất cả các tôn giáo là một và xem mọi người như anh chị em của mình. Thân thiện và dễ gần, họ thu hút những người tích cực và có chung chí hướng vào cuộc sống của mình. Là một người yêu thích du lịch, họ dễ dàng kết nối và xây dựng các mối quan hệ ở bất cứ đâu. Với tư duy ngôn ngữ sắc bén, họ nhanh chóng học hỏi các ngôn ngữ mới và bị thu hút bởi những công việc tại các tập đoàn quốc tế. Góc nhìn toàn cầu của họ giúp họ có thể kết nối với những người từ nhiều nền văn hóa và hoàn cảnh khác nhau. Họ đón nhận cuộc sống mà không sợ hãi.</p>
        `
    },
    {
        content:
        `
            <h2>How</h2>
        `
    },
]

const financialInfo = [
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content:
        `
        <h2>3 – Xây dựng sự ổn định tài chính thông qua mối quan hệ với phụ nữ</h2>
        <p>Việc đạt được sự ổn định tài chính đòi hỏi bạn phải nuôi dưỡng các mối quan hệ vững chắc với phụ nữ, bao gồm từ mẹ cho đến khách hàng. Dòng tiền của bạn thường chảy qua họ hoặc chịu ảnh hưởng trực tiếp từ họ. Bằng cách thu hút phụ nữ đến với công việc kinh doanh của mình và duy trì một trường năng lượng bình yên, bạn có thể tạo ra một môi trường tràn đầy tình yêu và sự hài hòa trong tâm hồn. Vẻ đẹp và lòng tốt là những phẩm chất quan trọng giúp bạn thu hút phụ nữ và tạo ra cơ hội phát triển tài chính.</p>
        <h3>Thực hành quan trọng để đạt được sự ổn định tài chính</h3>
        <ul>
            <li>Tham gia vào các hoạt động sáng tạo và duy trì mối quan hệ gia đình bền vững. Những điều này không chỉ góp phần vào sự ổn định tài chính của bạn mà còn giúp duy trì dòng dõi của bạn.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>4 – Đạt được sự thịnh vượng thông qua lãnh đạo và quản lý khôn ngoan</h2>
        <p>Sự thịnh vượng và thành công thực sự đến từ việc phát triển tài năng lãnh đạo của bạn và quản lý công việc một cách khôn ngoan và công bằng. Điều quan trọng là phải chăm lo cho gia đình và xây dựng một nền tảng gia đình vững chắc, vì đây sẽ là bệ phóng cho thành công của bạn. Dòng tiền của bạn thường đến thông qua mối quan hệ với nam giới—có thể là khách hàng, đối tác hoặc đồng nghiệp—vì vậy, hợp tác với họ và sẵn sàng đón nhận sự hỗ trợ là chìa khóa để đạt được sự tăng trưởng tài chính.</p>
        <h3>Nguyên tắc quan trọng để đạt được sự thịnh vượng</h3>
        <ul>
            <li>Sử dụng sức mạnh của bạn với ý định tốt, thể hiện lòng trắc ẩn và tôn trọng người khác, đặc biệt là những người yếu thế hoặc kém may mắn hơn bạn.</li>
            <li>Tránh lạm dụng sức mạnh cho những mục đích tiêu cực như bạo lực hay thao túng.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>5 – Tiếp cận sự thành công tài chính thông qua gia đình và tuân thủ luật pháp</h2>
        <p>Việc đạt được sự thịnh vượng tài chính bắt đầu từ việc ưu tiên gia đình và tuân thủ các quy tắc, luật pháp. Thu nhập của bạn có mối liên kết chặt chẽ với các mối quan hệ gia đình, vì vậy, điều quan trọng là xây dựng sự gắn kết, quy tụ người thân và hỗ trợ lẫn nhau. Hãy duy trì và phát triển truyền thống gia đình, truyền lại giá trị này cho thế hệ sau, đồng thời thể hiện lòng tôn kính đối với những người lớn tuổi. Hãy suy ngẫm về cách tiền bạc đã được đối xử trong gia đình bạn và điều đó ảnh hưởng đến tư duy tài chính của bạn như thế nào.</p>
        <h3>Thực hành quan trọng để phát triển tài chính</h3>
        <ul>
            <li>Tham gia vào những công việc cho phép bạn giáo dục người khác, chia sẻ kinh nghiệm và truyền đạt kiến thức của mình.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>6 – Sự giàu có tài chính thông qua vẻ đẹp, tình yêu và sự hài hòa</h2>
        <p>Sự thịnh vượng tài chính đến từ việc tạo ra vẻ đẹp, tình yêu và sự hài hòa trong cuộc sống của bạn. Hãy nuôi dưỡng những cảm xúc tích cực trong bản thân, chăm sóc sức khỏe tốt, tận hưởng những điều đẹp đẽ và xây dựng một môi trường sống hài hòa. Bằng cách nuôi dưỡng một bầu không khí tích cực, bạn sẽ thu hút thành công đến với mình.</p>
        <h3>Thực hành quan trọng để thu hút thành công tài chính</h3>
        <ul>
            <li>Hãy yêu thích những gì bạn làm và tập trung vào đó. Sự đam mê trong công việc và cuộc sống là chìa khóa để mở ra cánh cửa tài chính.</li>
            <li>Xây dựng mối quan hệ dựa trên sự tin tưởng và yêu thương với đối tác của bạn. Hãy làm gương cho người khác và cung cấp sự hỗ trợ khi cần.</li>
            <li>Thành công thường đến trong các lĩnh vực như tâm lý học, công tác hỗ trợ và tư vấn.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>7 – Đạt được thành công tài chính thông qua sự vận động và làm việc nhóm</h2>
        <p>Tiền bạc và thành công có mối liên hệ chặt chẽ với sự vận động, quyết tâm và sức mạnh của làm việc nhóm. Thay vì cố gắng làm mọi thứ một mình và trở thành một người tham công tiếc việc, bạn nên tập trung vào việc xây dựng và điều phối một nhóm làm việc hiệu quả. Hãy gạt bỏ cái tôi cá nhân, nuôi dưỡng tinh thần hợp tác và hướng tới mục tiêu chung.</p>
        <h3>Thực hành quan trọng để đạt được sự thịnh vượng tài chính</h3>
        <ul>
            <li>Tham gia vào các hoạt động liên quan đến sự di chuyển, du lịch hoặc lái xe để tạo ra của cải vật chất.</li>
            <li>Đặt ra mục tiêu cao về mặt tinh thần, không chỉ cho bản thân mà còn cho lợi ích chung của tập thể—điều này sẽ dẫn đến nguồn thu nhập dồi dào.</li>
            <li>Chia sẻ những kinh nghiệm và thành công của bạn với người khác, đồng thời tránh những cạnh tranh tiêu cực và gây hấn.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>8 – Đạt được sự thịnh vượng tài chính thông qua hành động có mục đích</h2>
        <p>Nếu bạn muốn đạt được sự thịnh vượng tài chính, điều quan trọng là hiểu rõ các quy luật vận hành của cuộc sống và hành động theo đúng định hướng. Hãy học cách tách mình khỏi hoàn cảnh trước mắt và nhìn nhận những tình huống khó khăn từ góc độ sâu sắc hơn. Hãy tự hỏi:</p>
        <ul>
            <li>Chúng xuất hiện trong cuộc sống của bạn như thế nào?</li>
            <li>Tại sao những điều này lại xảy ra?</li>
            <li>Chúng mang đến bài học gì?</li>
            <li>Sứ mệnh của bạn trong những tình huống này là gì?</li>
        </ul>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Hành động một cách có mục đích, tránh những khoản đầu tư tài chính rủi ro có thể dẫn đến mất ổn định.</li>
            <li>Làm việc để chuyển hóa những niềm tin về tiền bạc mà bạn thừa hưởng từ cha mẹ, đặc biệt là những tư duy hạn chế về sự giàu có. Hãy thay đổi tư duy của bạn để hướng đến sự dư dả và thành công.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>9 – Nhận được tiền bạc thông qua việc chia sẻ kiến thức và trí tuệ</h2>
        <p>Bạn có thể đạt được thu nhập bằng cách chia sẻ những kiến thức giá trị với học sinh hoặc những người theo dõi mình. Để làm được điều này một cách hiệu quả, bạn cần trang bị cho mình những kỹ năng và hiểu biết chuyên sâu—có thể là về thiền định, chữa lành, tôn giáo hoặc bất kỳ lĩnh vực trí tuệ nào khác. Hãy nuôi dưỡng một tư duy tích cực trong bản thân và dạy điều đó cho người khác, đồng thời luôn sẵn sàng đáp ứng nhu cầu của họ.</p>
        <h3>Thực hành quan trọng để tối đa hóa dòng tiền</h3>
        <ul>
            <li>Duy trì sự cân bằng hợp lý về tiền bạc—cắt giảm chi tiêu không cần thiết nhưng cũng không nên quá tiết kiệm hoặc keo kiệt.</li>
            <li>Tránh việc sống quá khép kín hoặc tự cho mình là hơn người.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>10 – Đạt được dòng chảy tài chính thông qua sự cân bằng và niềm tin</h2>
        <p>Một cuộc sống và công việc không căng thẳng chính là chìa khóa để đạt được sự giàu có tài chính. Bạn cần tìm sự cân bằng giữa việc tránh lười biếng và tránh làm việc quá sức đến kiệt quệ. Hãy đảm nhận trách nhiệm một cách tự nhiên khi nó đến với bạn và hoàn thành chúng một cách có ý thức, nhưng không để bản thân bị áp lực quá mức.</p>
        <h3>Thực hành quan trọng để duy trì dòng tiền</h3>
        <ul>
            <li>Hãy yêu thích công việc của mình, lắng nghe bản thân và tin vào trực giác, cũng như tin rằng có những thế lực cao hơn đang hỗ trợ bạn.</li>
            <li>Biết ơn vì những thành công và những cơ hội may mắn mà cuộc sống mang lại cho bạn.</li>
            <li>Dòng tiền sẽ tự nhiên chảy đến với bạn khi bạn thư giãn và có niềm tin vào bản thân.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>11 – Kiếm tiền thông qua lao động chân tay và sức mạnh cá nhân</h2>
        <p>Bạn có thể đạt được thu nhập tốt thông qua lao động chân tay hoặc các công việc đòi hỏi thể chất, miễn là bạn có niềm tin vào khả năng của mình và tin tưởng vào sức mạnh của người khác. Bạn sở hữu một nguồn năng lượng mạnh mẽ, có thể truyền động lực, hỗ trợ và hướng dẫn người khác—điều này khiến bạn rất phù hợp với các công việc như huấn luyện viên, người cố vấn hoặc chuyên gia hỗ trợ cá nhân.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Quản lý năng lượng của mình một cách cẩn thận, tránh những cơn bùng nổ tiêu cực hoặc trở thành một người nghiện công việc.</li>
            <li>Học cách thỏa hiệp, không nên quá khao khát sự công nhận hoặc lời khen, đặc biệt là về tài chính.</li>
            <li>Rèn luyện sự tha thứ và chấp nhận, điều này sẽ giúp bạn duy trì sự bình yên trong tâm hồn.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>12 – Đạt được sự thịnh vượng tài chính thông qua việc giúp đỡ người khác</h2>
        <p>Thành công tài chính của bạn có mối liên hệ chặt chẽ với khả năng hỗ trợ người khác. Hãy buông bỏ tư duy nạn nhân và cảm giác tự thương hại bản thân. Thay vào đó, hãy sử dụng nguồn lực của mình một cách hiệu quả để giúp đỡ người khác, vì sự rộng lượng và tinh thần phục vụ có thể dẫn đến sự phát triển cá nhân và tài chính.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Tránh phàn nàn và học cách nói “không” khi cần thiết. Hãy yêu cầu một mức thù lao xứng đáng với công việc của bạn.</li>
            <li>Giảm bớt sự kiểm soát đối với những người bạn quan tâm. Hãy giao phó trách nhiệm và cho phép người khác, kể cả con cái hay người phụ thuộc, có cơ hội tự lập.</li>
            <li>Cho đi tình yêu thương một cách vô điều kiện, không mong đợi điều gì đáp lại.</li>
        </ul>
        `
    },
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content:
        `
        <h2>14 – Tìm kiếm sự thịnh vượng thông qua đam mê và sáng tạo</h2>
        <p>Bạn có thể làm việc trong bất kỳ lĩnh vực nào, nhưng chìa khóa để đạt được sự thịnh vượng tài chính là tìm thấy niềm vui trong công việc. Khi công việc của bạn được kết nối với đam mê—dù đó là sáng tạo, nghệ thuật hay chữa lành—thì sự thịnh vượng sẽ tự nhiên đến, ngay cả khi tài chính của bạn đôi lúc gặp biến động. Hãy lắng nghe tiếng gọi của tâm hồn và tin rằng thành công sẽ đến với bạn qua sự kiên nhẫn và điều độ.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Tập trung vào việc thể hiện tài năng và tiềm năng bên trong, làm những điều này vì sự viên mãn của chính bạn, thay vì chỉ để kiếm tiền. Thành công tài chính sẽ theo sau khi bạn sống đúng với đam mê của mình.</li>
            <li>Tránh những công việc làm cạn kiệt năng lượng của bạn, ngay cả khi chúng mang lại danh tiếng hoặc vị thế cao.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>15 – Mở ra dòng chảy tài chính thông qua việc làm chủ bản thân và phát triển tâm linh</h2>
        <p>Để mở ra dòng chảy tài chính, bạn cần đối diện và kiểm soát những khía cạnh bóng tối trong con người mình. Khi hiểu và làm chủ những điểm yếu, bạn có thể chuyển hóa chúng thành sức mạnh. Hãy chia sẻ những trải nghiệm của bản thân để giúp người khác học hỏi và thanh lọc cuộc sống cũng như nguồn năng lượng của mình khỏi những phụ thuộc tiêu cực, ích kỷ, ghen tị và tham lam. Hãy luôn hướng tới sự phát triển cá nhân và tâm linh.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Nói chuyện với người khác về những thiếu sót của họ một cách bao dung và tôn trọng, tạo ra sự thấu hiểu thay vì phán xét.</li>
            <li>Vượt qua lòng tham và sự hiếu thắng, học cách kiểm soát những cám dỗ và những quyết định tài chính không trung thực.</li>
        </ul>
        `
    },
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content: 
        `
        <h2>How?</h2>
        `
    },
    {
        content:
        `
        <h2>19 – Đạt được sự ổn định tài chính thông qua đam mê và khả năng lãnh đạo</h2>
        <p>Để đạt được sự ổn định tài chính, điều quan trọng là tìm niềm vui trong công việc và theo đuổi đam mê của mình. Ngay cả khi chỉ bắt đầu bằng một sở thích, vũ trụ sẽ hỗ trợ bạn trên con đường này. Hãy làm những điều khiến bạn hạnh phúc, và bạn sẽ thấy những cơ hội mới mở ra, giống như cách Mặt Trời thu hút ánh sáng và sự sống.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Làm việc với trẻ em và nuôi dưỡng các mối quan hệ với người thân. Việc kết nối với đứa trẻ bên trong bạn sẽ mang lại sự cân bằng và niềm vui trong cuộc sống.</li>
            <li>Sống vui vẻ và tránh tự phán xét về thành công của mình.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>20 – Mở khóa tiềm năng tài chính thông qua gia đình và tổ tiên</h2>
        <p>Để mở khóa tiềm năng tài chính, bạn cần xem xét nguồn gốc gia đình và cách bạn nhìn nhận về tiền bạc. Gia đình có ảnh hưởng rất lớn đến tư duy tài chính của bạn. Hãy làm việc để vượt qua những niềm tin giới hạn, chẳng hạn như: “Tiền chỉ có thể kiếm được bằng cách làm việc cực nhọc”. Hãy phân tích cách cha mẹ bạn đối xử với tiền bạc và học cách tha thứ cho họ nếu họ đã vô tình truyền cho bạn những quan niệm sai lầm.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Củng cố mối quan hệ gia đình và duy trì truyền thống. Nếu có thể, hãy tham gia vào công việc kinh doanh gia đình hoặc một ngành nghề có truyền thống gia tộc.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>21 – Mở khóa tiềm năng tài chính thông qua các dự án toàn cầu và hòa bình</h2>
        <p>Để mở khóa tiềm năng tài chính, hãy tập trung vào các dự án quy mô lớn mang tính toàn cầu, giúp kết nối các quốc gia và nền văn hóa. Hãy đặt ra mục tiêu tham vọng, đồng thời tránh những công việc liên quan đến bạo lực hoặc sự hủy diệt, chẳng hạn như quân sự hoặc sản xuất thịt. Thành công của bạn nằm ở việc thúc đẩy hòa bình và kết nối con người trên toàn thế giới.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Sự thịnh vượng tài chính sẽ đến từ tự do, hòa bình và mở rộng tầm nhìn. Hãy chọn các công việc liên quan đến du lịch hoặc các dự án quốc tế để mang lại lợi nhuận đáng kể.</li>
            <li>Nếu không thể làm việc quốc tế, hãy tìm cách kết nối mọi người và đóng góp vào sự hòa hợp toàn cầu thông qua các dịch vụ, tư vấn hoặc văn học.</li>
        </ul>
        `
    },
    {
        content:
        `
        <h2>22 – Đạt được sự thịnh vượng tài chính thông qua tự do và sáng tạo</h2>
        <p>Để đạt được sự thịnh vượng tài chính, hãy tập trung vào những công việc liên quan đến giải trí và sự tự do. Đừng bị ám ảnh bởi tiền bạc, thay vào đó, hãy tiếp cận công việc với tâm thế vui vẻ và sáng tạo. Hãy sử dụng tiền một cách tự do, cho phép bản thân chi tiêu khi cần thiết, đồng thời giúp người khác giải phóng họ khỏi những ràng buộc vật chất. Việc đi lại nhiều và làm việc với tâm lý con người sẽ mang lại những lợi ích đáng kể.</p>
        <h3>Thực hành quan trọng để đạt được thành công tài chính</h3>
        <ul>
            <li>Dạy mọi người cách vượt qua những phụ thuộc và ràng buộc tâm lý, giúp họ đạt được sự tự do và hạnh phúc.</li>
            <li>Khám phá tài năng của bạn trong vai trò diễn giả hoặc nhà tâm lý học, giúp định hướng cho người khác.</li>
        </ul>
        `
    },


]

export {energies, safeZone, talentInfo, karmaInfo, relationshipInfo, financialInfo}