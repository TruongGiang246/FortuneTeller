
import { data } from 'react-router-dom';
import './Matrixdes.css'
import { useEffect, useState } from 'react';
import { desc, title } from 'framer-motion/client';
import { context } from 'three/tsl';
function Matrixdes(){
    const [value, setValue] = useState([])

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
        conten: 
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
      const days = document.getElementById('days').value;
      const months = document.getElementById('months').value;
      const years = document.getElementById('years').value;
      const impression = document.getElementById('impression');
      const safe = document.getElementById('safe_zone');
      const talent = document.getElementById('talent')

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


  
      talent.innerHTML = talentInfo[Number(months)-1].content;

      setValue([newDays, months, newYears, karma, comfort_zone, number_6, number_7,
        number_8, number_9, number_10, number_11, number_12, number_13, number_14, number_15, number_16, number_17, number_18, number_19, number_20, number_21, number_22, number_23, number_24,
        number_25, number_26, number_27, number_28, number_29, number_30
      ]);
      
    }

    
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
        <div className='title_number'>
            <h2>Nhập ngày tháng năm sinh của bạn</h2>
        </div>
        <div className='input'>
            <select className = "container_input" id="days">
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
          <select className = "container_input" id="months">
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
          <select className = "container_input" id="years">
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
          <button onClick={handleClick} id="buttonLmao">Lmao</button>
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
              <p id="safe_zone">Hãy chọn thời gian...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Ấn tượng đầu tiên</h2>
            </div>
            <div className='information_text_slide'>
              <h2>The Sphere of Influence and Manifestation</h2>
              <p>
Một khía cạnh quan trọng trong bản đồ năng lượng cá nhân của bạn là năng lượng xác định phạm vi ảnh hưởng của bạn đối với người khác và khả năng hiện thực hóa tiềm năng thực sự của mình. 
<br/>Năng lượng này chi phối ấn tượng bạn để lại cho mọi người và giúp bạn biến những khát vọng của mình thành hiện thực, kết nối thế giới vô hình với hữu hình.
Khi bạn mất đi động lực hoặc cảm hứng, tập trung vào nguồn năng lượng này có thể giúp bạn khơi lại niềm đam mê và tìm lại cảm giác trọn vẹn trong cuộc sống. Bằng cách hướng hành động tích cực vào khía cạnh này, bạn có thể khôi phục tinh thần và sống một cách trọn vẹn, chân thực hơn. Đây chính là lời nhắc nhở rằng bạn có khả năng tác động đến thế giới và biến những tầm nhìn bên trong thành thành tựu cụ thể.
              </p>
              <p id='impression'>Hãy chọn thời gian...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Điểm yếu - bài học kiếp này</h2>
            </div>
            <div className='information_text_slide'>
              <p>Updating...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Mối quan hệ</h2>
            </div>
            <div className='information_text_slide'>
              <p>Updating...</p>
            </div>
          </div>
          <div className='infomation_box'>
            <div className='information_matrix_text'>
              <h2>Tiền bạc</h2>
            </div>
            <div className='information_text_slide'>
              <p>Updating...</p>
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
              <p id='talent'>Hãy chọn thời gian...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default Matrixdes;
