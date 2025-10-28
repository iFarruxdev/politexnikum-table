import { useState } from 'react';
import './Schedule.css'
import { Calendar, Clock, Users, CircleArrowRight, CircleArrowDown } from 'lucide-react';

const Schedule = () => {
  let [openEvent , setOpenEvent] = useState([]);
  const toggleEvent = (index) => {
    setOpenEvent((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [index]
    );
  };
  const groups = [
    {
      groupNumber: '1-25',
      groupName: 'Tikuvchi (Dual)',
      schedule: {
        Dushanba: [
          { subject: 'Ingliz tili', time: '08:30 - 09:50', teacher: "Yo'lchiboyeva. M / Xudoyorov B", room: '1,6 - 3,32' },
          { subject: 'Ona tili', time: '10:00 - 11:20', teacher: 'Rahimova M', room: '3,5' },
          { subject: 'Matematika', time: '12:00 - 13:20', teacher: 'Hudoyberdiyeva Sh', room: '4,12' },
          { subject: 'Ingliz tili', time: '13:30 - 14:50', teacher: 'Xudoyorov B - Yulchiboyeva M ', room: '1,6 - 3,32' }
        ],
        Seshanba: [
          { subject: 'Rus tili', time: '08:30 - 09:50', teacher: 'Urunova M / Meliboyeva A ', room: '2,39 - 2,21' },
          { subject: 'Matematika', time: '10:00 - 11:20', teacher: 'Hudoyberdiyeva Sh', room: '4,12' },
          { subject: 'CHQBT / Maxsus rasm', time: '12:00 - 13:20', teacher: 'Ms. Martinez', room: '4,13 - 1,5' },
        ],
        Chorshanba: [
          { subject: 'Fizika', time: '08:30 - 09:50', teacher: 'Meliboyeva Sh', room: '3,15' },
          { subject: 'Informatika', time: '10:00 - 11:20', teacher: 'Roziqov J / Musayev I', room: '4,4 - 2,6' },
          { subject: 'Jismoniy tarbiya / Erkaklar kiyimini tikish ', time: '12:00 - 13:20', teacher: "Jo'rayev N / Qurbonova N", room: '1,18 - zal' },
          { subject: 'Tikuvchilik texnologiyasi jihozlari', time: '13:30 - 14:50', teacher: 'hamdamova M', room: '1,5' }
        ],
        Payshanba: [
          { subject: 'Tarix', time: '08:30 - 09:50', teacher: 'Uzoqova N', room: '1,1' },
          { subject: 'Erkaklar kiyimini konstruksiyalash', time: '10:00 - 11:20', teacher: 'Dehqonova M', room: '1,18' },
          { subject: 'Tarbiya', time: '12:00 - 13:20', teacher: "O'rinova G", room: '4,11' },
          { subject: "Ma'naviyat soati", time: '13:30 - 14:50', teacher: "Isaqova N", room: '2,41' }
        ],
        Juma: [
          { subject: 'Kvalifikatsion amaliyot', time: '08:30 - 09:50', teacher: 'I/ch korxona', room: '00' },
          { subject: 'Kvalifikatsion amaliyot', time: '10:00 - 11:20', teacher: 'I/ch korxona', room: '00' },
          { subject: 'Kvalifikatsion amaliyot', time: '12:00 - 13:20', teacher: 'I/ch korxona', room: '00' },
        ],
        Shanba: [
          { subject: 'Kvalifikatsion amaliyot', time: '08:30 - 09:50', teacher: 'I/ch korxona', room: '00' },
          { subject: 'Kvalifikatsion amaliyot', time: '10:00 - 11:20', teacher: 'I/ch korxona', room: '00' },
          { subject: 'Kvalifikatsion amaliyot', time: '12:00 - 13:20', teacher: 'I/ch korxona', room: '00' },
        ]
      }
    },
    {
      groupNumber: '2-25',
      groupName: 'Tikuvchi',
      schedule: {
        Dushanba: [
          { subject: 'Matematika', time: '08:30 - 09:50', teacher: 'Hudoyberdiyeva Sh', room: '4,12' },
          { subject: 'Ingliz tili', time: '10:00 - 11:20', teacher: "Yo'lchiboyeva M / Xudoyorov B", room: "1,6 - 3,32" },
          { subject: "Rus tili / Maxsus rasm", time: "12:00 - 13:20", teacher: "Isaqova N -Djurayeva S / Qurbonava N ", room: "2,41 - 1,18" },
        ],
        Seshanba: [
          { subject: "Bolalar kiyimini tikish O'A", time: "08:30 - 09:50", teacher: "Turg'unova M ", room: "2,7" },
          { subject: "Bolalar kiyimini tikish O'A", time: "10:00 - 11:20", teacher: "Turg'unova M", room: "2,7" },
          { subject: "Bolalar kiyimini tikish O'A", time: "12:00 - 13:20", teacher: "Turg'unova M", room: "2,7" },
        ],
        Chorshanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Ona tili", time: "10:00 - 11:20", teacher: "Qobilova O", room: "3,11" },
          { subject: "Mehnat muhofazasi", time: "12:00 - 13:20", teacher: "Hamdamova M", room: "1,5" },
          { subject: "Ingliz tili", time: "13:30 - 14:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
        ],
        Payshanba: [
          { subject: "Informatika /Kiyim mayda detallar i/b O'A", time: "08:30 - 09:50", teacher: "Roziqov J / Musayev I / Turg'unova M ", room: "2,6 - 4,15 - 2,7" },
          { subject: "Fizika / Kiyim mayda detal i/b O'/A", time: "10:00 - 11:20", teacher: "Saidaliyeva I / Turg'unova M ", room: "4,15 - 2,7" },
          { subject: "Tarbiya / Kiyim mayda deta i/b O'A", time: "12:00 - 13:20", teacher: "Murodov A / Turg'unova M ", room: "3,4 - 2,7" },
        ],
        Juma: [
          { subject: "Tikuvchilik materallari", time: "08:30 - 09:50", teacher: "Qurbonova N", room: "1,18" },
          { subject: "CHQBT / Jismoniy tarbiya", time: "10:00 - 11:20", teacher: "Aminjonov M / Jo'rayev N", room: "4,15 - zal" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:50", teacher: "Hamdamova M", room: "1,5" },
        ],
        Shanba: [
          { subject: "Bolalar kiyimini konstuksiyalash", time: "08:30 - 09:50", teacher: "Hamdamova M", room: "1,5" },
          { subject: "Bolalar kiyimini tikish", time: "10:00 - 11:20", teacher: "Hamdamova M", room: "1,5" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Tarix", time: "13:30 - 14:50", teacher: "O'rinova G", room: "4,11" }
        ]
      }
    },
    {
      groupNumber: "3-25",
      groupName: "Tikuvchi",
      schedule: {
        Dushanba: [
          { subject: "Jismoniy tarbiya / Kiyim mayda detallar i/b O'A", time: "08:30 - 09:50", teacher: "Jo'rayev N /Akbarova G ", room: "zal - 2,7" },
          { subject: "CHQBT / Kiyim mayda detal i/b O'/A", time: "10:00 - 11:20", teacher: "Aminjonov M / Akbarova G ", room: "4,5 - 2,7" },
          { subject: "Informatika  / Kiyim mayda deta i/b O'A", time: "12:00 - 13:20", teacher: "Roziqov J / Musayev I / Akbarova G  ", room: "2,6 - 3,10 - 2,7" },
          { subject: "Bolalar kiyimini tikish", time: "13:30 - 14:50", teacher: "Hamdamova M ", room: "1,5" },
        ],
        Seshanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Mehnat muhofazasi", time: "10:00 - 11:20", teacher: "Hamdamova M", room: "1,5" },
          { subject: "Matematika", time: "12:00 - 13:20", teacher: "Hudoyberdiyeva Sh ", room: "4,12" },
          { subject: "Rus tili / ---------", time: "13:30 - 14:50", teacher: "Djurayeva S /Isaqova N / -------", room: "2,39 - 2,41" },
        ],
        Chorshanba: [
          { subject: "Tarbiya / Fizika", time: "08:30 - 09:50", teacher: "Murodov A /Saydaliyeva I", room: "3,4 - 4,15" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Ona tili", time: "12:00 - 13:20", teacher: "Qobilova O", room: "3,11" },
          { subject: "Tarix", time: "13:30 - 14:50", teacher: "O'rinova G ", room: "4,11" },
        ],
        Payshanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Bolalar kiyimini konstuksiyalash ", time: "10:00 - 11:20", teacher: "Ms. Foster", room: "1,5" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
        ],
        Juma: [
          { subject: "Bolalar kiyimini tikish O'A", time: "08:30 - 09:50", teacher: "Akbarova G ", room: "2,7" },
          { subject: "Bolalar kiyimini tikish O'A ", time: "10:00 - 11:20", teacher: "Akbarova G ", room: "2,7" },
          { subject: "Bolalar kiyimini tikish O'A ", time: "12:00 - 13:20", teacher: "Akbarova G ", room: "2,7" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:10", teacher: "Hudoyberdiyeva Sh ", room: "4,12" },
        ],
        Shanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Tikuvchilik materallari", time: "10:00 - 11:20", teacher: "Qurbonova N", room: "1,18" },
          { subject: "Maxsus rasm /", time: "12:00 - 13:20", teacher: "Qurbonova N / ", room: "1,18" },
        ]
      }
    },
    {
      groupNumber: "4-25",
      groupName: "Tikuvchi",
      schedule: {
        Dushanba: [
          { subject: "Informatika / Tarbiya", time: "08:30 - 09:50", teacher: "Roziqov J / Musayev I / Murodov A ", room: "2,6 - 4,4" },
          { subject: "Tikuvchilik materallari", time: "10:00 - 11:20", teacher: "Qurbonova N", room: "1,18" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Mehnat muhofazasi", time: "13:30 - 14:50", teacher: "Qurbonova N", room: "1,18" },
        ],
        Seshanba: [
          { subject: "Matematika", time: "08:30 - 09:50", teacher: "Hudoyberdiyeva Sh", room: "4,12" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Tikuvchilik texnalogiyasi", time: "12:00 - 13:20", teacher: "Qurbonova N ", room: "1,18" },
          { subject: "Ingliz tili", time: "13:30 - 14:50", teacher: "Yo'lchiboyeva M / Xudoyorov B ", room: "1,6 - 3,32" },
        ],
        Chorshanba: [
          { subject: "Bolalar kiyimini konstuksiyalash", time: "08:30 - 09:50", teacher: "Qurbonova N", room: "1,18" },
          { subject: "Bolalar kiyimini tikish", time: "10:00 - 11:20", teacher: "Hamdamova M", room: "1,5" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Yo'lchiboyeva M /  Xudoyorov B ", room: "1,6 - 3,32" },
          { subject: "Tarix", time: "13:30 - 14:50", teacher: "Ro'zimatov A", room: "3,21" },
        ],
        Payshanba: [
          { subject: "Bolalar kiyimini tikish O'A", time: "08:30 - 09:50", teacher: "Djurayeva N", room: "1,4" },
          { subject: "Bolalar kiyimini tikish O'A", time: "10:00 - 11:20", teacher: "Djurayeva N", room: "1,4" },
          { subject: "Bolalar kiyimini tikish O'A", time: "12:00 - 13:20", teacher: "Djurayeva N", room: "1,4" },
          { subject: "Maxsus rasm /  --------------", time: "13:30 - 14:50", teacher: "Qurbonova N /", room: "1,18" },
        ],
        Juma: [
          { subject: "Jismoniy tarbiya / Fizika", time: "08:30 - 09:50", teacher: "Jo'rayev N  / Saydaliyeva I ", room: "3,4 - zal" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Yo'lchiboyeva M / Xudoyorov B", room: "1,6 - 3,32" },
          { subject: "Ona tili", time: "12:00 - 13:20", teacher: "Qobilova O", room: "3,11" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:10", teacher: "Ergasheva X", room: "4,9" },
        ],
        Shanba: [
          { subject: "Kiyim mayda detallar i/b O'A/CHQBT", time: "08:30 - 09:50", teacher: "Djurayeva N / Aminjonov M ", room: "1,4 - 4,5" },
          { subject: "Kiyim mayda detal i/b O'/A/ Rus tili", time: "10:00 - 11:20", teacher: "Djurayeva N / Djurayeva S-Isaqova N ", room: "1,4 - 2,39 - 2,41" },
          { subject: "Kiyim mayda deta i/b O'A/ -------", time: "12:00 - 13:20", teacher: "Djurayeva N", room: "1,4" },
        ]
      }
    },
    {
      groupNumber: "5-25",
      groupName: "Tikuvchilik mahsulotlari dizayneri ",
      schedule: {
        Dushanba: [
          { subject: "Tikuvchilik materialshunosligi", time: "08:30 - 09:50", teacher: "Qurbonova N", room: "1,18" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Tarix", time: "12:00 - 13:20", teacher: "Ro'zmatov A", room: "3,21" },
          { subject: "Rasm va  kostyum b. grafikasi / -------", time: "13:30 - 14:50", teacher: "Qurbonova N", room: "1,18" },
        ],
        Seshanba: [
          { subject: "Jismoniy tarbiya / CHQBT", time: "08:30 - 09:50", teacher: "Jo'rayev N /Aminjonov M", room: "zal - 4,5" },
          { subject: "Tikuvchili jixozlari", time: "10:00 - 11:20", teacher: "Qurbonova N", room: "1,18" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Tikuv buyumlari tikish tex./ --------", time: "13:30 - 14:50", teacher: "Hamdamova M", room: "1,5" },
        ],
        Chorshanba: [
          { subject: "Rus tili / Informatika", time: "08:30 - 09:50", teacher: "Isaqova N / Djurayeva S / Musayev I", room: "2,41 - 2,6" },
          { subject: "Tarbiya / Fizika", time: "10:00 - 11:20", teacher: "Murodov A /Saydaliyeva I", room: "3,4 - 4,15" },
          { subject: "Matematika", time: "12:00 - 13:20", teacher: "Hudoyberdiyeva Sh", room: "4,12" },
        ],
        Payshanba: [
          { subject: "Mehnat muhofazasi", time: "08:30 - 09:50", teacher: "Imomova M", room: "1,5" },
          { subject: "Ona tili", time: "10:00 - 11:20", teacher: "Qobilova O", room: "3,12" },
          { subject: "Loyhalash", time: "12:00 - 13:20", teacher: "Imomova M", room: "1,5" },
          { subject: "Ingliz tili", time: "13:30 - 14:50", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
        ],
        Juma: [
          { subject: "Tikuvchilik buyumlari tikish O'A / Eskiz asosida tikish O'A", time: "08:30 - 09:50", teacher: "Turg'unova S", room: "2,7" },
          { subject: "Tikuvchilik buyumlari tikish O'A / Eskiz asosida tikish O'A", time: "10:00 - 11:20", teacher: "Turg'unova S", room: "2,7" },
          { subject: "Tikuvchilik buyumlari tikish O'A / Eskiz asosida tikish O'A", time: "12:00 - 13:20", teacher: "Turg'unova S", room: "2,7" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:10", teacher: "Sultonova O'", room: "3,7" },
        ],
        Shanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Ohunova Z / Mahamadjonova Sh ", room: "3,32" },
          { subject: "Tikuv maxsulot konsturuksiyalash / Tikuvchilik buyumlari tayyorlash", time: "10:00 - 11:20", teacher: "Imomova M", room: "1,5" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Djurayeva N", room: "3,32" },
        ]
      }
    },
    {
      groupNumber: "6-25",
      groupName: "Raqamli axborotlarni qayta ishlash ustasi",
      schedule: {
        Dushanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Axborot xavfsizligi", time: "10:00 - 11:20", teacher: "Ergasheva X", room: "4,9" },
          { subject: "Matematika", time: "12:00 - 13:20", teacher: "Jo'rayeva D", room: "4,10" },
          { subject: "Mehnat muhofazasi", time: "13:30 - 14:50", teacher: "Ergashev O", room: "4,6" },
        ],
        Seshanba: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Ona tili", time: "10:00 - 11:20", teacher: "Qobilova O", room: "3,11" },
          { subject: "Tarix", time: "12:00 - 13:20", teacher: "Ro'zimatov A", room: "3,21" },
        ],
        Chorshanba: [
          { subject: "Fizika / Rus tili ", time: "08:30 - 09:50", teacher: "Saydaliyeva I / Isaqova N  / Djurayeva S", room: "4,15 - 2,41" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Ma'lumotlar bazasi", time: "12:00 - 13:20", teacher: "Ergasheva X", room: "4,9" },
          { subject: "Axborot texnologilari", time: "13:30 - 14:50", teacher: "Yunusaliyev A", room: "3,25" },
        ],
        Payshanba: [
          { subject: "Tarbiya / Jismoniy tarbiya", time: "08:30 - 09:50", teacher: "Murodov A /Jo'rayev N", room: "3,4 - zal" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Raqamli axborot", time: "12:00 - 13:20", teacher: "Ergasheva X", room: "4,9" },
        ],
        Juma: [
          { subject: "Raqamli axborot qayta ishlash O'A /CHQBT", time: "08:30 - 09:50", teacher: "Ergasheva X /Nazarov A", room: "4,9 - 4,13" },
          { subject: "Raqamli axborot qayta ishlash O'A / Raqamli axborot", time: "10:00 - 11:20", teacher: "Ergasheva X /Ergasheva X", room: "4,9 - 4,9" },
          { subject: "Raqamli axborot qayta ishlash O'A / Geografiya", time: "12:00 - 13:20", teacher: "Ergasheva X / Qurbonova X", room: "4,9" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:10", teacher: "Murodov A", room: "3,4" },
        ],
        Shanba: [
          { subject: "Kompyuter ofis qurulmalari", time: "08:30 - 09:50", teacher: "Ergasheva X ", room: "4,9" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Informatika", time: "12:00 - 13:20", teacher: "Roziqov J / Musayev I", room: "2,6 - 3,10" },
        ]
      }
    },
    {
      groupNumber: "7-25",
      groupName: "Raqamli axborotlarni qayta ishlash ustasi",
      schedule: {
        Dushanba: [
          { subject: "Axborot xavfsizligi", time: "08:30 - 09:50", teacher: "Ergasheva X", room: "4,9" },
          { subject: "Informatika", time: "10:00 - 11:20", teacher: "Roziqov J / Musayev I", room: "2,6 - 3,10" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Axborot texnologilari", time: "13:30 - 14:50", teacher: "Sheraliyev S", room: "1,7" },
        ],
        Seshanba: [
          { subject: "Raqamli axborot qayta ishlash O'A /Tarbiya", time: "08:30 - 09:50", teacher: "Qurbonov D / Murodov A", room: "2,10 - 3,4" },
          { subject: "Raqamli axborot qayta ishlash O'A/ CHQBT", time: "10:00 - 11:20", teacher: "Qurbonov D / Nazarov A", room: "2,10 - 4,13" },
          { subject: "Raqamli axborot qayta ishlash O'A / Jismoniy tarbiya", time: "12:00 - 13:20", teacher: "Qurbonov D / Jo'rayev N", room: "2,10 - zal" },
          { subject: "Raqamli axborot qayta ishlash", time: "13:30 - 14:50", teacher: "Ergasheva X", room: "4,9" },
        ],
        Chorshanba: [
          { subject: "Tarix", time: "08:30 - 09:50", teacher: "Ro'zimatov A", room: "3,21" },
          { subject: "Mehnat muhofazasi", time: "10:00 - 11:20", teacher: "Ergashev O", room: "4,6" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
        ],
        Payshanba: [
          { subject: "Ma'lumotlar bazasi", time: "08:30 - 09:50", teacher: "Sheraliyev S", room: "1,7" },
          { subject: "Matematika", time: "10:00 - 11:20", teacher: "Jo'rayeva D", room: "4,10" },
          { subject: "Ingliz tili", time: "12:00 - 13:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
        ],
        Juma: [
          { subject: "Ingliz tili", time: "08:30 - 09:50", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Ingliz tili", time: "10:00 - 11:20", teacher: "Ohunova Z / Mahamadjonova Sh", room: "3,32" },
          { subject: "Geografiya / Raqamli axborot", time: "12:00 - 13:20", teacher: "Qurbonov D / Ergasheva X", room: "4,10 - 4,9" },
          { subject: "Ma'naviyat soati", time: "13:30 - 14:10", teacher: "Abdurahimov A", room: "4,14" },
        ],
        Shanba: [
          { subject: "Kompyuter ofis qurulmalari", time: "08:30 - 09:50", teacher: "Sheraliyev S", room: "1,7" },
          { subject: "Ona tili", time: "10:00 - 11:20", teacher: "Qobilova O", room: "3,11" },
          { subject: "Fizika / Rus tili", time: "12:00 - 13:20", teacher: "Saydaliyeva I / Isaqova N -Djurayeva S", room: "4,15 - 2,41" },
        ]
      }
    },
  ];

  const getSubjectColor = (subject) => {
    const colorMap = {
      'Matematika': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Tikuv buyumlari tikish tex./ --------': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Tarbiya': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Biology': 'bg-green-50 border-green-200 hover:bg-green-100',
      'English Literature': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Ingliz tili': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Tarix': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Jismoniy tarbiya / CHQBT': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Informatika': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Fizika': 'bg-red-50 border-red-200 hover:bg-red-100',
      "CHQBT / Kiyim mayda detal i/b O'/A": 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Ona tili': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Rus tili': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      "Ma'naviyat soati": 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'CHQBT / Maxsus rasm': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      "Kiyim mayda detal i/b O'/A/ Rus tili": 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'CHQBT / Jismoniy tarbiya': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Bolalar kiyimini konstuksiyalash': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Server Administration': 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      "Jismoniy tarbiya / Fizika": 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Kvalifikatsion amaliyot': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      "Informatika /Kiyim mayda detallar i/b O'A": 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      "Tikuvchilik buyumlari tikish O'A / Eskiz asosida tikish O'A": 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      "Kiyim mayda deta i/b O'A/ -------": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      "Maxsus rasm /  --------------": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Version Control': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      "Fizika / Kiyim mayda detal i/b O'/A": 'bg-red-50 border-red-200 hover:bg-red-100',
      'Node.js Backend': 'bg-green-50 border-green-200 hover:bg-green-100',
      "Jismoniy tarbiya / Kiyim mayda detallar i/b O'A": 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      'Rus tili / Maxsus rasm': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Tikuvchilik texnalogiyasi': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Erkaklar kiyimini konstruksiyalash': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      "Bolalar kiyimini tikish O'A": 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      'Tarbiya / Fizika': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Informatika / Tarbiya': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      "Ma'lumotlar bazasi": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Code Review Session': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Bolalar kiyimini tikish': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Rasm va  kostyum b. grafikasi / -------': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Tikuvchilik texnologiyasi jihozlari': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Mehnat muhofazasi': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Brand Management': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Rus tili / Informatika': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Copywriting': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Geografiya / Raqamli axborot': 'bg-green-50 border-green-200 hover:bg-green-100',
      'Axborot xavfsizligi': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Market Research': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Tikuv maxsulot konsturuksiyalash / Tikuvchilik buyumlari tayyorlash': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Fizika / Rus tili': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Loyhalash': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      "Raqamli axborot qayta ishlash O'A / Jismoniy tarbiya": 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Tikuvchilik materallari': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Instagram Strategy': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      'Tikuvchili jixozlari': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      "Raqamli axborot qayta ishlash O'A /Tarbiya": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Kompyuter ofis qurulmalari': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Raqamli axborot qayta ishlash': 'bg-green-50 border-green-200 hover:bg-green-100',
      "Tarbiya / Kiyim mayda deta i/b O'A": 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      "Raqamli axborot qayta ishlash O'A/ CHQBT": 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Tikuvchilik materialshunosligi': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Axborot texnologilari': 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    };
    return colorMap[subject] || 'bg-gray-50 border-gray-200 hover:bg-gray-100';
  };
  return (
    <section className='schedule-section'>
      {/* <h1>Schedule Section</h1> */}
    <div className="bg-gradient-to-br">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-4 py-8 space-y-12">
        {groups.map((group, groupIndex) => {
          const isOpen = openEvent.includes(groupIndex);
          return (
            <div key={groupIndex} className="space-y-6">
            <div id='group-list' onClick={() => toggleEvent(groupIndex)} className="bg-gradient-to-r relative group-item-wrapper rounded-xl cursor-pointer shadow-lg p-6 text-white">
              {isOpen ? <CircleArrowRight className='group-item-icon' /> :
              <CircleArrowDown className='group-item-icon' />}
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{group.groupNumber} - {group.groupName}</h2>
              </div>
              <p className="text-blue-100 text-sm">Haftalik dars jadvali</p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${!isOpen && "objects-hide"}`}>
              {Object.keys(group.schedule).map((day) => (
                <div key={day} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-r bg-[var(--text-color)] px-4 py-3">
                    <h3 className="text-lg font-semibold text-white text-center">{day}</h3>
                  </div>

                  <div className="p-4 space-y-3">
                    {group.schedule[day].map((classItem, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${getSubjectColor(classItem.subject)}`}
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <Clock className="w-4 h-4 text-slate-600 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-600">
                            {classItem.time}
                          </span>
                        </div>

                        <h4 className="font-bold text-slate-900 text-sm mb-1 leading-tight">
                          {classItem.subject}
                        </h4>

                        <div className="text-xs text-slate-600 space-y-0.5">
                          <p>{classItem.teacher}</p>
                          <p className="font-medium">Room: {classItem.room}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          )
          })}

      </div>
    </div>
    </section>
  )
}

export default Schedule