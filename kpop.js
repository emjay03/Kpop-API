const express = require('express');
const app = express();
const PORT = 6969;

// Endpoint all artists
app.get('/api/all', (req, res) => {
    const all = [
      {
          "id": 1,
          "stagename": "Ahin",
          "realname": "Lee Ah In",
          "age": 27,
          "birthyear": "1999-09-27",
          "groupname": "Momoland",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 2,
          "stagename": "Ahyeon",
          "realname": "Jung Ahyeon",
          "age": 17,
          "birthyear": "2007-04-11",
          "groupname": "Babymonster",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 3,
          "stagename": "Ahyoung",
          "realname": "Cho Jayoung",
          "age": 33,
          "birthyear": "1991-05-26",
          "groupname": "Dal Shabet",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 4,
          "stagename": "Aisha",
          "realname": "Heo Yoorim",
          "age": 23,
          "birthyear": "2000-07-21",
          "groupname": "Everglow",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 5,
          "stagename": "Alice",
          "realname": "Song Joohee",
          "age": 34,
          "birthyear": "1990-03-21",
          "groupname": "Hello Venus",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 6,
          "stagename": "Arang",
          "realname": "Son Mnjung",
          "age": 24,
          "birthyear": "2000-03-08",
          "groupname": "Pink Fanstasy",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 7,
          "stagename": "Aria",
          "realname": "Baby Gauthami",
          "age": 21,
          "birthyear": "2003-03-12",
          "groupname": "X:IN",
          "gender": "Female",
          "Country": "India"
      },
      {
          "id": 8,
          "stagename": "Arin",
          "realname": "Choi Yewon",
          "age": 25,
          "birthyear": "1999-06-18",
          "groupname": "Oh My Girl",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 9,
          "stagename": "Asa",
          "realname": "Enami Asa",
          "age": 18,
          "birthyear": "2006-04-17",
          "groupname": "BABYMONSTER",
          "gender": "Female",
          "Country": "Japan"
      },
      {
          "id": 10,
          "stagename": "B-Bomb",
          "realname": "Lee Minhyuk",
          "age": 33,
          "birthyear": "1990-12-14",
          "groupname": "Block B",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 11,
          "stagename": "Babysoul",
          "realname": "Lee Soojung",
          "age": 31,
          "birthyear": "1992-07-06",
          "groupname": "Lovelyz",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 12,
          "stagename": "Jinyoung",
          "realname": "Bae Jinyoung",
          "age": 24,
          "birthyear": "2000-05-10",
          "groupname": "CIX",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 13,
          "stagename": "Bae",
          "realname": "Bae Jinsol",
          "age": 19,
          "birthyear": "2004-12-28",
          "groupname": "NMIXX",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 14,
          "stagename": "Baekah",
          "realname": "Kim Sua",
          "age": 24,
          "birthyear": "1999-10-24",
          "groupname": "XUM",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 15,
          "stagename": "BamBam",
          "realname": "Kunpimook Bhuwakul",
          "age": 27,
          "birthyear": "1997-05-02",
          "groupname": "GOT7",
          "gender": "Male",
          "Country": "Thailand"
      },
      {
          "id": 16,
          "stagename": "Bang Chan",
          "realname": "Bang Chan",
          "age": 26,
          "birthyear": "1997-10-03",
          "groupname": "Stray Kids",
          "gender": "Male",
          "Country": "Australia"
      },
      {
          "id": 17,
          "stagename": "Yongguk",
          "realname": "Bang Yongguk",
          "age": 34,
          "birthyear": "1990-03-31",
          "groupname": "B.A.P",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 18,
          "stagename": "Baro",
          "realname": "Cha Sunwoo",
          "age": 31,
          "birthyear": "1992-09-05",
          "groupname": "",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 19,
          "stagename": "Do-A",
          "realname": "Choi Yuna",
          "age": 25,
          "birthyear": "1999-02-02",
          "groupname": "ALICE",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 20,
          "stagename": "Beomgyu",
          "realname": "Choi Beomgyu",
          "age": 23,
          "birthyear": "2001-03-13",
          "groupname": "TXT",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 21,
          "stagename": "Yubin",
          "realname": "Bae Yubin",
          "age": 26,
          "birthyear": "1997-09-09",
          "groupname": "Oh My Girl",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 22,
          "stagename": "BM",
          "realname": "Matthew Kim",
          "age": 31,
          "birthyear": "1992-10-20",
          "groupname": "KARD",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 23,
          "stagename": "Bomi",
          "realname": "Yoon Bomi",
          "age": 30,
          "birthyear": "1993-08-13",
          "groupname": "Apink",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 24,
          "stagename": "Bona",
          "realname": "Kim Jiyeon",
          "age": 28,
          "birthyear": "1995-08-19",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 25,
          "stagename": "Bora",
          "realname": "Kim Bora",
          "age": 25,
          "birthyear": "1999-03-03",
          "groupname": "Cherry Bullet",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 26,
          "stagename": "Boram",
          "realname": "Jeon Boram",
          "age": 38,
          "birthyear": "1986-03-22",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 27,
          "stagename": "BX",
          "realname": "Lee Byounggon",
          "age": 26,
          "birthyear": "1998-03-05",
          "groupname": "CIX",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 28,
          "stagename": "Chaejeong",
          "realname": "Lee Chaejeong",
          "age": 24,
          "birthyear": "1999-08-26",
          "groupname": "ALICE",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 29,
          "stagename": "Chaekyung",
          "realname": "Yoon Chaekyung",
          "age": 27,
          "birthyear": "1996-07-07",
          "groupname": "APRIL",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 30,
          "stagename": "Chaerin",
          "realname": "Park Chaerin",
          "age": 22,
          "birthyear": "2002-03-13",
          "groupname": "Cherry Bullet",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 31,
          "stagename": "Chaerin",
          "realname": "Park Chaerin",
          "age": 21,
          "birthyear": "2003-03-31",
          "groupname": "ICHILLIN'",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 32,
          "stagename": "Chaeryeong",
          "realname": "Lee Chaeryeong",
          "age": 23,
          "birthyear": "2001-06-05",
          "groupname": "ITZY",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 33,
          "stagename": "Chaewon",
          "realname": "Kim Chaewon",
          "age": 26,
          "birthyear": "1997-11-08",
          "groupname": "APRIL",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 34,
          "stagename": "Chaewon",
          "realname": "Kim Chaewon",
          "age": 23,
          "birthyear": "2000-08-01",
          "groupname": "LE SSERAFIM",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 35,
          "stagename": "Chaeyeon",
          "realname": "Jung Chaeyeon",
          "age": 26,
          "birthyear": "1997-12-01",
          "groupname": "DIA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 36,
          "stagename": "Chaeyeon",
          "realname": "Lee Chaeyeon",
          "age": 24,
          "birthyear": "2000-01-11",
          "groupname": "IZ*ONE",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 37,
          "stagename": "Chaeyoung",
          "realname": "Lee Chaeyoung",
          "age": 24,
          "birthyear": "2000-05-14",
          "groupname": "fromis_9",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 38,
          "stagename": "Chaeyoung",
          "realname": "Son Chaeyoung",
          "age": 25,
          "birthyear": "1999-04-23",
          "groupname": "Twice",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 39,
          "stagename": "Chahee",
          "realname": "Park Sooyoung",
          "age": 28,
          "birthyear": "1996-03-24",
          "groupname": "MELODYDAY",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 40,
          "stagename": "Changbin",
          "realname": "Seo Changbin",
          "age": 24,
          "birthyear": "1999-08-11",
          "groupname": "Stray Kids",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 41,
          "stagename": "Chanmi",
          "realname": "Kim Chanmi",
          "age": 28,
          "birthyear": "1996-06-19",
          "groupname": "AoA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 42,
          "stagename": "Cheng Xiao",
          "realname": "Cheng Xiao",
          "age": 25,
          "birthyear": "1998-07-15",
          "groupname": "",
          "gender": "Female",
          "Country": "China"
      },
      {
          "id": 43,
          "stagename": "Chi.u",
          "realname": "Lee Jaeyi",
          "age": 25,
          "birthyear": "1998-08-16",
          "groupname": "X:IN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 44,
          "stagename": "Chiquita",
          "realname": "Riracha Phondechaphiphat",
          "age": 15,
          "birthyear": "2009-02-17",
          "groupname": "BABYMONSTER",
          "gender": "Thailand",
          "Country": "Female"
      },
      {
          "id": 45,
          "stagename": "Choa",
          "realname": "Park Choa",
          "age": 34,
          "birthyear": "1990-03-06",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 46,
          "stagename": "Choerry",
          "realname": "Choi Yerim",
          "age": 23,
          "birthyear": "2001-06-04",
          "groupname": "LOONA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 47,
          "stagename": "Chorong",
          "realname": "Park Chorong",
          "age": 33,
          "birthyear": "1991-03-03",
          "groupname": "Apink",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 48,
          "stagename": "Chowon",
          "realname": "Kim Chowon",
          "age": 18,
          "birthyear": "2005-08-18",
          "groupname": "ICHILLIN'",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 49,
          "stagename": "Chowon",
          "realname": "Han Chowon",
          "age": 21,
          "birthyear": "2002-09-16",
          "groupname": "LIGHTSUM",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 50,
          "stagename": "Chuu",
          "realname": "Kim Jiwoo",
          "age": 24,
          "birthyear": "1999-10-20",
          "groupname": "LOONA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 51,
          "stagename": "CNU",
          "realname": "Shin Dongwoo",
          "age": 33,
          "birthyear": "1991-06-16",
          "groupname": "B1A4",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 52,
          "stagename": "Daehyun",
          "realname": "Jung Daehyun",
          "age": 31,
          "birthyear": "1993-06-28",
          "groupname": "B.A.P",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 52,
          "stagename": "Daehyun",
          "realname": "Jung Daehyun",
          "age": 31,
          "birthyear": "1993-06-28",
          "groupname": "B.A.P",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 53,
          "stagename": "Dahyun",
          "realname": "Kim Dahyun",
          "age": 26,
          "birthyear": "1998-05-28",
          "groupname": "Twice",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 54,
          "stagename": "Daisy",
          "realname": "Yoo Jeongahn",
          "age": 25,
          "birthyear": "1999-01-22",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 55,
          "stagename": "Dami",
          "realname": "Lee Yoobin",
          "age": 27,
          "birthyear": "1997-03-07",
          "groupname": "Dreamcatcher",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 56,
          "stagename": "D.ana",
          "realname": "Cho Eunae",
          "age": 28,
          "birthyear": "1995-09-10",
          "groupname": "Sonamoo",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 57,
          "stagename": "Danielle",
          "realname": "Mo Jihye",
          "age": 19,
          "birthyear": "2005-04-11",
          "groupname": "NewJeans",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 58,
          "stagename": "Dawon",
          "realname": "Nam Dawon",
          "age": 27,
          "birthyear": "1997-03-16",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 59,
          "stagename": "Dayeon",
          "realname": "Hwang Da Kyeon",
          "age": 28,
          "birthyear": "1995-11-17",
          "groupname": "XUM",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 60,
          "stagename": "Dayoung",
          "realname": "Im Dayoung",
          "age": 25,
          "birthyear": "1999-05-14",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 61,
          "stagename": "Dino",
          "realname": "Lee Chan",
          "age": 25,
          "birthyear": "1999-02-11",
          "groupname": "Seventeen",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 62,
          "stagename": "DK",
          "realname": "Lee Seongmin",
          "age": 27,
          "birthyear": "1997-02-18",
          "groupname": "Seventeen",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 63,
          "stagename": "Doyeon",
          "realname": "Kim Doyeon",
          "age": 24,
          "birthyear": "1999-12-04",
          "groupname": "Weki Meki",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 64,
          "stagename": "DY",
          "realname": "Jeon Doyum",
          "age": 22,
          "birthyear": "2002-02-21",
          "groupname": "JUST B",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 65,
          "stagename": "Duna",
          "realname": "Kang Duna",
          "age": 19,
          "birthyear": "2005-04-28",
          "groupname": "CSR",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 66,
          "stagename": "E.Ji",
          "realname": "Choi Jiwon",
          "age": 23,
          "birthyear": "2000-11-08",
          "groupname": "ICHILLIN'",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 67,
          "stagename": "E.sha",
          "realname": "Kwon Yena",
          "age": 25,
          "birthyear": "1998-12-29",
          "groupname": "X:IN",
          "gender": "Female",
          "Country": "Australia"
      },
      {
          "id": 68,
          "stagename": "E'Dawn",
          "realname": "Kim Hyojong",
          "age": 30,
          "birthyear": "1994-06-01",
          "groupname": "",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 69,
          "stagename": "EJ",
          "realname": "Kim Eunji",
          "age": 26,
          "birthyear": "1997-08-13",
          "groupname": "ALICE",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 70,
          "stagename": "Elkie",
          "realname": "Chong Ting Yan",
          "age": 25,
          "birthyear": "1998-11-02",
          "groupname": "",
          "gender": "Female",
          "Country": "Hong Kong"
      },
      {
          "id": 71,
          "stagename": "Elly",
          "realname": "Jung Haerim",
          "age": 25,
          "birthyear": "1998-07-20",
          "groupname": "Weki Meki",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 72,
          "stagename": "Eric",
          "realname": "Son Youngjae",
          "age": 23,
          "birthyear": "2000-12-22",
          "groupname": "The Boyz",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 73,
          "stagename": "E:U",
          "realname": "Park Jiwon",
          "age": 26,
          "birthyear": "1998-05-19",
          "groupname": "Everglow",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 74,
          "stagename": "Euijin",
          "realname": "Hong Euijin",
          "age": 27,
          "birthyear": "1996-10-08",
          "groupname": "Sonamoo",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 75,
          "stagename": "Eunbin",
          "realname": "Kwon Eunbin",
          "age": 24,
          "birthyear": "2000-01-06",
          "groupname": "CLC",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 76,
          "stagename": "Eunchae",
          "realname": "Kwon Chaewon",
          "age": 25,
          "birthyear": "1999-05-26",
          "groupname": "DIA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 77,
          "stagename": "Eunha",
          "realname": "Jung Eunbi",
          "age": 27,
          "birthyear": "1997-05-30",
          "groupname": "VIVIZ",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 78,
          "stagename": "Eunho",
          "realname": "Myung Eunho",
          "age": 23,
          "birthyear": "2001-03-25",
          "groupname": "YOUNITE",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 79,
          "stagename": "Eunice",
          "realname": "Heo Sooyeon",
          "age": 32,
          "birthyear": "1991-09-02",
          "groupname": "DIA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 80,
          "stagename": "Eunji",
          "realname": "Jung Eunji",
          "age": 30,
          "birthyear": "1993-08-18",
          "groupname": "Apink",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 81,
          "stagename": "Eunji",
          "realname": "Hong Eunji",
          "age": 31,
          "birthyear": "1992-07-19",
          "groupname": "Brave Girls",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 82,
          "stagename": "Eunjin",
          "realname": "Ahn Eunjin",
          "age": 26,
          "birthyear": "1997-08-31",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 83,
          "stagename": "Eunjung",
          "realname": "Ham Eunjung",
          "age": 35,
          "birthyear": "1988-12-12",
          "groupname": "T-ara",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 84,
          "stagename": "Eunsang",
          "realname": "Lee Eunsang",
          "age": 21,
          "birthyear": "2002-10-26",
          "groupname": "YOUNITE",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 85,
          "stagename": "Eunseo",
          "realname": "Son Juyeon",
          "age": 26,
          "birthyear": "1998-05-27",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 85,
          "stagename": "Eunseo",
          "realname": "Son Juyeon",
          "age": 26,
          "birthyear": "1998-05-27",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 86,
          "stagename": "Eunwoo",
          "realname": "Jeong Eunwoo",
          "age": 25,
          "birthyear": "1998-07-01",
          "groupname": "Hinapia",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 87,
          "stagename": "Exy",
          "realname": "Chu Sojung",
          "age": 28,
          "birthyear": "1995-11-06",
          "groupname": "WJSN",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 88,
          "stagename": "Felix",
          "realname": "Lee Youngbok",
          "age": 23,
          "birthyear": "2000-09-15",
          "groupname": "Stray Kids",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 89,
          "stagename": "Gaeul",
          "realname": "Kim Gaeul",
          "age": 21,
          "birthyear": "2002-09-24",
          "groupname": "IVE",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 90,
          "stagename": "Gahyeon",
          "realname": "Lee Gahyeon",
          "age": 25,
          "birthyear": "1999-02-03",
          "groupname": "Dreamcatcher",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 91,
          "stagename": "Garam",
          "realname": "Kim Garam",
          "age": 18,
          "birthyear": "2005-11-16",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 92,
          "stagename": "Gayoung",
          "realname": "Kim Gayoung",
          "age": 32,
          "birthyear": "1991-12-02",
          "groupname": "Stellar",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 93,
          "stagename": "Geumhee",
          "realname": "Han Geumhee",
          "age": 19,
          "birthyear": "2005-03-04",
          "groupname": "CSR",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 94,
          "stagename": "Giselle",
          "realname": "Uchinaga Aeri",
          "age": 23,
          "birthyear": "2000-10-30",
          "groupname": "aespa",
          "gender": "Japan",
          "Country": "Female"
      },
      {
          "id": 95,
          "stagename": "Gongchan",
          "realname": "Gong Chansik",
          "age": 30,
          "birthyear": "1993-08-14",
          "groupname": "B1A4",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 96,
          "stagename": "Gowon",
          "realname": "Park Chaewon",
          "age": 23,
          "birthyear": "2000-11-19",
          "groupname": "LOONA",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 97,
          "stagename": "Gunwook",
          "realname": "Park Gunwook",
          "age": 18,
          "birthyear": "2005-10-01",
          "groupname": "ZEROBASEONE",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 98,
          "stagename": "Gyuri",
          "realname": "Jang Gyuri",
          "age": 26,
          "birthyear": "1997-12-27",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 99,
          "stagename": "Gyuvin",
          "realname": "Kim Gyuvin",
          "age": 19,
          "birthyear": "2004-08-30",
          "groupname": "ZEROBASEONE",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 100,
          "stagename": "Haebin",
          "realname": "Han Haebin",
          "age": 28,
          "birthyear": "1995-08-16",
          "groupname": "Gugudan",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 101,
          "stagename": "Haein",
          "realname": "Yeom Haein",
          "age": 29,
          "birthyear": "1995-05-19",
          "groupname": "LABOUM",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 102,
          "stagename": "Haerin",
          "realname": "Kang Haerin",
          "age": 18,
          "birthyear": "2006-05-15",
          "groupname": "NewJeans",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 103,
          "stagename": "Haewon",
          "realname": "Oh Haewon",
          "age": 21,
          "birthyear": "2003-02-25",
          "groupname": "NMIXX",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 104,
          "stagename": "Haeyoon",
          "realname": "Park Haeyoon",
          "age": 28,
          "birthyear": "1996-01-10",
          "groupname": "Cherry Bullet",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 105,
          "stagename": "Hajeong",
          "realname": "Lee Hajeong",
          "age": 26,
          "birthyear": "1997-09-23",
          "groupname": "",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 106,
          "stagename": "Hakmin",
          "realname": "Lee Hakmin",
          "age": 23,
          "birthyear": "2000-09-20",
          "groupname": "TRCNG",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 107,
          "stagename": "Han",
          "realname": "Han Jisung",
          "age": 23,
          "birthyear": "2000-09-14",
          "groupname": "Stray Kids",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 108,
          "stagename": "Hana",
          "realname": "Shin Bora",
          "age": 31,
          "birthyear": "1993-04-30",
          "groupname": "Gugudan",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 109,
          "stagename": "Hana",
          "realname": "Jung Hana",
          "age": 34,
          "birthyear": "1990-02-02",
          "groupname": "SECRET",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 110,
          "stagename": "Hanbin",
          "realname": "Sung Hanbin",
          "age": 23,
          "birthyear": "2001-06-13",
          "groupname": "ZEROBASEONE",
          "gender": "Male",
          "Country": "South Korea"
      },
      {
          "id": 111,
          "stagename": "Handong",
          "realname": "Han Dong",
          "age": 28,
          "birthyear": "1996-03-26",
          "groupname": "Dreamcatcher",
          "gender": "Female",
          "Country": "China"
      },
      {
          "id": 112,
          "stagename": "Hani",
          "realname": "Ahn Hee-yeon",
          "age": 32,
          "birthyear": "1992-05-01",
          "groupname": "EXID",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 113,
          "stagename": "Hanni",
          "realname": "Pham Ngoc Han",
          "age": 19,
          "birthyear": "2004-10-06",
          "groupname": "NewJeans",
          "gender": "Female",
          "Country": "Vietnam"
      },
      {
          "id": 114,
          "stagename": "Haram",
          "realname": "Shin Haram",
          "age": 16,
          "birthyear": "2007-10-17",
          "groupname": "BABYMONSTER",
          "gender": "Female",
          "Country": "South Korea"
      },
      {
          "id": 115,
          "stagename": "Haseul",
          "realname": "Jo Haseul",
          "age": 26,
          "birthyear": "1997-08-18",
          "groupname": "LOONA",
          "gender": "Female",
          "Country": "South Korea"
      }
  ];
    const id = req.query.id; // Retrieve the ID from the query parameters
    
    if (id) {
      // Find the object with the specified ID
      const result = all.find((item) => item.id === Number(id));
  
      if (!result) {
        res.status(404).json({ error: "ID not found" });
      } else {
        res.json(result);
      }
    } else {
      // Return all the objects if no ID is provided
      res.json(all);
    }

    });

    // Endpoint Girlgroup
    app.get('/api/girlgroup', (req, res) => { 
      const girlgroup =[
        {
          "id": 1,
          "stagename": "A-ra",
          "fullname": "Choi Eunji",
          "koreanname": "최은지",
          "koreanstage": "아라",
          "dateofbirth": "2003-07-25",
          "group": "Girls' World",
          "country": "South Korea",
          "birthplace": "Seoul"
        },
        {
          "id": 2,
          "stagename": "Aeji",
          "fullname": "Kwon Aeji",
          "koreanname": "권애지",
          "koreanstage": "애지",
          "dateofbirth": "1999-10-25",
          "group": "Hashtag",
          "country": "South Korea",
          "birthplace": "Daegu"
        },
        {
          "id": 3,
          "stagename": "AhIn",
          "fullname": "Lee Ahin",
          "koreanname": "이아인",
          "koreanstage": "아인",
          "dateofbirth": "1999-09-27",
          "group": "MOMOLAND",
          "country": "South Korea",
          "birthplace": "Wonju"
        },
        {
          "id": 4,
          "stagename": "Ahra",
          "fullname": "Go Ahra",
          "koreanname": "고아라",
          "koreanstage": "아라",
          "dateofbirth": "2001-02-21",
          "group": "Favorite",
          "country": "South Korea",
          "birthplace": "Yeosu"
        },
        {
          "id": 5,
          "stagename": "Ahyeon",
          "fullname": "Jung Ahyeon",
          "koreanname": "정아현",
          "koreanstage": "아현",
          "dateofbirth": "2007-04-11",
          "group": "BABYMONSTER",
          "country": "South Korea"
        },
        {
          "id": 6,
          "stagename": "Ahyoon",
          "fullname": "Choi Subin",
          "koreanname": "최수빈",
          "koreanstage": "아윤",
          "dateofbirth": "2004-10-23",
          "group": "BOTOPASS",
          "country": "South Korea"
        },
        {
          "id": 7,
          "stagename": "Ahyoon",
          "fullname": "Shin Ahyoon",
          "koreanname": "신아윤",
          "koreanstage": "아윤",
          "dateofbirth": "2003-09-24",
          "group": "Queenz Eye",
          "country": "South Korea",
          "birthplace": "Seoul"
        },
        {
          "id": 8,
          "stagename": "Ahyoung",
          "fullname": "Cho Jayoung",
          "koreanname": "조자영",
          "koreanstage": "아영",
          "dateofbirth": "1991-05-26",
          "group": "Dal Shabet",
          "country": "South Korea",
          "birthplace": "Seoul"
        },
        {
          "id": 9,
          "stagename": "Ahyung",
          "fullname": "Kang Ahyoung",
          "koreanname": "강아형",
          "koreanstage": "아형",
          "dateofbirth": "1996-08-27",
          "group": "P.O.P",
          "country": "South Korea",
          "birthplace": "Pohang"
        },
        {
          "id": 10,
          "stagename": "Ailee",
          "fullname": "Lee Yejin",
          "koreanname": "이예진",
          "koreanstage": "에일리",
          "dateofbirth": "1989-05-30",
          "country": "South Korea",
          "birthplace": "USA",
          "birthplacecity": "Denver",
          "twitter": "aileeonline"
        },
        {
          "id": 11,
          "stagename": "Aini",
          "fullname": "Kim Heejung",
          "koreanname": "김희정",
          "koreanstage": "아이니",
          "dateofbirth": "1991-07-13",
          "country": "South Korea",
          "group": "Pink Fantasy"
        },
        {
          "id": 12,
          "stagename": "Aisha",
          "fullname": "Heo Yoorim",
          "koreanname": "허유림",
          "koreanstage": "아샤",
          "dateofbirth": "2000-07-21",
          "group": "Everglow",
          "country": "South Korea"
        },
        {
          "id": 13,
          "stagename": "Aki",
          "fullname": "Jang Minju",
          "koreanname": "장민주",
          "koreanstage": "아키",
          "dateofbirth": "2001-02-12",
          "group": "MAJORS",
          "country": "South Korea"
        },
        {
          "id": 14,
          "stagename": "AleXa",
          "fullname": "Kim Seri",
          "koreanname": "김세리",
          "koreanstage": "알렉사",
          "dateofbirth": "1996-12-06",
          "country": "USA"
        },
        {
          "id": 15,
          "stagename": "Alice",
          "fullname": "Song Joohee",
          "koreanname": "송주희",
          "koreanstage": "앨리스",
          "dateofbirth": "1990-03-21",
          "group": "Hello Venus",
          "country": "South Korea",
          "birthplace": "Wonju",
          "instagram": "jh.song_alice"
        },
        {
          "id": 16,
          "stagename": "Alice",
          "fullname": "Cheon Jaeyoung",
          "koreanname": "천재영",
          "koreanstage": "앨리스",
          "dateofbirth": "2002-02-20",
          "group": "TRACER",
          "country": "South Korea"
        },
        {
          "id": 17,
          "stagename": "Amber",
          "fullname": "Amber Josephine Liu",
          "koreanname": "엠버 조세핀 리우",
          "koreanstage": "엠버",
          "dateofbirth": "1992-09-18",
          "group": "f(x)",
          "country": "USA",
          "birthplace": "Taiwan",
          "birthplacecity": "Los Angeles",
          "instagram": "ajol_llama"
        },
        {
          "id": 18,
          "stagename": "Anne",
          "fullname": "Lee Seoyoung",
          "koreanname": "이서영",
          "koreanstage": "앤",
          "dateofbirth": "2000-10-17",
          "group": "GWSN",
          "country": "South Korea"
        },
        {
          "id": 19,
          "stagename": "Ara",
          "fullname": "Lee Yunji",
          "koreanname": "이윤지",
          "koreanstage": "아라",
          "dateofbirth": "2002-01-23",
          "group": "ILY:1",
          "country": "South Korea"
        },
        {
          "id": 20,
          "stagename": "Aran",
          "fullname": "Jeong Eunah",
          "koreanname": "정은아",
          "koreanstage": "아란",
          "dateofbirth": "2004-10-11",
          "group": "FIFTY FIFTY",
          "country": "South Korea"
        },
        {
          "id": 21,
          "stagename": "Arang",
          "fullname": "Son Mnjung",
          "koreanname": "손민정",
          "koreanstage": "아랑",
          "dateofbirth": "2000-03-08",
          "country": "South Korea",
          "group": "NeonPunch",
          "instagram": "sunghyuk_seo"
        },
        {
          "id": 22,
          "stagename": "Arang",
          "fullname": "Park Yerim",
          "koreanname": "박예림",
          "koreanstage": "아랑",
          "dateofbirth": "2001-01-22",
          "group": "Pink Fantasy",
          "country": "South Korea"
        },
        {
          "id": 23,
          "stagename": "Areum",
          "fullname": "Kim Daun",
          "koreanname": "김다운",
          "koreanstage": "아름",
          "dateofbirth": "1998-01-31",
          "group": "AREAL",
          "country": "South Korea",
          "instagram": "rose_finger"
        },
        {
          "id": 24,
          "stagename": "Ari",
          "fullname": "Kim Sunyoung",
          "koreanname": "김선영",
          "koreanstage": "아리",
          "dateofbirth": "1994-10-23",
          "group": "Tahiti",
          "country": "South Korea",
          "birthplace": "Daegu"
        },
        {
          "id": 25,
          "stagename": "Aria",
          "fullname": "Baby Gauthami",
          "koreanname": "베이비 고타미",
          "koreanstage": "아리아",
          "dateofbirth": "2003-03-12",
          "group": "X:IN",
          "country": "India"
        },
        {
          "id": 26,
          "stagename": "Arie",
          "fullname": "Jeon Minjae",
          "koreanname": "전민재",
          "koreanstage": "아리",
          "dateofbirth": "2000-10-29",
          "group": "TWEETY",
          "country": "South Korea"
        },
        {
          "id": 27,
          "stagename": "Ariyoshi",
          "fullname": "Ariyoshi Risa",
          "koreanname": "아리요시 리사",
          "koreanstage": "아리요시",
          "dateofbirth": "1995-03-27",
          "country": "Japan"
        },
        {
          "id": 28,
          "stagename": "Arin",
          "fullname": "Choi Yujin",
          "koreanname": "최유진",
          "koreanstage": "아린",
          "dateofbirth": "2000-06-18",
          "group": "OH MY GIRL",
          "country": "South Korea",
          "birthplace": "Busan"
        },
        {
          "id": 29,
          "stagename": "Arin",
          "fullname": "Jeong Soojin",
          "koreanname": "정수진",
          "koreanstage": "아린",
          "dateofbirth": "1999-03-03",
          "group": "StayC",
          "country": "South Korea",
          "birthplace": "Jeju"
        },
        {
          "id": 30,
          "stagename": "Arisa",
          "fullname": "Arisa Takigawa",
          "koreanname": "아리사 타키가와",
          "koreanstage": "아리사",
          "dateofbirth": "1996-12-06",
          "country": "Japan"
        },
        {
          "id": 32,
          "stagename": "Asa",
          "fullname": "Enami Asa",
          "koreanname": "에나미 아사",
          "koreanstage": "아사",
          "dateofbirth": "2006-04-17",
          "group": "BABYMONSTER",
          "country": "Japan"
          },
          {
          "id": 33,
          "stagename": "Ashley",
          "fullname": "Ashley Choi",
          "koreanname": "애슐리 최",
          "koreanstage": "애슐리",
          "dateofbirth": "1991-11-09",
          "group": "Ladies' Code",
          "country": "South Korea",
          "birthplace": "Incheon"
          },
          {
          "id": 34,
          "stagename": "Aurora",
          "fullname": "Yang Lan",
          "koreanname": "양안",
          "koreanstage": "오로라",
          "dateofbirth": "1997-01-14",
          "group": "NATURE",
          "country": "China"
          },
          {
          "id": 35,
          "stagename": "Ayamy",
          "fullname": "Suzuki Ayami",
          "koreanname": "스즈키 아야미",
          "koreanstage": "아야미",
          "dateofbirth": "2000-07-15",
          "group": "Bling Bling",
          "country": "Japan"
          },
          {
          "id": 36,
          "stagename": "Ayeon",
          "fullname": "Son Minji",
          "koreanname": "손민지",
          "koreanstage": "아연",
          "dateofbirth": "2002-09-29",
          "group": "Saturday",
          "country": "South Korea"
          },
          {
          "id": 37,
          "stagename": "Babysoul",
          "fullname": "Lee Soojung",
          "koreanname": "이수정",
          "koreanstage": "베이비소울",
          "dateofbirth": "1992-07-06",
          "group": "Lovelyz",
          "country": "South Korea",
          "birthplace": "Gwangju",
          "position": "Leader"
          },
          {
          "id": 38,
          "stagename": "Bada",
          "fullname": "Kim Bada",
          "koreanname": "김바다",
          "koreanstage": "바다",
          "dateofbirth": "2002-05-28",
          "group": "Hinapia",
          "country": "South Korea"
          },
          {
          "id": 39,
          "stagename": "Bae",
          "fullname": "Bae Jinsol",
          "koreanname": "배진솔",
          "koreanstage": "배이",
          "dateofbirth": "2004-12-28",
          "group": "NMIXX",
          "country": "South Korea"
          },
          {
          "id": 40,
          "stagename": "Baekah",
          "fullname": "Kim Sua",
          "koreanname": "김수아",
          "koreanstage": "백아",
          "dateofbirth": "1999-10-24",
          "group": "XUM",
          "country": "South Korea",
          "birthplace": "NeonPunch"
          },
          {
          "id": 41,
          "stagename": "Bahiyyih",
          "fullname": "Huening Bahiyyih",
          "koreanname": "휴닝바히에",
          "koreanstage": "바히에",
          "dateofbirth": "2004-07-27",
          "group": "Kep1er",
          "country": "USA",
          "birthplace": "South Korea"
          },
          {
          "id": 42,
          "stagename": "Bekah",
          "fullname": "Rebecca Kim",
          "koreanname": "김레베카",
          "koreanstage": "베카",
          "dateofbirth": "1989-08-11",
          "country": "South Korea",
          "birthplace": "USA",
          "birthplace2": "Honolulu",
          "group": "After School"
          },
          {
          "id": 43,
          "stagename": "Belle",
          "fullname": "Jin Hyeonjoo",
          "koreanname": "진현주",
          "koreanstage": "벨",
          "dateofbirth": "2001-11-03",
          "group": "Cignature",
          "country": "South Korea",
          "birthplace": "Goyang",
          "position": "Good Day"
          },
          {
          "id": 44,
          "stagename": "Bessie",
          "fullname": "Kim Susanna",
          "koreanname": "김수산나",
          "koreanstage": "베시",
          "dateofbirth": "2004-07-15",
          "group": "Lapillus",
          "country": "South Korea",
          "birthplace": "Changwon"
          },
          {
          "id": 45,
          "stagename": "Bian",
          "fullname": "Yu Jiwon",
          "koreanname": "유지원",
          "koreanstage": "비안",
          "dateofbirth": "2001-02-13",
          "group": "MAJORS",
          "country": "South Korea",
          "birthplace": "ANS"
          },
          {
          "id": 46,
          "stagename": "BIBI",
          "fullname": "Kim Hyungseo",
          "koreanname": "김형서",
          "koreanstage": "비비",
          "dateofbirth": "1998-09-27",
          "country": "South Korea"
          },
          {
          "id": 47,
          "stagename": "Blue",
          "fullname": "Jung Gahee",
          "koreanname": "정가희",
          "koreanstage": "파랑",
          "dateofbirth": "1994-01-18",
          "group": "Pungdeng-E",
          "country": "South Korea",
          "birthplace": "Gwangju"
          },
          {
          "id": 48,
          "stagename": "BoA",
          "fullname": "Kwon Boa",
          "koreanname": "권보아",
          "koreanstage": "보아",
          "dateofbirth": "1986-11-05",
          "country": "South Korea",
          "birthplace": "Guri"
          },
          {
          "id": 49,
          "stagename": "Boa",
          "fullname": "Kim Boah",
          "koreanname": "김보아",
          "koreanstage": "보아",
          "dateofbirth": "1987-01-14",
          "group": "KEEMBO",
          "country": "South Korea",
          "birthplace": "SPICA"
          },
          {
          "id": 50,
          "stagename": "Boeun",
          "fullname": "Park Boeun",
          "koreanname": "박보은",
          "koreanstage": "보은",
          "dateofbirth": "2008-02-11",
          "group": "CLASS:y",
          "country": "South Korea"
          },
          {
          "id": 51,
          "stagename": "Bohyung",
          "fullname": "Kim Bohyung",
          "koreanname": "김보형",
          "koreanstage": "보형",
          "dateofbirth": "1991-03-31",
          "group": "KEEMBO",
          "country": "South Korea",
          "birthplace": "SPICA-S"
          },
          {
          "id": 52,
          "stagename": "Bom",
          "fullname": "Park Bom",
          "koreanname": "박봄",
          "koreanstage": "봄",
          "dateofbirth": "1984-03-24",
          "group": "2NE1",
          "country": "South Korea",
          "twitter": "haroobommi"
          },
          {
            "id": 53,
            "stagename": "Bomi",
            "fullname": "Yoon Bomi",
            "koreanname": "윤보미",
            "koreanstage": "보미",
            "dateofbirth": "1993-08-13",
            "group": "Apink",
            "country": "South Korea",
            "birthplace": "Suwon",
            "fanclub": "Chobom"
            },
            {
            "id": 54,
            "stagename": "Bomin",
            "fullname": "Kim Bomin",
            "koreanname": "김보민",
            "koreanstage": "보민",
            "dateofbirth": "2001-09-24",
            "group": "RedSquare",
            "country": "South Korea",
            "birthplace": "Gwangju",
            "position": "Good Day Dancer"
            },
            {
            "id": 55,
            "stagename": "Bona",
            "fullname": "Kim Jiyeon",
            "koreanname": "김지연",
            "koreanstage": "보나",
            "dateofbirth": "1995-08-19",
            "group": "WJSN",
            "country": "South Korea",
            "birthplace": "Daegu",
            "subgroup": "WJSN The Black"
            },
            {
            "id": 56,
            "stagename": "Boni",
            "fullname": "Choi Euijeong",
            "koreanname": "최의정",
            "koreanstage": "보니",
            "dateofbirth": "1999-10-30",
            "group": "Dreamnote",
            "country": "South Korea"
            },
            {
            "id": 57,
            "stagename": "Bora",
            "fullname": "Yoon Bora",
            "koreanname": "윤보라",
            "koreanstage": "보라",
            "dateofbirth": "1989-12-30",
            "group": "SISTAR",
            "country": "South Korea",
            "subunit": "SISTAR19",
            "twitter": "borabora_sugar"
            },
            {
            "id": 58,
            "stagename": "Bora",
            "fullname": "Kim Bora",
            "koreanname": "김보라",
            "koreanstage": "보라",
            "dateofbirth": "1999-03-03",
            "group": "Cherry Bullet",
            "country": "South Korea"
            },
            {
            "id": 59,
            "stagename": "Boram",
            "fullname": "Jeon Boram",
            "koreanname": "전보람",
            "koreanstage": "보람",
            "dateofbirth": "1986-03-22",
            "country": "South Korea",
            "birthplace": "Seoul",
            "group": "T-ara",
            "instagram": "bo_ram_0322"
            },
            {
            "id": 60,
            "stagename": "Cao Lu",
            "fullname": "Cao Lu",
            "koreanname": "차오루",
            "koreanstage": "차오루",
            "dateofbirth": "1987-08-30",
            "group": "Fiestar",
            "country": "China",
            "birthplace": "Zhangjiajie",
            "instagram": "better_me_lulu"
            },
            {
            "id": 61,
            "stagename": "Chaebin",
            "fullname": "Choi Yoobin",
            "koreanname": "최유빈",
            "koreanstage": "채빈",
            "dateofbirth": "1999-07-28",
            "group": "NATURE",
            "country": "South Korea"
            },
            {
            "id": 62,
            "stagename": "Chaeeun",
            "fullname": "Yoon Chaeeun",
            "koreanname": "윤채은",
            "koreanstage": "채은",
            "dateofbirth": "2005-12-10",
            "group": "ADYA",
            "country": "South Korea",
            "birthplace": "Mokpo"
            },
            {
            "id": 63,
            "stagename": "Chaehyun",
            "fullname": "Kim Chaehyun",
            "koreanname": "김채현",
            "koreanstage": "채현",
            "dateofbirth": "1999-11-29",
            "group": "Bonus Baby",
            "country": "South Korea"
            },
            {
            "id": 64,
            "stagename": "Chaehyun",
            "fullname": "Kim Chaehyun",
            "koreanname": "김채현",
            "koreanstage": "채현",
            "dateofbirth": "2002-04-26",
            "group": "Kep1er",
            "country": "South Korea"
            },
            {
            "id": 65,
            "stagename": "Chaein",
            "fullname": "Lee Chaeyoung",
            "koreanname": "이채영",
            "koreanstage": "채인",
            "dateofbirth": "2002-12-05",
            "group": "Purple Kiss",
            "country": "South Korea"
            },
            {
            "id": 66,
            "stagename": "Chaejeong",
            "fullname": "Lee Chaejeong",
            "koreanname": "이채정",
            "koreanstage": "채정",
            "dateofbirth": "1999-08-26",
            "group": "ALICE",
            "country": "South Korea"
            },
            {
            "id": 67,
            "stagename": "Chaekyung",
            "fullname": "Yoon Chaekyung",
            "koreanname": "윤채경",
            "koreanstage": "채경",
            "dateofbirth": "1996-07-07",
            "group": "APRIL",
            "country": "South Korea",
            "birthplace": "Incheon",
            "subunit": "C.I.V.A, I.B.I",
            "formergroup": "Puretty"
            },
            {
            "id": 68,
            "stagename": "Chaelin",
            "fullname": "Lee Chaelin",
            "koreanname": "이채린",
            "koreanstage": "채린",
            "dateofbirth": "1999-10-20",
            "group": "FANATICS",
            "country": "South Korea"
            },
            {
            "id": 69,
            "stagename": "Chaerin",
            "fullname": "Park Chaerin",
            "koreanname": "박채린",
            "koreanstage": "채린",
            "dateofbirth": "2002-03-13",
            "group": "Cherry Bullet",
            "country": "South Korea"
            },
            {
            "id": 70,
            "stagename": "Chaerin",
            "fullname": "Park Chaerin",
            "koreanname": "박채린",
            "koreanstage": "채린",
            "dateofbirth": "2003-03-31",
            "group": "ICHILLIN'",
            "country": "South Korea"
            },
            {
            "id": 71,
            "stagename": "Chaerin",
            "fullname": "Lee Chaerin",
            "koreanname": "이채린",
            "koreanstage": "채린",
            "dateofbirth": "2007-07-07",
            "group": "KELT9b",
            "country": "South Korea"
            },
            {
            "id": 72,
            "stagename": "Chaeryeong",
            "fullname": "Lee Chaeryeong",
            "koreanname": "이채령",
            "koreanstage": "채령",
            "dateofbirth": "2001-06-05",
            "group": "ITZY",
            "country": "South Korea",
            "birthplace": "Yongin"
            },
            {
            "id": 73,
            "stagename": "Chaesol",
            "fullname": "Maeng Chaesol",
            "koreanname": "맹채솔",
            "koreanstage": "채솔",
            "dateofbirth": "1998-07-14",
            "group": "Cignature",
            "country": "South Korea",
            "birthplace": "Yeosu",
            "position": "Good Day"
            },
            {
            "id": 74,
            "stagename": "Chaewon",
            "fullname": "Kim Chaewon",
            "koreanname": "김채원",
            "koreanstage": "채원",
            "dateofbirth": "1997-11-08",
            "group": "APRIL",
            "country": "South Korea",
            "birthplace": "Gongju"
            },
            {
            "id": 75,
            "stagename": "Chaewon",
            "fullname": "Kim Chaewon",
            "koreanname": "김채원",
            "koreanstage": "채원",
            "dateofbirth": "2000-08-01",
            "group": "LE SSERAFIM",
            "country": "South Korea",
            "birthplace": "Seoul",
            "formergroup": "IZ*ONE"
            },
            {
            "id": 76,
            "stagename": "Chaeyoung",
            "fullname": "Son Chaeyoung",
            "koreanname": "손채영",
            "koreanstage": "채영",
            "dateofbirth": "1999-04-23",
            "group": "TWICE",
            "country": "South Korea",
            "birthplace": "Seoul"
            },
            {
            "id": 77,
            "stagename": "Chaeyoung",
            "fullname": "Kim Chaeyoung",
            "koreanname": "김채영",
            "koreanstage": "채영",
            "dateofbirth": "2000-07-07",
            "group": "fromis_9",
            "country": "South Korea"
            },
            {
              "id": 78,
              "stagename": "Chahee",
              "fullname": "Park Sooyoung",
              "koreanname": "박수영",
              "koreanstage": "차희",
              "dateofbirth": "1996-03-24",
              "group": "MELODYDAY",
              "country": "South Korea",
              "position": "Sub Vocalist"
              },
              {
              "id": 79,
              "stagename": "Chanmi",
              "fullname": "Kim Chanmi",
              "koreanname": "김찬미",
              "koreanstage": "찬미",
              "dateofbirth": "1996-06-19",
              "group": "AoA",
              "country": "South Korea",
              "birthplace": "Gumi"
              },
              {
              "id": 80,
              "stagename": "Chanty",
              "fullname": "Maria Chantal Videla",
              "koreanname": "마리아 샹탈 비델라",
              "koreanstage": "샨티",
              "dateofbirth": "2002-12-15",
              "group": "Lapillus",
              "country": "Philippines",
              "birthplace": "Argentina",
              "hometown": "Manila"
              },
              {
              "id": 81,
              "stagename": "Cheng Xiao",
              "fullname": "Cheng Xiao",
              "koreanname": "청샤오",
              "koreanstage": "성소",
              "dateofbirth": "1998-07-15",
              "group": "WJSN",
              "country": "China",
              "birthplace": "Shenzhen"
              },
              {
              "id": 82,
              "stagename": "Cheongeum",
              "fullname": "Jang Cheongeum",
              "koreanname": "장청음",
              "koreanstage": "청음",
              "dateofbirth": "1996-06-19",
              "group": "Ho1iday",
              "country": "South Korea"
              },
              {
              "id": 83,
              "stagename": "Chi.u",
              "fullname": "Lee Jaeyi",
              "koreanname": "이재이",
              "koreanstage": "치유",
              "dateofbirth": "1998-08-16",
              "group": "X:IN",
              "country": "South Korea"
              },
              {
              "id": 84,
              "stagename": "Chiayi",
              "fullname": "Li Chiayi",
              "koreanname": "지아이",
              "koreanstage": "지아이",
              "dateofbirth": "2000-01-22",
              "group": "FANATICS",
              "country": "Taiwan",
              "subunit": "FANATICS FLAVOR"
              },
              {
              "id": 85,
              "stagename": "Chiquita",
              "fullname": "Riracha Phondechaphiphat",
              "koreanname": "리라차 폰데차피팟",
              "koreanstage": "치키타",
              "dateofbirth": "2009-02-17",
              "group": "BABYMONSTER",
              "country": "Thailand"
              },
              {
              "id": 86,
              "stagename": "Chloe",
              "fullname": "Yun Jiwon",
              "koreanname": "윤지원",
              "koreanstage": "클로이",
              "dateofbirth": "2001-01-06",
              "group": "Cignature",
              "country": "South Korea",
              "hometown": "Seoul"
              },
              {
              "id": 87,
              "stagename": "Choa",
              "fullname": "Park Choa",
              "koreanname": "박초아",
              "koreanstage": "초아",
              "dateofbirth": "1990-03-06",
              "group": "AoA",
              "country": "South Korea",
              "birthplace": "Incheon",
              "subunit": "AOA BLACK"
              },
              {
              "id": 88,
              "stagename": "Choa",
              "fullname": "Heo Minjin",
              "koreanname": "허민진",
              "koreanstage": "초아",
              "dateofbirth": "1990-07-12",
              "group": "Crayon Pop",
              "country": "South Korea",
              "hometown": "Seoul"
              },
              {
              "id": 89,
              "stagename": "Choerry",
              "fullname": "Choi Yerim",
              "koreanname": "최예림",
              "koreanstage": "최리",
              "dateofbirth": "2001-06-04",
              "group": "LOONA",
              "country": "South Korea",
              "subunit": "Loona Odd Eye Circle, ARTMS"
              },
              {
              "id": 90,
              "stagename": "Chorong",
              "fullname": "Park Chorong",
              "koreanname": "박초롱",
              "koreanstage": "초롱",
              "dateofbirth": "1991-03-03",
              "group": "Apink",
              "country": "South Korea",
              "birthplace": "Chungwongoon",
              "fanclub": "Chobom",
              "instagram": "mulgokizary"
              },
              {
              "id": 91,
              "stagename": "Chowon",
              "fullname": "Han Chowon",
              "koreanname": "한초원",
              "koreanstage": "초원",
              "dateofbirth": "2002-09-16",
              "group": "LIGHTSUM",
              "country": "South Korea",
              "hometown": "Seoul"
              },
              {
              "id": 92,
              "stagename": "Chowon",
              "fullname": "Kim Chowon",
              "koreanname": "김초원",
              "koreanstage": "초원",
              "dateofbirth": "2005-08-18",
              "group": "ICHILLIN'",
              "country": "South Korea"
              },
              {
              "id": 93,
              "stagename": "Choyeon",
              "fullname": "Kim Choyeon",
              "koreanname": "김초연",
              "koreanstage": "초연",
              "dateofbirth": "2001-08-01",
              "group": "bugAboo",
              "country": "South Korea"
              },
              {
              "id": 94,
              "stagename": "Chungha",
              "fullname": "Kim Chungha",
              "koreanname": "김청하",
              "koreanstage": "청하",
              "dateofbirth": "1996-02-09",
              "country": "South Korea",
              "birthplace": "Dallas",
              "formergroup": "I.O.I"
              },
              {
              "id": 95,
              "stagename": "Chuu",
              "fullname": "Kim Jiwoo",
              "koreanname": "김지우",
              "koreanstage": "츄",
              "dateofbirth": "1999-10-20",
              "group": "LOONA",
              "country": "South Korea",
              "birthplace": "Cheongju",
              "subunit": "Loona yyxy"
              },
              {
                "id": 96,
                "stagename": "CL",
                "fullname": "Lee Chaerin",
                "koreanname": "이채린",
                "koreanstage": "씨엘",
                "dateofbirth": "1991-02-26",
                "group": "2NE1",
                "country": "South Korea",
                "birthplace": "",
                "subunit": "",
                "twitter": "chaelincl"
              },
              {
                "id": 97,
                "stagename": "Cui Xiang",
                "fullname": "Cui Xiang",
                "koreanname": "최상",
                "koreanstage": "최상",
                "dateofbirth": "1995-01-26",
                "group": "BOTOPASS",
                "country": "China",
                "birthplace": "",
                "subunit": "",
                "twitter": "ILUV"
              },
              {
                "id": 98,
                "stagename": "Cyan",
                "fullname": "Lee Chaeeun",
                "koreanname": "이채은",
                "koreanstage": "시안",
                "dateofbirth": "2001-04-04",
                "group": "bugAboo",
                "country": "South Korea",
                "birthplace": "Sanbon",
                "subunit": ""
              },
              {
                "id": 99,
                "stagename": "D.ana",
                "fullname": "Cho Eunae",
                "koreanname": "조은애",
                "koreanstage": "디애나",
                "dateofbirth": "1995-09-10",
                "group": "Sonamoo",
                "country": "South Korea",
                "birthplace": "Seoul",
                "subunit": "",
                "position": "Rapper",
                "twitter": "SONAMOO_Dana"
              },
              {
                "id": 100,
                "stagename": "Dabi",
                "fullname": "Park Jiwon",
                "koreanname": "박지원",
                "koreanstage": "다비",
                "dateofbirth": "2000-01-19",
                "group": "AREAL",
                "country": "South Korea",
                "birthplace": "",
                "subunit": "MIDNIGHT"
              },
              {
                "id": 101,
                "stagename": "Daeun",
                "fullname": "Jung Daeun",
                "koreanname": "정다은",
                "koreanstage": "정다은",
                "dateofbirth": "1994-06-03",
                "group": "2EYES",
                "country": "South Korea",
                "birthplace": "Bucheon",
                "subunit": "",
                "twitter": "da.ni_jung"
              },
              {
                "id": 102,
                "stagename": "Daewang Nim",
                "fullname": "Daewang Nim",
                "koreanname": "대왕님",
                "koreanstage": "대왕님",
                "dateofbirth": "1996-04-08",
                "group": "Pink Fantasy",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 103,
                "stagename": "Dahye",
                "fullname": "Song Dahye",
                "koreanname": "송다혜",
                "koreanstage": "다혜",
                "dateofbirth": "1993-06-12",
                "group": "",
                "country": "South Korea",
                "birthplace": "",
                "subunit": "EXID, BESTie",
                "twitter": "dahye0612"
              },
              {
                "id": 104,
                "stagename": "Dahyun",
                "fullname": "Kim Dahyun",
                "koreanname": "김다현",
                "koreanstage": "다현",
                "dateofbirth": "1998-05-28",
                "group": "Twice",
                "country": "South Korea",
                "birthplace": "Seongnam",
                "subunit": ""
              },
              {
                "id": 105,
                "stagename": "Dahyun",
                "fullname": "Jeong Dahyun",
                "koreanname": "정다현",
                "koreanstage": "다현",
                "dateofbirth": "2005-04-29",
                "group": "Rocket Punch",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 106,
                "stagename": "Dahyun",
                "fullname": "Seo Dahyun",
                "koreanname": "서다현",
                "koreanstage": "다현",
                "dateofbirth": "2003-01-08",
                "group": "tripleS",
                "country": "South Korea",
                "birthplace": "Busan",
                "subunit": ""
              },
              {
                "id": 107,
                "stagename": "Dain",
                "fullname": "Song Jieun",
                "koreanname": "송지은",
                "koreanstage": "다인",
                "dateofbirth": "1990-06-25",
                "group": "",
                "country": "South Korea",
                "birthplace": "",
                "subunit": "Wassup"
              },
              {
                "id": 108,
                "stagename": "Dain",
                "fullname": "Jung Dain",
                "koreanname": "정다인",
                "koreanstage": "다인",
                "dateofbirth": "2004-12-15",
                "group": "HOT ISSUE",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 109,
                "stagename": "Daisy",
                "fullname": "Yoo Jeongahn",
                "koreanname": "유정안",
                "koreanstage": "데이지",
                "dateofbirth": "1999-01-22",
                "group": "",
                "country": "South Korea",
                "birthplace": "Seoul",
                "subunit": "MOMOLAND"
              },
              {
                "id": 110,
                "stagename": "Dajeong",
                "fullname": "Kim Dajeong",
                "koreanname": "김다정",
                "koreanstage": "다정",
                "dateofbirth": "1995-08-08",
                "group": "Hashtag",
                "country": "South Korea",
                "birthplace": "Gwangju",
                "subunit": ""
              },
              {
                "id": 111,
                "stagename": "Dajeong",
                "fullname": "Jung Dajeong",
                "koreanname": "정다정",
                "koreanstage": "다정",
                "dateofbirth": "2003-07-31",
                "group": "Pixy",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 112,
                "stagename": "Dakyung",
                "fullname": "Jung Dakyung",
                "koreanname": "정다경",
                "koreanstage": "다경",
                "dateofbirth": "2001-07-23",
                "group": "Hi-L",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 113,
                "stagename": "Dalyn",
                "fullname": "Lee Sohyun",
                "koreanname": "이소현",
                "koreanstage": "달린",
                "dateofbirth": "1999-08-27",
                "group": "ANS",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 114,
                "stagename": "Damhee",
                "fullname": "Park Damhee",
                "koreanname": "박담희",
                "koreanstage": "담희",
                "dateofbirth": "2000-06-21",
                "group": "ARTBEAT",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 115,
                "stagename": "Dami",
                "fullname": "Lee Yoobin",
                "koreanname": "이유빈",
                "koreanstage": "다미",
                "dateofbirth": "1997-03-07",
                "group": "Dreamcatcher",
                "country": "South Korea",
                "birthplace": "Seoul",
                "subunit": "Minx"
              },
              {
                "id": 116,
                "stagename": "Dami",
                "fullname": "Hong Dayoung",
                "koreanname": "홍다영",
                "koreanstage": "담이",
                "dateofbirth": "2001-06-07",
                "group": "ANS",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 117,
                "stagename": "Damin",
                "fullname": "Kang Damin",
                "koreanname": "강다민",
                "koreanstage": "다민",
                "dateofbirth": "2004-03-24",
                "group": "Queenz Eye",
                "country": "South Korea",
                "birthplace": "Seoul",
                "subunit": ""
              },
              {
                "id": 118,
                "stagename": "Dana",
                "fullname": "Hong Dabin",
                "koreanname": "홍다빈",
                "koreanstage": "다나",
                "dateofbirth": "1997-03-30",
                "group": "Sonamoo",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 119,
                "stagename": "Dasom",
                "fullname": "Kim Dasom",
                "koreanname": "김다솜",
                "koreanstage": "다솜",
                "dateofbirth": "1993-05-06",
                "group": "SISTAR",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
              {
                "id": 120,
                "stagename": "Dasom",
                "fullname": "Kim Dasom",
                "koreanname": "김다솜",
                "koreanstage": "다솜",
                "dateofbirth": "2001-10-19",
                "group": "GWSN",
                "country": "South Korea",
                "birthplace": "",
                "subunit": ""
              },
      ];

      const id = req.query.id; // Retrieve the ID from the query parameters
      if (id){
        const result = girlgroup.find((item) => item.id === Number(id));
        if (!result) {
          res.status(404).json({ error: "ID not found" });
        } else {
          res.json(result);
        }
      }

    });
    // Endpoint Twice
    app.get('/api/twice', (req, res) => {
      const twice =[
        {
            "id": 1,
            "stagename": "Nayeon",
            "realname": "Im Nayeon",
            "age": 27,
            "birthyear": "1995-09-22",
            "groupname": "",
            "gender": "Female",
            "Country": "South Korea",
            "city": "Seoul"
        },
        {
            "id": 2,
            "stagename": "Jeongyeon",
            "realname": "Yoo Jeongyeon",
            "age": 26,
            "birthyear": "1996-11-01",
            "groupname": "",
            "gender": "Female",
            "Country": "South Korea",
            "city": "Suwon"
        },
        {
            "id": 3,
            "stagename": "Momo",
            "realname": "Hirai Momo",
            "age": 26,
            "birthyear": "1996-11-09",
            "groupname": "",
            "gender": "Female",
            "Country": "Japan",
            "city": "Kyoto"
        },
        {
            "id": 4,
            "stagename": "Sana",
            "realname": "Minatozaki Sana",
            "age": 26,
            "birthyear": "1996-12-29",
            "groupname": "",
            "gender": "Female",
            "Country": "Japan",
            "city": "Osaka"
        },
        {
            "id": 5,
            "stagename": "Jihyo",
            "realname": "Park Jisoo",
            "age": 25,
            "birthyear": "1997-02-01",
            "groupname": "",
            "gender": "Female",
            "Country": "South Korea",
            "city": "Guri"
        },
        {
            "id": 6,
            "stagename": "Mina",
            "realname": "Myoui Mina",
            "age": 25,
            "birthyear": "1997-03-24",
            "groupname": "",
            "gender": "Female",
            "Country": "Japan",
            "city": "San Antonio"
        },
        {
            "id": 7,
            "stagename": "Dahyun",
            "realname": "Kim Dahyun",
            "age": 24,
            "birthyear": "1998-05-28",
            "groupname": "",
            "gender": "Female",
            "Country": "South Korea",
            "city": "Seongnam"
        },
        {
            "id": 8,
            "stagename": "Chaeyoung",
            "realname": "Son Chaeyoung",
            "age": 22,
            "birthyear": "1999-04-23",
            "groupname": "",
            "gender": "Female",
            "Country": "South Korea",
            "city": "Seoul"
        },
        {
            "id": 9,
            "stagename": "Tzuyu",
            "realname": "Chou Tzuyu",
            "age": 23,
            "birthyear": "1999-06-14",
            "groupname": "",
            "gender": "Female",
            "Country": "Taiwan",
            "city": "Tainan"
        }
    ];
    
      const id = req.query.id; // Retrieve the ID from the query parameters
    
      if (id) {
        // Find the object with the specified ID
        const result = twice.find((item) => item.id === Number(id));
    
        if (!result) {
          res.status(404).json({ error: "ID not found" });
        } else {
          res.json(result);
        }
      } else {
        // Return all the objects if no ID is provided
        res.json(twice);
      }
    });
    
  // Endpoint nmixx

    app.get('/api/nmixx' ,(req, res) => {
        const nmixx=[
            {
              "id": 1,
              "stagename": "Lily",
              "realname": "Lily Jin Morrow",
              "age": 20,
              "birthyear": "2002-10-17",
              "groupname": "",
              "gender": "Female",
              "Country": "Australia",
              "city": "Marysville"
            },
            {
              "id": 2,
              "stagename": "Haewon",
              "realname": "Oh Haewon",
              "age": 19,
              "birthyear": "2003-02-25",
              "groupname": "",
              "gender": "Female",
              "Country": "South Korea",
              "city": "Namdong-gu, Incheon"
            },
            {
              "id": 3,
              "stagename": "Sullyoon",
              "realname": "Seol Yoona",
              "age": 18,
              "birthyear": "2004-01-26",
              "groupname": "",
              "gender": "Female",
              "Country": "South Korea",
              "city": "Daejeon, South Korea"
            },
            {
              "id": 4,
              "stagename": "Bae",
              "realname": "Bae Jinsol",
              "age": 18,
              "birthyear": "2004-12-28",
              "groupname": "",
              "gender": "Female",
              "Country": "South Korea",
              "city": "Yangsan, South Korea"
            },
            {
              "id": 5,
              "stagename": "Jiwoo",
              "realname": "Kim Jiwoo",
              "age": 17,
              "birthyear": "2005-04-13",
              "groupname": "",
              "gender": "Female",
              "Country": "South Korea",
              "city": "Namyangju-si, South Korea"
            },
            {
              "id": 6,
              "stagename": "Kyujin",
              "realname": "Jang Kyujin",
              "age": 16,
              "birthyear": "2006-05-26",
              "groupname": "",
              "gender": "Female",
              "Country": "South Korea",
              "city": "Bundang-gu, Seongnam-si, South Korea"
            }
          ];
          const id = req.query.id; // Retrieve the ID from the query parameters
          if (id) {
            // Find the object with the specified ID
            const result = nmixx.find((item) => item.id === Number(id));
        
            if (!result) {
              res.status(404).json({ error: "ID not found" });
            } else {
              res.json(result);
            }
          } else {
            // Return all the objects if no ID is provided
            res.json(nmixx);
          }
    });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
