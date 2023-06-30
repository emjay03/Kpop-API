const express = require('express');
const app = express();
const PORT = 6969;


app.get('/api/all', (req, res) => {
    const all = [

        { id: 1, stagename: 'Ahin', realname: 'Lee Ah In', age: 27, birthyear: '1999-09-27', groupname: 'Momoland', gender: 'Female', Country: 'South Korea' },
        { id: 2, stagename: 'Ahyeon', realname: 'Jung Ahyeon', age: 17, birthyear: '2007-04-11', groupname: 'Babymonster', gender: 'Female', Country: 'South Korea' },
        { id: 3, stagename: 'Ahyoung', realname: 'Cho Jayoung', age: 33, birthyear: '1991-05-26', groupname: 'Dal Shabet', gender: 'Female', Country: 'South Korea' },
        { id: 4, stagename: 'Aisha', realname: 'Heo Yoorim', age: 23, birthyear: '2000-07-21', groupname: 'Everglow', gender: 'Female', Country: 'South Korea' },
        { id: 5, stagename: 'Alice', realname: 'Song Joohee', age: 34, birthyear: '1990-03-21', groupname: 'Hello Venus', gender: 'Female', Country: 'South Korea' },
        { id: 6, stagename: 'Arang', realname: 'Son Mnjung', age: 24, birthyear: '2000-03-08', groupname: 'Pink Fanstasy', gender: 'Female', Country: 'South Korea' },
        { id: 7, stagename: 'Aria', realname: 'Baby Gauthami', age: 21, birthyear: '2003-03-12', groupname: 'X:IN', gender: 'Female', Country: 'India' },
        { id: 8, stagename: 'Arin', realname: 'Choi Yewon', age: 25, birthyear: '1999-06-18', groupname: 'Oh My Girl', gender: 'Female', Country: 'South Korea' },
        { id: 9, stagename: 'Asa', realname: 'Enami Asa', age: 18, birthyear: '2006-04-17', groupname: 'BABYMONSTER', gender: 'Female', Country: 'Japan' },
        { id: 10, stagename: 'B-Bomb', realname: 'Lee Minhyuk', age: 33, birthyear: '1990-12-14', groupname: 'Block B', gender: 'Male', Country: 'South Korea' },
        { id: 11, stagename: 'Babysoul', realname: 'Lee Soojung', age: 31, birthyear: '1992-07-06', groupname: 'Lovelyz', gender: 'Female', Country: 'South Korea' },
        { id: 12, stagename: 'Jinyoung', realname: 'Bae Jinyoung', age: 24, birthyear: '2000-05-10', groupname: 'CIX', gender: 'Male', Country: 'South Korea' },
        { id: 13, stagename: 'Bae', realname: 'Bae Jinsol', age: 19, birthyear: '2004-12-28', groupname: 'NMIXX', gender: 'Female', Country: 'South Korea' },
        { id: 14, stagename: 'Baekah', realname: 'Kim Sua', age: 24, birthyear: '1999-10-24', groupname: 'XUM', gender: 'Female', Country: 'South Korea' },
        { id: 15, stagename: 'BamBam', realname: 'Kunpimook Bhuwakul', age: 27, birthyear: '1997-05-02', groupname: 'GOT7', gender: 'Male', Country: 'Thailand' },
        { id: 16, stagename: 'Bang Chan', realname: 'Bang Chan', age: 26, birthyear: '1997-10-03', groupname: 'Stray Kids', gender: 'Male', Country: 'Australia' },
        { id: 17, stagename: 'Yongguk', realname: 'Bang Yongguk', age: 34, birthyear: '1990-03-31', groupname: 'B.A.P', gender: 'Male', Country: 'South Korea' },
        { id: 18, stagename: 'Baro', realname: 'Cha Sunwoo', age: 31, birthyear: '1992-09-05', groupname: '', gender: 'Male', Country: 'South Korea' },
        { id: 19, stagename: 'Do-A', realname: 'Choi Yuna', age: 25, birthyear: '1999-02-02', groupname: 'ALICE', gender: 'Female', Country: 'South Korea' },
        { id: 20, stagename: 'Beomgyu', realname: 'Choi Beomgyu', age: 23, birthyear: '2001-03-13', groupname: 'TXT', gender: 'Male', Country: 'South Korea' },
        { id: 21, stagename: 'Yubin', realname: 'Bae Yubin', age: 26, birthyear: '1997-09-09', groupname: 'Oh My Girl', gender: 'Female', Country: 'South Korea' },
        { id: 22, stagename: 'BM', realname: 'Matthew Kim', age: 31, birthyear: '1992-10-20', groupname: 'KARD', gender: 'Male', Country: 'South Korea' },
        { id: 23, stagename: 'Bomi', realname: 'Yoon Bomi', age: 30, birthyear: '1993-08-13', groupname: 'Apink', gender: 'Female', Country: 'South Korea' },
        { id: 24, stagename: 'Bona', realname: 'Kim Jiyeon', age: 28, birthyear: '1995-08-19', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' },
        { id: 25, stagename: 'Bora', realname: 'Kim Bora', age: 25, birthyear: '1999-03-03', groupname: 'Cherry Bullet', gender: 'Female', Country: 'South Korea' },
        { id: 26, stagename: 'Boram', realname: 'Jeon Boram', age: 38, birthyear: '1986-03-22', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 27, stagename: 'BX', realname: 'Lee Byounggon', age: 26, birthyear: '1998-03-05', groupname: 'CIX', gender: 'Male', Country: 'South Korea' },
        { id: 28, stagename: 'Chaejeong', realname: 'Lee Chaejeong', age: 24, birthyear: '1999-08-26', groupname: 'ALICE', gender: 'Female', Country: 'South Korea' },
        { id: 29, stagename: 'Chaekyung', realname: 'Yoon Chaekyung', age: 27, birthyear: '1996-07-07', groupname: 'APRIL', gender: 'Female', Country: 'South Korea' },
        { id: 30, stagename: 'Chaerin', realname: 'Park Chaerin', age: 22, birthyear: '2002-03-13', groupname: 'Cherry Bullet', gender: 'Female', Country: 'South Korea' },
        { id: 31, stagename: 'Chaerin', realname: 'Park Chaerin', age: 21, birthyear: '2003-03-31', groupname: 'ICHILLIN\'', gender: 'Female', Country: 'South Korea' },
        { id: 32, stagename: 'Chaeryeong', realname: 'Lee Chaeryeong', age: 23, birthyear: '2001-06-05', groupname: 'ITZY', gender: 'Female', Country: 'South Korea' },
        { id: 33, stagename: 'Chaewon', realname: 'Kim Chaewon', age: 26, birthyear: '1997-11-08', groupname: 'APRIL', gender: 'Female', Country: 'South Korea' },
        { id: 34, stagename: 'Chaewon', realname: 'Kim Chaewon', age: 23, birthyear: '2000-08-01', groupname: 'LE SSERAFIM', gender: 'Female', Country: 'South Korea' },
        { id: 35, stagename: 'Chaeyeon', realname: 'Jung Chaeyeon', age: 26, birthyear: '1997-12-01', groupname: 'DIA', gender: 'Female', Country: 'South Korea' },
        { id: 36, stagename: 'Chaeyeon', realname: 'Lee Chaeyeon', age: 24, birthyear: '2000-01-11', groupname: 'IZ*ONE', gender: 'Female', Country: 'South Korea' },
        { id: 37, stagename: 'Chaeyoung', realname: 'Lee Chaeyoung', age: 24, birthyear: '2000-05-14', groupname: 'fromis_9', gender: 'Female', Country: 'South Korea' },
        { id: 38, stagename: 'Chaeyoung', realname: 'Son Chaeyoung', age: 25, birthyear: '1999-04-23', groupname: 'Twice', gender: 'Female', Country: 'South Korea' },
        { id: 39, stagename: 'Chahee', realname: 'Park Sooyoung', age: 28, birthyear: '1996-03-24', groupname: 'MELODYDAY', gender: 'Female', Country: 'South Korea' },
        { id: 40, stagename: 'Changbin', realname: 'Seo Changbin', age: 24, birthyear: '1999-08-11', groupname: 'Stray Kids', gender: 'Male', Country: 'South Korea' },
        { id: 41, stagename: 'Chanmi', realname: 'Kim Chanmi', age: 28, birthyear: '1996-06-19', groupname: 'AoA', gender: 'Female', Country: 'South Korea' },
        { id: 42, stagename: 'Cheng Xiao', realname: 'Cheng Xiao', age: 25, birthyear: '1998-07-15', groupname: '', gender: 'Female', Country: 'China' },
        { id: 43, stagename: 'Chi.u', realname: 'Lee Jaeyi', age: 25, birthyear: '1998-08-16', groupname: 'X:IN', gender: 'Female', Country: 'South Korea' },
        { id: 44, stagename: 'Chiquita', realname: 'Riracha Phondechaphiphat', age: 15, birthyear: '2009-02-17', groupname: 'BABYMONSTER', gender: 'Thailand', Country: 'Female' },
        { id: 45, stagename: 'Choa', realname: 'Park Choa', age: 34, birthyear: '1990-03-06', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 46, stagename: 'Choerry', realname: 'Choi Yerim', age: 23, birthyear: '2001-06-04', groupname: 'LOONA', gender: 'Female', Country: 'South Korea' },
        { id: 47, stagename: 'Chorong', realname: 'Park Chorong', age: 33, birthyear: '1991-03-03', groupname: 'Apink', gender: 'Female', Country: 'South Korea' },
        { id: 48, stagename: 'Chowon', realname: 'Kim Chowon', age: 18, birthyear: '2005-08-18', groupname: 'ICHILLIN\'', gender: 'Female', Country: 'South Korea' },
        { id: 49, stagename: 'Chowon', realname: 'Han Chowon', age: 21, birthyear: '2002-09-16', groupname: 'LIGHTSUM', gender: 'Female', Country: 'South Korea' },
        { id: 50, stagename: 'Chuu', realname: 'Kim Jiwoo', age: 24, birthyear: '1999-10-20', groupname: 'LOONA', gender: 'Female', Country: 'South Korea' },
        { id: 51, stagename: 'CNU', realname: 'Shin Dongwoo', age: 33, birthyear: '1991-06-16', groupname: 'B1A4', gender: 'Male', Country: 'South Korea' },
        { id: 52, stagename: 'Daehyun', realname: 'Jung Daehyun', age: 31, birthyear: '1993-06-28', groupname: 'B.A.P', gender: 'Male', Country: 'South Korea' },
        { id: 52, stagename: 'Daehyun', realname: 'Jung Daehyun', age: 31, birthyear: '1993-06-28', groupname: 'B.A.P', gender: 'Male', Country: 'South Korea' },
        { id: 53, stagename: 'Dahyun', realname: 'Kim Dahyun', age: 26, birthyear: '1998-05-28', groupname: 'Twice', gender: 'Female', Country: 'South Korea' },
        { id: 54, stagename: 'Daisy', realname: 'Yoo Jeongahn', age: 25, birthyear: '1999-01-22', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 55, stagename: 'Dami', realname: 'Lee Yoobin', age: 27, birthyear: '1997-03-07', groupname: 'Dreamcatcher', gender: 'Female', Country: 'South Korea' },
        { id: 56, stagename: 'D.ana', realname: 'Cho Eunae', age: 28, birthyear: '1995-09-10', groupname: 'Sonamoo', gender: 'Female', Country: 'South Korea' },
        { id: 57, stagename: 'Danielle', realname: 'Mo Jihye', age: 19, birthyear: '2005-04-11', groupname: 'NewJeans', gender: 'Female', Country: 'South Korea' },
        { id: 58, stagename: 'Dawon', realname: 'Nam Dawon', age: 27, birthyear: '1997-03-16', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' },
        { id: 59, stagename: 'Dayeon', realname: 'Hwang Da Kyeon', age: 28, birthyear: '1995-11-17', groupname: 'XUM', gender: 'Female', Country: 'South Korea' },
        { id: 60, stagename: 'Dayoung', realname: 'Im Dayoung', age: 25, birthyear: '1999-05-14', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' },
        { id: 61, stagename: 'Dino', realname: 'Lee Chan', age: 25, birthyear: '1999-02-11', groupname: 'Seventeen', gender: 'Male', Country: 'South Korea' },
        { id: 62, stagename: 'DK', realname: 'Lee Seongmin', age: 27, birthyear: '1997-02-18', groupname: 'Seventeen', gender: 'Male', Country: 'South Korea' },
        { id: 63, stagename: 'Doyeon', realname: 'Kim Doyeon', age: 24, birthyear: '1999-12-04', groupname: 'Weki Meki', gender: 'Female', Country: 'South Korea' },
        { id: 64, stagename: 'DY', realname: 'Jeon Doyum', age: 22, birthyear: '2002-02-21', groupname: 'JUST B', gender: 'Male', Country: 'South Korea' },
        { id: 65, stagename: 'Duna', realname: 'Kang Duna', age: 19, birthyear: '2005-04-28', groupname: 'CSR', gender: 'Female', Country: 'South Korea' },
        { id: 66, stagename: 'E.Ji', realname: 'Choi Jiwon', age: 23, birthyear: '2000-11-08', groupname: 'ICHILLIN\'', gender: 'Female', Country: 'South Korea' },
        { id: 67, stagename: 'E.sha', realname: 'Kwon Yena', age: 25, birthyear: '1998-12-29', groupname: 'X:IN', gender: 'Female', Country: 'Australia' },
        { id: 68, stagename: 'E\'Dawn', realname: 'Kim Hyojong', age: 30, birthyear: '1994-06-01', groupname: '', gender: 'Male', Country: 'South Korea' },
        { id: 69, stagename: 'EJ', realname: 'Kim Eunji', age: 26, birthyear: '1997-08-13', groupname: 'ALICE', gender: 'Female', Country: 'South Korea' },
        { id: 70, stagename: 'Elkie', realname: 'Chong Ting Yan', age: 25, birthyear: '1998-11-02', groupname: '', gender: 'Female', Country: 'Hong Kong' },
        { id: 71, stagename: 'Elly', realname: 'Jung Haerim', age: 25, birthyear: '1998-07-20', groupname: 'Weki Meki', gender: 'Female', Country: 'South Korea' },
        { id: 72, stagename: 'Eric', realname: 'Son Youngjae', age: 23, birthyear: '2000-12-22', groupname: 'The Boyz', gender: 'Male', Country: 'South Korea' },
        { id: 73, stagename: 'E:U', realname: 'Park Jiwon', age: 26, birthyear: '1998-05-19', groupname: 'Everglow', gender: 'Female', Country: 'South Korea' },
        { id: 74, stagename: 'Euijin', realname: 'Hong Euijin', age: 27, birthyear: '1996-10-08', groupname: 'Sonamoo', gender: 'Female', Country: 'South Korea' },
        { id: 75, stagename: 'Eunbin', realname: 'Kwon Eunbin', age: 24, birthyear: '2000-01-06', groupname: 'CLC', gender: 'Female', Country: 'South Korea' },
        { id: 76, stagename: 'Eunchae', realname: 'Kwon Chaewon', age: 25, birthyear: '1999-05-26', groupname: 'DIA', gender: 'Female', Country: 'South Korea' },
        { id: 77, stagename: 'Eunha', realname: 'Jung Eunbi', age: 27, birthyear: '1997-05-30', groupname: 'VIVIZ', gender: 'Female', Country: 'South Korea' },
        { id: 78, stagename: 'Eunho', realname: 'Myung Eunho', age: 23, birthyear: '2001-03-25', groupname: 'YOUNITE', gender: 'Male', Country: 'South Korea' },
        { id: 79, stagename: 'Eunice', realname: 'Heo Sooyeon', age: 32, birthyear: '1991-09-02', groupname: 'DIA', gender: 'Female', Country: 'South Korea' },
        { id: 80, stagename: 'Eunji', realname: 'Jung Eunji', age: 30, birthyear: '1993-08-18', groupname: 'Apink', gender: 'Female', Country: 'South Korea' },
        { id: 81, stagename: 'Eunji', realname: 'Hong Eunji', age: 31, birthyear: '1992-07-19', groupname: 'Brave Girls', gender: 'Female', Country: 'South Korea' },
        { id: 82, stagename: 'Eunjin', realname: 'Ahn Eunjin', age: 26, birthyear: '1997-08-31', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 83, stagename: 'Eunjung', realname: 'Ham Eunjung', age: 35, birthyear: '1988-12-12', groupname: 'T-ara', gender: 'Female', Country: 'South Korea' },
        { id: 84, stagename: 'Eunsang', realname: 'Lee Eunsang', age: 21, birthyear: '2002-10-26', groupname: 'YOUNITE', gender: 'Male', Country: 'South Korea' },
        { id: 85, stagename: 'Eunseo', realname: 'Son Juyeon', age: 26, birthyear: '1998-05-27', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' }, { id: 85, stagename: 'Eunseo', realname: 'Son Juyeon', age: 26, birthyear: '1998-05-27', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' },
        { id: 86, stagename: 'Eunwoo', realname: 'Jeong Eunwoo', age: 25, birthyear: '1998-07-01', groupname: 'Hinapia', gender: 'Female', Country: 'South Korea' },
        { id: 87, stagename: 'Exy', realname: 'Chu Sojung', age: 28, birthyear: '1995-11-06', groupname: 'WJSN', gender: 'Female', Country: 'South Korea' },
        { id: 88, stagename: 'Felix', realname: 'Lee Youngbok', age: 23, birthyear: '2000-09-15', groupname: 'Stray Kids', gender: 'Male', Country: 'South Korea' },
        { id: 89, stagename: 'Gaeul', realname: 'Kim Gaeul', age: 21, birthyear: '2002-09-24', groupname: 'IVE', gender: 'Female', Country: 'South Korea' },
        { id: 90, stagename: 'Gahyeon', realname: 'Lee Gahyeon', age: 25, birthyear: '1999-02-03', groupname: 'Dreamcatcher', gender: 'Female', Country: 'South Korea' },
        { id: 91, stagename: 'Garam', realname: 'Kim Garam', age: 18, birthyear: '2005-11-16', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 92, stagename: 'Gayoung', realname: 'Kim Gayoung', age: 32, birthyear: '1991-12-02', groupname: 'Stellar', gender: 'Female', Country: 'South Korea' },
        { id: 93, stagename: 'Geumhee', realname: 'Han Geumhee', age: 19, birthyear: '2005-03-04', groupname: 'CSR', gender: 'Female', Country: 'South Korea' },
        { id: 94, stagename: 'Giselle', realname: 'Uchinaga Aeri', age: 23, birthyear: '2000-10-30', groupname: 'aespa', gender: 'Japan', Country: 'Female' },
        { id: 95, stagename: 'Gongchan', realname: 'Gong Chansik', age: 30, birthyear: '1993-08-14', groupname: 'B1A4', gender: 'Male', Country: 'South Korea' },
        { id: 96, stagename: 'Gowon', realname: 'Park Chaewon', age: 23, birthyear: '2000-11-19', groupname: 'LOONA', gender: 'Female', Country: 'South Korea' },
        { id: 97, stagename: 'Gunwook', realname: 'Park Gunwook', age: 18, birthyear: '2005-10-01', groupname: 'ZEROBASEONE', gender: 'Male', Country: 'South Korea' },
        { id: 98, stagename: 'Gyuri', realname: 'Jang Gyuri', age: 26, birthyear: '1997-12-27', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 99, stagename: 'Gyuvin', realname: 'Kim Gyuvin', age: 19, birthyear: '2004-08-30', groupname: 'ZEROBASEONE', gender: 'Male', Country: 'South Korea' },
        { id: 100, stagename: 'Haebin', realname: 'Han Haebin', age: 28, birthyear: '1995-08-16', groupname: 'Gugudan', gender: 'Female', Country: 'South Korea' },
        { id: 101, stagename: 'Haein', realname: 'Yeom Haein', age: 29, birthyear: '1995-05-19', groupname: 'LABOUM', gender: 'Female', Country: 'South Korea' },
        { id: 102, stagename: 'Haerin', realname: 'Kang Haerin', age: 18, birthyear: '2006-05-15', groupname: 'NewJeans', gender: 'Female', Country: 'South Korea' },
        { id: 103, stagename: 'Haewon', realname: 'Oh Haewon', age: 21, birthyear: '2003-02-25', groupname: 'NMIXX', gender: 'Female', Country: 'South Korea' },
        { id: 104, stagename: 'Haeyoon', realname: 'Park Haeyoon', age: 28, birthyear: '1996-01-10', groupname: 'Cherry Bullet', gender: 'Female', Country: 'South Korea' },
        { id: 105, stagename: 'Hajeong', realname: 'Lee Hajeong', age: 26, birthyear: '1997-09-23', groupname: '', gender: 'Female', Country: 'South Korea' },
        { id: 106, stagename: 'Hakmin', realname: 'Lee Hakmin', age: 23, birthyear: '2000-09-20', groupname: 'TRCNG', gender: 'Male', Country: 'South Korea' },
        { id: 107, stagename: 'Han', realname: 'Han Jisung', age: 23, birthyear: '2000-09-14', groupname: 'Stray Kids', gender: 'Male', Country: 'South Korea' },
        { id: 108, stagename: 'Hana', realname: 'Shin Bora', age: 31, birthyear: '1993-04-30', groupname: 'Gugudan', gender: 'Female', Country: 'South Korea' },
        { id: 109, stagename: 'Hana', realname: 'Jung Hana', age: 34, birthyear: '1990-02-02', groupname: 'SECRET', gender: 'Female', Country: 'South Korea' },
        { id: 110, stagename: 'Hanbin', realname: 'Sung Hanbin', age: 23, birthyear: '2001-06-13', groupname: 'ZEROBASEONE', gender: 'Male', Country: 'South Korea' },
        { id: 111, stagename: 'Handong', realname: 'Han Dong', age: 28, birthyear: '1996-03-26', groupname: 'Dreamcatcher', gender: 'Female', Country: 'China' },
        { id: 112, stagename: 'Hani', realname: 'Ahn Hee-yeon', age: 32, birthyear: '1992-05-01', groupname: 'EXID', gender: 'Female', Country: 'South Korea' },
        { id: 113, stagename: 'Hanni', realname: 'Pham Ngoc Han', age: 19, birthyear: '2004-10-06', groupname: 'NewJeans', gender: 'Female', Country: 'Vietnam' },
        { id: 114, stagename: 'Haram', realname: 'Shin Haram', age: 16, birthyear: '2007-10-17', groupname: 'BABYMONSTER', gender: 'Female', Country: 'South Korea' },
        { id: 115, stagename: 'Haseul', realname: 'Jo Haseul', age: 26, birthyear: '1997-08-18', groupname: 'LOONA', gender: 'Female', Country: 'South Korea' }
    ];
    res.json(all);


    });
    app.get('/api/twice', (req, res) => {
        const twice = [
        { "id": 116, "stagename": "Nayeon", "realname": "Im Nayeon", "age": 27, "birthyear": "1995-09-22", "groupname": "", "gender": "Female", "Country": "South Korea", "city": "Seoul" },
        { "id": 117, "stagename": "Jeongyeon", "realname": "Yoo Jeongyeon", "age": 26, "birthyear": "1996-11-01", "groupname": "", "gender": "Female", "Country": "South Korea", "city": "Suwon" }, 
        { "id": 118, "stagename": "Momo", "realname": "Hirai Momo", "age": 26, "birthyear": "1996-11-09", "groupname": "", "gender": "Female", "Country": "Japan", "city": "Kyoto" }, 
        { "id": 119, "stagename": "Sana", "realname": "Minatozaki Sana", "age": 26, "birthyear": "1996-12-29", "groupname": "", "gender": "Female", "Country": "Japan", "city": "Osaka" }, 
        { "id": 120, "stagename": "Jihyo", "realname": "Park Jisoo", "age": 25, "birthyear": "1997-02-01", "groupname": "", "gender": "Female", "Country": "South Korea", "city": "Guri" }, 
        { "id": 121, "stagename": "Mina", "realname": "Myoui Mina", "age": 25, "birthyear": "1997-03-24", "groupname": "", "gender": "Female", "Country": "Japan", "city": "San Antonio" }, 
        { "id": 122, "stagename": "Dahyun", "realname": "Kim Dahyun", "age": 24, "birthyear": "1998-05-28", "groupname": "", "gender": "Female", "Country": "South Korea", "city": "Seongnam" }, 
        { "id": 123, "stagename": "Chaeyoung", "realname": "Son Chaeyoung", "age": 22, "birthyear": "1999-04-23", "groupname": "", "gender": "Female", "Country": "South Korea", "city": "Seoul" }, 
        { "id": 124, "stagename": "Tzuyu", "realname": "Chou Tzuyu", "age": 23, "birthyear": "1999-06-14", "groupname": "", "gender": "Female", "Country": "Taiwan", "city": "Tainan" }
        ];

        res.json(twice);

    });


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
          res.json(nmixx);
    });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
