import Quiz from "../components/Quiz"

export  const   QUESTIONS = [
    { id: 1, text: "नेपालको राष्ट्रिय फूल के हो?", answer: ["लालीगुराँस", "कमल", "गुलाब", "सुनाखरी"] },
    { id: 2, text: "सगरमाथाको उचाइ कति मिटर छ?", answer: ["८८४८ मिटर", "८४०० मिटर", "९००० मिटर", "८५०० मिटर"] },
    { id: 3, text: "नेपालको राष्ट्रिय जनावर के हो?", answer: ["गौर", "हात्ती", "गधा", "बाँदर"] },
    { id: 4, text: "नेपालको राष्ट्रिय खेल के हो?", answer: ["भलिबल", "फुटबल", "कबड्डी", "क्रिकेट"] },
    { id: 5, text: "नेपालको राजधानी कुन शहर हो?", answer: ["काठमाडौं", "पोखरा", "ललितपुर", "धरान"] },
    { id: 6, text: "नेपालमा कति प्रदेशहरू छन्?", answer: ["७ प्रदेश", "६ प्रदेश", "५ प्रदेश", "८ प्रदेश"] },
    { id: 7, text: "नेपालको राष्ट्रिय गानको शीर्षक के हो?", answer: ["सयौं थुँगा फूलका", "रातो र चन्द्र सूर्य", "सूर्य उदाए", "जय नेपाल"] },
    { id: 8, text: "नेपालको प्रमुख भाषा के हो?", answer: ["नेपाली", "मैथिली", "थारू", "नेवारी"] },
    { id: 9, text: "नेपालको राष्ट्रिय पक्षी के हो?", answer: ["डाँफे", "मुनाल", "काग", "सारस"] },
    { id: 10, text: "नेपालको सबैभन्दा ठूलो ताल कुन हो?", answer: ["रारा ताल", "फेवा ताल", "बेगनास ताल", "कुसुम ताल"] },
    { id: 11, text: "नेपालको राष्ट्रिय खाना के हो?", answer: ["ढिंडो र गुन्द्रुक", "मomos", "पानीपुरी", "समोसा"] },
    { id: 12, text: "नेपालको राष्ट्रिय बाजा के हो?", answer: ["पञ्चे बाजा", "मदाल", "सारंगी", "सैनो बाजा"] },
    { id: 13, text: "नेपालमा कति जिल्ला छन्?", answer: ["७७ जिल्ला", "७५ जिल्ला", "७६ जिल्ला", "७४ जिल्ला"] },
    { id: 14, text: "नेपालको पुरानो बैंक कुन हो?", answer: ["नेपाल बैंक लिमिटेड", "राष्ट्रिय वाणिज्य बैंक", "प्रभु बैंक", "मेगा बैंक"] },
    { id: 15, text: "नेपालको सबैभन्दा लामो पुल कुन हो?", answer: ["कोशी ब्यारेज", "कर्णाली पुल", "बागमती पुल", "महाकाली पुल"] },
    { id: 16, text: "नेपालमा सबैभन्दा ठूलो चाड कुन हो?", answer: ["दशैं", "तिहार", "छठ", "माघे संक्रान्ति"] },
    { id: 17, text: "नेपालको पुरानो नगरपालिका कुन हो?", answer: ["भक्तपुर", "ललितपुर", "पोखरा", "धरान"] },
    { id: 18, text: "नेपालको राष्ट्रिय सम्पत्ति के हो?", answer: ["जल", "माटो", "वायु", "वन"] },
    { id: 19, text: "नेपालको प्रमुख कृषि उत्पादन के हो?", answer: ["धान", "मकै", "गहुँ", "तरकारी"] },
    { id: 20, text: "नेपालको प्रमुख पर्यटक क्षेत्र कुन हो?", answer: ["पोखरा", "लुम्बिनी", "चितवन", "जनकपुर"] },
    { id: 21, text: "नेपालको प्रमुख नदी कुन हो?", answer: ["गण्डकी", "कर्णाली", "बागमती", "घगरा"] },
    { id: 22, text: "नेपालको सबैभन्दा ठूलो झरना कुन हो?", answer: ["हिलिहाँज झरना", "हुंङ्गेली झरना", "लक्ष्मी झरना", "धवलागिरी झरना"] },
    { id: 23, text: "नेपालको सबैभन्दा पुरानो विश्वविद्यालय कुन हो?", answer: ["त्रिभुवन विश्वविद्यालय", "काठमाण्डौ विश्वविद्यालय", "पोखरा विश्वविद्यालय", "नयाँ विश्वविद्यालय"] },
    { id: 24, text: "नेपालको राष्ट्रिय पशुपति मन्दिर कहाँ स्थित छ?", answer: ["काठमाडौं", "ललितपुर", "पोखरा", "चितवन"] },
    { id: 25, text: "नेपालको पहिलो राष्ट्रपति को हुन्?", answer: ["डा. रामबरण यादव", "विद्यादेवी भण्डारी", "सुर्य बहादुर थापा", "नेपाल भण्डारी"] },
    { id: 26, text: "नेपालको राष्ट्रिय फूलको वैज्ञानिक नाम के हो?", answer: ["हिमालयन रोधोडेन्ड्रोन", "कमल", "सारङ्गी", "सारस"] },
    { id: 27, text: "नेपालको राष्ट्रिय पक्षी कुन हो?", answer: ["मुनाल", "डाँफे", "हिमालयन अर्डर", "गुलाबी मुनाल"] },
    { id: 28, text: "नेपालको सबैभन्दा ठूलो चाड कुन हो?", answer: ["दशैं", "तिहार", "साउन शुक्ल", "माघे संक्रान्ति"] },
    { id: 29, text: "नेपालको मुख्य कृषि उत्पाद कुन हो?", answer: ["धान", "मकै", "गहुँ", "दाल"] },
    { id: 30, text: "नेपालको सबैभन्दा प्राचीन धर्म कुन हो?", answer: ["हिन्दू धर्म", "बौद्ध धर्म", "इस्लाम धर्म", "ईसाई धर्म"] },
    { id: 31, text: "नेपालको सबैभन्दा पुरानो पत्रिका कुन हो?", answer: ["गोरखापत्र", "कान्तिपुर", "राप्ती", "जनमुक्ति"] },
    { id: 32, text: "नेपालमा सबैभन्दा पुरानो जलप्रपात कुन हो?", answer: ["हिलिहाँज", "हिमाल पानी", "स्वर्ण पानी", "वसन्त जल"] },
    { id: 33, text: "नेपालको राष्ट्रिय ऐतिहासिक स्थल कुन हो?", answer: ["पशुपतिनाथ मन्दिर", "स्वयंभू मन्दिर", "भक्तपुर", "काठमाडौँ दरबार"] },
    { id: 34, text: "नेपालको सबैभन्दा ठूलो ताल कुन हो?", answer: ["रारा ताल", "फेवा ताल", "बेगनास ताल", "बाग्मती ताल"] },
    { id: 35, text: "नेपालको सर्वाधिक मान्यता प्राप्त भाषा कुन हो?", answer: ["नेपाली", "थारू", "मधेशी", "मैथिली"] },
    { id: 36, text: "नेपालको प्रमुख पर्व कुन हो?", answer: ["दशैं", "तिहार", "रक्षाबन्धन", "जनै पुर्णिमा"] },
    { id: 37, text: "नेपालको प्रमुख उपत्यका कुन हो?", answer: ["काठमाडौं उपत्यका", "पोखरा उपत्यका", "ललितपुर उपत्यका", "धरान उपत्यका"] },
    { id: 38, text: "नेपालमा कति जिल्लाहरू छन्?", answer: ["७७ जिल्ला", "७४ जिल्ला", "७६ जिल्ला", "७८ जिल्ला"] },
    { id: 39, text: "नेपालको प्रमुख नदी कस्तो छ?", answer: ["गण्डकी", "कर्णाली", "बागमती", "घगरा"] },
    { id: 40, text: "नेपालको सबैभन्दा लामो नदी कुन हो?", answer: ["कर्णाली", "गण्डकी", "बागमती", "गंगा"] },
    { id: 41, text: "नेपालमा कति प्रमुख नगरपालिकाहरू छन्?", answer: ["५", "७", "१०", "१२"] },
    { id: 42, text: "नेपालको प्रमुख खेल कुन हो?", answer: ["क्रिकेट", "भलिबल", "फुटबल", "कबड्डी"] },
    { id: 43, text: "नेपालको मुख्य पर्यटन स्थल कुन हो?", answer: ["पोखरा", "लुम्बिनी", "चितवन", "भक्तपुर"] },
    { id: 44, text: "नेपालको सबैभन्दा पुरानो शहर कुन हो?", answer: ["भक्तपुर", "ललितपुर", "पोखरा", "काठमाडौँ"] },
    { id: 45, text: "नेपालमा सबैभन्दा ठूलो वन कुन हो?", answer: ["चितवन राष्ट्रिय निकुञ्ज", "कसि डाँडा", "सिद्धार्थ वन", "उदयपुर जंगल"] },
    { id: 46, text: "नेपालको सबैभन्दा प्राचीन मन्दिर कुन हो?", answer: ["पशुपतिनाथ मन्दिर", "सारनाथ मन्दिर", "स्वंयभू मन्दिर", "लुम्बिनी मन्दिर"] },
    { id: 47, text: "नेपालमा प्रमुख भोकलिएका नदी कुन हो?", answer: ["कर्णाली", "बागमती", "गण्डकी", "गंगा"] },
    { id: 48, text: "नेपालको सबैभन्दा पुरानो गायक को हुन्?", answer: ["भेटी हरी मन्दिर", "सन्देश लुइटेल", "सारंगी ललित", "प्रसाद मिश्र"] },
    { id: 49, text: "नेपालको प्रमुख सांस्कृतिक मेला कुन हो?", answer: ["दशैं", "तिहार", "पोलोल"]}]
    