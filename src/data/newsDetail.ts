import { NewsDetail } from '../types/news.type';
import { Category } from '../constraints/category';

const newsDetail: NewsDetail[] = [
  {
    id: 'A1',
    title: 'Trà Vinh vận động gây quỹ xây dựng Khu Lưu niệm NSND Viễn Châu',
    author: 'Ca Linh',
    thumbnail:
      'https://nld.mediacdn.vn/zoom/600_315/291774122806476800/2024/6/4/screenshot-2024-06-04-at-144633-17174873376092059502960-9-0-600-946-crop-1717487348677962697330.png',
    publishDate: 'Tue, 28 May 2024 12:42:00 +07',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 4-6, ông Lê Thanh Bình, Phó Chủ tịch UBND tỉnh Trà Vinh, cho biết vào ngày 8-6, tại Nhà hát Cải lương Trần Hữu Trang (TP HCM), tỉnh mở cuộc vận động trong giới văn nghệ sĩ để gây quỹ xây dựng Khu Lưu niệm cố soạn giả - NSND Viễn Châu. Sau đó, dự kiến giữa tháng 6 và đầu tháng 7, Trà Vinh tiếp tục vận động gây quỹ tại tỉnh Bình Dương, TP Cần Thơ, Hà Nội và tại địa phương.',
        image: {
          link: 'https://nld.mediacdn.vn/thumb_w/640/291774122806476800/2024/6/4/screenshot-2024-06-04-at-144753-1717487287160540718061.png',
          capture:
            'Thư ngỏ vận động kinh phí xây Khu Lưu niệm cố soạn giả - NSND Viễn Châu',
        },
      },
      {
        text: 'Trước đó, Ban Vận động gây quỹ xây dựng Khu Lưu niệm cố soạn giả- NSND Viễn Châu đã có thư ngỏ gửi các cơ quan, đơn vị, doanh nghiệp, doanh nhân, nghệ sĩ và các nhà hảo tâm.',
      },
      {
        text: 'Thư ngỏ nêu rằng nhằm góp phần tri ân những đóng góp của cố soạn giả - NSND Viễn Châu về nghệ thuật đờn ca tài tử Nam Bộ, Tỉnh ủy, UBND tỉnh Trà Vinh đã thống nhất chủ trương xây dựng Khu Lưu niệm cố soạn giả - NSND Viễn Châu tại ấp Cây Da, xã Đôn Xuân, huyện Duyên Hải',
      },
      {
        text: 'Khu lưu niệm có diện tích khoảng 11.300 m2, được thiết kế với 16 hạng mục, gồm: cổng chính; biểu tượng đàn tranh; tượng cố soạn giả - NSND Viễn Châu; khu nhà trưng bày về thân thế, sự nghiệp; khu nhà trưng bày "đờn ca tài tử cải lương"',
      },
      {
        text: 'Kinh phí xây dựng khu lưu niệm khoảng 70 tỉ đồng. Chủ trương vận động xã hội hóa xây dựng công trình này được Thường trực Tỉnh ủy Trà Vinh thống nhất.\n',
      },
    ],
  },
  {
    id: 'A2',
    title:
      'Bí thư Quận ủy quận 1 Dương Anh Đức: Xây dựng môi trường sống tử tế, văn minh',
    author: 'PHAN ANH',
    publishDate: '05-06-24 13:37',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, Quận ủy quận 1 (TP HCM) tổ chức hội nghị tổng kết 10 năm thực hiện Nghị quyết 33/2014 của Ban Chấp hành Trung ương về xây dựng và phát triển văn hóa, con người Việt Nam đáp ứng yêu cầu phát triển bền vững đất nước.',
      },
      {
        text: 'Quận ủy quận 1 cho biết trong 10 năm thực hiện Nghị quyết 33, Ban Thường vụ Quận ủy đã lãnh đạo, chỉ đạo cấp ủy các cấp và hệ thống chính trị quận chủ động, sáng tạo triển khai có hiệu quả Nghị quyết.',
      },
      {
        text: 'Trong đó, đặt quan tâm và chú trọng đến xây dựng đội ngũ cán bộ, đảng viên, công chức, viên chức có phẩm chất đạo đức, tận tụy, hết lòng phụng sự Tổ quốc và phục vụ nhân dân; chấp hành đúng quy chế, nội quy của cơ quan, đơn vị; tác phong, lề lối làm việc được cải thiện đáng kể, bước đầu tạo được niềm tin, xây dựng nhân cách và hình ảnh đẹp trong mắt người dân và ngày càng xứng đáng với vai trò "nêu gương" trong quần chúng nhân dân.',
      },
      {
        text: 'Từ năm 2014 đến năm 2023, toàn quận 1 có 9.959 cán bộ, công chức được đánh giá hoàn thành xuất sắc nhiệm vụ, 22.453 cán bộ hoàn thành tốt nhiệm vụ, 576 cán bộ hoàn thành nhiệm vụ.',
      },
      {
        text: 'Mỗi năm chất lượng làm việc và phục vụ người dân ngày được nâng cao. Việc cải cách hành chính gắn với nâng cao năng lực làm việc của đội ngũ cán bộ, công chức phục vụ nhân dân nhằm xây dựng hình ảnh đội ngũ cán bộ, công chức quận 1 chuyên nghiệp, thân thiện được đẩy mạnh.',
      },
      {
        text: 'Bí thư Quận ủy quận 1 Dương Anh Đức đánh giá địa phương đã có rất nhiều nỗ lực để thực hiện tốt các nội dung quan trọng của Nghị quyết 33.',
      },
      {
        text: 'Ông Dương Anh Đức cho biết lãnh đạo TP HCM rất quan tâm về phát triển văn hóa, con người, nhất là ở cấp cơ sở. Trong khi đó, quận 1 có vị trị và vai trò hết sức quan trọng, là một địa bàn đặc biệt, có nhiều thiết chế văn hóa quan trọng. Do đó, nhiệm vụ của quận 1 là làm sao khai thác, lan tỏa các thiết chế văn hóa này một cách tốt nhất để nhân rộng, phát triển văn hóa, con người nơi đây.',
      },
      {
        text: 'Đồng thời, có nhiều giải pháp  tạo ra được môi trường sống trong các khu dân cư, để luôn có sự tử tế, luôn đùm bọc lẫn nhau, ứng xử với nhau một cách văn minh.',
      },
      {
        text: 'Nhắc lại giai đoạn dịch COVID-19, Bí thư Quận ủy quận 1 nhìn nhận đây là thời điểm rõ nhất đức tính con người TP HCM, qua đó thể hiện một xã hội có văn hóa khi không tính toán mà sẵn sàng chia sẻ với nhau từng cọng rau, từng cân gạo, từng chiếc khẩu trang…',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/duong-anh-duc-1717564515524119846807.jpg',
          capture:
            'Bí thư Quận ủy quận 1 Dương Anh Đức phát biểu chỉ đạo tại hội nghị; Ảnh: PHAN ANH',
        },
      },
      {
        text: 'Ông Dương Anh Đức cho rằng quận 1 cần tiếp tục phát huy những đức tính quý giá này; xây dựng nên những con người có trí, có tâm, có lực tốt. Nhiệm vụ của cấp ủy, chính quyền các cấp không chỉ là xây dựng mà còn là phát hiện nhân tố tốt, cách làm hay để phát huy, chọn ra được người tốt, người có năng lực để đặt vào vị trí phù hợp của Đảng bộ quận 1.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/khen-thuong-quan-1-1717564515574610712941.jpg',
          capture:
            'Lãnh đạo quận 1 chúc mừng 9 tập thể xuất sắc trong thực hiện Nghị quyết 33; Ảnh: PHAN ANH',
        },
      },
      {
        text: 'Bên cạnh đó, vấn đề quận 1 cần tiếp tục củng cố là về công tác truyền thông, giáo dục tư tưởng, đạo đức cách mạng để làm sao mỗi con người tại vị trí của mình vững vàng, không lay chuyển, trung kiên với lý tưởng của Đảng, với những gì Bác Hồ đã dạy, phụng sự cho đất nước, cho nhân dân.',
      },
    ],
  },
  {
    id: 'A3',
    title: 'CSGT TP HCM hỗ trợ kỳ thi Tuyển sinh lớp 10 ra sao?',
    author: 'Ý Linh',
    publishDate: '05-06-24 13:38',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, đại diện Phòng CSGT Công an TP HCM cho biết nhằm hỗ trợ học sinh và phụ huynh trong 2 ngày diễn ra kỳ thi tuyển sinh lớp 10 (6 và 7-6), đơn vị đã chủ động lên kế hoạch triển khai các biện pháp đảm bảo trật tự, an toàn giao thông tại các điểm thi.',
      },
      {
        text: 'Cụ thể, CSGT TP HCM sẽ tổ chức phân luồng và điều tiết giao thông tại khu vực trọng điểm gần điểm thi nhằm giảm thiểu ùn tắc và tạo điều kiện thuận lợi cho thí sinh và phụ huynh di chuyển.',
      },
      {
        text: 'Ngoài ra, CSGT TP HCM phối hợp với Công an quận, huyện và TP Thủ Đức tổ chức điều hòa giao thông tại các địa điểm thi để kịp thời giải quyết các sự cố về giao thông; ưu tiên tạo điều kiện thuận lợi, hỗ trợ các thí sinh, giáo viên và các xe vận chuyển đề thi, bài thi đến địa điểm thi an toàn.',
      },
      {
        text: 'Lực lượng CSGT cũng sẽ hỗ trợ thí sinh và phụ huynh trong trường hợp gặp sự cố về phương tiện hoặc cần hướng dẫn đường đi. Đồng thời, tăng cường kiểm tra, giám sát và xử lý các vi phạm về giao thông, đảm bảo không để xảy ra tình trạng lộn xộn, mất trật tự tại các khu vực xung quanh điểm thi.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/z53991333895136dff2852c0ed56f70ec0bca4e6d6c0fe-17175670624701392253345.jpg',
          capture: 'Lực lượng CSGT điều tiết giao thông',
        },
      },
      {
        text: 'Phòng CSGT khuyến cáo người dân chú ý thời gian đưa đón con em để hạn chế tình huống gặp các sự cố bất ngờ trên đường ảnh hưởng đến giờ thi. Khi đưa đón học sinh tại các điểm thi, phụ huynh nên tránh dừng, đỗ xe dưới lòng đường.',
      },
      {
        text: 'Bên cạnh đó, TP HCM đang bước vào mùa mưa nên người dân cần lưu ý chuẩn bị sẵn áo mưa để chủ động khi tham gia giao thông trên đường.',
      },
    ],
  },
  {
    id: 'A4',
    title: 'Hơn 7.000 cú sét đánh xuống Hà Nội trong sáng 5-6 có bất thường?',
    author: 'Văn Duẩn',
    publishDate: '05-06-24 14:30',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Liên quan đến việc Hà Nội và vùng phụ cận trong sáng 5-6 phải đón nhận hơn 7.000 cú sét đánh xuống đất, ông Nguyễn Đức Phương - Trưởng phòng rada thời tiết, Trung tâm Mạng lưới khí tượng thủy văn quốc gia (Tổng cục Khí tượng Thủy văn) cho biết hiện nay mạng lưới định vị sét của Việt Nam có 18 trạm định vị sét. Mạng lưới định vị sét này được kết nối với hệ thống định vị sét quốc tế.',
      },
      {
        text: 'Mạng lưới định vị sét của nước ta hiện nay được thiết kế để phát hiện, định vị, phân tích, hiển thị, lưu trữ và phân phối số liệu theo thời gian thực các sự kiện sét trong mây và xuống mặt đất (CG) và trong mây (IC).',
      },
      {
        text: 'Với mạng lưới các đầu đo hiện tại thì khoảng cách mà các đầu đo có thể phát hiện được sét trong dải từ 400-600 km.',
      },
      {
        text: 'Như vậy ngoài khu vực đất liền của Việt Nam thì các trạm định vị sét có thể phát hiện cả sét trên biển và khu vực gần biên giới của các nước lân cận Việt Nam.',
      },
      {
        text: 'Ông Phương cho biết với một khoảng không gian rộng như trên thì việc thống kê được 400 cú sét đánh xuống đất là trong vòng 10 phút là hoàn toàn có thể xảy ra.',
      },
      {
        text: 'Nếu thống kê cho khu vực, cần chọn khu vực (theo kinh vĩ độ) để xác định số lượng sét xảy ra tại khu vực đó trong khoảng thời gian nhất định.',
      },
      {
        text: 'Theo thống kê nhanh từ 6 giờ đến 9 giờ ngày 5-6 tại khu vực Hà Nội và một phần lãnh thổ các tỉnh lân cận như Hải Dương, Hưng Yên (dải mây gây ra sét trong sáng nay) cho thấy:',
      },
      {
        text: 'Từ 6-7 giờ, cơ quan quan trắc ghi nhận có 3.513 cú sét, trong đó sét đánh xuống đất là 2.322 lần. Thời gian từ 7-8 giờ, có 4.060 cú sét (sét đánh xuống đất là 2.855 lần). Thời gian từ 8-9 giờ, có 2.642 cú sét (sét đánh xuống đất là 1.848 lần).',
      },
      {
        text: 'Tổng cộng, trong buổi sáng 5-6, có khoảng 7.025 lượt sấm sét dội xuống đất. Cường độ sét từ 7 giờ 40 đến 8 giờ 50 là mạnh nhất.',
      },
      {
        text: 'Như vậy, từ 7 giờ đến 8 giờ (thời điểm nhiều dông sét nhất) có tới 2.855 lần sét đánh. Chia trung bình ra 10 phút có 475 cú sét đánh xuống đất tại khu vực Hà Nội và vùng lân cận. Có thời điểm trong 1 giây có tới 10 cú sét được ghi nhận (lúc 8 giờ 25 phút 47 giây)',
      },
      {
        text: 'Ông Nguyễn Đức Phương cũng đưa ra thống kê một số đợt dông sét khác đã xảy ra. Tại khu nam đồng bằng bắc bộ (trọng tâm tại các tỉnh Nam Định , Thái Bình, Hà Nam) từ 15 giờ đến 18 giờ ngày 19-5-2024, xảy ra 107. 825 sét đánh, trong đó có 31.957 lần sét đánh xuống đất. Chia trung bình ra 10 phút có từ 790 đến 3.040 lần sét đánh xuống đất.',
      },
      {
        text: 'Tại Yên Bái, chỉ trong 1 giờ đồng hồ, từ 17 giờ đến 18 giờ, có tổng số 9.131 cú sét,  trong đó có 2.968 cú sét đánh xuống đất. Trung bình 494 cú sét/10 phút.',
      },
      {
        text: '"Như vậy ta thấy với số lượng sét như vậy (475 cú sét/10 phút) là hoàn toàn bình thường khi so sánh với 2 đợt trên" - ông Phương khẳng định.',
      },
      {
        text: 'Đặc biệt khi so sánh với số liệu từ 16 đến 17 giờ ngày 19-5-2024 tại khu vực Nam Đồng Bằng Bắc Bộ có đến 3.040 cú sét/10 phút.',
      },
      {
        text: 'Gần nhất, từ 12 giờ đến 13 giờ ngày 5-6-2024 tại khu vực biển Quảng Ninh gần Vịnh Hạ Long cũng có 1.866 cú sét đánh xuống đất.',
      },
    ],
  },
  {
    id: 'A5',
    title: 'Thầy giáo bị điện giật tử vong khi sửa điện',
    author: 'Hoàng Thanh',
    publishDate: '05-06-24 14:48',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, gia đình và người thân đang tổ chức tang lễ cho thầy giáo V.V.V. (45 tuổi, giáo viên môn Vật lý một trường THCS tại huyện Mang Yang, tỉnh Gia Lai) bị tử vong do điện giật.',
      },
      {
        text: 'Vào hôm qua (4-6), một số thiết bị điện tại nhà riêng thầy V. bị hư hỏng. Thấy vậy, người đàn ông này đã lấy thang trèo lên để sửa chữa. Tuy nhiên, trong quá trình sửa, thầy giáo V. đã không may bị điện giật. Lúc này, thầy V. liền gọi kêu cứu người thân. Tuy nhiên, chỉ ít giây sau đã bị ngã từ trên thang xuống dưới đất.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/0-17175716137191686792334.png',
          capture:
            'Khoảng khắc lúc thầy V.V.V rơi xuống đất được camera ghi lại',
        },
      },
      {
        text: 'Phát hiện sự việc, người thân của thầy V. đã hô hoán bà con xung quanh ứng cứu. Đáng tiếc, nạn nhân đã tử vong sau đó.',
      },
      {
        text: 'Sau khi nhận được thông tin, nhà trường, chính quyền địa phương và người thân đã đến thăm hỏi, động viên và hỗ trợ gia đình tổ chức tang lễ.',
      },
    ],
  },
  {
    id: 'A6',
    title:
      'TP HCM: Giám đốc Kho bạc Nhà nước được bổ nhiệm làm Giám đốc Sở Tài chính',
    author: 'PHAN ANH',
    publishDate: '05-06-24 14:52',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chiều 5-6, Ủy viên Trung ương Đảng, Phó Bí thư Thành ủy, Chủ tịch UBND TP HCM Phan Văn Mãi đã chủ trì lễ trao quyết định cán bộ.',
      },
      {
        text: 'Tại buổi lễ, Chủ tịch UBND TP HCM Phan Văn Mãi đã trao quyết định tiếp nhận và bổ nhiệm ông Nguyễn Hoàng Hải, Giám đốc Kho bạc Nhà nước TP HCM, giữ chức vụ Giám đốc Sở Tài chính TP HCM, từ ngày 15-6.',
      },
      {
        text: 'Ông Nguyễn Hoàng Hải làm Giám đốc Sở Tài chính thay thế ông Lê Duy Minh.',
      },
      {
        text: 'Trước đó, Kho bạc Nhà nước đã có quyết định điều động ông Nguyễn Hoàng Hải, Giám đốc Kho bạc Nhà nước TP HCM đến nhận công tác tại Sở Tài chính TP HCM.',
      },
      {
        text: 'Ông Nguyễn Hoàng Hải sinh năm 1968, quê quán Vĩnh Long; trình độ: Thạc sĩ Kinh tế học, Cử nhân Kinh tế chính trị, Thạc sĩ Kinh tế học, Cử nhân Kinh tế chính trị, Cao cấp lý luận chính trị.',
      },
      {
        text: 'Ông Hải làm Phó Giám đốc Kho bạc Nhà nước TP HCM từ tháng 8-2007 đến tháng 12-2015.',
      },
      {
        text: 'Từ tháng 1-2016 đến tháng 2-2020, ông Nguyễn Hoàng Hải là Giám đốc Kho bạc Nhà nước Cần Thơ.',
      },
      {
        text: 'Từ tháng 3-2020 đến nay, ông làm Giám đốc Kho bạc Nhà nước TP HCM.',
      },
      {
        text: 'Cũng tại buổi lễ, Chủ tịch UBND TP HCM Phan Văn Mãi đã trao quyết định điều động và bổ nhiệm ông Trần Văn Bảy, Phó Giám đốc Sở Tài nguyên và Môi trường, giữ chức vụ Chánh Thanh tra TP HCM.',
      },
      {
        text: 'Ông Trần Văn Bảy làm Chánh Thanh tra TP HCM thay cho ông Đặng Minh Đạt nghỉ hưu từ ngày 1-6-2024.',
      },
      {
        text: 'Ông Trần Văn Bảy sinh năm 1971, quê quán tại tỉnh Đồng Nai. Ông Bảy có trình độ Thạc sĩ Luật, Cao cấp lý luận chính trị.',
      },
      {
        text: 'Ông Bảy trải qua nhiều vị trí công tác từ Trường Đại học Luật TP HCM, Sở Tư pháp TP HCM trước khi làm Phó Giám đốc Sở Tư pháp. Từ tháng 3-2017 đến tháng 1-2021, ông Bảy là Phó Bí thư Quận ủy, Chủ tịch UBND quận 9. Từ tháng 3-2021 đến nay, ông Bảy là Phó Giám đốc Sở Tài nguyên và Môi trường TP HCM.',
      },
      {
        text: 'Cũng tại buổi lễ, UBND TP HCM trao quyết định bổ nhiệm đối với 4 nhân sự khác.',
      },
      {
        text: 'Cụ thể, điều động, bổ nhiệm ông Phạm Minh Mẫn, Chủ tịch UBND quận Tân Phú làm Phó giám đốc Sở Xây dựng TP HCM.',
      },
      {
        text: 'Điều động, bổ nhiệm ông Huỳnh Minh Hùng, Phó chủ tịch UBND quận 6 làm Phó Giám đốc Ban quản lý dự án đầu tư xây dựng các công trình dân dụng và công nghiệp TP HCM.',
      },
      {
        text: 'Điều động, bổ nhiệm ông Trần Bạch Ngọc, Chánh thanh tra Sở Kế hoạch và Đầu tư làm Phó Trưởng Ban đổi mới doanh nghiệp TP HCM.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/nhan-su-1-17175730284182052560321.jpg',
          capture:
            'Chủ tịch UBND TP HCM Phan Văn Mãi (bìa phải) trao quyết định và chúc mừng ông Nguyễn Hoàng Hải được bổ nhiệm làm Giám đốc Sở Tài chính',
        },
      },
      {
        text: 'UBND TP HCM cũng phê chuẩn kết quả bầu Phó Chủ tịch UBND huyện Hóc Môn đối với ông Nguyễn Tuấn Anh, Bí thư Đảng ủy xã Bà Điểm, huyện Hóc Môn. Ông Nguyễn Tuấn Anh được bầu bổ sung làm Phó Chủ tịch UBND huyện Hóc Môn theo cơ chế đặc thù tại Nghị quyết 98/2023 của Quốc hội, theo đó UBND các huyện ở TP HCM được tối đa 4 phó chủ tịch.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/nhan-su-2-17175730284212082792228.jpg',
          capture:
            'Chủ tịch UBND TP HCM Phan Văn Mãi (bìa phải) trao quyết định và chúc mừng ông Trần Văn Bảy được bổ nhiệm làm Chánh Thanh tra TP HCM',
        },
      },
      {
        text: 'Chủ tịch UBND TP HCM Phan Văn Mãi cho biết đây là việc thường xuyên của công tác cán bộ, chuẩn bị một bước về nhân sự cho nhiệm kỳ sau. Chủ tịch UBND TP HCM đề nghị các cơ quan đón nhận cán bộ. Các cán bộ cố gắng hơn để hoàn thành nhiệm vụ, nhanh chóng tiếp cận công việc, hòa nhập công việc tại cơ quan mới.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/nhan-su-3-1717573028452880931486.jpg',
          capture: 'Lãnh đạo TP HCM chúc mừng các nhân sự vừa được bổ nhiệm',
        },
      },
    ],
  },
  {
    id: 'A7',
    title:
      'Vụ 112 hồ sơ ở dự án cao tốc Biên Hòa - Vũng Tàu có dấu hiệu chỉnh sửa: Công an nói gì?',
    author: 'Nguyễn Tuấn',
    publishDate: '05-06-24 15:19',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, tại Hội nghị giao ban kinh tế - xã hội tháng 5-2024 tỉnh Đồng Nai, đại tá Trần Tiến Đạt, Phó Giám đốc Công an tỉnh, cho biết trong vụ 112 hồ sơ bồi thường ở dự án cao tốc Biên Hoà-Vũng Tàu đi qua phường Phước Tân (TP Biên Hoà), bước đầu qua xác minh, làm rõ thì xác định không có dấu hiệu tội phạm.',
      },
      {
        text: 'Đại tá Trần Tiến Đạt thông tin thực hiện yêu cầu của Quyền Chủ tịch UBND tỉnh Đồng Nai Võ Tấn Đức, Công an tỉnh đã vào cuộc xác minh làm rõ và xác định các tờ khai này là tờ khai của người dân kê khai với UBND phường Phước Tân, TP Biên Hòa chứ chưa có dấu hiệu cán bộ tiếp tay để tẩy xóa, làm sai lệch hồ sơ để nhận tiền đền bù.',
      },
      {
        text: 'The đại tá Trần Tiến Đạt, điều tra bước đầu thì mới dừng ở việc người dân tự kê khai với UBND phường. Các trường hợp người dân kê khai sai thì hướng xử lý là trả lại tờ khai để người dân kê khai lại. Về phía cơ quan công an sẽ tập trung làm rõ những tờ khai nào mà có tình trạng cố tình kê khống.',
      },
      {
        text: 'Trong khi đó, Giám đốc Sở Tài nguyên và môi trường Đặng Minh Đức cho hay qua rà soát, theo đánh giá của đơn vị đây là những sai sót mang tính kỹ thuật. Việc người dân kê khai nếu có sai sót thì thay đổi tờ khai để người dân kê khai lại cho chính xác.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img2627-17175741748431693452658.jpg',
          capture: 'Quang cảnh buổi họp giao ban kinh tế-xã hội tháng 5-2024',
        },
      },
      {
        text: 'Tuy nhiên, do lực lượng tổ chức thực hiện chưa chuyên nghiệp nên để xảy ra tình trạng tẩy, sửa. Trong trường hợp nếu có việc cố tình tẩy sửa thì cơ quan chức năng sẽ làm việc để xác minh rõ ràng.',
      },
    ],
  },
  {
    id: 'A8',
    title:
      'Bộ trưởng Nguyễn Văn Hùng trả lời câu hỏi “bỏ 300 tỉ đồng vào ngân hàng để lấy lãi”',
    author: 'Nhóm PV',
    publishDate: '05-06-24 15:21',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chiều 5-6, Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch (VH-TT-DL) Nguyễn Văn Hùng trả lời chất vấn tại kỳ họp thứ 7, Quốc hội khóa XV.',
      },
      {
        text: 'Đặt câu hỏi chất vấn, đại biểu Trần Chí Cường (đoàn TP Đà Nẵng) cho biết sau đại dịch COVID-19, Quốc hội và Chính phủ rất quan tâm hỗ trợ ngành du lịch sớm phục hồi và phát triển bằng chính sách tài khóa, tiền tệ hỗ trợ chương trình phục hồi và phát triển kinh tế-xã hội và đã bố trí ngân sách cho Quỹ hỗ trợ phát triển du lịch đã bố trí 300 tỉ đồng cho quỹ này. Tuy nhiên, đến nay số tiền này vẫn nằm trong ngân hàng, số tiền lãi dùng để chi cho hoạt động thường xuyên cho bộ máy hành chính quản lý quỹ.',
      },
      {
        text: 'Đề nghị Bộ trưởng cho biết nguyên nhân chưa triển khai nguồn kinh phí này và giải pháp khắc phục tình trạng này?',
      },
      {
        text: 'Trả lời câu hỏi này, Bộ trưởng Bộ VH-TT-DL Nguyễn Văn Hùng cho biết đây là câu hỏi rất cụ thể.',
      },
      {
        text: 'Theo Bộ trưởng Nguyễn Văn Hùng, 300 tỉ đồng này không phải quỹ để hỗ trợ phát triển du lịch mà theo Luật Du lịch thì 300 tỉ đồng này là vốn điều lệ. Vốn điều lệ được bảo tồn phát triển bằng cách gửi ngân hàng để bảo tồn nguồn vốn đó, phần lãi sẽ được chi cho tổ chức bộ máy. Phần xúc tiến hoạt động du lịch thì do Chính phủ cấp thông qua tỉ lệ phần trăm trong đóng góp của ngành du lịch qua phí, vé… khi được nhà nước, trung ương thu lại.',
      },
      {
        text: '"Vừa rồi chúng ra được nhận 2 lần, mỗi lần 150 tỉ đồng, trong đó 150 tỉ đồng đợt đầu được gửi vào ngân hàng, số lãi chủ yếu được chi cho công tác hành chính và bộ máy theo quyết định 49 định của Thủ tướng và trên sự kiểm soát của kho bạc nhà nước, còn 150 tỉ đồng đợt sau đang được lưu giữ ở kho bạc, hiện chúng tôi đang chỉ đạo để củng cố, kiện toàn đội ngũ quỹ và tiếp tục phối hợp với cơ quan có thẩm quyền để hình thành trích lập các quỹ theo quy định" - Bộ trưởng Nguyễn Văn Hùng nói.',
      },
      {
        text: 'Bộ trưởng Bộ VH-TT-DL cho biết đây là một mô hình mới. Quỹ hỗ trợ phát triển du lịch hoạt động theo mô hình doanh nghiệp và đơn vị sự nghiệp sự nghiệp công lập, 2 loại hình này rất khó trong hoạt động nên có những vướng mắc. Tuy nhiên, tinh thần chung là sẽ quyết liệt hơn, sắp xếp lại bộ máy, nếu cần thiết sẽ có báo cáo đánh giá tác động để đề xuất xem xét sửa đổi quyết định 49 của Thủ tướng nhằm đưa quỹ vào hoạt động, phục vụ tốt hơn nhiệm vụ xúc tiến, quảng bá du lịch.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img1927-17175738164881773339899.png',
          capture:
            'Đại biểu Trần Chí Cường (đoàn TP Đà Nẵng) đặt câu hỏi chất vấn. Ảnh: Phạm Thắng',
        },
      },
      {
        text: 'Tranh luận về Quỹ hỗ trợ phát triển du lịch, đại biểu Nguyễn Văn Thân (đoàn tỉnh Thái Bình) cho rằng nếu giao quỹ này cho Bộ VH-TT-DL rồi Bộ lại gửi tiền này vào ngân hàng thì không cần Ban quản lý quỹ. Việc quản lý tiền của quỹ này nên giao cho Bộ VH-TT-DL với nguyên tắc không làm thất thoát tiền của Nhà nước. Việc quản lý quỹ này có thể giao cho văn phòng Bộ.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img1926-17175733585731565753002.png',
          capture:
            'Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch Nguyễn Văn Hùng trả lời chất vấn trước Quốc hội. Ảnh: Phạm Thắng',
        },
      },
      {
        text: 'Bộ trưởng Nguyễn Văn Hùng cho hay Quỹ hỗ trợ phát triển du lịch được hình thành từ 2021. Số tiền 300 tỉđồng là vốn điều lệ của quỹ, theo quy định không được phép chi cho các hoạt động xúc tiến du lịch, mà phải gửi tại Kho bạc nhà nước. Khoản lãi từ tiền gửi này dành chi cho hoạt động bộ máy. Còn tiền chi cho hoạt động xúc tiến du lịch được trích từ khoản thu tiền vé tại các khu di tích hằng năm, mức này khoảng 5-10%. Năm nào thu được nhiều thì Bộ Tài chính cấp nhiều, năm nào thu ít thì cấp ít.',
      },
      {
        text: 'Theo Bộ trưởng Bộ VH-TT-DL, bộ máy vận hành, điều hành của quỹ này vừa qua chưa ổn, có tiền mà không tiêu được. Vừa qua, Bộ đã thay chủ tịch, giám đốc của quỹ này. Phần tiền Quỹ hỗ trợ phát triển du lịch được chi nhưng không tiêu hết, vẫn nằm trong kho quỹ và không được chuyển nguồn sang năm sau.',
      },
      {
        text: '“Đến thời điểm này chưa phát hiện tình trạng tham ô, tham nhũng quỹ. Chúng tôi sẽ chấn chỉnh điều hành, trước mắt tập trung xúc tiến quảng bá du lịch, sản phẩm du lịch để phát huy hiệu quả quỹ" - Bộ trưởng Nguyễn Văn Hùng nói.',
      },
    ],
  },
  {
    id: 'A9',
    title: 'Đường nối Ninh Thuận - Lâm Đồng vướng đất rừng',
    author: 'Trường Nguyên',
    publishDate: '05-06-24 15:22',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'UBND tỉnh Lâm Đồng vừa có ý kiến giao Sở Nông nghiệp và Phát triển nông thôn chủ trì, phối hợp với các đơn vị liên quan xem xét đề nghị của Ban quản lý dự án đầu tư xây dựng các công trình giao thông tỉnh Ninh Thuận (BQLDA Ninh Thuận) liên quan đến dự án thành phần 2 đường từ xã Ma Nới, huyện Ninh Sơn, tỉnh Ninh Thuận đến ngã tư Tà Năng, huyện Đức Trọng, tỉnh Lâm Đồng (dự án thành phần 2).',
      },
      {
        text: 'Theo BQLDA Ninh Thuận, dự án này là dự án trọng điểm của tỉnh Ninh Thuận năm 2024, chiều dài tuyến đường hơn 41 km (Ninh Thuận gần 24 km và Lâm Đồng hơn 17,1 km), khởi công tháng 12-2022 và dự kiến hoàn thành vào tháng 3-2025.',
      },
      {
        text: 'Tuy nhiên, đoạn 17,1 km trên địa bàn tỉnh Lâm Đồng hiện giải phóng mặt bằng được 15,5 km; còn lại 1,6 km chưa đủ thủ tục để giải phóng mặt bằng, trong đó có 1,2 km gồm đất lâm nghiệp chưa có rừng và gần 1,86 ha đất có rừng.',
      },
      {
        text: 'Qua kiểm tra, diện tích rừng và đất rừng dự kiến chuyển mục đích để thực hiện dự án thành phần 2 chủ yếu là rừng trồng thông ba lá (1,586 ha) và rừng tự nhiên (0,272 ha) rải rác tại nhiều vị trí. Việc lập phương án khai thác tận dụng lâm sản sau khi có quyết định chuyển mục đích sử dụng phải thực hiện trong mùa mưa sẽ rất mất thời gian và chi phí cũng như phải điều chỉnh dự toán kinh phí.',
      },
      {
        text: 'Trong khi đó, quyết định phê duyệt dự toán thực hiện dự án thành phần 2 không có chi phí lập phương án khai thác tận dụng lâm sản trên diện tích được chuyển mục đích sử dụng rừng sang mục đích khác.',
      },
      {
        text: 'BQLDA Ninh Thuận cho rằng vấn đề này sẽ ảnh hưởng đến tiến độ, thời gian hoàn thành dự án thành phần 2; chi phí máy móc, thiết bị, thời gian làm việc trong quá trình thực hiện dự án cũng tăng lên.',
      },
      {
        text: 'Do đó, BQLDA Ninh Thuận đề nghị UBND tỉnh Lâm Đồng cho phép đơn vị lập phương án bồi thường tài nguyên rừng trên diện tích gần 1,86 ha đất có rừng theo hiện trạng đã được thẩm định để đơn vị nộp tiền bồi thường tài nguyên rừng và tiến hành giải phóng mặt bằng thực hiện dự án thành phần 2 mà không phải lập phương án khai thác tận dụng lâm sản.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/lam-dong-5-1717566327529644550956.jpg',
          capture:
            'Khoảng 1,6 km dự án đường nối Ninh Thuận - Lâm Đồng chưa giải phóng được mặt bằng vì vướng đất rừng. Ảnh minh họa.',
        },
      },
      {
        text: 'Tuy nhiên, trong ngày 4-6, UBND tỉnh Lâm Đồng ban hành quyết định thu hồi, chuyển mục đích sử dụng đất và giao đất diện tích 1,858 ha đất rừng cho BQLDA Ninh Thuận thực hiện dự án thành phần 2 nêu trên. Trong đó, UBND tỉnh yêu cầu BQLDA Ninh Thuận lập hồ sơ, phương án khai thác, tận dụng lâm sản trên diện tích được chuyển mục đích sử dụng đất này.',
      },
    ],
  },
  {
    id: 'A10',
    title: 'Đang ngủ bị tảng đá nặng 3 tấn lăn từ trên núi xuống đè tử vong',
    author: 'Như Quỳnh',
    publishDate: '05-06-24 15:22',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Trưa 5-6, tin từ Ban chỉ huy Phòng chống thiên tai và Tìm kiếm cứu nạn huyện Đồng Văn, tỉnh Hà Giang cho biết vụ việc xảy ra khoảng 1 giờ 30 phút cùng ngày, tại thôn Tả Kha, thị trấn Phố Bảng, huyện Đồng Văn.',
      },
      {
        text: 'Vào thời gian trên khi em H.M.V. (14 tuổi) đang ngủ trong nhà thì bất ngờ bị một tảng đá nặng khoảng 3 tấn lăn từ trên núi xuống đè tử vong.',
      },
      {
        text: 'Được biết, từ đêm 4-6 đến rạng sáng 5-6, trên địa bàn huyện Đồng Văn có mưa lớn  khiến nhiều nơi bị sạt lở đất đá.',
      },
      {
        text: 'Sáng 5-6, mưa to kèm dông lốc xảy ra tại huyện Bát Xát, tỉnh Lào Cai cũng khiến 2 người mất tích. Vào lúc 6 giờ, chị L.T.N. (SN 1994, trú xã Bản Vược) và con trai là L.H.N. (SN 2022) đang ngủ tại lán trông coi ao cá thì bất ngờ lũ ống ập đến cuốn mất tích.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/da-1-17175743139161472116631.jpg',
          capture: 'Căn nhà xảy ra sự việc. Ảnh: Báo Hà Giang',
        },
      },
      {
        text: 'Ngay sau khi xảy ra sự việc, chính quyền địa phương huy động các lực lượng triển khai tìm kiếm nạn nhân.',
      },
    ],
  },
  {
    id: 'A11',
    title: 'TP HCM có tân Chánh Thanh tra',
    author: 'PHAN ANH',
    publishDate: '05-06-24 15:27',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chiều 5-6, Ủy viên Trung ương Đảng, Phó Bí thư Thành ủy, Chủ tịch UBND TP HCM Phan Văn Mãi đã chủ trì lễ trao quyết định cán bộ.',
      },
      {
        text: 'Tại buổi lễ, ông Phan Văn Mãi trao quyết định điều động và bổ nhiệm ông Trần Văn Bảy, Phó Giám đốc Sở Tài nguyên và Môi trường, giữ chức vụ Chánh Thanh tra TP HCM.',
      },
      {
        text: 'Ông Trần Văn Bảy làm Chánh Thanh tra TP HCM thay cho ông Đặng Minh Đạt nghỉ hưu từ ngày 1-6-2024.',
      },
      {
        text: 'Ông Trần Văn Bảy sinh năm 1971, quê quán tại tỉnh Đồng Nai. Ông Bảy có trình độ Thạc sĩ Luật, Cao cấp lý luận chính trị.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/nhan-su-2-17175730284212082792228.jpg',
          capture:
            'Chủ tịch UBND TP HCM Phan Văn Mãi (bìa phải) trao quyết định và chúc mừng ông Trần Văn Bảy được bổ nhiệm làm Chánh Thanh tra TP HCM',
        },
      },
      {
        text: 'Ông Bảy trải qua nhiều vị trí công tác từ Trường Đại học Luật TP HCM, Sở Tư pháp TP HCM trước khi làm Phó Giám đốc Sở Tư pháp. Từ tháng 3-2017 đến tháng 1-2021, ông Bảy là Phó Bí thư Quận ủy, Chủ tịch UBND quận 9. Từ tháng 3-2021 đến nay, ông Bảy là Phó Giám đốc Sở Tài nguyên và Môi trường TP HCM.',
      },
      {
        text: 'Cũng tại buổi lễ, UBND TP HCM trao quyết định bổ nhiệm đối với 5 nhân sự khác.',
      },
    ],
  },
  {
    id: 'A12',
    title:
      'Bộ trưởng VH-TT-DL nói về việc "ăn chặn" tiền thưởng, khẩu phần ăn của vận động viên',
    author: 'Văn Duẩn - Minh Chiến - Huy Thanh',
    publishDate: '05-06-24 15:32',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chiều 5-6, tại kỳ họp thứ 7, Quốc hội khóa XV, Quốc hội tiến hành chất vấn Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch (VH-TT-DL) Nguyễn Văn Hùng.',
      },
      {
        text: 'Đại biểu Nguyễn Minh Tâm (Quảng Bình) cho biết thời gian qua dư luận xôn xao trước hàng loạt các vụ việc vận động viên (VĐV) thành tích cao, tố cáo huấn luyện viên bớt xén tiền thưởng, khẩu phần ăn. Theo đại biểu Tâm, những vụ việc trên đã làm xấu đi hình ảnh thể thao Việt Nam trong mắt công chúng.',
      },
      {
        text: 'Bên cạnh những câu chuyện đẹp đậm nghĩa thầy trò của thể thao Việt Nam, thì những vụ việc bị phát hiện ở trên đã thể hiện mặt trái của thể thao thành tích cao, phản ánh hiện thực rằng chế độ đãi ngộ cho đối tượng này chưa thực sự phù hợp, cơ chế quản lý chưa thực sự hiệu quả. Điều này còn kéo theo hậu quả là thể thao thành tích cao của Việt Nam không thể phát triển trong môi trường công bằng, minh bạch, không tạo được động lực cho vận động viên và huấn luyện viên.',
      },
      {
        text: '"Xin Bộ trưởng cho biết giải pháp lâu dài việc quản lý và đảm bảo không tái hiện tình trạng trên?" -đại biểu Nguyễn Minh Tâm chất vấn.',
      },
      {
        text: 'Trả lời, Bộ trưởng VH-TT-DL Nguyễn Văn Hùng cho biết mặc dù chỉ là hai sự việc có tính chất cá biệt, đó là vấn đề về tiền ăn của đội tuyển bóng bàn khi tham gia tập huấn tại Trung tâm thể thao Hà Nội được tổ chức tại khu Mỹ Đình và tiền của đội thể dục dụng cụ - mà chủ yếu là có phần liên quan đến trung tâm thể thao của Hà Nội và bộ phận đội tuyển trung tâm.',
      },
      {
        text: 'Chính vì vậy, khi phát hiện ra, Bộ VH-TT-DL đã kiên quyết xử lý và cũng thực hiện cái phương châm chỉ đạo của Đảng, Nhà nước là "không có ngoại lệ" và làm nghiêm theo quy định.',
      },
      {
        text: '"Chúng tôi đã kỷ luật bằng biện pháp hành chính và cung cấp thông tin cho các cơ quan chức năng khác để xem xét, điều tra khi có dấu hiệu tội phạm, đủ điều kiện thì sẽ xem xét để mà xử lý theo quy định của pháp luật. Chúng tôi không có cái chuyện là bao che hay dung túng cho cái này" - Bộ trưởng nói và cho rằng đây cũng là lời cảnh tỉnh cho công tác huấn luyện.',
      },
      {
        text: 'Bộ trưởng cũng phân trần rằng lãnh đạo Bộ VH-TT-DL biết hơi chậm "nhưng vì là lãnh đạo cấp trên, sai phạm lại xảy ra ở đơn vị nhỏ ở cấp dưới nên chậm nắm vấn đề và không biết".',
      },
      {
        text: 'Theo Bộ trưởng VH-TT-DL, ban đầu khi hình thành quỹ thì với mục đích là tốt đẹp. Ví dụ như trong đội tuyển góp tiền để đi thăm hỏi ốm đau, hiếu hỉ, hỗ trợ thêm cho nhau hoặc bồi dưỡng thêm sau trận … dù theo quy định pháp luật là trái phép nhưng nếu trên tinh thần tự nguyện, tự quản, tự quản lý chặt chẽ thì chắc là không có tiêu cực.',
      },
      {
        text: '"Nhưng câu chuyện xảy ra là huấn luyện viên lạm dụng nên đã có tiêu cực ở trong đó" - Bộ trưởng Nguyễn Văn Hùng nói.',
      },
      {
        text: 'Về giải pháp, Bộ trưởng Nguyễn Văn Hùng cho biết đã cho rà soát lại và bổ sung quy định về quản lý đội tuyển. Trong quy trình này có rất rõ từng điều, khoản, chương, mục, từ tập luyện đến công tác quản lý.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/tai-xuong-1-17175748667452083594190.jpeg',
          capture: 'Đại biểu Nguyễn Minh Tâm (Quảng Bình) chất vấn',
        },
      },
      {
        text: 'Cùng với đó là tăng cường thanh tra, kiểm tra, xử lý nghiêm. Thực tế lâu nay có kiểm tra nhưng chủ yếu là kiểm tra chất lượng đào tạo, ít kiểm tra về vấn đề về chế độ chính sách.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/hung-1717576175418827462374.jpg',
          capture:
            'Bộ trưởng Nguyễn Văn Hùng: Chúng tôi kiên quyết xử lý theo phương châm chỉ đạo của Đảng, Nhà nước là "không có ngoại lệ" và làm nghiêm - Ảnh: Lâm Hiển',
        },
      },
      {
        text: 'Cuối cùng là phải rất công khai, minh bạch ngay từ đầu, phải thông báo cho các vận động viên là được hưởng chế độ tiền ăn bao nhiêu một ngày, chế độ tiền thưởng là bao nhiêu để vận động viên biết và quản lý.',
      },
      {
        text: '"Bộ nghiêm cấm việc lập quỹ. Mặc dù có mục đích tốt đẹp cũng nghiêm cấm. Hiện nay thì toàn ngành đang thực hiện quy định này" - Bộ trưởng VH-TT-DL cho biết.',
      },
    ],
  },
  {
    id: 'A13',
    title:
      'Tổng cục Thuế có công điện khẩn kiểm tra toàn diện việc livestream bán hàng',
    author: 'Minh Chiến',
    publishDate: '05-06-24 15:40',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Tổng cục Thuế (Bộ Tài chính) vừa có công điện gửi Cục trưởng Cục Thuế tỉnh, thành phố;  Cục trưởng Cục Thuế doanh nghiệp lớn về quyết liệt triển khai hiệu quả việc quản lý thuế đối với hoạt động thương mại điện tử, hóa đơn điện tử khởi tạo từ máy tính tiền.',
      },
      {
        text: 'Theo đó, Tổng cục trưởng Tổng cục Thuế yêu cầu Cục trưởng Cục Thuế các tỉnh, thành phố, Cục Thuế Doanh nghiệp lớn khẩn trương triển khai rà soát, kiểm tra đồng bộ, toàn diện việc kê khai, nộp thuế, sử dụng hóa đơn điện tử của các tổ chức, hộ kinh doanh, cá nhân kinh doanh thương mại điện tử, kinh doanh trên sàn giao dịch thương mại điện tử, tiếp thị liên kết (affiliate marketing), cung cấp các sản phẩm nội dung thông tin số và nhận thu nhập từ hoạt động quảng cáo, cung cấp phần mềm…',
      },
      {
        text: '"Đặc biệt là các tổ chức, cá nhân kinh doanh online, phát video trực tiếp (livestream) bán hàng hóa, dịch vụ..."- Tổng cục Thuế chỉ đạo.',
      },
      {
        text: 'Tại phiên chất vấn và trả lời chất vấn ở kỳ họp thứ 7, Quốc hội khóa XV chiều 4-6, Bộ trưởng Bộ Tài chính Hồ Đức Phớc cũng đã làm rõ hơn vấn đề quản lý thuế đối với hoạt động thương mại điện tử.',
      },
      {
        text: 'Theo Bộ trưởng Hồ Đức Phớc, thực hiện Nghị Chỉ thị số 18 của Thủ tướng Chính phủ, Bộ Tài chính đã chỉ đạo quyết liệt trong thực hiện việc thu thuế của sàn thương mại điện tử.',
      },
      {
        text: 'Bộ Tài chính cũng đã tăng cường tuyên truyền cũng như hướng dẫn người nộp thuế và thực hiện mở Cổng thông tin điện tử của sàn thương mại điện tử xuyên biên giới.',
      },
      {
        text: 'Trong công tác phối hợp thực hiện, Bộ Tài chính đã chủ trì, phối hợp một cách quyết liệt với Bộ Công Thương, Bộ Thông tin Truyền thông, Ngân hàng Nhà nước và Bộ Công an.',
      },
      {
        text: 'Theo đó, đã kết nối cơ sở dữ liệu dân cư bằng 71,37% với 663.157 lượt kết nối với cơ sở dữ liệu dân cư của Bộ Công an quản lý và chia sẻ với Bộ Công Thương 929 sàn thương mại điện tử; đã kiểm tra, đối chiếu 361 sàn thương mại điện tử để thực hiện kết nối và quản lý. Ngân hàng Nhà nước đã cung cấp 144 triệu tài khoản, trong đó là khoảng 10 triệu tài khoản của các tổ chức, còn lại 134 triệu tài khoản của cá nhân ở 96 ngân hàng.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/live-17175756928421469500120.jpeg',
          capture:
            'Hoạt động livestream bán hàng ngày càng phổ biến. Ảnh: NLĐO',
        },
      },
      {
        text: 'Năm 2022 đã thu được 83 ngàn tỉ đồng, năm 2023 thu được 97 ngàn tỉ đồng, 5 tháng đầu năm 2024 đã thu được 50 ngàn tỉ đồng. Và có 96 nhà cung cấp nước ngoài, tập đoàn công nghệ (Facebook, Apple, Google...) đã thực hiện đăng ký và nộp thuế trên Cổng Thông tin dành cho nhà cung cấp nước ngoài với số tiền 15,6 ngàn tỉ đồng.',
      },
      {
        text: 'Trong thời gian tới, Bộ trưởng khẳng định sẽ đẩy mạnh việc thực hiện một cách đồng bộ đối với việc thu thuế trên sàn thương mại điện tử. Bộ cũng chỉ đạo cơ quan thuế hỗ trợ thực hiện thu thuế trên trên sàn thương mại điện tử để đảm bảo công bằng trong vấn đề thực hiện nghĩa vụ với nhà nước.',
      },
    ],
  },
  {
    id: 'A14',
    title: '1 phụ nữ tử vong sau khi sửa mũi ở trung tâm TP HCM',
    author: 'Anh Vũ',
    publishDate: '05-06-24 15:43',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, Công an quận 1 (TP HCM) phối hợp với các lực lượng điều tra vụ một phụ nữ tử vong khi đi thẩm mỹ sửa mũi.',
      },
      {
        text: 'Hơn 10 giờ ngày 4-6, chị N.T.T.H (33 tuổi, quê Tây Ninh) đến một cơ sở thẩm mỹ trên đường Pasteur, phường Bến Nghé để làm dịch vụ sửa mũi.',
      },
      {
        text: '11 giờ, chị H. được đưa đi gây mê, phẫu thuật, tới 14 giờ thì có dấu hiệu mệt mỏi và gọi điện về cho gia đình.',
      },
      {
        text: 'Sau đó, chị H. được đưa vào Bệnh viện Nhân dân 115 để cấp cứu trong tình trạng nguy kịch, có dấu hiệu chết não.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/z5509813098818c7db45793154650fd21fd22b65bc446c-17175759509092020025981.jpg',
          capture: 'Hiện cơ sở đã đóng cửa.',
        },
      },
      {
        text: 'Dù được các bác sĩ bệnh viện tận tình cứu chữa nhưng đến hơn 22 giờ cùng ngày, chị H. đã tử vong.',
      },
      {
        text: 'Theo người nhà chị H., trước đó sức khỏe chị H. ổn định.',
      },
    ],
  },
  {
    id: 'A15',
    title: 'Tuyến đường nào "đắt khách" nhất khi quận 1 cho thuê vỉa hè?',
    author: 'PHAN ANH',
    publishDate: '05-06-24 15:46',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Gần 1 tháng thí điểm cho sử dụng một phần vỉa hè để kinh doanh ở 11 tuyến đường thuộc quận 1, TP HCM, đã có hơn 200 hộ đăng ký với tổng mức phí dự kiến đóng trên 800 triệu đồng.',
      },
      {
        text: 'Thông tin trên được Phó Trưởng Phòng Quản lý đô thị quận 1 Dương Thanh Bình cho biết ngày 5-6.',
      },
      {
        text: 'Ông Bình cho hay tính đến 10 giờ ngày 5-6, đã có 207 trường hợp đăng ký sử dụng một phần vỉa hè để kinh doanh, buôn bán ở 11 tuyến đường mà quận 1 đang thí điểm trên địa bàn. Trong đó 97 trường hợp đã được thông qua, cho phép sử dụng tạm một phần vỉa hè để  kinh doanh, mua bán hàng hóa.',
      },
      {
        text: 'Phường Bến Thành có số lượng đăng ký nhiều nhất với 135 trường hợp. Kế đến là các phường Đa Kao, Cầu Ông Lãnh, Nguyễn Cư Trinh, Cô Giang, Bến Nghé...',
      },
      {
        text: 'Trong đó, tuyến "đắt khách" nhất trên địa bàn quận 1 là Lê Thánh Tôn với 80 trường hợp đã đăng ký sử dụng một phần vỉa hè. Nhiều tuyến đường khác cũng có số lượng đăng ký nhiều sau gần 1 tháng thí điểm như Phan Bội Châu (34 hộ), Phan Chu Trinh (23 hộ), Trần Hưng Đạo (23 hộ)...',
      },
      {
        text: 'Ông Bình cho biết tổng diện tích vỉa hè dự kiến đăng ký sử dụng tạm thời là hơn 1.613 m2; tổng số phí dự kiến thu là hơn 800 triệu đồng. Hiện nay quận đã thu được gần 345 triệu đồng, trong đó phường Bến Thành đóng nhiều nhất với hơn 193 triệu đồng (39 trường hợp).',
      },
      {
        text: 'Quận 1 là địa phương đầu tiên tại TP HCM thí điểm sử dụng một phần vỉa hè để tổ chức các hoạt động kinh doanh dịch vụ, mua bán hàng hóa có thu phí. Theo phương án của quận, phần diện tích kinh doanh ở vỉa hè bố trí về phía nhà dân và cho để xe máy tự quản sát mép đường.',
      },
      {
        text: 'Với 11 tuyến đang thí điểm, việc đăng ký sử dụng vỉa hè được quận triển khai qua phần mềm. Trên ứng dụng sẽ cung cấp chức năng hè phố, thủ tục đăng ký, mức phí...',
      },
      {
        text: 'Khi đáp ứng các điều kiện, người dân sẽ được cấp phép và đóng phí tùy theo diện tích, thời gian. Hiện, chỉ chủ hộ hoặc người đang thuê nhà mới được xem xét cho sử dụng vỉa hè.',
      },
      {
        text: '11 tuyến đường đủ điều kiện tổ chức làm điểm kinh doanh, mua bán hàng hóa trên địa bàn quận 1 gồm: Hoàng Sa (phường Tân Định), Mạc Đĩnh Chi (phường Đa Kao); Hải Triều và Chu Mạnh Trinh (phường Bến Nghé); Lê Thánh Tôn, Phan Bội Châu và Phan Chu Trinh (phường Bến Thành); Hàm Nghi (phường Nguyễn Thái Bình); Trần Hưng Đạo (phường Phạm Ngũ Lão, Nguyễn Cư Trinh, Cầu Ông Lãnh, Cầu Kho);  Cô Bắc (phường Cầu Ông Lãnh); Võ Văn Kiệt (phường Cô Giang).',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/duong-le-thanh-ton-1717575288227211083420.jpg',
          capture:
            'Tuyến "đắt khách" nhất trên địa bàn quận 1 là Lê Thánh Tôn với 80 trường hợp đã đăng ký sử dụng một phần vỉa hè; Ảnh: PHAN ANH',
        },
      },
    ],
  },
  {
    id: 'A16',
    title: 'Tạm đình chỉ hoạt động một trung tâm Đăng kiểm ở Gia Lai',
    author: 'Hoàng Thanh',
    publishDate: '05-06-24 16:36',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, Sở GTVT Gia Lai cho biết đã có quyết định tạm đình chỉ hoạt động kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ trong thời gian 3 tháng đối với Công ty TNHH Đăng kiểm xe cơ giới tỉnh Gia Lai (Trung tâm Đăng kiểm 81-03D).',
      },
      {
        text: 'Nguyên nhân đưa ra là Công ty TNHH Đăng kiểm xe cơ giới tỉnh Gia Lai đã có vi phạm khi thực hiện kiểm định và cấp giấy chứng nhận kiểm định cho xe cơ giới không đúng quy định, tiêu chuẩn, quy chuẩn kỹ thuật; có từ 3 lượt đăng kiểm viên trở lên bị xử phạt do vi phạm quy định về hoạt động kiểm định an toàn kỹ thuật và bảo vệ môi trường xe cơ giới...',
      },
      {
        text: 'Vào tháng 7-2023, Cơ quan CSĐT Công an tỉnh Gia Lai đã khởi tố, bắt tạm giam các ông Vũ Văn Tiên (32 tuổi, Phó giám đốc), ông Đỗ Văn Xuân (43 tuổi, nguyên Phó giám đốc) và ông Phan Văn Hùng (44 tuổi, nguyên đăng kiểm viên) của Trung tâm Đăng kiểm 81-03D để điều tra về hành vi "Nhận hối lộ".',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/11111-17175786214851373786714.jpg',
          capture:
            'Bị can Đỗ Văn Xuân, nguyên Phó giám đốc Trung tâm Đăng kiểm 81-03D, nghe đọc lệnh khởi tố - Ảnh công an cung cấp',
        },
      },
    ],
  },
  {
    id: 'A17',
    title:
      'Ông Nguyễn Văn Nên làm Trưởng Tiểu ban Nhân sự Đại hội Đại biểu Đảng bộ TP HCM lần thứ XII',
    author: 'LÊ VĨNH',
    publishDate: '05-06-24 16:41',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Thành ủy TP HCM vừa có Quyết định về thành lập Tiểu ban Nhân sự Đại hội Đại biểu Đảng bộ TP HCM lần thứ XII, nhiệm kỳ 2025 - 2030 (gọi tắt là Tiểu ban Nhân sự).',
      },
      {
        text: 'Theo đó, Tiểu ban Nhân sự gồm 7 người. Ủy viên Bộ Chính trị, Bí thư Thành ủy TP HCM Nguyễn Văn Nên làm Trưởng Tiểu ban.',
      },
      {
        text: 'Tiểu ban Nhân sự có nhiệm vụ xây dựng phương hướng nhân sự Ban Chấp hành Đảng bộ TP HCM khóa XII trình Ban Thường vụ Thành ủy và trình Ban Chấp hành Đảng bộ TP HCM thông qua; xây dựng kế hoạch và triển khai việc giới thiệu nhân sự ứng cử Ban Chấp hành Đảng bộ TP HCM khóa XII trình Ban Thường vụ Thành ủy; xây dựng báo cáo công tác nhân sự Ban Chấp hành Đảng bộ TP HCM khóa XII trình Đại hội Đại biểu Đảng bộ TP HCM lần thứ XII.',
      },
      {
        text: 'Tiểu ban Nhân sự có Tổ giúp việc do Trưởng Tiểu ban đề xuất và Thường trực Thành ủy TP HCM quyết định. Tiểu ban Nhân sự được tiếp nhận các chỉ thị, nghị quyết của Trung ương, chỉ đạo các cơ quan chuyên trách tham mưu giúp việc trình Ban Thường vụ Thành ủy lãnh đạo triển khai thực hiện; được làm việc với các cấp, các ngành về những vấn đề liên quan đến công tác nhân sự Ban Chấp hành Đảng bộ TP HCM khóa XII.',
      },
      {
        text: 'Ban Thường vụ Thành ủy TP HCM cũng đã có quyết định về thành lập Tổ giúp việc Tiểu ban Nhân sự (gọi tắt là Tổ giúp việc). Theo đó, Tổ giúp việc gồm 4 người. Bà Văn Thị Bạch Tuyết - Thành ủy viên, Trưởng Ban Tổ chức Thành ủy TP HCM làm Tổ trưởng.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/3/27/098c149994e93bb762f8-1711540802031793114339.jpg',
          capture:
            'Ủy viên Bộ Chính trị, Bí thư Thành ủy TP HCM Nguyễn Văn Nên làm Trưởng Tiểu ban Nhân sự Đại hội Đại biểu Đảng bộ TP HCM lần thứ XII, nhiệm kỳ 2025 - 2030',
        },
      },
      {
        text: 'Tổ giúp việc có nhiệm vụ giúp Tiểu ban Nhân sự xây dựng phương hướng nhân sự Ban Chấp hành Đảng bộ TP HCM khóa XII trình Ban Thường vụ Thành ủy và trình Ban Chấp hành Đảng bộ TP HCM thông qua; giúp Tiểu ban Nhân sự xây dựng kế hoạch và triển khai việc giới thiệu nhân sự ứng cử Ban Chấp hành Đảng bộ TP HCM khóa XII trình Ban Thường vụ Thành ủy; giúp Tiểu ban Nhân sự xây dựng báo cáo công tác nhân sự Ban Chấp hành Đảng bộ TP HCM khóa XII trình Đại hội Đại biểu Đảng bộ TP HCM lần thứ XII.',
      },
    ],
  },
  {
    id: 'A18',
    title: 'Tra cứu thực tế vé bay cao điểm hè hôm nay 5-6',
    author: 'Tin-ảnh: Dương Ngọc',
    publishDate: '05-06-24 16:45',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Thông tin từ Cục Hàng không Việt Nam cho biết tra cứu thực tế tại thời điểm 12 giờ 30 ngày 5-6, giá vé trên các chặng bay nội địa (trục chính và du lịch) hạng phổ thông cơ bản (chưa gồm thuế, phí) đang được các hãng hàng không Việt Nam công bố đang thấp hơn đáng kể so với mức tối đa giá dịch vụ vận chuyển hàng không nội địa hạng phổ thông cơ bản theo quy định.',
      },
      {
        text: 'Trong tháng 6-2024, giá vé tương đương từ 13%-80% mức giá tối đa trên các chặng bay.',
      },
      {
        text: 'Theo đó, khi lựa chọn ngày bay vào cuối tuần gần nhất (thứ bảy, ngày 8-6): Trên chặng Hà Nội - TP HCM, Vietnam Airlines có giá dao động từ 1,26-2,9 triệu đồng (tương đương 37%-86,4% mức giá tối đa theo quy định là 3,4 triệu đồng); Vietravel Airlines có giá dao động từ 1-1,2 triệu đồng (tương đương 29,6%-35,2% mức giá tối đa theo quy định).',
      },
      {
        text: 'Trên chặng Hà Nội - Đà Nẵng, Vietnam Airlines có giá dao động từ 0,7-1,8 triệu đồng (tương đương 25%-62% mức giá tối đa theo quy định là 2,89 triệu đồng); Vietjet Air có giá dao động từ 0,4-1,7 triệu đồng (tương đương 13,5%-57,1% mức giá tối đa theo quy định).',
      },
      {
        text: 'Trên chặng Hà Nội - Phú Quốc, Vietnam Airlines công bố giá 2,3 triệu đồng, (tương đương 56,7% mức giá tối đa theo quy định là 4 triệu đồng); Vietjet Air có giá dao động từ 1,4-2 triệu đồng (tương đương 34,8%-51% mức giá tối đa theo quy định).',
      },
      {
        text: 'Khi đặt vé cho các ngày xa hơn, các hãng có sẵn các mức giá thấp hơn để hành khách lựa chọn. Trong tháng 7-2024, giá vé tương đương từ 20%-70% mức tối đa trên các chặng bay.',
      },
      {
        text: 'Cụ thể, với ngày bay vào cuối tuần tháng 7 (thứ bảy, ngày 13-7): Trên chặng Hà Nội - TP HCM, Vietnam Airlines có giá dao động từ 1,1-1,7 triệu đồng (tương đương 31%-48% mức giá tối đa theo quy định là 3,4 triệu đồng); Vietjet Air có giá dao động từ 0,8-1,3 triệu đồng (tương đương 23,2%-37,9% mức giá tối đa theo quy định).',
      },
      {
        text: 'Trên chặng Hà Nội - Đà Nẵng, Vietnam Airlines có giá dao động từ 0,6-1,8 triệu đồng (tương đương 21%-62% mức giá tối đa theo quy định là 2,89 triệu đồng); Vietravel Airlines có giá dao động từ 0,6-1,4 triệu đồng (tương đương 20%-47% mức giá tối đa theo quy định).',
      },
      {
        text: 'Trên chặng Hà Nội - Phú Quốc, Vietnam Airlines công bố giá từ 2,3-2,8 triệu đồng, (tương đương 56,7%-70% mức giá tối đa theo quy định là 4 triệu đồng); Vietjet Air có giá dao động từ 1,2-1,8 triệu đồng (tương đương 30%-45% mức giá tối đa theo quy định).',
      },
      {
        text: 'Trước đó, cuối tháng 5, Bộ Giao thông Vận tải có văn bản gửi Cục Hàng không Việt Nam; Viện Chiến lược và Phát triển Giao thông Vận tải, các hãng hàng không Vietnam Airlines, Vietjet Air, Pacific Airlines, Bamboo Airways, Vietravel Airlines yêu cầu tăng cường công tác quản lý nhà nước, kiểm soát chặt chẽ giá vé máy bay thời gian tới.',
      },
      {
        text: 'Đồng thời, Bộ Giao thông Vận tải giao Cục Hàng không khẩn trương nghiên cứu, đề xuất các giải pháp, chính sách để giảm giá vé máy bay.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/z5510123560720f546bdb5913cea2327e03c17b39c8cec-17175803898212108514483.jpg',
          capture:
            'Hành khách làm thủ tục tại sân bay Nội Bài. Ảnh: Dương Ngọc',
        },
      },
      {
        text: 'Viện Chiến lược và Phát triển giao thông vận tải phân tích, đánh giá, dự báo, phối hợp tham mưu chính sách nâng cao năng lực vận chuyển, tiết giảm chi phí hạ giá thành vận tải.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/anh-man-hinh-2024-06-05-luc-161613-17175800572132056705732.png',
          capture: 'Hình ảnh',
        },
      },
      {
        text: 'Các hãng hàng không Việt Nam thực hiện nghiêm quy định về giá vé máy bay, thực hiện kê khai giá, niêm yết giá, công khai thông tin về giá và các chương trình bán vé theo quy định. Thông tin về cơ cấu các khoản thu trong giá vé phải đầy đủ, rõ ràng và không gây nhầm lẫn cho hành khách. Có biện pháp nhằm thúc đẩy du lịch, giảm giá vé.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/anh-man-hinh-2024-06-05-luc-161637-17175801108911080783065.png',
          capture: 'Hình ảnh',
        },
      },
    ],
  },
  {
    id: 'A19',
    title:
      'Đại biểu Quốc hội chất vấn về đường đua F1 được xây dựng "hoành tráng" nhưng đang bỏ không',
    author: 'Minh Chiến - Huy Thanh - Văn Duẩn',
    publishDate: '05-06-24 16:51',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chất vấn Bộ trưởng Bộ Văn hoá, Thể thao và Du lịch (VH-TT-DL) Nguyễn Văn Hùng chiều 5-6 tại kỳ họp thứ 7, Quốc hội khóa XV, đại biểu Nguyễn Công Long (đoàn Đồng Nai) nêu thực trạng đường đua F1 (gần sân vận động Mỹ Đình, quận Nam Từ Liêm, Hà Nội) được đầu tư, xây dựng hoành tráng, nhưng đến nay không khai thác, sử dụng. "Đề nghị Bộ trưởng cho biết giải pháp khai thác đường đua này"- đại biểu chất vấn.',
      },
      {
        text: 'Trả lời nội dung này, Bộ trưởng Nguyễn Văn Hùng cho biết công trình đường đua F1 do UBND TP Hà Nội là chủ đầu tư và triển khai xây dựng. Do nhiều lý do khách quan, chủ quan, dự án đã hoàn thành nhưng không được triển khai nữa.',
      },
      {
        text: '"Với tư cách là cơ quan phối hợp, Bộ VH-TT-DL đã bàn giao mặt bằng đất đai để các đơn vị thực hiện, xây dựng đường đua"- Bộ trưởng Nguyễn Văn Hùng nêu rõ và cho biết việc đường đua có trở lại hoạt động hay không, lãnh đạo UBND TP Hà Nội sẽ có câu trả lời chính thức.',
      },
      {
        text: 'Điều hành phiên chất vấn, Chủ tịch Quốc hội Trần Thanh Mẫn đề nghị lãnh đạo TP Hà Nội có văn bản trả lời đại biểu Nguyễn Công Long về việc khai thác, sử dụng đường đua F1.',
      },
      {
        text: 'Đại biểu Nguyễn Công Long cũng đặt câu hỏi với Bộ trưởng Nguyễn Văn Hùng về tiến độ giải quyết các bất cập liên quan đến Khu liên hợp thể thao Quốc gia Mỹ Đình, khi con số nợ thuế của đơn vị này đã lên tới con số 1.000 tỉ đồng.',
      },
      {
        text: 'Theo Bộ trưởng Nguyễn Văn Hùng, sau khi thực hiện kết luận của Thanh tra Chính phủ năm 2021, Bộ đã tập trung rà soát, xử lý các kiến nghị của thanh tra. Hiện cơ quan này đang triển khai các công việc liên quan và báo cáo Chính phủ.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/hung2-17175809905241278473418.jpg',
          capture:
            'Bộ trưởng VH-TT-DL Nguyễn Văn Hùng trả lời chất vấn của các đại biểu Quốc hội',
        },
      },
      {
        text: 'Bộ VH-TT-DL cũng sẽ rà soát quy định, xử lý vấn đề liên quan đất đai và xử lý các nội dung còn tồn đọng, tiếp cận theo hướng Nhà nước đầu tư nhưng cần có đề án cụ thể để khai thác, sử dụng hiệu quả. Sau khi Thủ tướng phê duyệt các đề án này, Bộ mới có cơ sở để giải quyết căn cơ các bài toán, từ nợ thuế đất, đưa vào sử dụng theo hướng đầu tư công - quản trị tư hiệu quả hơn.',
      },
    ],
  },
  {
    id: 'A20',
    title: 'Xe chở keo lao xuống vực, 2 người chết',
    author: 'Trần Thường',
    publishDate: '05-06-24 16:55',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Chiều 5-6, lãnh đạo UBND huyện Tiên Phước (tỉnh Quảng Nam) xác nhận thông tin trên địa bàn vừa xảy ra vụ tai nạn giao thông khiến 2 người tử vong.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/4476711204160566547399348211980418972668501n-1717579248765653490134.jpg',
          capture:
            'Chiếc xe bị mất lái lao xuống vực khiến 2 người bị mắc kẹt trong cabin',
        },
      },
      {
        text: 'Theo thông tin ban đầu, khoảng 14 giờ chiều cùng ngày, xe tải chở keo lưu thông trên tuyến Quốc lộ 40B theo hướng Trà My về Tam Kỳ, khi qua khu vực đèo Liêu thuộc địa phận xã Tiên Cảnh (huyện Tiên Phước) thì xe bị mất lái lao xuống vực.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/4367546244763559814979981356332922968837998n-17175792485062125035230.jpg',
          capture: 'Hình ảnh',
        },
      },
      {
        text: 'Sau tai nạn, tài xế và phụ xe bị mắc kẹt trong cabin, tử vong tại chỗ, chiếc xe tải bị hư hỏng nặng. Cơ quan chức năng và người dân địa phương đã rất vất vả để di chuyển gỗ keo ra khỏi xe, đưa thi thể tài xế và phụ xe ra ngoài.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/z55100142716703d010c0f0f685e60a7250e9fd531a72b-1717579248673354128818.jpg',
          capture: 'Hình ảnh',
        },
      },
      {
        text: 'Được biết, 2 nạn nhân tử vong gồm một người đàn ông và một phụ nữ, là người trú tại xã Tam Thái, huyện Phú Ninh. Hiện nguyên nhân vụ việc đang được cơ quan chức năng điều tra làm rõ.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/z5510014283436d80a88b922fcbcfef0498557cb3ba312-17175792485841198130134.jpg',
          capture: '2 nạn nhân đã không qua khỏi',
        },
      },
    ],
  },
  {
    id: 'A21',
    title: 'Ra mắt 2 công trình ý nghĩa trên xã đảo Thạnh An',
    author: 'Tin-ảnh: Minh Diễm',
    publishDate: '05-06-24 16:59',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, tại Nhà Văn hóa Thể thao ấp Thạnh Bình (xã Thạnh An, huyện Cần Giờ, TP HCM), UBND huyện Cần Giờ phối hợp với Báo Người Lao Động, Bộ Chỉ huy Bộ đội Biên phòng TP HCM và Bộ Tư lệnh TP HCM tổ chức Lễ nghiệm thu, khánh thành công trình "Không gian Văn hóa Hồ Chí Minh" và "Đường cờ Tổ quốc". Sự kiện diễn ra trong không khí trang trọng, phấn khởi của người dân xã đảo Thạnh An.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img9809-17175773151911187390351.jpg',
          capture:
            'Lễ nghiệm thu, khánh thành công trình "Không gian Văn hóa Hồ Chí Minh" và "Đường cờ Tổ quốc" trên địa bàn xã đảo Thạnh An',
        },
      },
      {
        text: 'Tham dự chương trình có Thượng tá Võ Văn Thọ,  Phó Chủ nhiệm Chính trị Bộ Tư lệnh TP HCM; Đại tá Nguyễn Văn Tiến, Phó Chính ủy Bộ đội Biên phòng TP HCM; ông Bùi Thanh Liêm, Phó Tổng Biên tập Báo Người Lao Động; cùng lãnh đạo và người dân, các em học sinh trên địa bàn huyện Cần Giờ.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img9823-17175778139331637042897.jpg',
          capture:
            'Các đại biểu cắt băng khánh thành, đưa 2 công trình mang nhiều ý nghĩa vào sử dụng',
        },
      },
      {
        text: 'Công trình "Không gian Văn hóa Hồ Chí Minh" được xây dựng trên tuyến đường dọc bờ kè ấp Thạnh Bình đến trường THCS - THPT xã Thạnh An với nhiều hạng mục như banner tuyên truyền, banner hình ảnh Bác, các cụm hoa sen trang trí... Công trình được xây dựng với tổng mức đầu tư gần 1,5 tỉ đồng.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img9842-1717577442469557948311.jpg',
          capture: 'Khánh thành công trình "Không gian Văn hóa Hồ Chí Minh"',
        },
      },
      {
        text: 'Phát biểu tại buổi lễ, ông Phạm Minh Châu, Chủ tịch UBND xã Thạnh An, cho biết đây là công trình có ý nghĩa quan trọng, thiết thực trên địa bàn xã.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/edit-img9858-17175776089041156921443.jpeg',
          capture: 'Các đại biểu tham quan "Không gian Văn hóa Hồ Chí Minh"',
        },
      },
      {
        text: '"Không gian sẽ là nơi tham quan, học tập góp phần xây dựng xã đảo Thạnh An thêm phát triển. Đồng thời, công trình cũng đưa nét đẹp nhân cách của Bác thấm sâu vào nhận thức và hành động của mỗi cán bộ và nhân dân trên xã đảo Thạnh An. Qua đó tuyên truyền, giáo dục về cuộc đời, sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh, đặc biệt là với thế hệ trẻ" - ông Châu nói.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img9837-1717577905552272811044.jpg',
          capture:
            'Khánh thành "Đường cờ Tổ quốc" trên địa bàn xã đảo Thạnh An',
        },
      },
      {
        text: 'Công trình "Đường cờ Tổ quốc" được thực hiện trên địa bàn ấp Thạnh Bình và ấp Thạnh Hòa có chiều dài 1km.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img9800-17175780673181662161181.jpg',
          capture: 'Đoàn dâng hương Chủ tịch Hồ Chí Minh',
        },
      },
      {
        text: 'Công trình có tổng mức đầu tư hơn 660 triệu đồng do Bộ Chỉ huy Bộ đội Biên phòng TP HCM và Báo Người Lao Động hỗ trợ. Công trình gồm các hạng mục xây dựng như hộp đèn cờ Tổ quốc và bộ đèn năng lượng phục vụ chiếu sáng hộp đèn cờ Tổ quốc.',
      },
      {
        text: 'Trong khuôn khổ chương trình, đoàn đã dâng hương Chủ tịch Hồ Chí Minh tại Phòng tưởng niệm Chủ tịch Hồ Chí Minh.',
      },
    ],
  },
  {
    id: 'A22',
    title:
      'Bình Dương: 6 người trên xe tải lao xuống cây xăng gây hỗn chiến kinh hoàng',
    author: 'Thanh Thảo',
    publishDate: '05-06-24 17:03',
    category: Category.THOI_SU,
    paragraphs: [
      {
        text: 'Ngày 5-6, Công an TP Thủ Dầu Một, tỉnh Bình Dương đang phối hợp các cơ quan chức năng điều tra vụ hỗn chiến tại một cây xăng, gây thương tích cho một số người.',
      },
      {
        text: 'Hình ảnh từ camera ghi lại, vào khoảng 19 giờ 15 phút ngày 2-6, một chiếc xe tải chở theo 6 người đàn ông tiến vào trong một cây xăng ở phường Định Hòa, TP Thủ Dầu Một.',
      },
      {
        text: 'Lúc này đang có một số người đứng chờ đổ xăng, chiếc xe tải vừa dừng thì nhóm thanh niên, trong đó một số người cầm hung khí như dao tự chế, gậy gỗ lao vào tấn công nhân viên cây xăng.',
      },
      {
        text: 'Người đứng chờ đổ xăng được một phen hú vía, nháo nhào chạy trốn, còn một số nhân viên bên trong cũng cầm dao tự chế chạy ra tấn công lại nhóm đối phương.',
      },
      {
        text: 'Sau vụ ẩu đã, nhóm người trên xe tải lên xe rời khỏi hiện trường. Hiện 1 nhân viên cây xăng là anh H.Q.V (29 tuổi, quê Long An) bị gãy tay, phải nhập viện cấp cứu. Ngoài ra còn có 2 người khác bị thương.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img3481-1717580324999450973722.jpeg',
          capture: 'Các đối tượng sử dụng dao, gậy...',
        },
      },
      {
        text: 'Nhóm đối tượng trên cũng đã bị công an triệu tập để điều tra, làm rõ vụ việc.',
        image: {
          link: 'https://nld.mediacdn.vn/291774122806476800/2024/6/5/img3480-17175802943551787883093.jpeg',
          capture: 'Nhóm người hỗn chiến trước cây xăng',
        },
      },
      {
        text: 'Trao đổi với phóng viên, quản lý cây xăng cho biết nhân viên trong cây xăng không có ai mâu thuẫn với nhóm người nói trên mà do nhóm này đánh nhầm người.',
      },
    ],
  },
];

export default newsDetail;
