import { useState } from 'react';
import './Schedule.css'
import { groups } from '../../data/cours-1';
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

  const getSubjectColor = (subject) => {
    const colorMap = {
      'Matematika': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Tikuv buyumlari tikish tex./ --------': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Tarbiya': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Biology': 'bg-green-50 border-green-200 hover:bg-green-100',
      'English Literature': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Ingliz tili': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Texnikaviy chizmachilik': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Tarix': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Elektr sansiyalari va elektr jixozlari': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Jismoniy tarbiya / CHQBT': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Informatika': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Fizika': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Mehnat muhofazasi / Plastik quvurlarni payvandlash': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Elektrotexnika materallari': 'bg-red-50 border-red-200 hover:bg-red-100',
      "CHQBT / Kiyim mayda detal i/b O'/A": 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Ona tili': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Rus tili': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      "Ma'naviyat soati": 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'CHQBT / Maxsus rasm': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      "Kiyim mayda detal i/b O'/A/ Rus tili": 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'CHQBT / Jismoniy tarbiya': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      "Chilangarlik ishi O'A / Kimyo": 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      "Chilangarlik ishi O'A / Fizika": 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      "Chilangarlik ishi O'A / CHQBT": 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Bolalar kiyimini konstuksiyalash': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Elektr sansiyalari va elektr tarmoqalari': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      "Elektr chilangarlik ishi O'A / Elektr sansiya O'A": 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      "Kompyuter grafikasi va dizayn O'A / Biznes asoslar O'A": 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      "Rus tili / Jismoniy tarbiya": 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      "Jismoniy tarbiya / Fizika": 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Kvalifikatsion amaliyot': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      "Informatika /Kiyim mayda detallar i/b O'A": 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      "Tarbiya / Informatika": 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      "Plastik quvurlarni payvandlash ishlari": 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      "Tikuvchilik buyumlari tikish O'A / Eskiz asosida tikish O'A": 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      "Kiyim mayda deta i/b O'A/ -------": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      "Maxsus rasm /  --------------": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Version Control': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      "Fizika / Kiyim mayda detal i/b O'/A": 'bg-red-50 border-red-200 hover:bg-red-100',
      "Elektr sansiyalari va elektr jixozlari / Elektrotexnika va el.asoslari": 'bg-red-50 border-red-200 hover:bg-red-100',
      "Plastik quvurlarni payvandlash": 'bg-red-50 border-red-200 hover:bg-red-100',
      "Texnik chizmachilik / Elektr mashinalari va transform": 'bg-red-50 border-red-200 hover:bg-red-100',
      'CHQBT': 'bg-green-50 border-green-200 hover:bg-green-100',
      "Jismoniy tarbiya / Kiyim mayda detallar i/b O'A": 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      'Rus tili / Maxsus rasm': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Tikuvchilik texnalogiyasi': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Erkaklar kiyimini konstruksiyalash': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      "Bolalar kiyimini tikish O'A": 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      'Tarbiya / Fizika': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Informatika / Tarbiya': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      "Ma'lumotlar bazasi": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Tarbiya / Rus tili': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Bolalar kiyimini tikish': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Rasm va  kostyum b. grafikasi / -------': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Tikuvchilik texnologiyasi jihozlari': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Mehnat muhofazasi': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Jismoniy tarbiya / Rus tili': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Axborot xafsizligi': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Rus tili / Informatika': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Axborot texnalogiyalari': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Kompyuter grafikasi': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Geografiya / Raqamli axborot': 'bg-green-50 border-green-200 hover:bg-green-100',
      'Axborot xavfsizligi': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      "Biznes asoslar O'A / Kompyuter grafikasi va dizayn O'A": 'bg-green-50 border-green-200 hover:bg-green-100',
      'Tikuv maxsulot konsturuksiyalash / Tikuvchilik buyumlari tayyorlash': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Fizika / Rus tili': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Loyhalash': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Avtomobil tuzilishi': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      "Raqamli axborot qayta ishlash O'A / Jismoniy tarbiya": 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Tikuvchilik materallari': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Instagram Strategy': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      'Tikuvchili jixozlari': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      "Raqamli axborot qayta ishlash O'A /Tarbiya": 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Kompyuter ofis qurulmalari': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Raqamli axborot qayta ishlash': 'bg-green-50 border-green-200 hover:bg-green-100',
      "Tarbiya / Kiyim mayda deta i/b O'A": 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      "Raqamli axborot qayta ishlash O'A/ CHQBT": 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      "Biznes asoslari / Mehnat muhofazasi": 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      "Mehnat muhofazasi / Ingliz tili": 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Tikuvchilik materialshunosligi': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Axborot texnologilari': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      "Traktor va qishloq xo'jaligi agregatlari": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      "Biznes asoslari / Yo'l harakati": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      "Yo'l harakati qoidalari": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      "Tarbiya / Jismoniy tarbiya": 'bg-orange-50 border-orange-200 hover:bg-orange-100',
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