const LifePath = [
    
    {
        content: `
            <h2>Số 1 – Nhà lãnh đạo tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Quyết đoán, sáng tạo, có tố chất lãnh đạo.</p>
            <p>Độc lập, mạnh mẽ, không ngại thử thách.</p>
            <p>Giỏi đổi mới, dẫn đầu xu hướng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Cứng đầu, bảo thủ, không thích nghe lời khuyên.</p>
            <p>Dễ bị cô lập vì quá độc lập.</p>
            <p>Khó hợp tác, đôi khi ích kỷ.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Người hòa giải</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhạy cảm, biết lắng nghe, giàu lòng trắc ẩn.</p>
            <p>Hòa đồng, dễ hợp tác, có khả năng kết nối tốt.</p>
            <p>Kiên nhẫn, chu đáo, giỏi giải quyết mâu thuẫn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ảnh hưởng bởi cảm xúc, thiếu quyết đoán.</p>
            <p>Quá nhạy cảm, dễ bị tổn thương.</p>
            <p>Đôi khi thiếu tự tin, phụ thuộc vào người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Người truyền cảm hứng</h2>
            <h4>Mặt tốt:</h4>
            <p>Sáng tạo, linh hoạt, giàu trí tưởng tượng.</p>
            <p>Hài hước, vui vẻ, lan tỏa năng lượng tích cực.</p>
            <p>Giỏi giao tiếp, có khả năng thuyết phục.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ phân tán, thiếu tập trung, hay thay đổi.</p>
            <p>Đôi khi quá phóng đại hoặc không thực tế.</p>
            <p>Thích hưởng thụ, dễ mất kiên nhẫn.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Người thực tế</h2>
            <h4>Mặt tốt:</h4>
            <p>Chăm chỉ, kỷ luật, đáng tin cậy.</p>
            <p>Thực tế, có tư duy logic, thích xây dựng nền tảng vững chắc.</p>
            <p>Kiên trì, không ngại khó khăn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Bảo thủ, khó tiếp thu cái mới.</p>
            <p>Quá tập trung vào công việc, đôi khi khô khan.</p>
            <p>Dễ bị căng thẳng nếu mọi thứ không theo kế hoạch.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Nhà thám hiểm</h2>
            <h4>Mặt tốt:</h4>
            <p>Yêu tự do, thích khám phá, ưa mạo hiểm.</p>
            <p>Giỏi thích nghi, linh hoạt, sáng tạo.</p>
            <p>Hấp dẫn, có sức hút với người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ chán nản, thiếu kiên nhẫn.</p>
            <p>Thiếu ổn định, khó cam kết lâu dài.</p>
            <p>Đôi khi liều lĩnh, bốc đồng.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Người chăm sóc</h2>
            <h4>Mặt tốt:</h4>
            <p>Chu đáo, quan tâm đến người khác.</p>
            <p>Có tinh thần trách nhiệm, luôn bảo vệ gia đình.</p>
            <p>Giỏi nghệ thuật, thẩm mỹ cao.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ lo lắng, hay ôm đồm quá nhiều việc.</p>
            <p>Thích kiểm soát, đôi khi quá bao bọc.</p>
            <p>Nhạy cảm, dễ bị tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Người tri thức</h2>
            <h4>Mặt tốt:</h4>
            <p>Thông minh, thích nghiên cứu, tìm hiểu.</p>
            <p>Sâu sắc, triết lý, có cái nhìn xa.</p>
            <p>Trực giác mạnh mẽ, nhạy bén.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Khó gần, đôi khi cô lập bản thân.</p>
            <p>Đôi khi hoài nghi quá mức.</p>
            <p>Dễ sa vào suy nghĩ tiêu cực.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Nhà kinh doanh</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có khả năng kiếm tiền.</p>
            <p>Quyết đoán, mạnh mẽ, thực tế.</p>
            <p>Giỏi quản lý, tổ chức.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Quá tập trung vào tiền bạc, vật chất.</p>
            <p>Đôi khi cứng nhắc, thiếu linh hoạt.</p>
            <p>Dễ trở nên độc đoán.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Nhà nhân đạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân ái, vị tha, yêu thương con người.</p>
            <p>Sáng tạo, có tư duy nghệ thuật.</p>
            <p>Hào phóng, rộng lượng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lừa dối vì quá tin người.</p>
            <p>Đôi khi thiếu thực tế, mơ mộng.</p>
            <p>Dễ bị tổn thương cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Nhà tâm linh</h2>
            <h4>Mặt tốt:</h4>
            <p>Trực giác mạnh, có khả năng tâm linh.</p>
            <p>Nhạy cảm, có khả năng truyền cảm hứng.</p>
            <p>Sâu sắc, hiểu biết rộng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị stress, căng thẳng.</p>
            <p>Quá mơ mộng, đôi khi xa rời thực tế.</p>
            <p>Dễ bị ảnh hưởng bởi cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Nhà kiến tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Thực tế, có khả năng biến giấc mơ thành hiện thực.</p>
            <p>Quyết đoán, có tầm nhìn xa.</p>
            <p>Giỏi tổ chức, lãnh đạo.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì trách nhiệm lớn.</p>
            <p>Đôi khi tham vọng quá mức.</p>
            <p>Khó chấp nhận thất bại.</p>
        `
    }
];


const DestinyNumber = [
    {
        content: `
            <h2>Số 1 – Nhà lãnh đạo tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Quyết đoán, có khả năng dẫn dắt.</p>
            <p>Độc lập, mạnh mẽ, sáng tạo.</p>
            <p>Dám nghĩ dám làm, luôn tìm kiếm cơ hội.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên độc đoán, bảo thủ.</p>
            <p>Ít lắng nghe, có xu hướng cô lập.</p>
            <p>Đôi khi ích kỷ, chỉ quan tâm đến bản thân.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Người hòa giải</h2>
            <h4>Mặt tốt:</h4>
            <p>Dịu dàng, biết lắng nghe, giàu lòng trắc ẩn.</p>
            <p>Giỏi hợp tác, dễ dàng thích nghi.</p>
            <p>Nhạy bén, tinh tế trong các mối quan hệ.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Thiếu quyết đoán, dễ bị tác động.</p>
            <p>Quá nhạy cảm, dễ tổn thương.</p>
            <p>Đôi khi thiếu tự tin vào bản thân.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Người truyền cảm hứng</h2>
            <h4>Mặt tốt:</h4>
            <p>Sáng tạo, hài hước, giàu năng lượng.</p>
            <p>Giỏi giao tiếp, thuyết phục người khác.</p>
            <p>Dễ thích nghi, nhanh nhạy với xu hướng mới.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ phân tâm, thiếu kiên nhẫn.</p>
            <p>Đôi khi không thực tế, hay mơ mộng.</p>
            <p>Dễ mất kiểm soát trong cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Người thực tế</h2>
            <h4>Mặt tốt:</h4>
            <p>Chăm chỉ, kiên trì, có tổ chức.</p>
            <p>Suy nghĩ logic, thích sự ổn định.</p>
            <p>Đáng tin cậy, trung thành.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên bảo thủ, cứng nhắc.</p>
            <p>Khó thích nghi với thay đổi.</p>
            <p>Đôi khi quá nghiêm khắc với bản thân.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Nhà thám hiểm</h2>
            <h4>Mặt tốt:</h4>
            <p>Yêu tự do, thích khám phá, linh hoạt.</p>
            <p>Giỏi giao tiếp, dễ thu hút người khác.</p>
            <p>Dễ thích nghi với môi trường mới.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Khó duy trì sự ổn định.</p>
            <p>Dễ mất kiên nhẫn, nhanh chán.</p>
            <p>Đôi khi hành động bốc đồng.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Người chăm sóc</h2>
            <h4>Mặt tốt:</h4>
            <p>Quan tâm, yêu thương người khác.</p>
            <p>Giỏi xây dựng gia đình, cộng đồng.</p>
            <p>Thẩm mỹ tốt, yêu thích nghệ thuật.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ lo lắng, hay ôm đồm.</p>
            <p>Quá kiểm soát, đôi khi bảo bọc thái quá.</p>
            <p>Dễ bị cảm xúc chi phối.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Người tri thức</h2>
            <h4>Mặt tốt:</h4>
            <p>Thông minh, thích nghiên cứu, học hỏi.</p>
            <p>Trực giác tốt, có tư duy sâu sắc.</p>
            <p>Có khả năng phân tích và suy luận logic.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Khó gần, đôi khi cô lập bản thân.</p>
            <p>Dễ bị ám ảnh bởi sự hoàn hảo.</p>
            <p>Đôi khi bi quan, tiêu cực.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Nhà kinh doanh</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có khả năng lãnh đạo.</p>
            <p>Giỏi kiếm tiền, tư duy kinh doanh tốt.</p>
            <p>Quyết đoán, mạnh mẽ.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Quá chú trọng vật chất, quyền lực.</p>
            <p>Đôi khi cứng nhắc, không linh hoạt.</p>
            <p>Dễ trở nên độc đoán.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Nhà nhân đạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân ái, yêu thương con người.</p>
            <p>Thích giúp đỡ người khác.</p>
            <p>Sáng tạo, có tư duy nghệ thuật.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lừa vì quá tin người.</p>
            <p>Đôi khi quá mơ mộng, thiếu thực tế.</p>
            <p>Dễ bị tổn thương tình cảm.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Nhà tâm linh</h2>
            <h4>Mặt tốt:</h4>
            <p>Trực giác mạnh, có khả năng cảm nhận.</p>
            <p>Nhạy cảm, truyền cảm hứng.</p>
            <p>Thông minh, có tầm nhìn sâu sắc.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị stress, áp lực tinh thần.</p>
            <p>Đôi khi xa rời thực tế.</p>
            <p>Dễ bị ảnh hưởng bởi cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Nhà kiến tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Thực tế, có khả năng biến giấc mơ thành hiện thực.</p>
            <p>Quyết đoán, có tầm nhìn xa.</p>
            <p>Giỏi tổ chức, lãnh đạo.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì trách nhiệm lớn.</p>
            <p>Đôi khi tham vọng quá mức.</p>
            <p>Khó chấp nhận thất bại.</p>
        `
    }
];

const SoulNumber = [
    {
        content: `
            <h2>Số 1 – Linh hồn của người tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, độc lập, luôn muốn dẫn đầu.</p>
            <p>Thích tự do, không muốn bị ràng buộc.</p>
            <p>Đầy tham vọng, luôn muốn chứng tỏ bản thân.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên ích kỷ, chỉ nghĩ cho bản thân.</p>
            <p>Không thích bị chỉ trích, đôi khi bướng bỉnh.</p>
            <p>Dễ cảm thấy cô đơn, khó chia sẻ với người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Linh hồn của người hòa hợp</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhạy cảm, sâu sắc, giàu cảm xúc.</p>
            <p>Luôn tìm kiếm sự cân bằng, hài hòa.</p>
            <p>Biết quan tâm, lắng nghe và thấu hiểu người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ảnh hưởng bởi cảm xúc, hay do dự.</p>
            <p>Thiếu quyết đoán, sợ làm người khác buồn.</p>
            <p>Dễ tổn thương, dễ mất lòng tin vào bản thân.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Linh hồn của người sáng tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Lạc quan, yêu đời, có tài ăn nói.</p>
            <p>Giàu trí tưởng tượng, sáng tạo và linh hoạt.</p>
            <p>Dễ dàng truyền cảm hứng cho người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị phân tâm, khó kiên trì với mục tiêu dài hạn.</p>
            <p>Đôi khi nói quá nhiều mà không suy nghĩ.</p>
            <p>Có thể sống thiếu thực tế, hay bay bổng.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Linh hồn của người thực tế</h2>
            <h4>Mặt tốt:</h4>
            <p>Thực tế, kỷ luật, thích sự ổn định.</p>
            <p>Kiên trì, có trách nhiệm và luôn đáng tin cậy.</p>
            <p>Luôn tìm kiếm sự chắc chắn, rõ ràng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá cứng nhắc, thiếu linh hoạt.</p>
            <p>Khó chấp nhận sự thay đổi, dễ căng thẳng.</p>
            <p>Đôi khi bi quan, không thích mạo hiểm.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Linh hồn của người tự do</h2>
            <h4>Mặt tốt:</h4>
            <p>Thích khám phá, luôn tìm kiếm điều mới mẻ.</p>
            <p>Giỏi thích nghi, linh hoạt trong mọi tình huống.</p>
            <p>Hấp dẫn, thu hút người khác bởi sự năng động.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ mất kiên nhẫn, khó gắn bó với một điều gì đó.</p>
            <p>Dễ bị cuốn theo cảm xúc, đôi khi bốc đồng.</p>
            <p>Có xu hướng dễ chán, thích thay đổi liên tục.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Linh hồn của người bảo vệ</h2>
            <h4>Mặt tốt:</h4>
            <p>Giàu tình cảm, quan tâm đến gia đình và người khác.</p>
            <p>Có trách nhiệm, luôn muốn chăm sóc người xung quanh.</p>
            <p>Có thiên hướng nghệ thuật, yêu cái đẹp.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị căng thẳng, hay lo lắng quá mức.</p>
            <p>Đôi khi quá kiểm soát, can thiệp quá sâu vào chuyện của người khác.</p>
            <p>Dễ cảm thấy bị tổn thương khi không được trân trọng.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Linh hồn của người tìm kiếm tri thức</h2>
            <h4>Mặt tốt:</h4>
            <p>Yêu thích học hỏi, tìm kiếm sự hiểu biết.</p>
            <p>Trực giác mạnh mẽ, có khả năng phân tích sâu sắc.</p>
            <p>Thích khám phá những điều bí ẩn của cuộc sống.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi xa cách, khó gần gũi với người khác.</p>
            <p>Quá suy nghĩ, dễ rơi vào trạng thái tiêu cực.</p>
            <p>Có thể trở nên cô lập, thích sống một mình.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Linh hồn của người tham vọng</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, có ý chí, không ngại thử thách.</p>
            <p>Thích thành công, có khả năng kiếm tiền tốt.</p>
            <p>Giỏi quản lý, lãnh đạo, có tầm nhìn xa.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá tham vọng, đặt nặng vật chất.</p>
            <p>Dễ trở nên độc đoán, kiểm soát quá mức.</p>
            <p>Khó chấp nhận thất bại, dễ căng thẳng.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Linh hồn của người nhân đạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân ái, bao dung, sẵn sàng giúp đỡ người khác.</p>
            <p>Yêu nghệ thuật, có khả năng truyền cảm hứng.</p>
            <p>Sống vì lý tưởng cao đẹp, luôn nghĩ đến cộng đồng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tin người.</p>
            <p>Đôi khi quá lý tưởng hóa, thiếu thực tế.</p>
            <p>Dễ bị ảnh hưởng bởi cảm xúc, dễ tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Linh hồn của người truyền cảm hứng</h2>
            <h4>Mặt tốt:</h4>
            <p>Có trực giác mạnh mẽ, nhạy bén với tâm linh.</p>
            <p>Luôn mong muốn giúp đỡ, truyền động lực cho người khác.</p>
            <p>Đầy sáng tạo, dễ kết nối với năng lượng cao hơn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị căng thẳng, áp lực với sứ mệnh của mình.</p>
            <p>Đôi khi mơ mộng, thiếu thực tế.</p>
            <p>Dễ cảm thấy mất phương hướng nếu không tìm được ý nghĩa sống.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Linh hồn của người kiến tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có khả năng xây dựng những điều vĩ đại.</p>
            <p>Sở hữu tư duy thực tế nhưng vẫn đầy sáng tạo.</p>
            <p>Muốn cống hiến, tạo ra giá trị lâu dài cho xã hội.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi đặt kỳ vọng quá cao, dễ thất vọng.</p>
            <p>Áp lực vì cảm thấy trách nhiệm lớn.</p>
            <p>Dễ bị mất cân bằng giữa công việc và cuộc sống.</p>
        `
    }
];

const PersonalityNumber = [
    {
        content: `
            <h2>Số 1 – Nhân cách của người tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Quyết đoán, mạnh mẽ, có tố chất lãnh đạo.</p>
            <p>Độc lập, dám nghĩ dám làm.</p>
            <p>Luôn có phong thái tự tin, thu hút.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên kiêu ngạo, thích kiểm soát người khác.</p>
            <p>Không thích bị chỉ trích, đôi khi cứng đầu.</p>
            <p>Dễ cô lập bản thân vì quá độc lập.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Nhân cách của người hòa nhã</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhẹ nhàng, tinh tế, biết lắng nghe.</p>
            <p>Giỏi làm việc nhóm, tạo dựng mối quan hệ tốt.</p>
            <p>Có khả năng ngoại giao, tạo sự gắn kết.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ảnh hưởng bởi người khác, thiếu quyết đoán.</p>
            <p>Sợ xung đột, có thể trở nên nhu nhược.</p>
            <p>Quá nhạy cảm, dễ bị tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Nhân cách của người hoạt bát</h2>
            <h4>Mặt tốt:</h4>
            <p>Hoạt bát, sáng tạo, tràn đầy năng lượng.</p>
            <p>Dễ gây thiện cảm, có khiếu ăn nói.</p>
            <p>Thích giao tiếp, luôn mang lại niềm vui.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi nói nhiều, thiếu sự tập trung.</p>
            <p>Dễ bị phân tâm, hay bỏ cuộc giữa chừng.</p>
            <p>Không thích sự ràng buộc, khó cam kết lâu dài.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Nhân cách của người kỷ luật</h2>
            <h4>Mặt tốt:</h4>
            <p>Ngăn nắp, có trách nhiệm, đáng tin cậy.</p>
            <p>Sống nguyên tắc, thực tế và chăm chỉ.</p>
            <p>Luôn giữ vững lập trường, kiên định.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi cứng nhắc, khó thích nghi với thay đổi.</p>
            <p>Không giỏi thể hiện cảm xúc, đôi khi khô khan.</p>
            <p>Dễ bị căng thẳng vì áp lực công việc.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Nhân cách của người phiêu lưu</h2>
            <h4>Mặt tốt:</h4>
            <p>Tự do, phóng khoáng, thích khám phá.</p>
            <p>Thích nghi nhanh, linh hoạt trong mọi tình huống.</p>
            <p>Dễ thu hút bởi sự lôi cuốn và nhiệt huyết.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ chán, khó duy trì sự kiên nhẫn.</p>
            <p>Có xu hướng bốc đồng, dễ thay đổi.</p>
            <p>Không thích sự kiểm soát, dễ phản kháng.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Nhân cách của người chăm sóc</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân hậu, luôn quan tâm đến người khác.</p>
            <p>Có trách nhiệm, đáng tin cậy.</p>
            <p>Luôn mang lại cảm giác ấm áp, an toàn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tốt bụng.</p>
            <p>Đôi khi quá kiểm soát, hay lo lắng quá mức.</p>
            <p>Dễ tổn thương khi không nhận lại sự quan tâm.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Nhân cách của người sâu sắc</h2>
            <h4>Mặt tốt:</h4>
            <p>Thông minh, sâu sắc, có chiều sâu tư duy.</p>
            <p>Trầm lắng, quan sát tốt, thích tìm hiểu.</p>
            <p>Có trực giác mạnh mẽ, nhạy bén.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ xa cách, khó mở lòng với người khác.</p>
            <p>Thích sống nội tâm, dễ cô lập bản thân.</p>
            <p>Đôi khi bi quan, hay nghi ngờ.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Nhân cách của người tham vọng</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, quyết đoán, có tố chất lãnh đạo.</p>
            <p>Thích quyền lực, có khả năng quản lý giỏi.</p>
            <p>Thực tế, biết cách đạt được thành công.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá thực dụng, đặt nặng vật chất.</p>
            <p>Dễ trở nên độc đoán, thích kiểm soát.</p>
            <p>Khó thể hiện cảm xúc, dễ căng thẳng.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Nhân cách của người nhân ái</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân hậu, bao dung, yêu thương mọi người.</p>
            <p>Sống có lý tưởng, luôn hướng đến điều tốt đẹp.</p>
            <p>Thích giúp đỡ, truyền cảm hứng cho người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tin người.</p>
            <p>Đôi khi quá lý tưởng hóa, thiếu thực tế.</p>
            <p>Dễ bị ảnh hưởng bởi cảm xúc, dễ tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Nhân cách của người tiên tri</h2>
            <h4>Mặt tốt:</h4>
            <p>Trực giác mạnh, có khả năng cảm nhận năng lượng.</p>
            <p>Luôn truyền cảm hứng, khiến người khác tin tưởng.</p>
            <p>Có khả năng giao tiếp xuất sắc, thuyết phục mạnh mẽ.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị căng thẳng, áp lực với kỳ vọng của chính mình.</p>
            <p>Đôi khi nhạy cảm quá mức, dễ bị tổn thương.</p>
            <p>Dễ mất phương hướng nếu không có mục tiêu rõ ràng.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Nhân cách của người xây dựng vĩ đại</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, có khả năng lãnh đạo và tổ chức.</p>
            <p>Thực tế, có tư duy chiến lược để đạt mục tiêu lớn.</p>
            <p>Sẵn sàng cống hiến cho xã hội, muốn tạo ra giá trị.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá nghiêm túc, khó chấp nhận sai lầm.</p>
            <p>Dễ bị ám ảnh với thành công, quên đi bản thân.</p>
            <p>Áp lực vì gánh vác quá nhiều trọng trách.</p>
        `
    }
];

const MaturityNumber = [
    {
        content: `
            <h2>Số 1 – Trưởng thành với sự độc lập</h2>
            <h4>Mặt tốt:</h4>
            <p>Phát triển sự tự tin và khả năng lãnh đạo.</p>
            <p>Càng trưởng thành, càng trở nên quyết đoán, mạnh mẽ.</p>
            <p>Luôn tiên phong, dám nghĩ dám làm.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên cứng đầu, ít lắng nghe ý kiến người khác.</p>
            <p>Áp lực với kỳ vọng bản thân, đôi khi cô lập chính mình.</p>
            <p>Khó mở lòng, dễ mất kiên nhẫn với người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Trưởng thành với sự hòa hợp</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng lớn càng trở nên thấu hiểu, nhẹ nhàng.</p>
            <p>Giỏi kết nối, trở thành người hòa giải tuyệt vời.</p>
            <p>Trưởng thành giúp họ kiểm soát cảm xúc tốt hơn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ phụ thuộc vào người khác, thiếu quyết đoán.</p>
            <p>Sợ đối đầu, đôi khi bị lợi dụng vì quá tốt bụng.</p>
            <p>Nhạy cảm, dễ bị ảnh hưởng bởi môi trường xung quanh.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Trưởng thành với sự sáng tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Ngày càng phát triển khả năng sáng tạo, truyền cảm hứng.</p>
            <p>Học cách kiểm soát cảm xúc, hướng đến niềm vui thực sự.</p>
            <p>Giữ được sự tươi trẻ, yêu đời dù đã trưởng thành.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị cuốn vào những thú vui nhất thời, thiếu trách nhiệm.</p>
            <p>Thích tự do, đôi khi thiếu kiên nhẫn với cam kết dài hạn.</p>
            <p>Dễ mất động lực nếu không tìm thấy sự hứng thú.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Trưởng thành với sự kỷ luật</h2>
            <h4>Mặt tốt:</h4>
            <p>Trở thành người đáng tin cậy, có trách nhiệm cao.</p>
            <p>Học cách xây dựng sự ổn định, bền vững trong cuộc sống.</p>
            <p>Kỷ luật giúp họ đạt được thành công lâu dài.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ trở nên cứng nhắc, khó chấp nhận sự thay đổi.</p>
            <p>Đặt áp lực quá lớn lên bản thân và người khác.</p>
            <p>Dễ bị căng thẳng vì làm việc quá nhiều.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Trưởng thành với sự tự do</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng trưởng thành, càng học cách tận hưởng cuộc sống.</p>
            <p>Phát triển khả năng thích nghi, mở rộng tầm nhìn.</p>
            <p>Luôn giữ tinh thần trẻ trung, dám thử thách bản thân.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ mất kiên nhẫn, khó gắn bó với một điều gì lâu dài.</p>
            <p>Đôi khi quá phóng khoáng, dễ bị cám dỗ.</p>
            <p>Khó kiểm soát cảm xúc, dễ bị xao nhãng.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Trưởng thành với sự yêu thương</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng lớn càng trở nên quan tâm, bao dung với mọi người.</p>
            <p>Biết cách xây dựng một gia đình hoặc cộng đồng vững chắc.</p>
            <p>Phát triển lòng nhân ái và tinh thần trách nhiệm.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị tổn thương nếu quá kỳ vọng vào người khác.</p>
            <p>Đôi khi kiểm soát quá mức, làm người khác cảm thấy áp lực.</p>
            <p>Dễ quên bản thân khi quá chăm lo cho người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Trưởng thành với sự thông thái</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng trưởng thành, càng sâu sắc, thấu hiểu.</p>
            <p>Học cách lắng nghe, quan sát, tìm ra chân lý cuộc sống.</p>
            <p>Phát triển tư duy phân tích, trực giác mạnh mẽ.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ sống khép kín, xa cách với xã hội.</p>
            <p>Đôi khi trở nên hoài nghi, thiếu niềm tin vào người khác.</p>
            <p>Khó chia sẻ cảm xúc, dễ cảm thấy cô đơn.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Trưởng thành với sự thành công</h2>
            <h4>Mặt tốt:</h4>
            <p>Ngày càng có tư duy chiến lược, phát triển sự nghiệp.</p>
            <p>Biết cách sử dụng quyền lực, tài chính hiệu quả.</p>
            <p>Học cách cân bằng giữa vật chất và tinh thần.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ám ảnh bởi quyền lực, vật chất.</p>
            <p>Đôi khi quá tham vọng, không quan tâm đến cảm xúc người khác.</p>
            <p>Dễ gặp căng thẳng vì áp lực thành công.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Trưởng thành với sự nhân ái</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng trưởng thành, càng bao dung, sống vì cộng đồng.</p>
            <p>Học cách hy sinh cái tôi, giúp đỡ người khác.</p>
            <p>Luôn hướng đến giá trị nhân văn, truyền cảm hứng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tin vào lòng tốt con người.</p>
            <p>Đôi khi lý tưởng hóa mọi thứ, thiếu thực tế.</p>
            <p>Dễ cảm thấy mất phương hướng nếu không có mục tiêu cao cả.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Trưởng thành với sự giác ngộ</h2>
            <h4>Mặt tốt:</h4>
            <p>Càng trưởng thành, càng phát triển sự hiểu biết tâm linh.</p>
            <p>Luôn mong muốn giúp đỡ và truyền cảm hứng cho người khác.</p>
            <p>Sống có ý nghĩa, luôn tìm kiếm chân lý.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực với sứ mệnh của mình.</p>
            <p>Đôi khi quá mơ mộng, xa rời thực tế.</p>
            <p>Dễ bị ảnh hưởng bởi năng lượng tiêu cực xung quanh.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Trưởng thành với sự vĩ đại</h2>
            <h4>Mặt tốt:</h4>
            <p>Học cách biến ước mơ lớn thành hiện thực.</p>
            <p>Phát triển tư duy bền vững, xây dựng những điều có ý nghĩa.</p>
            <p>Càng trưởng thành, càng trở nên kiên trì, mạnh mẽ.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì trách nhiệm quá lớn.</p>
            <p>Đôi khi quá nghiêm khắc với bản thân và người khác.</p>
            <p>Dễ bị stress nếu không đạt được kỳ vọng.</p>
        `
    }
];

const BirthDayNumber = [
    {
        content: `
            <h2>Số 1 – Ngày sinh của người tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, độc lập, có tố chất lãnh đạo.</p>
            <p>Dám nghĩ dám làm, luôn muốn dẫn đầu.</p>
            <p>Đầy năng lượng, tự tin và sáng tạo.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi cứng đầu, bảo thủ.</p>
            <p>Dễ cảm thấy cô đơn vì quá độc lập.</p>
            <p>Khó tiếp thu ý kiến từ người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Ngày sinh của người hòa giải</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhạy cảm, dễ đồng cảm với người khác.</p>
            <p>Giỏi làm việc nhóm, biết cách hòa hợp.</p>
            <p>Kiên nhẫn, chân thành, đáng tin cậy.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ảnh hưởng bởi cảm xúc của người khác.</p>
            <p>Thiếu quyết đoán, đôi khi bị động.</p>
            <p>Dễ tổn thương, hay suy nghĩ quá nhiều.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Ngày sinh của người sáng tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Sáng tạo, hoạt bát, yêu đời.</p>
            <p>Có tài năng nghệ thuật, biết cách thể hiện bản thân.</p>
            <p>Dễ thích nghi, có tinh thần lạc quan.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ mất tập trung, hay bỏ dở giữa chừng.</p>
            <p>Đôi khi quá cảm xúc, dễ bị tổn thương.</p>
            <p>Có thể thiếu thực tế, hay mơ mộng.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Ngày sinh của người thực tế</h2>
            <h4>Mặt tốt:</h4>
            <p>Chăm chỉ, kiên nhẫn, đáng tin cậy.</p>
            <p>Thực tế, có tư duy logic và kỷ luật cao.</p>
            <p>Có khả năng tổ chức, xây dựng hệ thống.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá nghiêm túc, khô khan.</p>
            <p>Dễ bị stress vì làm việc quá nhiều.</p>
            <p>Khó thay đổi, không thích sự bất ngờ.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Ngày sinh của người thích tự do</h2>
            <h4>Mặt tốt:</h4>
            <p>Yêu thích tự do, thích khám phá điều mới.</p>
            <p>Sáng tạo, linh hoạt, thích nghi nhanh.</p>
            <p>Luôn tràn đầy năng lượng, đam mê phiêu lưu.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ chán nản, thiếu kiên trì.</p>
            <p>Đôi khi bốc đồng, không suy nghĩ thấu đáo.</p>
            <p>Không thích bị ràng buộc, khó duy trì kỷ luật.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Ngày sinh của người yêu thương</h2>
            <h4>Mặt tốt:</h4>
            <p>Chu đáo, quan tâm đến người khác.</p>
            <p>Trách nhiệm, có tinh thần hy sinh cao.</p>
            <p>Yêu cái đẹp, có năng khiếu nghệ thuật.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ lo lắng, hay ôm đồm trách nhiệm.</p>
            <p>Đôi khi can thiệp quá mức vào chuyện của người khác.</p>
            <p>Nhạy cảm, dễ bị tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Ngày sinh của người tri thức</h2>
            <h4>Mặt tốt:</h4>
            <p>Thích nghiên cứu, khám phá tri thức.</p>
            <p>Có trực giác mạnh, sâu sắc.</p>
            <p>Sống nội tâm, thích tìm hiểu ý nghĩa cuộc sống.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ sống khép kín, xa cách với người khác.</p>
            <p>Đôi khi quá lý trí, khó bày tỏ cảm xúc.</p>
            <p>Hay hoài nghi, khó tin tưởng vào người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Ngày sinh của người quyền lực</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có tố chất lãnh đạo.</p>
            <p>Kiên cường, không ngại thử thách.</p>
            <p>Có khả năng kiếm tiền và quản lý tài chính tốt.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá thực dụng, đặt nặng vật chất.</p>
            <p>Dễ trở nên độc đoán, cứng rắn.</p>
            <p>Thích kiểm soát, đôi khi áp đặt người khác.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Ngày sinh của người nhân đạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân hậu, luôn giúp đỡ người khác.</p>
            <p>Có tầm nhìn rộng, muốn đóng góp cho xã hội.</p>
            <p>Thông minh, có khả năng cảm nhận sâu sắc.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tốt bụng.</p>
            <p>Đôi khi mơ mộng, thiếu thực tế.</p>
            <p>Dễ bị cảm xúc chi phối, khó kiểm soát.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Ngày sinh của nhà tiên tri</h2>
            <h4>Mặt tốt:</h4>
            <p>Trực giác mạnh mẽ, có khả năng nhìn xa trông rộng.</p>
            <p>Sáng tạo, nhạy bén với nghệ thuật và tâm linh.</p>
            <p>Thích truyền cảm hứng, động viên người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực, lo lắng về sứ mệnh của bản thân.</p>
            <p>Nhạy cảm quá mức, đôi khi dễ tổn thương.</p>
            <p>Khó cân bằng giữa lý trí và cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Ngày sinh của nhà kiến tạo vĩ đại</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có khả năng xây dựng những điều lớn lao.</p>
            <p>Thực tế, giỏi tổ chức, có tầm nhìn chiến lược.</p>
            <p>Mạnh mẽ, bền bỉ, luôn theo đuổi mục tiêu dài hạn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì gánh vác trách nhiệm quá lớn.</p>
            <p>Đôi khi quá nghiêm khắc với bản thân và người khác.</p>
            <p>Dễ bị căng thẳng nếu không kiểm soát được mọi thứ.</p>
        `
    }
];

const AttitudeNumber = [
    {
        content: `
            <h2>Số 1 – Thái độ của người tiên phong</h2>
            <h4>Mặt tốt:</h4>
            <p>Tự tin, mạnh mẽ, có tố chất lãnh đạo.</p>
            <p>Quyết đoán, dám nghĩ dám làm.</p>
            <p>Luôn muốn thể hiện bản thân và dẫn đầu.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi cứng đầu, bảo thủ, không chịu nghe ý kiến.</p>
            <p>Dễ nóng nảy, thiếu kiên nhẫn.</p>
            <p>Có xu hướng thích kiểm soát, ít nhượng bộ.</p>
        `
    },
    {
        content: `
            <h2>Số 2 – Thái độ của người hòa giải</h2>
            <h4>Mặt tốt:</h4>
            <p>Hòa nhã, dễ gần, giỏi giao tiếp.</p>
            <p>Biết lắng nghe, nhạy bén trong các mối quan hệ.</p>
            <p>Luôn tìm cách tạo sự hòa hợp và cân bằng.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị ảnh hưởng bởi cảm xúc của người khác.</p>
            <p>Thiếu quyết đoán, hay do dự.</p>
            <p>Đôi khi quá nhạy cảm, dễ bị tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 3 – Thái độ của người vui vẻ</h2>
            <h4>Mặt tốt:</h4>
            <p>Lạc quan, hài hước, yêu đời.</p>
            <p>Sáng tạo, linh hoạt, có khiếu nghệ thuật.</p>
            <p>Dễ thích nghi, thích truyền năng lượng tích cực.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ mất tập trung, khó kiên trì.</p>
            <p>Đôi khi bốc đồng, thiếu thực tế.</p>
            <p>Dễ bị cảm xúc chi phối, thiếu kiểm soát.</p>
        `
    },
    {
        content: `
            <h2>Số 4 – Thái độ của người thực tế</h2>
            <h4>Mặt tốt:</h4>
            <p>Có trách nhiệm, đáng tin cậy.</p>
            <p>Thực tế, kiên trì, chăm chỉ.</p>
            <p>Luôn đề cao kỷ luật, nguyên tắc.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá cứng nhắc, bảo thủ.</p>
            <p>Ít linh hoạt, không thích thay đổi.</p>
            <p>Dễ căng thẳng vì áp lực công việc.</p>
        `
    },
    {
        content: `
            <h2>Số 5 – Thái độ của người tự do</h2>
            <h4>Mặt tốt:</h4>
            <p>Thích khám phá, thích sự mới mẻ.</p>
            <p>Linh hoạt, năng động, luôn tràn đầy năng lượng.</p>
            <p>Có khả năng thích nghi nhanh.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ chán nản, thiếu kiên trì.</p>
            <p>Đôi khi thiếu trách nhiệm, không thích ràng buộc.</p>
            <p>Dễ bị cuốn theo cảm xúc, bốc đồng.</p>
        `
    },
    {
        content: `
            <h2>Số 6 – Thái độ của người yêu thương</h2>
            <h4>Mặt tốt:</h4>
            <p>Chân thành, quan tâm đến người khác.</p>
            <p>Trách nhiệm, giàu tình cảm.</p>
            <p>Thích chăm sóc, bảo vệ người thân.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ lo lắng, hay ôm đồm trách nhiệm.</p>
            <p>Đôi khi can thiệp quá sâu vào chuyện của người khác.</p>
            <p>Nhạy cảm, dễ bị tổn thương.</p>
        `
    },
    {
        content: `
            <h2>Số 7 – Thái độ của người tri thức</h2>
            <h4>Mặt tốt:</h4>
            <p>Sâu sắc, thích nghiên cứu, học hỏi.</p>
            <p>Thích suy ngẫm, có trực giác mạnh.</p>
            <p>Luôn tìm kiếm ý nghĩa cuộc sống.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Ít bộc lộ cảm xúc, dễ bị hiểu lầm là lạnh lùng.</p>
            <p>Đôi khi hoài nghi quá mức, khó tin tưởng người khác.</p>
            <p>Dễ thu mình, ít giao tiếp xã hội.</p>
        `
    },
    {
        content: `
            <h2>Số 8 – Thái độ của người quyền lực</h2>
            <h4>Mặt tốt:</h4>
            <p>Mạnh mẽ, quyết đoán, tham vọng.</p>
            <p>Có khả năng kiểm soát tình huống tốt.</p>
            <p>Luôn hướng đến thành công và mục tiêu lớn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Đôi khi quá thực dụng, chỉ quan tâm đến kết quả.</p>
            <p>Dễ trở nên cứng rắn, thiếu sự linh hoạt.</p>
            <p>Thích kiểm soát, đôi khi quá áp đặt.</p>
        `
    },
    {
        content: `
            <h2>Số 9 – Thái độ của người nhân đạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Nhân hậu, luôn muốn giúp đỡ người khác.</p>
            <p>Thích đóng góp cho cộng đồng, sống vị tha.</p>
            <p>Có tầm nhìn rộng, suy nghĩ sâu sắc.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị lợi dụng vì quá tốt bụng.</p>
            <p>Đôi khi quá mơ mộng, thiếu thực tế.</p>
            <p>Dễ bị cảm xúc chi phối, hay mất kiểm soát.</p>
        `
    },
    {
        content: `
            <h2>Số 11 – Thái độ của nhà tiên tri</h2>
            <h4>Mặt tốt:</h4>
            <p>Trực giác mạnh mẽ, có tầm nhìn xa.</p>
            <p>Sáng tạo, nhạy bén với tâm linh và nghệ thuật.</p>
            <p>Truyền cảm hứng, động viên người khác.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì suy nghĩ quá nhiều.</p>
            <p>Nhạy cảm quá mức, dễ tổn thương.</p>
            <p>Khó cân bằng giữa lý trí và cảm xúc.</p>
        `
    },
    {
        content: `
            <h2>Số 22 – Thái độ của nhà kiến tạo</h2>
            <h4>Mặt tốt:</h4>
            <p>Tham vọng, có khả năng thực hiện những điều lớn lao.</p>
            <p>Thực tế, có tầm nhìn chiến lược.</p>
            <p>Kiên trì, bền bỉ, luôn theo đuổi mục tiêu dài hạn.</p>
            </br>
            <h4>Mặt xấu:</h4>
            <p>Dễ bị áp lực vì gánh vác trách nhiệm lớn.</p>
            <p>Đôi khi quá nghiêm khắc với bản thân và người khác.</p>
            <p>Dễ căng thẳng nếu không kiểm soát được mọi thứ.</p>
        `
    }
];



export {LifePath, DestinyNumber, SoulNumber, PersonalityNumber, MaturityNumber, BirthDayNumber, AttitudeNumber }