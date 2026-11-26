// Dữ liệu từ vựng — Hộ chiếu ngôn ngữ
// vi|en|zh|pinyin|ja|romaji|ko|romaja|fr|es|de
const TOPICS=[
 ['Chào hỏi',['Xin chào|Hello|你好|nǐ hǎo|こんにちは|konnichiwa|안녕하세요|annyeonghaseyo|Bonjour|Hola|Hallo','Cảm ơn|Thank you|谢谢|xièxie|ありがとう|arigatō|감사합니다|gamsahamnida|Merci|Gracias|Danke','Xin lỗi|Sorry|对不起|duìbuqǐ|ごめんなさい|gomennasai|미안합니다|mianhamnida|Pardon|Lo siento|Entschuldigung','Tạm biệt|Goodbye|再见|zàijiàn|さようなら|sayōnara|안녕히 가세요|annyeonghi gaseyo|Au revoir|Adiós|Auf Wiedersehen','Vâng / Có|Yes|是|shì|はい|hai|네|ne|Oui|Sí|Ja','Không|No|不|bù|いいえ|iie|아니요|aniyo|Non|No|Nein','Chào buổi sáng|Good morning|早上好|zǎoshang hǎo|おはよう|ohayō|좋은 아침|joeun achim|Bonjour|Buenos días|Guten Morgen','Bạn khỏe không?|How are you?|你好吗？|nǐ hǎo ma?|お元気ですか？|ogenki desu ka?|잘 지내세요?|jal jinaeseyo?|Comment ça va ?|¿Cómo estás?|Wie geht\'s?']],
 ['Giới thiệu',['Tôi|I|我|wǒ|私|watashi|저|jeo|Je|Yo|Ich','Bạn|You|你|nǐ|あなた|anata|당신|dangsin|Tu|Tú|Du','Bạn tên gì?|What\'s your name?|你叫什么名字？|nǐ jiào shénme míngzi?|お名前は？|onamae wa?|이름이 뭐예요?|ireumi mwoyeyo?|Comment tu t\'appelles ?|¿Cómo te llamas?|Wie heißt du?']],
 ['Số đếm',['Một|One|一|yī|一|ichi|하나|hana|Un|Uno|Eins','Hai|Two|二|èr|二|ni|둘|dul|Deux|Dos|Zwei','Ba|Three|三|sān|三|san|셋|set|Trois|Tres|Drei','Bốn|Four|四|sì|四|yon|넷|net|Quatre|Cuatro|Vier','Năm|Five|五|wǔ|五|go|다섯|daseot|Cinq|Cinco|Fünf','Mười|Ten|十|shí|十|jū|열|yeol|Dix|Diez|Zehn','Một trăm|One hundred|一百|yìbǎi|百|hyaku|백|baek|Cent|Cien|Hundert']],
 ['Gia đình',['Mẹ|Mother|妈妈|māma|お母さん|okāsan|어머니|eomeoni|Mère|Madre|Mutter','Bố|Father|爸爸|bàba|お父さん|otōsan|아버지|abeoji|Père|Padre|Vater','Anh trai|Older brother|哥哥|gēge|兄|ani|형 / 오빠|hyeong / oppa|Grand frère|Hermano mayor|Älterer Bruder','Chị gái|Older sister|姐姐|jiějie|姉|ane|누나 / 언니|nuna / eonni|Grande sœur|Hermana mayor|Ältere Schwester','Bạn bè|Friend|朋友|péngyou|友達|tomodachi|친구|chingu|Ami|Amigo|Freund','Đứa trẻ|Child|孩子|háizi|子供|kodomo|아이|ai|Enfant|Niño|Kind','Gia đình|Family|家庭|jiātíng|家族|kazoku|가족|gajok|Famille|Familia|Familie']],
 ['Đồ ăn',['Nước|Water|水|shuǐ|水|mizu|물|mul|Eau|Agua|Wasser','Cơm|Rice|米饭|mǐfàn|ご飯|gohan|밥|bap|Riz|Arroz|Reis','Bánh mì|Bread|面包|miànbāo|パン|pan|빵|ppang|Pain|Pan|Brot','Cà phê|Coffee|咖啡|kāfēi|コーヒー|kōhī|커피|keopi|Café|Café|Kaffee','Trà|Tea|茶|chá|お茶|ocha|차|cha|Thé|Té|Tee','Quả táo|Apple|苹果|píngguǒ|りんご|ringo|사과|sagwa|Pomme|Manzana|Apfel','Thịt gà|Chicken|鸡肉|jīròu|鶏肉|toriniku|닭고기|dakgogi|Poulet|Pollo|Hähnchen','Cá|Fish|鱼|yú|魚|sakana|생선|saengseon|Poisson|Pescado|Fisch','Ngon|Delicious|好吃|hǎochī|おいしい|oishii|맛있어요|masisseoyo|Délicieux|Delicioso|Lecker']],
 ['Động từ',['Ăn|Eat|吃|chī|食べる|taberu|먹다|meokda|Manger|Comer|Essen','Uống|Drink|喝|hē|飲む|nomu|마시다|masida|Boire|Beber|Trinken','Đi|Go|去|qù|行く|iku|가다|gada|Aller|Ir|Gehen','Ngủ|Sleep|睡觉|shuìjiào|寝る|neru|자다|jada|Dormir|Dormir|Schlafen','Học|Study|学习|xuéxí|勉強する|benkyō suru|공부하다|gongbuhada|Étudier|Estudiar|Lernen','Yêu|Love|爱|ài|愛する|aisuru|사랑하다|saranghada|Aimer|Amar|Lieben','Muốn|Want|想要|xiǎng yào|欲しい|hoshii|원하다|wonhada|Vouloir|Querer|Wollen']],
 ['Thời gian',['Hôm nay|Today|今天|jīntiān|今日|kyō|오늘|oneul|Aujourd\'hui|Hoy|Heute','Ngày mai|Tomorrow|明天|míngtiān|明日|ashita|내일|naeil|Demain|Mañana|Morgen','Hôm qua|Yesterday|昨天|zuótiān|昨日|kinō|어제|eoje|Hier|Ayer|Gestern','Bây giờ|Now|现在|xiànzài|今|ima|지금|jigeum|Maintenant|Ahora|Jetzt','Buổi sáng|Morning|早上|zǎoshang|朝|asa|아침|achim|Le matin|La mañana|Der Morgen','Buổi tối|Evening|晚上|wǎnshang|夜|yoru|저녁|jeonyeok|Le soir|La noche|Der Abend','Tuần|Week|星期|xīngqī|週|shū|주|ju|Semaine|Semana|Woche']],
 ['Màu sắc',['Màu đỏ|Red|红色|hóngsè|赤|aka|빨간색|ppalgansaek|Rouge|Rojo|Rot','Màu xanh dương|Blue|蓝色|lánsè|青|ao|파란색|paransaek|Bleu|Azul|Blau','Màu xanh lá|Green|绿色|lǜsè|緑|midori|초록색|choroksaek|Vert|Verde|Grün','Màu vàng|Yellow|黄色|huángsè|黄色|kiiro|노란색|noransaek|Jaune|Amarillo|Gelb','Màu đen|Black|黑色|hēisè|黒|kuro|검은색|geomeunsaek|Noir|Negro|Schwarz','Màu trắng|White|白色|báisè|白|shiro|흰색|huinsaek|Blanc|Blanco|Weiß']],
 ['Đồ vật',['Nhà|House|家|jiā|家|ie|집|jip|Maison|Casa|Haus','Trường học|School|学校|xuéxiào|学校|gakkō|학교|hakgyo|École|Escuela|Schule','Điện thoại|Phone|手机|shǒujī|携帯電話|keitai denwa|휴대폰|hyudaepon|Téléphone|Teléfono|Handy','Sách|Book|书|shū|本|hon|책|chaek|Livre|Libro|Buch','Tiền|Money|钱|qián|お金|okane|돈|don|Argent|Dinero|Geld']],
 ['Du lịch',['Sân bay|Airport|机场|jīchǎng|空港|kūkō|공항|gonghang|Aéroport|Aeropuerto|Flughafen','Khách sạn|Hotel|酒店|jiǔdiàn|ホテル|hoteru|호텔|hotel|Hôtel|Hotel|Hotel','Vé|Ticket|票|piào|切符|kippu|표|pyo|Billet|Billete|Fahrkarte','Tàu hỏa|Train|火车|huǒchē|電車|densha|기차|gicha|Train|Tren|Zug','Bên trái|Left|左|zuǒ|左|hidari|왼쪽|oenjjok|Gauche|Izquierda|Links','Bên phải|Right|右|yòu|右|migi|오른쪽|oreunjjok|Droite|Derecha|Rechts','Bao nhiêu tiền?|How much is it?|多少钱？|duōshao qián?|いくらですか？|ikura desu ka?|얼마예요?|eolmayeyo?|Combien ça coûte ?|¿Cuánto cuesta?|Wie viel kostet das?','Nhà vệ sinh ở đâu?|Where is the toilet?|厕所在哪里？|cèsuǒ zài nǎlǐ?|トイレはどこですか？|toire wa doko desu ka?|화장실이 어디예요?|hwajangsiri eodiyeyo?|Où sont les toilettes ?|¿Dónde está el baño?|Wo ist die Toilette?']]
];
const TOPICS_EXTRA=[];
const SENT=[
 {vi:'Xin chào, cảm ơn bạn.',en:['Hello thank you'],zh:['你好/谢谢/你','nǐ hǎo xièxie nǐ'],ja:['こんにちは/ありがとう','konnichiwa arigatō'],ko:['안녕하세요 감사합니다','annyeonghaseyo gamsahamnida'],fr:['Bonjour merci'],es:['Hola gracias'],de:['Hallo danke']},
 {vi:'Chào buổi sáng, bạn khỏe không?',en:['Good morning how are you'],zh:['早上好/你好吗','zǎoshang hǎo nǐ hǎo ma'],ja:['おはよう/お元気ですか','ohayō ogenki desu ka'],ko:['좋은 아침 잘 지내세요','joeun achim jal jinaeseyo'],fr:['Bonjour comment ça va'],es:['Buenos días cómo estás'],de:['Guten Morgen wie geht\'s']},
 {vi:'Một, hai, ba, bốn, năm.',en:['One two three four five'],zh:['一/二/三/四/五','yī èr sān sì wǔ'],ja:['一/二/三/四/五','ichi ni san yon go'],ko:['하나 둘 셋 넷 다섯','hana dul set net daseot'],fr:['Un deux trois quatre cinq'],es:['Uno dos tres cuatro cinco'],de:['Eins zwei drei vier fünf']},
 {vi:'Mẹ và bố của tôi.',en:['My mother and my father'],zh:['我的/妈妈/和/爸爸','wǒ de māma hé bàba'],ja:['私の/母/と/父','watashi no haha to chichi'],ko:['우리 엄마와 아빠','uri eommawa appa'],fr:['Ma mère et mon père'],es:['Mi madre y mi padre'],de:['Meine Mutter und mein Vater']},
 {vi:'Tôi uống cà phê.',en:['I drink coffee'],zh:['我/喝/咖啡','wǒ hē kāfēi'],ja:['私は/コーヒーを/飲みます','watashi wa kōhī o nomimasu'],ko:['저는 커피를 마셔요','jeoneun keopireul masyeoyo'],fr:['Je bois du café'],es:['Yo bebo café'],de:['Ich trinke Kaffee']},
 {vi:'Con cá này rất ngon.',en:['This fish is delicious'],zh:['这个/鱼/很/好吃','zhège yú hěn hǎochī'],ja:['この/魚は/おいしい/です','kono sakana wa oishii desu'],ko:['이 생선은 맛있어요','i saengseoneun masisseoyo'],fr:['Ce poisson est délicieux'],es:['Este pescado está delicioso'],de:['Dieser Fisch ist lecker']},
 {vi:'Hôm nay tôi muốn học.',en:['Today I want to study'],zh:['今天/我/想/学习','jīntiān wǒ xiǎng xuéxí'],ja:['今日は/勉強したい/です','kyō wa benkyō shitai desu'],ko:['오늘 공부하고 싶어요','oneul gongbuhago sipeoyo'],fr:['Aujourd\'hui je veux étudier'],es:['Hoy quiero estudiar'],de:['Heute will ich lernen']},
 {vi:'Bây giờ là buổi tối.',en:['It is evening now'],zh:['现在/是/晚上','xiànzài shì wǎnshang'],ja:['今は/夜/です','ima wa yoru desu'],ko:['지금은 저녁이에요','jigeumeun jeonyeogieyo'],fr:['Maintenant c\'est le soir'],es:['Ahora es de noche'],de:['Jetzt ist es Abend']},
 {vi:'Tôi thích màu đỏ.',en:['I like red'],zh:['我/喜欢/红色','wǒ xǐhuan hóngsè'],ja:['私は/赤が/好き/です','watashi wa aka ga suki desu'],ko:['저는 빨간색을 좋아해요','jeoneun ppalgansaegeul joahaeyo'],fr:['J\'aime le rouge'],es:['Me gusta el rojo'],de:['Ich mag Rot']},
 {vi:'Tôi đọc sách ở nhà.',en:['I read a book at home'],zh:['我/在/家/看书','wǒ zài jiā kàn shū'],ja:['私は/家で/本を/読みます','watashi wa ie de hon o yomimasu'],ko:['저는 집에서 책을 읽어요','jeoneun jibeseo chaegeul ilgeoyo'],fr:['Je lis un livre à la maison'],es:['Leo un libro en casa'],de:['Ich lese ein Buch zu Hause']},
 {vi:'Khách sạn ở đâu?',en:['Where is the hotel'],zh:['酒店/在/哪里','jiǔdiàn zài nǎlǐ'],ja:['ホテルは/どこ/ですか','hoteru wa doko desu ka'],ko:['호텔이 어디예요','hoteri eodiyeyo'],fr:['Où est l\'hôtel'],es:['Dónde está el hotel'],de:['Wo ist das Hotel']}
];

// ===== Đợt 1 mở rộng: chỉ Anh / Trung / Nhật / Hàn =====
// "# Chủ đề" rồi mỗi dòng: vi|en|zh|pinyin|ja|romaji|ko|romaja
const NEWRAW=`# Số đếm 2
Sáu|Six|六|liù|六|roku|여섯|yeoseot
Bảy|Seven|七|qī|七|nana|일곱|ilgop
Tám|Eight|八|bā|八|hachi|여덟|yeodeol
Chín|Nine|九|jiǔ|九|kyū|아홉|ahop
Hai mươi|Twenty|二十|èrshí|二十|nijū|스물|seumul
Một nghìn|One thousand|一千|yìqiān|千|sen|천|cheon
Mấy / Bao nhiêu|How many|几|jǐ|いくつ|ikutsu|몇|myeot
# Đại từ & câu hỏi
Anh ấy|He|他|tā|彼|kare|그|geu
Cô ấy|She|她|tā|彼女|kanojo|그녀|geunyeo
Chúng tôi|We|我们|wǒmen|私たち|watashitachi|우리|uri
Họ|They|他们|tāmen|彼ら|karera|그들|geudeul
Cái gì|What|什么|shénme|何|nani|뭐|mwo
Ai|Who|谁|shéi|誰|dare|누구|nugu
Ở đâu|Where|哪里|nǎlǐ|どこ|doko|어디|eodi
Khi nào|When|什么时候|shénme shíhou|いつ|itsu|언제|eonje
Tại sao|Why|为什么|wèishénme|なぜ|naze|왜|wae
Như thế nào|How|怎么|zěnme|どう|dō|어떻게|eotteoke
Cái này|This|这个|zhège|これ|kore|이것|igeot
Cái kia|That|那个|nàge|あれ|are|저것|jeogeot
# Nghề nghiệp
Giáo viên|Teacher|老师|lǎoshī|先生|sensei|선생님|seonsaengnim
Học sinh|Student|学生|xuésheng|学生|gakusei|학생|haksaeng
Bác sĩ|Doctor|医生|yīshēng|医者|isha|의사|uisa
Kỹ sư|Engineer|工程师|gōngchéngshī|エンジニア|enjinia|엔지니어|enjinieo
Nhân viên văn phòng|Office worker|公司职员|gōngsī zhíyuán|会社員|kaishain|회사원|hoesawon
Công việc|Job|工作|gōngzuò|仕事|shigoto|일|il
Công ty|Company|公司|gōngsī|会社|kaisha|회사|hoesa
Bệnh viện|Hospital|医院|yīyuàn|病院|byōin|병원|byeongwon
Đầu bếp|Chef|厨师|chúshī|料理人|ryōrinin|요리사|yorisa
Cảnh sát|Police officer|警察|jǐngchá|警察官|keisatsukan|경찰|gyeongchal
# Quốc gia & ngôn ngữ
Việt Nam|Vietnam|越南|Yuènán|ベトナム|Betonamu|베트남|Beteunam
Người Việt|Vietnamese person|越南人|Yuènán rén|ベトナム人|Betonamujin|베트남 사람|Beteunam saram
Trung Quốc|China|中国|Zhōngguó|中国|Chūgoku|중국|Jungguk
Nhật Bản|Japan|日本|Rìběn|日本|Nihon|일본|Ilbon
Hàn Quốc|Korea|韩国|Hánguó|韓国|Kankoku|한국|Hanguk
Nước Mỹ|America|美国|Měiguó|アメリカ|Amerika|미국|Miguk
Tiếng Anh|English|英语|Yīngyǔ|英語|eigo|영어|yeongeo
Tiếng Trung|Chinese|中文|Zhōngwén|中国語|chūgokugo|중국어|junggugeo
Tiếng Nhật|Japanese|日语|Rìyǔ|日本語|nihongo|일본어|ilboneo
Tiếng Hàn|Korean|韩语|Hányǔ|韓国語|kankokugo|한국어|hangugeo
Đất nước|Country|国家|guójiā|国|kuni|나라|nara
# Tính từ cơ bản
To|Big|大|dà|大きい|ōkii|크다|keuda
Nhỏ|Small|小|xiǎo|小さい|chiisai|작다|jakda
Nhiều|Many|多|duō|多い|ōi|많다|manta
Ít|Few|少|shǎo|少ない|sukunai|적다|jeokda
Tốt|Good|好|hǎo|いい|ii|좋다|jota
Tệ|Bad|坏|huài|悪い|warui|나쁘다|nappeuda
Đẹp|Beautiful|漂亮|piàoliang|きれい|kirei|예쁘다|yeppeuda
Mới|New|新|xīn|新しい|atarashii|새롭다|saeropda
Cũ|Old (thing)|旧|jiù|古い|furui|오래되다|oraedoeda
Đắt|Expensive|贵|guì|高い|takai|비싸다|bissada
Rẻ|Cheap|便宜|piányi|安い|yasui|싸다|ssada
Nóng|Hot|热|rè|暑い|atsui|덥다|deopda
Lạnh|Cold|冷|lěng|寒い|samui|춥다|chupda
Vui|Happy|高兴|gāoxìng|嬉しい|ureshii|기쁘다|gippeuda
Mệt|Tired|累|lèi|疲れた|tsukareta|피곤하다|pigonhada
Bận|Busy|忙|máng|忙しい|isogashii|바쁘다|bappeuda
# Cơ thể & sức khỏe
Đầu|Head|头|tóu|頭|atama|머리|meori
Mắt|Eye|眼睛|yǎnjing|目|me|눈|nun
Tai|Ear|耳朵|ěrduo|耳|mimi|귀|gwi
Miệng|Mouth|嘴|zuǐ|口|kuchi|입|ip
Tay|Hand|手|shǒu|手|te|손|son
Chân|Foot|脚|jiǎo|足|ashi|발|bal
Bụng|Stomach|肚子|dùzi|お腹|onaka|배|bae
Đau|Hurt|疼|téng|痛い|itai|아프다|apeuda
Bệnh|Illness|病|bìng|病気|byōki|병|byeong
Thuốc|Medicine|药|yào|薬|kusuri|약|yak
Khỏe mạnh|Healthy|健康|jiànkāng|元気|genki|건강하다|geonganghada
# Thứ, ngày, giờ
Thứ Hai|Monday|星期一|xīngqīyī|月曜日|getsuyōbi|월요일|woryoil
Thứ Ba|Tuesday|星期二|xīngqī'èr|火曜日|kayōbi|화요일|hwayoil
Thứ Tư|Wednesday|星期三|xīngqīsān|水曜日|suiyōbi|수요일|suyoil
Thứ Năm|Thursday|星期四|xīngqīsì|木曜日|mokuyōbi|목요일|mogyoil
Thứ Sáu|Friday|星期五|xīngqīwǔ|金曜日|kin'yōbi|금요일|geumyoil
Thứ Bảy|Saturday|星期六|xīngqīliù|土曜日|doyōbi|토요일|toyoil
Chủ Nhật|Sunday|星期天|xīngqītiān|日曜日|nichiyōbi|일요일|iryoil
Ngày|Day|天|tiān|日|hi|날|nal
Tháng|Month|月|yuè|月|tsuki|달|dal
Năm (thời gian)|Year|年|nián|年|toshi|년|nyeon
Giờ|O'clock|点|diǎn|時|ji|시|si
Phút|Minute|分钟|fēnzhōng|分|fun|분|bun
# Động từ 2
Đến|Come|来|lái|来る|kuru|오다|oda
Xem|Watch|看|kàn|見る|miru|보다|boda
Nghe|Listen|听|tīng|聞く|kiku|듣다|deutda
Nói|Speak|说|shuō|話す|hanasu|말하다|malhada
Đọc|Read|读|dú|読む|yomu|읽다|ikda
Viết|Write|写|xiě|書く|kaku|쓰다|sseuda
Mua|Buy|买|mǎi|買う|kau|사다|sada
Bán|Sell|卖|mài|売る|uru|팔다|palda
Làm|Do|做|zuò|する|suru|하다|hada
Biết|Know|知道|zhīdào|知る|shiru|알다|alda
Thích|Like|喜欢|xǐhuan|好き|suki|좋아하다|joahada
Có|Have|有|yǒu|ある|aru|있다|itda
Đợi|Wait|等|děng|待つ|matsu|기다리다|gidarida
Mở|Open|开|kāi|開ける|akeru|열다|yeolda
Đóng|Close|关|guān|閉める|shimeru|닫다|datda
Ngồi|Sit|坐|zuò|座る|suwaru|앉다|anda
Đứng|Stand|站|zhàn|立つ|tatsu|서다|seoda
Chạy|Run|跑|pǎo|走る|hashiru|달리다|dallida
Đi bộ|Walk|走路|zǒulù|歩く|aruku|걷다|geotda
Về nhà|Go home|回家|huíjiā|帰る|kaeru|집에 가다|jibe gada
# Trong nhà
Phòng|Room|房间|fángjiān|部屋|heya|방|bang
Cửa|Door|门|mén|ドア|doa|문|mun
Cửa sổ|Window|窗户|chuānghu|窓|mado|창문|changmun
Bàn|Desk|桌子|zhuōzi|机|tsukue|책상|chaeksang
Ghế|Chair|椅子|yǐzi|椅子|isu|의자|uija
Giường|Bed|床|chuáng|ベッド|beddo|침대|chimdae
Nhà bếp|Kitchen|厨房|chúfáng|台所|daidokoro|부엌|bueok
Tivi|TV|电视|diànshì|テレビ|terebi|텔레비전|tellebijeon
Máy tính|Computer|电脑|diànnǎo|パソコン|pasokon|컴퓨터|keompyuteo
Chìa khóa|Key|钥匙|yàoshi|鍵|kagi|열쇠|yeolsoe
Quần áo|Clothes|衣服|yīfu|服|fuku|옷|ot
Giày|Shoes|鞋|xié|靴|kutsu|신발|sinbal
# Đồ ăn 2
Sữa|Milk|牛奶|niúnǎi|牛乳|gyūnyū|우유|uyu
Trứng|Egg|鸡蛋|jīdàn|卵|tamago|계란|gyeran
Thịt bò|Beef|牛肉|niúròu|牛肉|gyūniku|소고기|sogogi
Thịt lợn|Pork|猪肉|zhūròu|豚肉|butaniku|돼지고기|dwaejigogi
Rau|Vegetables|蔬菜|shūcài|野菜|yasai|채소|chaeso
Hoa quả|Fruit|水果|shuǐguǒ|果物|kudamono|과일|gwail
Mì|Noodles|面条|miàntiáo|麺|men|국수|guksu
Muối|Salt|盐|yán|塩|shio|소금|sogeum
Đường|Sugar|糖|táng|砂糖|satō|설탕|seoltang
Bữa sáng|Breakfast|早饭|zǎofàn|朝ご飯|asagohan|아침밥|achimbap
Bữa trưa|Lunch|午饭|wǔfàn|昼ご飯|hirugohan|점심|jeomsim
Bữa tối|Dinner|晚饭|wǎnfàn|晩ご飯|bangohan|저녁밥|jeonyeokbap
Nhà hàng|Restaurant|饭店|fàndiàn|レストラン|resutoran|식당|sikdang
Đói|Hungry|饿|è|お腹が空いた|onaka ga suita|배고프다|baegopeuda
Khát|Thirsty|渴|kě|喉が渇いた|nodo ga kawaita|목마르다|mongmareuda
Cay|Spicy|辣|là|辛い|karai|맵다|maepda
Ngọt|Sweet|甜|tián|甘い|amai|달다|dalda
# Mua sắm
Cửa hàng|Shop|商店|shāngdiàn|店|mise|가게|gage
Siêu thị|Supermarket|超市|chāoshì|スーパー|sūpā|마트|mateu
Chợ|Market|市场|shìchǎng|市場|ichiba|시장|sijang
Giá|Price|价格|jiàgé|値段|nedan|가격|gagyeok
Giảm giá|Discount|打折|dǎzhé|割引|waribiki|할인|harin
Thẻ|Card|卡|kǎ|カード|kādo|카드|kadeu
Tiền mặt|Cash|现金|xiànjīn|現金|genkin|현금|hyeongeum
Túi xách|Bag|包|bāo|かばん|kaban|가방|gabang
Mặc thử|Try on|试穿|shìchuān|試着する|shichaku suru|입어 보다|ibeo boda
Cái này bao nhiêu?|How much is this?|这个多少钱？|zhège duōshao qián?|これはいくらですか？|kore wa ikura desu ka?|이거 얼마예요?|igeo eolmayeyo?
Bớt chút được không?|Can you make it cheaper?|便宜一点吧|piányi yìdiǎn ba|安くしてください|yasuku shite kudasai|좀 깎아 주세요|jom kkakka juseyo
# Giao thông
Xe buýt|Bus|公交车|gōngjiāochē|バス|basu|버스|beoseu
Tàu điện ngầm|Subway|地铁|dìtiě|地下鉄|chikatetsu|지하철|jihacheol
Taxi|Taxi|出租车|chūzūchē|タクシー|takushī|택시|taeksi
Xe đạp|Bicycle|自行车|zìxíngchē|自転車|jitensha|자전거|jajeongeo
Xe máy|Motorbike|摩托车|mótuōchē|バイク|baiku|오토바이|otobai
Ô tô|Car|汽车|qìchē|車|kuruma|자동차|jadongcha
Máy bay|Airplane|飞机|fēijī|飛行機|hikōki|비행기|bihaenggi
Nhà ga|Station|车站|chēzhàn|駅|eki|역|yeok
Con đường|Road|路|lù|道|michi|길|gil
Đi thẳng|Go straight|一直走|yìzhí zǒu|まっすぐ行く|massugu iku|직진하다|jikjinhada
Gần|Near|近|jìn|近い|chikai|가깝다|gakkapda
Xa|Far|远|yuǎn|遠い|tōi|멀다|meolda
# Thời tiết & mùa
Thời tiết|Weather|天气|tiānqì|天気|tenki|날씨|nalssi
Mưa|Rain|雨|yǔ|雨|ame|비|bi
Tuyết|Snow|雪|xuě|雪|yuki|눈|nun
Gió|Wind|风|fēng|風|kaze|바람|baram
Mặt trời|Sun|太阳|tàiyáng|太陽|taiyō|해|hae
Mây|Cloud|云|yún|雲|kumo|구름|gureum
Trời nắng|Sunny|晴天|qíngtiān|晴れ|hare|맑다|makda
Ấm áp|Warm|暖和|nuǎnhuo|暖かい|atatakai|따뜻하다|ttatteuthada
Mát mẻ|Cool|凉快|liángkuai|涼しい|suzushii|시원하다|siwonhada
Mùa xuân|Spring|春天|chūntiān|春|haru|봄|bom
Mùa hè|Summer|夏天|xiàtiān|夏|natsu|여름|yeoreum
Mùa thu|Autumn|秋天|qiūtiān|秋|aki|가을|gaeul
Mùa đông|Winter|冬天|dōngtiān|冬|fuyu|겨울|gyeoul
# Sở thích
Âm nhạc|Music|音乐|yīnyuè|音楽|ongaku|음악|eumak
Phim|Movie|电影|diànyǐng|映画|eiga|영화|yeonghwa
Bóng đá|Football|足球|zúqiú|サッカー|sakkā|축구|chukgu
Bơi|Swim|游泳|yóuyǒng|泳ぐ|oyogu|수영하다|suyeonghada
Hát|Sing|唱歌|chànggē|歌う|utau|노래하다|noraehada
Nhảy|Dance|跳舞|tiàowǔ|踊る|odoru|춤추다|chumchuda
Chơi game|Play games|玩游戏|wán yóuxì|ゲームをする|gēmu o suru|게임하다|geimhada
Đi du lịch|Travel|旅游|lǚyóu|旅行|ryokō|여행|yeohaeng
Chụp ảnh|Take photos|拍照|pāizhào|写真を撮る|shashin o toru|사진을 찍다|sajineul jjikda
Nấu ăn|Cook|做饭|zuòfàn|料理する|ryōri suru|요리하다|yorihada
Sở thích|Hobby|爱好|àihào|趣味|shumi|취미|chwimi
# Cảm xúc
Buồn|Sad|难过|nánguò|悲しい|kanashii|슬프다|seulpeuda
Tức giận|Angry|生气|shēngqì|怒る|okoru|화나다|hwanada
Sợ|Afraid|害怕|hàipà|怖い|kowai|무섭다|museopda
Lo lắng|Worried|担心|dānxīn|心配|shinpai|걱정하다|geokjeonghada
Thú vị|Interesting|有意思|yǒu yìsi|面白い|omoshiroi|재미있다|jaemiitda
Chán|Boring|无聊|wúliáo|つまらない|tsumaranai|재미없다|jaemieopda
Thông minh|Smart|聪明|cōngming|頭がいい|atama ga ii|똑똑하다|ttokttokhada
Tốt bụng|Kind|善良|shànliáng|優しい|yasashii|친절하다|chinjeolhada
Dễ|Easy|容易|róngyì|簡単|kantan|쉽다|swipda
Khó|Difficult|难|nán|難しい|muzukashii|어렵다|eoryeopda
# Trường học
Lớp học|Classroom|教室|jiàoshì|教室|kyōshitsu|교실|gyosil
Bài tập về nhà|Homework|作业|zuòyè|宿題|shukudai|숙제|sukje
Kỳ thi|Exam|考试|kǎoshì|試験|shiken|시험|siheom
Câu hỏi|Question|问题|wèntí|質問|shitsumon|질문|jilmun
Cái bút|Pen|笔|bǐ|ペン|pen|펜|pen
Giấy|Paper|纸|zhǐ|紙|kami|종이|jongi
Từ vựng|Vocabulary|词语|cíyǔ|単語|tango|단어|daneo
Hiểu|Understand|懂|dǒng|分かる|wakaru|이해하다|ihaehada
Quên|Forget|忘|wàng|忘れる|wasureru|잊다|itda
Nhớ|Remember|记得|jìde|覚える|oboeru|기억하다|gieokhada
Hỏi|Ask|问|wèn|質問する|shitsumon suru|묻다|mutda
Trả lời|Answer|回答|huídá|答える|kotaeru|대답하다|daedaphada
# Vị trí
Trên|On / Above|上|shàng|上|ue|위|wi
Dưới|Under|下|xià|下|shita|아래|arae
Trong|Inside|里|lǐ|中|naka|안|an
Ngoài|Outside|外|wài|外|soto|밖|bak
Phía trước|In front|前|qián|前|mae|앞|ap
Phía sau|Behind|后|hòu|後ろ|ushiro|뒤|dwi
Bên cạnh|Next to|旁边|pángbiān|隣|tonari|옆|yeop
Ở giữa|Between|中间|zhōngjiān|間|aida|사이|sai
Ở đây|Here|这里|zhèlǐ|ここ|koko|여기|yeogi
Ở đó|There|那里|nàlǐ|そこ|soko|거기|geogi
# Từ nối & trạng từ
Rất|Very|很|hěn|とても|totemo|아주|aju
Cũng|Also|也|yě|も|mo|도|do
Và|And|和|hé|と|to|그리고|geurigo
Nhưng|But|但是|dànshì|でも|demo|하지만|hajiman
Bởi vì|Because|因为|yīnwèi|から|kara|왜냐하면|waenyahamyeon
Vì vậy|So|所以|suǒyǐ|だから|dakara|그래서|geuraeseo
Luôn luôn|Always|总是|zǒngshì|いつも|itsumo|항상|hangsang
Thỉnh thoảng|Sometimes|有时候|yǒu shíhou|時々|tokidoki|가끔|gakkeum
Đã … rồi|Already|已经|yǐjīng|もう|mō|이미|imi
Vẫn còn|Still|还|hái|まだ|mada|아직|ajik
Cùng nhau|Together|一起|yìqǐ|一緒に|issho ni|같이|gachi
Một chút|A little|一点儿|yìdiǎnr|少し|sukoshi|조금|jogeum
# Động vật & thiên nhiên
Con chó|Dog|狗|gǒu|犬|inu|개|gae
Con mèo|Cat|猫|māo|猫|neko|고양이|goyangi
Con chim|Bird|鸟|niǎo|鳥|tori|새|sae
Con ngựa|Horse|马|mǎ|馬|uma|말|mal
Cái cây|Tree|树|shù|木|ki|나무|namu
Bông hoa|Flower|花|huā|花|hana|꽃|kkot
Núi|Mountain|山|shān|山|yama|산|san
Sông|River|河|hé|川|kawa|강|gang
Biển|Sea|海|hǎi|海|umi|바다|bada
# Gia đình 2
Ông|Grandfather|爷爷|yéye|おじいさん|ojīsan|할아버지|harabeoji
Bà|Grandmother|奶奶|nǎinai|おばあさん|obāsan|할머니|halmeoni
Em trai|Younger brother|弟弟|dìdi|弟|otōto|남동생|namdongsaeng
Em gái|Younger sister|妹妹|mèimei|妹|imōto|여동생|yeodongsaeng
Chồng|Husband|丈夫|zhàngfu|夫|otto|남편|nampyeon
Vợ|Wife|妻子|qīzi|妻|tsuma|아내|anae
Con trai|Son|儿子|érzi|息子|musuko|아들|adeul
Con gái|Daughter|女儿|nǚ'ér|娘|musume|딸|ttal
Người|Person|人|rén|人|hito|사람|saram
Đàn ông|Man|男人|nánrén|男の人|otoko no hito|남자|namja
Phụ nữ|Woman|女人|nǚrén|女の人|onna no hito|여자|yeoja
# Câu giao tiếp
Không sao đâu|It's okay|没关系|méi guānxi|大丈夫です|daijōbu desu|괜찮아요|gwaenchanayo
Tôi không hiểu|I don't understand|我不懂|wǒ bù dǒng|分かりません|wakarimasen|이해 못 해요|ihae mot haeyo
Xin nói chậm lại|Please speak slowly|请说慢一点|qǐng shuō màn yìdiǎn|ゆっくり話してください|yukkuri hanashite kudasai|천천히 말해 주세요|cheoncheonhi malhae juseyo
Làm ơn|Please|请|qǐng|お願いします|onegaishimasu|주세요|juseyo
Rất vui được gặp bạn|Nice to meet you|很高兴认识你|hěn gāoxìng rènshi nǐ|はじめまして|hajimemashite|만나서 반갑습니다|mannaseo bangapseumnida
Hẹn gặp lại|See you later|回头见|huítóu jiàn|またね|mata ne|또 만나요|tto mannayo
Chúc ngủ ngon|Good night|晚安|wǎn'ān|おやすみなさい|oyasuminasai|안녕히 주무세요|annyeonghi jumuseyo
Đúng rồi|That's right|对|duì|そうです|sō desu|맞아요|majayo
Giúp tôi với|Help me|帮帮我|bāngbang wǒ|助けて|tasukete|도와주세요|dowajuseyo
Chúc mừng|Congratulations|恭喜|gōngxǐ|おめでとう|omedetō|축하해요|chukhahaeyo
Cố lên|You can do it|加油|jiāyóu|頑張って|ganbatte|힘내세요|himnaeseyo
# Thành phố
Thành phố|City|城市|chéngshì|町|machi|도시|dosi
Ngân hàng|Bank|银行|yínháng|銀行|ginkō|은행|eunhaeng
Bưu điện|Post office|邮局|yóujú|郵便局|yūbinkyoku|우체국|ucheguk
Công viên|Park|公园|gōngyuán|公園|kōen|공원|gongwon
Thư viện|Library|图书馆|túshūguǎn|図書館|toshokan|도서관|doseogwan
Quán cà phê|Café|咖啡馆|kāfēiguǎn|カフェ|kafe|카페|kape
Hiệu thuốc|Pharmacy|药店|yàodiàn|薬局|yakkyoku|약국|yakguk
Bảo tàng|Museum|博物馆|bówùguǎn|博物館|hakubutsukan|박물관|bangmulgwan
# Sinh hoạt hằng ngày
Thức dậy|Wake up|起床|qǐchuáng|起きる|okiru|일어나다|ireonada
Đánh răng|Brush teeth|刷牙|shuāyá|歯を磨く|ha o migaku|이를 닦다|ireul dakda
Tắm|Take a shower|洗澡|xǐzǎo|シャワーを浴びる|shawā o abiru|샤워하다|syawohada
Rửa tay|Wash hands|洗手|xǐshǒu|手を洗う|te o arau|손을 씻다|soneul ssitda
Đi làm|Go to work|上班|shàngbān|仕事に行く|shigoto ni iku|출근하다|chulgeunhada
Tan làm|Finish work|下班|xiàbān|仕事が終わる|shigoto ga owaru|퇴근하다|toegeunhada
Nghỉ ngơi|Rest|休息|xiūxi|休む|yasumu|쉬다|swida
Dọn dẹp|Clean up|打扫|dǎsǎo|掃除する|sōji suru|청소하다|cheongsohada
Giặt quần áo|Do laundry|洗衣服|xǐ yīfu|洗濯する|sentaku suru|빨래하다|ppallaehada
Gọi điện|Make a call|打电话|dǎ diànhuà|電話する|denwa suru|전화하다|jeonhwahada
Gặp gỡ|Meet|见面|jiànmiàn|会う|au|만나다|mannada
Giúp đỡ|Help|帮助|bāngzhù|手伝う|tetsudau|돕다|dopda
# Đồ dùng
Đồng hồ|Clock|钟表|zhōngbiǎo|時計|tokei|시계|sigye
Cái ô|Umbrella|雨伞|yǔsǎn|傘|kasa|우산|usan
Kính|Glasses|眼镜|yǎnjìng|眼鏡|megane|안경|angyeong
Mũ|Hat|帽子|màozi|帽子|bōshi|모자|moja
Cái cốc|Cup|杯子|bēizi|コップ|koppu|컵|keop
Đũa|Chopsticks|筷子|kuàizi|箸|hashi|젓가락|jeotgarak
Cái thìa|Spoon|勺子|sháozi|スプーン|supūn|숟가락|sutgarak
Cái ví|Wallet|钱包|qiánbāo|財布|saifu|지갑|jigap
Bức ảnh|Photo|照片|zhàopiàn|写真|shashin|사진|sajin
Món quà|Gift|礼物|lǐwù|プレゼント|purezento|선물|seonmul
# Internet & điện thoại
Internet|Internet|网络|wǎngluò|インターネット|intānetto|인터넷|inteonet
Tin nhắn|Message|消息|xiāoxi|メッセージ|messēji|메시지|mesiji
Mật khẩu|Password|密码|mìmǎ|パスワード|pasuwādo|비밀번호|bimilbeonho
Ứng dụng|App|应用|yìngyòng|アプリ|apuri|앱|aep
Video|Video|视频|shìpín|動画|dōga|동영상|dongyeongsang
Gửi|Send|发|fā|送る|okuru|보내다|bonaeda
Tìm|Look for|找|zhǎo|探す|sagasu|찾다|chatda
Sạc pin|Charge|充电|chōngdiàn|充電する|jūden suru|충전하다|chungjeonhada
Wifi|Wi-Fi|无线网|wúxiànwǎng|ワイファイ|waifai|와이파이|waipai
Email|Email|邮件|yóujiàn|メール|mēru|이메일|imeil
# Thời gian 3
Sáng nay|This morning|今天早上|jīntiān zǎoshang|今朝|kesa|오늘 아침|oneul achim
Tối nay|Tonight|今晚|jīnwǎn|今晩|konban|오늘 밤|oneul bam
Tuần này|This week|这个星期|zhège xīngqī|今週|konshū|이번 주|ibeon ju
Tuần sau|Next week|下个星期|xià ge xīngqī|来週|raishū|다음 주|daeum ju
Tháng trước|Last month|上个月|shàng ge yuè|先月|sengetsu|지난달|jinandal
Năm nay|This year|今年|jīnnián|今年|kotoshi|올해|olhae
Sớm|Early|早|zǎo|早い|hayai|일찍|iljjik
Muộn|Late|晚|wǎn|遅い|osoi|늦다|neutda
Trước khi|Before|以前|yǐqián|前に|mae ni|전에|jeone
Sau khi|After|以后|yǐhòu|後で|ato de|후에|hue
Buổi trưa|Noon|中午|zhōngwǔ|昼|hiru|낮|nat
# Ngoại hình
Cao|Tall|高|gāo|背が高い|se ga takai|키가 크다|kiga keuda
Thấp|Short|矮|ǎi|背が低い|se ga hikui|키가 작다|kiga jakda
Béo|Fat|胖|pàng|太っている|futotte iru|뚱뚱하다|ttungttunghada
Gầy|Thin|瘦|shòu|痩せている|yasete iru|날씬하다|nalssinhada
Trẻ|Young|年轻|niánqīng|若い|wakai|젊다|jeomda
Già|Old (age)|老|lǎo|年を取った|toshi o totta|늙다|neukda
Đẹp trai|Handsome|帅|shuài|かっこいい|kakkoii|잘생기다|jalsaenggida
Dễ thương|Cute|可爱|kě'ài|かわいい|kawaii|귀엽다|gwiyeopda
Tóc|Hair|头发|tóufa|髪|kami|머리카락|meorikarak
Tuổi|Age|年龄|niánlíng|年齢|nenrei|나이|nai`;

// Câu mới: vi|en|zh (tách /)|pinyin|ja (tách /)|romaji|ko|romaja
const SENTRAW=`Tôi là giáo viên.|I am a teacher|我/是/老师|wǒ shì lǎoshī|私は/先生/です|watashi wa sensei desu|저는 선생님이에요|jeoneun seonsaengnimieyo
Anh ấy là bác sĩ.|He is a doctor|他/是/医生|tā shì yīshēng|彼は/医者/です|kare wa isha desu|그는 의사예요|geuneun uisayeyo
Tôi là người Việt Nam.|I am Vietnamese|我/是/越南人|wǒ shì Yuènán rén|私は/ベトナム人/です|watashi wa Betonamujin desu|저는 베트남 사람이에요|jeoneun beteunam saramieyo
Tôi học tiếng Trung.|I study Chinese|我/学习/中文|wǒ xuéxí Zhōngwén|私は/中国語を/勉強します|watashi wa chūgokugo o benkyō shimasu|저는 중국어를 공부해요|jeoneun junggugeoreul gongbuhaeyo
Cái này rất đắt.|This is very expensive|这个/很/贵|zhège hěn guì|これは/とても/高い/です|kore wa totemo takai desu|이거 아주 비싸요|igeo aju bissayo
Hôm nay trời rất nóng.|It is very hot today|今天/很/热|jīntiān hěn rè|今日は/とても/暑い/です|kyō wa totemo atsui desu|오늘 아주 더워요|oneul aju deowoyo
Tôi bị đau đầu.|I have a headache|我/头/疼|wǒ tóu téng|頭が/痛い/です|atama ga itai desu|머리가 아파요|meoriga apayo
Hôm nay là thứ Hai.|Today is Monday|今天/是/星期一|jīntiān shì xīngqīyī|今日は/月曜日/です|kyō wa getsuyōbi desu|오늘은 월요일이에요|oneureun woryoirieyo
Bây giờ là ba giờ.|It is three o'clock now|现在/三点|xiànzài sān diǎn|今/三時/です|ima sanji desu|지금 세 시예요|jigeum se siyeyo
Tôi thích xem phim.|I like watching movies|我/喜欢/看/电影|wǒ xǐhuan kàn diànyǐng|私は/映画が/好き/です|watashi wa eiga ga suki desu|저는 영화를 좋아해요|jeoneun yeonghwareul joahaeyo
Tôi muốn mua cái túi này.|I want to buy this bag|我/想/买/这个/包|wǒ xiǎng mǎi zhège bāo|この/かばんを/買いたい/です|kono kaban o kaitai desu|이 가방을 사고 싶어요|i gabangeul sago sipeoyo
Phòng của tôi nhỏ.|My room is small|我的/房间/很/小|wǒ de fángjiān hěn xiǎo|私の/部屋は/小さい/です|watashi no heya wa chiisai desu|제 방은 작아요|je bangeun jagayo
Tôi ăn sáng lúc bảy giờ.|I eat breakfast at seven|我/七点/吃/早饭|wǒ qī diǎn chī zǎofàn|七時に/朝ご飯を/食べます|shichiji ni asagohan o tabemasu|일곱 시에 아침을 먹어요|ilgop sie achimeul meogeoyo
Tôi đi làm bằng xe buýt.|I go to work by bus|我/坐/公交车/上班|wǒ zuò gōngjiāochē shàngbān|バスで/会社に/行きます|basu de kaisha ni ikimasu|버스로 출근해요|beoseuro chulgeunhaeyo
Nhà ga ở gần đây.|The station is near here|车站/在/这里/附近|chēzhàn zài zhèlǐ fùjìn|駅は/この/近く/です|eki wa kono chikaku desu|역은 여기에서 가까워요|yeogeun yeogieseo gakkawoyo
Ngày mai trời mưa.|It will rain tomorrow|明天/下雨|míngtiān xià yǔ|明日は/雨/です|ashita wa ame desu|내일 비가 와요|naeil biga wayo
Sở thích của tôi là nấu ăn.|My hobby is cooking|我的/爱好/是/做饭|wǒ de àihào shì zuòfàn|私の/趣味は/料理/です|watashi no shumi wa ryōri desu|제 취미는 요리예요|je chwimineun yoriyeyo
Kỳ thi này rất khó.|This exam is very difficult|这个/考试/很/难|zhège kǎoshì hěn nán|この/試験は/とても/難しい/です|kono shiken wa totemo muzukashii desu|이 시험은 아주 어려워요|i siheomeun aju eoryeowoyo
Con mèo ở trên bàn.|The cat is on the desk|猫/在/桌子/上|māo zài zhuōzi shàng|猫は/机の/上に/います|neko wa tsukue no ue ni imasu|고양이가 책상 위에 있어요|goyangiga chaeksang wie isseoyo
Tôi cũng thích âm nhạc.|I also like music|我/也/喜欢/音乐|wǒ yě xǐhuan yīnyuè|私も/音楽が/好き/です|watashi mo ongaku ga suki desu|저도 음악을 좋아해요|jeodo eumageul joahaeyo
Tôi có một con chó.|I have a dog|我/有/一只/狗|wǒ yǒu yì zhī gǒu|私は/犬を/飼って/います|watashi wa inu o katte imasu|저는 개가 있어요|jeoneun gaega isseoyo
Em gái tôi là học sinh.|My younger sister is a student|我/妹妹/是/学生|wǒ mèimei shì xuésheng|妹は/学生/です|imōto wa gakusei desu|제 여동생은 학생이에요|je yeodongsaengeun haksaengieyo
Ngân hàng ở bên cạnh bưu điện.|The bank is next to the post office|银行/在/邮局/旁边|yínháng zài yóujú pángbiān|銀行は/郵便局の/隣に/あります|ginkō wa yūbinkyoku no tonari ni arimasu|은행은 우체국 옆에 있어요|eunhaengeun ucheguk yeope isseoyo
Tôi thức dậy lúc sáu giờ.|I wake up at six|我/六点/起床|wǒ liù diǎn qǐchuáng|六時に/起きます|rokuji ni okimasu|여섯 시에 일어나요|yeoseot sie ireonayo
Tôi gửi tin nhắn cho bạn.|I send you a message|我/给/你/发/消息|wǒ gěi nǐ fā xiāoxi|あなたに/メッセージを/送ります|anata ni messēji o okurimasu|메시지를 보낼게요|mesijireul bonaelgeyo
Tuần sau tôi đi du lịch.|Next week I will travel|下个星期/我/去/旅游|xià ge xīngqī wǒ qù lǚyóu|来週/旅行に/行きます|raishū ryokō ni ikimasu|다음 주에 여행 가요|daeum jue yeohaeng gayo
Cô ấy rất dễ thương.|She is very cute|她/很/可爱|tā hěn kě'ài|彼女は/とても/かわいい/です|kanojo wa totemo kawaii desu|그녀는 아주 귀여워요|geunyeoneun aju gwiyeowoyo`;
NEWRAW.split('\n').reduce((tn,line)=>{if(line.startsWith('# '))return line.slice(2).trim();if(line.trim())TOPICS_EXTRA.push([tn,line]);return tn},'');
SENTRAW.split('\n').forEach(l=>{const f=l.split('|');SENT.push({vi:f[0],en:[f[1]],zh:[f[2],f[3]],ja:[f[4],f[5]],ko:[f[6],f[7]]})});
