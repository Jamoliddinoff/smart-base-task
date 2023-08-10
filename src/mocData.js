import uzbMain from './assets/images/uzbekistan/main-picture.jpg';
import namangan from './assets/images/uzbekistan/namangan.jpeg';
import andijan from './assets/images/uzbekistan/andijan.jpg';
import fergana from './assets/images/uzbekistan/fergana.jpg';
import samarqand from './assets/images/uzbekistan/samarqand.jpg';
import buxoro from './assets/images/uzbekistan/buxiro.jpg';
import xorazim from './assets/images/uzbekistan/xorazim.jpg';

import turkeyMain from './assets/images/turkey/mainImage.jpg'
import turkeyPic1 from './assets/images/turkey/pic.jpeg'
import turkeyPic2 from './assets/images/turkey/ankara1.jpg'
import turkeyPic3 from './assets/images/turkey/port.jpeg'
import turkeyPic4 from './assets/images/turkey/rivera.jpg'
import turkeyPic5 from './assets/images/turkey/drevniy-gorod-efes.webp'
import turkeyPic6 from './assets/images/turkey/sohil.jpg'

import tailandMain from './assets/images/tailand/tailanMain.jpg'
import tailand1 from './assets/images/tailand/tailand-sohillari.webp'
import tailand2 from './assets/images/tailand/tailand2.jpg'
import tailand3 from './assets/images/tailand/tailand3.jpg'
import tailand4 from './assets/images/tailand/tailand4.jpg'
import tailand5 from './assets/images/tailand/tailand5.jpg'
import tailand6 from './assets/images/tailand/tailand6.jpg'

import baaMain from './assets/images/baa/baaMain.jpg'
import abuDabi from './assets/images/baa/abu-dabi.webp'
import dubai from './assets/images/baa/dubai.jpg'
import dubai2 from './assets/images/baa/dubay.jpg'
import dubai3 from './assets/images/baa/dubay-muzeyi.jpg'
import dubai4 from './assets/images/baa/dubay-muzeyi.jpg'
import dubai5 from './assets/images/baa/Burj-Khalifa.jpg'


import russiaMain from './assets/images/rassia/mainRassia.jpeg'
import russia1 from './assets/images/rassia/rassia1.jpg'
import russia2 from './assets/images/rassia/rassia2.jpg'
import russia3 from './assets/images/rassia/rassia3.jpg'
import russia4 from './assets/images/rassia/rassia4.jpg'
import russia5 from './assets/images/rassia/rassia5.jpg'
import russia6 from './assets/images/rassia/rassia6.jpg'

import usaMain from './assets/images/amerika/main.jpg'
import usa1 from './assets/images/amerika/amerika1.webp'
import usa2 from './assets/images/amerika/amerika2.webp'
import usa3 from './assets/images/amerika/amerika3.webp'
import usa4 from './assets/images/amerika/amerika4.jpg'
import usa5 from './assets/images/amerika/amerika5-niagara.jpg'
import usa6 from './assets/images/amerika/amerika6.jpg'

import switzMain from './assets/images/switzerland/switMain.jpg'
import switz1 from './assets/images/switzerland/switz1.jpeg'
import switz2 from './assets/images/switzerland/switz2.jpg'
import switz3 from './assets/images/switzerland/switz3.png'
import switz4 from './assets/images/switzerland/switz4.jpg'
import switz5 from './assets/images/switzerland/switz5.jpg'
import switz6 from './assets/images/switzerland/switz6.jpg'


export const countries =  [
    {
        id:1,
        country:'O`bekiston',
        capital:'Toshkent',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:uzbMain,
        topPhotos:[
                {id:11,name:'Namangan shahri',img:namangan},
                {id:12,name:'Andijon, Bobur bog`i',img:andijan},
                {id:13,name:'Farg`ona, Qo`qon xonligi',img:fergana},
                {id:14,name:'Samarqand, Registon maydoni',img:samarqand},
                {id:15,name:'Buxoro, Ark',img:buxoro},
                {id:16,name:'Xorazim, Ichan qal`a',img:xorazim},
        ],
        flag:'🇺🇿',
        video:'https://www.youtube.com/embed/vQVwkyn3-F8',
        address:{
            latitude:41.2995,
            longitude:69.2401
        },
        currency:{
            name:"So'm",
            shorCut:'UZS'
        },
        timeZone:'Asia/Tashkent',
    },
    {
        id:2,
        country:'Tailand',
        capital:'Bankok',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:tailandMain,
        topPhotos:[
                {id:21,name:'Tailand sohillari',img:tailand1},
                {id:22,name:'Tailand',img:tailand2},
                {id:23,name:'Tailand sohillari',img:tailand3},
                {id:24,name:'Tailand sohillari',img:tailand4},
                {id:25,name:'Qadimiy Tailand',img:tailand5},
                {id:26,name:'Tailand sohillari',img:tailand6},
        ],
        flag:'🇹🇭',
        video:'https://www.youtube.com/embed/sHpTGL71x5Y',
        address:{
            latitude:13.7563,
            longitude:100.5018
        },
        currency:{
            name:'Thai baht',
            shorCut:'THB'
        },
        timeZone:'Asia/Bangkok'
    },
    {
        id:3,
        country:'Turkiya ',
        capital:'Anqara',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:turkeyMain,
        topPhotos:[
                {id:31,name:'Turkiya dengiz bo`yi',img:turkeyPic1},
                {id:32,name:'Ayyasofiya',img:turkeyPic2},
                {id:33,name:'Dengiz',img:turkeyPic3},
                {id:34,name:'Turk riverasi',img:turkeyPic4},
                {id:35,name:'Qadimiy turkiya',img:turkeyPic5},
                {id:36,name:'Qadimiy tukiya',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:4,
        country:'BAA',
        capital:'Abu dabi',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:baaMain,
        topPhotos:[
                {id:41,name:'Abu dabiy',img:abuDabi},
                {id:42,name:'Dubay',img:dubai},
                {id:43,name:'Dubay shahri',img:dubai2},
                {id:44,name:'Dubai muzeyi',img:dubai3},
                {id:45,name:'Burj halifa',img:dubai5},
                {id:46,name:'Dubai muzeyi',img:dubai4},
        ],
        flag:'🇦🇪',
        video:'https://www.youtube.com/embed/Ex2iAyaEElQ',
        address:{
            latitude:24.4539,
            longitude:54.3773
        },
        currency:{
            name:'Dirham',
            shorCut:'AED'
        },
        timeZone:'Asia/Dubai'

    },
    {
        id:5,
        country:'Rassiya',
        capital:'Maskva',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:russiaMain,
        topPhotos:[
                {id:51,name:'Maskva Kremel',img:russia1},
                {id:52,name:'Rassiya',img:russia2},
                {id:53,name:'Muzey',img:russia3},
                {id:54,name:'Rossiya kurort',img:russia4},
                {id:55,name:'Maskva',img:russia5},
                {id:56,name:'Rossiya',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
    {
        id:6,
        country:'Amerika',
        capital:'New york',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:usaMain,
        topPhotos:[
                {id:61,name:'Ozodlik haykali',img:usa1},
                {id:62,name:'New york Oq uy',img:usa2},
                {id:63,name:'Oltin darvoz ko`prigi',img:usa3},
                {id:64,name:'Amerika sohillari',img:usa4},
                {id:65,name:'Niagara sharsharasi',img:usa5},
                {id:66,name:'Amerika ko`chalari',img:usa6},
        ],
        flag:'🇺🇸',
        video:'https://www.youtube.com/embed/4Z9mUjtFJYY',
        address:{
            latitude:40.7128,
            longitude:74.0060
        },
        currency:{
            name:'Dollar',
            shorCut:'USD'
        },
        timeZone:'America/New_York'

    },
    {
        id:7,
        country:'Shvetsariya',
        capital:'Bern',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:switzMain,
        topPhotos:[
                {id:71,name:'Shvetsariya tog`lari',img:switz1},
                {id:72,name:'Dekorativ ko`prik',img:switz2},
                {id:73,name:'Shvetsariya tog`lari',img:switz3},
                {id:74,name:'Shvetsariya tabiati',img:switz4},
                {id:75,name:'Shvetsariya',img:switz5},
                {id:76,name:'Shvetsariya tabiati',img:switz6},
        ],
        flag:'🇨🇭',
        video:'https://www.youtube.com/embed/kVxTrhojpFI',
        address:{
            latitude:46.9480,
            longitude:7.4474
        },
        currency:{
            name:'Swiss franc',
            shorCut:'CHF'
        },
        timeZone:'Europe/Zurich'
    },
    {
        id:8,
        country:'Turkiya ',
        capital:'Anqara',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:turkeyMain,
        topPhotos:[
            {id:81,name:'Turkiya dengiz bo`yi',img:turkeyPic1},
            {id:82,name:'Ayyasofiya',img:turkeyPic2},
            {id:83,name:'Dengiz',img:turkeyPic3},
            {id:84,name:'Turk riverasi',img:turkeyPic4},
            {id:85,name:'Qadimiy turkiya',img:turkeyPic5},
            {id:86,name:'Qadimiy tukiya',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:9,
        country:'Rassiya',
        capital:'Maskva',
        description:'Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem Ipsum 1500-yillardan beri sanoatning standart qo\'g\'irchoq matni bo\'lib kelgan, o\'shandan beri noma\'lum printer galleyni olib, kitob namunalarini yaratish uchun shifrlagan. U nafaqat besh asr davomida, balki elektron terishga sakrashdan ham omon qoldi va deyarli o\'zgarmadi.',
        mainPic:russiaMain,
        topPhotos:[
            {id:91,name:'Maskva Kremel',img:russia1},
            {id:92,name:'Rassiya',img:russia2},
            {id:93,name:'Muzey',img:russia3},
            {id:94,name:'Rossiya kurort',img:russia4},
            {id:95,name:'Maskva',img:russia5},
            {id:96,name:'Rossiya',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
]

export const countriesEn =  [
    {
        id:1,
        country:'Uzbekistan',
        capital:'Tashkent',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:uzbMain,
        topPhotos:[
            {id:11,name:'Namangan city',img:namangan},
            {id:12,name:'Andijan, Bobur squire',img:andijan},
            {id:13,name:'Fergana, "Qo`qon xonligi"',img:fergana},
            {id:14,name:'Samarkand, Registan are',img:samarqand},
            {id:15,name:'Bukxara, Ark',img:buxoro},
            {id:16,name:'Kxorazem, Ichan kala',img:xorazim},
        ],
        flag:'🇺🇿',
        video:'https://www.youtube.com/embed/vQVwkyn3-F8',
        address:{
            latitude:41.2995,
            longitude:69.2401
        },
        currency:{
            name:'Som',
            shorCut:'UZS'
        },
        timeZone:'Asia/Tashkent',
    },
    {
        id:2,
        country:'Thai',
        capital:'Bankok',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:tailandMain,
        topPhotos:[
            {id:21,name:'Thai beaches',img:tailand1},
            {id:22,name:'Thai',img:tailand2},
            {id:23,name:'Thai beaches',img:tailand3},
            {id:24,name:'Thai beaches',img:tailand4},
            {id:25,name:'Old Thai',img:tailand5},
            {id:26,name:'Thai beaches',img:tailand6},
        ],
        flag:'🇹🇭',
        video:'https://www.youtube.com/embed/sHpTGL71x5Y',
        address:{
            latitude:13.7563,
            longitude:100.5018
        },
        currency:{
            name:'Thai baht',
            shorCut:'THB'
        },
        timeZone:'Asia/Bangkok'
    },
    {
        id:3,
        country:'Turkey ',
        capital:'Ankara',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:turkeyMain,
        topPhotos:[
            {id:31,name:'Turkey beaches',img:turkeyPic1},
            {id:32,name:'Hagia Sophia',img:turkeyPic2},
            {id:33,name:'Turkish sea',img:turkeyPic3},
            {id:34,name:'Turkish river',img:turkeyPic4},
            {id:35,name:'Old Turkey',img:turkeyPic5},
            {id:36,name:'Old Turkey',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:4,
        country:'UAE',
        capital:'Abu dhabi',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:baaMain,
        topPhotos:[
            {id:41,name:'Abu dhabi',img:abuDabi},
            {id:42,name:'Dubai',img:dubai},
            {id:43,name:'Dubai city',img:dubai2},
            {id:44,name:'Dubai museum',img:dubai3},
            {id:45,name:'Burj Khalifa',img:dubai5},
            {id:46,name:'Dubai museum',img:dubai4},
        ],
        flag:'🇦🇪',
        video:'https://www.youtube.com/embed/Ex2iAyaEElQ',
        address:{
            latitude:24.4539,
            longitude:54.3773
        },
        currency:{
            name:'Dirham',
            shorCut:'AED'
        },
        timeZone:'Asia/Dubai'

    },
    {
        id:5,
        country:'Russia',
        capital:'Moscow',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:russiaMain,
        topPhotos:[
            {id:51,name:'Moscow, Kremlin',img:russia1},
            {id:52,name:'Russia',img:russia2},
            {id:53,name:'Museum',img:russia3},
            {id:54,name:'Russian resort',img:russia4},
            {id:55,name:'Moscow',img:russia5},
            {id:56,name:'Russia',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
    {
        id:6,
        country:'America',
        capital:'New york',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:usaMain,
        topPhotos:[
            {id:61,name:'statue of Liberty',img:usa1},
            {id:62,name:'New York, White House',img:usa2},
            {id:63,name:'Golden Gate Bridge',img:usa3},
            {id:64,name:'America beaches',img:usa4},
            {id:65,name:'Niagara Falls',img:usa5},
            {id:66,name:'American streets',img:usa6},
        ],
        flag:'🇺🇸',
        video:'https://www.youtube.com/embed/4Z9mUjtFJYY',
        address:{
            latitude:40.7128,
            longitude:74.0060
        },
        currency:{
            name:'Dollar',
            shorCut:'USD'
        },
        timeZone:'America/New_York'

    },
    {
        id:7,
        country:'Switzerland',
        capital:'Bern',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:switzMain,
        topPhotos:[
            {id:71,name:'Switzerland mountains',img:switz1},
            {id:72,name:'Amazing bridge',img:switz2},
            {id:73,name:'Switzerland mountains',img:switz3},
            {id:74,name:'Switzerland mountains',img:switz4},
            {id:75,name:'Switzerland',img:switz5},
            {id:76,name:'Nature of Switzerland',img:switz6},
        ],
        flag:'🇨🇭',
        video:'https://www.youtube.com/embed/kVxTrhojpFI',
        address:{
            latitude:46.9480,
            longitude:7.4474
        },
        currency:{
            name:'Swiss franc',
            shorCut:'CHF'
        },
        timeZone:'Europe/Zurich'
    },
    {
        id:8,
        country:'Turkey ',
        capital:'Ankara',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:turkeyMain,
        topPhotos:[
            {id:31,name:'Turkey beaches',img:turkeyPic1},
            {id:32,name:'Hagia Sophia',img:turkeyPic2},
            {id:33,name:'Turkish sea',img:turkeyPic3},
            {id:34,name:'Turkish river',img:turkeyPic4},
            {id:35,name:'Old Turkey',img:turkeyPic5},
            {id:36,name:'Old Turkey',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:9,
        country:'Russia',
        capital:'Moscow',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        mainPic:russiaMain,
        topPhotos:[
            {id:51,name:'Moscow, Kremlin',img:russia1},
            {id:52,name:'Russia',img:russia2},
            {id:53,name:'Museum',img:russia3},
            {id:54,name:'Russian resort',img:russia4},
            {id:55,name:'Moscow',img:russia5},
            {id:56,name:'Russia',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
]

export const countriesRu =  [
    {
        id:1,
        country:'Узбекистан',
        capital:'Ташкент',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:uzbMain,
        topPhotos:[
            {id:11,name:'город Наманган',img:namangan},
            {id:12,name:'Андижан, сад Бабура',img:andijan},
            {id:13,name:'Фергана, Коханское ханство',img:fergana},
            {id:14,name:'Самарканд, площадь Регистан',img:samarqand},
            {id:15,name:'Бухара, Арк',img:buxoro},
            {id:16,name:'Хорезм, замок Ичан',img:xorazim},
        ],
        flag:'🇺🇿',
        video:'https://www.youtube.com/embed/vQVwkyn3-F8',
        address:{
            latitude:41.2995,
            longitude:69.2401
        },
        currency:{
            name:'Som',
            shorCut:'UZS'
        },
        timeZone:'Asia/Tashkent',
    },
    {
        id:2,
        country:'Таиланд',
        capital:'Бангкок',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:tailandMain,
        topPhotos:[
            {id:21,name:'Тайские пляжи',img:tailand1},
            {id:22,name:'Таиланд',img:tailand2},
            {id:23,name:'Тайские пляжи',img:tailand3},
            {id:24,name:'Тайские пляжи',img:tailand4},
            {id:25,name:'Древний Таиланд',img:tailand5},
            {id:26,name:'Тайские пляжи',img:tailand6},
        ],
        flag:'🇹🇭',
        video:'https://www.youtube.com/embed/sHpTGL71x5Y',
        address:{
            latitude:13.7563,
            longitude:100.5018
        },
        currency:{
            name:'Thai baht',
            shorCut:'THB'
        },
        timeZone:'Asia/Bangkok'
    },
    {
        id:3,
        country:'Турция',
        capital:'Анкара',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:turkeyMain,
        topPhotos:[
            {id:31,name:'Турция у моря',img:turkeyPic1},
            {id:32,name:'Собор Святой Софии',img:turkeyPic2},
            {id:33,name:'Море',img:turkeyPic3},
            {id:34,name:'Турецкая река',img:turkeyPic4},
            {id:35,name:'Древняя Турция',img:turkeyPic5},
            {id:36,name:'Древняя Тукия',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:4,
        country:'ОАЭ',
        capital:'Абу Даби',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:baaMain,
        topPhotos:[
            {id:41,name:'Абу Даби',img:abuDabi},
            {id:42,name:'Дубай',img:dubai},
            {id:43,name:'Дубай город',img:dubai2},
            {id:44,name:'Музей Дубая',img:dubai3},
            {id:45,name:'Бурдж-Халифа',img:dubai5},
            {id:46,name:'Музей Дубая',img:dubai4},
        ],
        flag:'🇦🇪',
        video:'https://www.youtube.com/embed/Ex2iAyaEElQ',
        address:{
            latitude:24.4539,
            longitude:54.3773
        },
        currency:{
            name:'Dirham',
            shorCut:'AED'
        },
        timeZone:'Asia/Dubai'

    },
    {
        id:5,
        country:'Россия',
        capital:'Москва',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:russiaMain,
        topPhotos:[
            {id:51,name:'Московский Кремль',img:russia1},
            {id:52,name:'Россия',img:russia2},
            {id:53,name:'Музей',img:russia3},
            {id:54,name:'российский курорт',img:russia4},
            {id:55,name:'Москва',img:russia5},
            {id:56,name:'Россия',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
    {
        id:6,
        country:'Америка',
        capital:'Нью-Йорк',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:usaMain,
        topPhotos:[
            {id:61,name:'статуя Свободы',img:usa1},
            {id:62,name:'Белый дом в Нью-Йорке',img:usa2},
            {id:63,name:'Мост "Золотые ворота"',img:usa3},
            {id:64,name:'американские пляжи',img:usa4},
            {id:65,name:'Ниагарский водопад',img:usa5},
            {id:66,name:'американские улицы',img:usa6},
        ],
        flag:'🇺🇸',
        video:'https://www.youtube.com/embed/4Z9mUjtFJYY',
        address:{
            latitude:40.7128,
            longitude:74.0060
        },
        currency:{
            name:'Dollar',
            shorCut:'USD'
        },
        timeZone:'America/New_York'

    },
    {
        id:7,
        country:'Швейцария',
        capital:'Берн',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:switzMain,
        topPhotos:[
            {id:71,name:'Швейцарские горы',img:switz1},
            {id:72,name:'Декоративный мостик',img:switz2},
            {id:73,name:'Швейцарские горы',img:switz3},
            {id:74,name:'Швейцарская природа',img:switz4},
            {id:75,name:'Швейцария',img:switz5},
            {id:76,name:'Швейцарская природа',img:switz6},
        ],
        flag:'🇨🇭',
        video:'https://www.youtube.com/embed/kVxTrhojpFI',
        address:{
            latitude:46.9480,
            longitude:7.4474
        },
        currency:{
            name:'Swiss franc',
            shorCut:'CHF'
        },
        timeZone:'Europe/Zurich'
    },
    {
        id:8,
        country:'Турция',
        capital:'Анкара',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:turkeyMain,
        topPhotos:[
            {id:31,name:'Турция у моря',img:turkeyPic1},
            {id:32,name:'Собор Святой Софии',img:turkeyPic2},
            {id:33,name:'Море',img:turkeyPic3},
            {id:34,name:'Турецкая река',img:turkeyPic4},
            {id:35,name:'Древняя Турция',img:turkeyPic5},
            {id:36,name:'Древняя Тукия',img:turkeyPic6},
        ],
        flag:'🇹🇷',
        video:'https://www.youtube.com/embed/5K3Jdux_DDg',
        address:{
            latitude:39.9334,
            longitude:32.8597
        },
        currency:{
            name:'Lira',
            shorCut:'TRY'
        },
        timeZone:'Europe/Istanbul'
    },
    {
        id:9,
        country:'Россия',
        capital:'Москва',
        description:'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный печатник взял гранку шрифта и перемешал ее, чтобы сделать книгу образцов шрифтов. Он пережил не только пять столетий, но и скачок в электронный набор текста, оставаясь практически неизменным.',
        mainPic:russiaMain,
        topPhotos:[
            {id:51,name:'Московский Кремль',img:russia1},
            {id:52,name:'Россия',img:russia2},
            {id:53,name:'Музей',img:russia3},
            {id:54,name:'российский курорт',img:russia4},
            {id:55,name:'Москва',img:russia5},
            {id:56,name:'Россия',img:russia6},
        ],
        flag:'🇷🇺',
        video:'https://www.youtube.com/embed/lyh2kAjcmSY',
        address:{
            latitude:55.7558,
            longitude:37.6173
        },
        currency:{
            name:'Ruble',
            shorCut:'RUB'
        },
        timeZone:'Europe/Moscow'
    },
]
