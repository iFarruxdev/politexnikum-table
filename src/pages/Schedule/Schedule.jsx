import { useState } from 'react';
import './Schedule.css'
import { Calendar, Clock, Users, CircleArrowRight, CircleArrowDown } from 'lucide-react';

const Schedule = () => {
  let [openEvent , setOpenEvent] = useState([]);
  const toggleEvent = (index) => {
    setOpenEvent((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  const groups = [
    {
      groupNumber: '10-25',
      groupName: 'Kompyuter grafikasi va Dizayn',
      schedule: {
        Dushanba: [
          { subject: 'Mathematics', time: '08:00 - 08:45', teacher: 'Dr. Smith', room: '101' },
          { subject: 'Physics', time: '09:00 - 09:45', teacher: 'Prof. Johnson', room: '203' },
          { subject: 'English Literature', time: '10:00 - 10:45', teacher: 'Ms. Williams', room: '105' },
          { subject: 'Chemistry', time: '11:00 - 11:45', teacher: 'Dr. Brown', room: '301' },
          { subject: 'Computer Science', time: '13:00 - 13:45', teacher: 'Mr. Davis', room: '402' }
        ],
        Seshanba: [
          { subject: 'Biology', time: '08:00 - 08:45', teacher: 'Dr. Garcia', room: '302' },
          { subject: 'Mathematics', time: '09:00 - 09:45', teacher: 'Dr. Smith', room: '101' },
          { subject: 'History', time: '10:00 - 10:45', teacher: 'Ms. Martinez', room: '106' },
          { subject: 'Physical Education', time: '11:00 - 11:45', teacher: 'Coach Taylor', room: 'Gym' },
          { subject: 'Art & Design', time: '13:00 - 13:45', teacher: 'Ms. Anderson', room: '201' }
        ],
        Chorshanba: [
          { subject: 'Chemistry', time: '08:00 - 08:45', teacher: 'Dr. Brown', room: '301' },
          { subject: 'English Literature', time: '09:00 - 09:45', teacher: 'Ms. Williams', room: '105' },
          { subject: 'Mathematics', time: '10:00 - 10:45', teacher: 'Dr. Smith', room: '101' },
          { subject: 'Geography', time: '11:00 - 11:45', teacher: 'Mr. Wilson', room: '108' },
          { subject: 'Music', time: '13:00 - 13:45', teacher: 'Ms. Lee', room: '204' }
        ],
        Payshanba: [
          { subject: 'Physics', time: '08:00 - 08:45', teacher: 'Prof. Johnson', room: '203' },
          { subject: 'Computer Science', time: '09:00 - 09:45', teacher: 'Mr. Davis', room: '402' },
          { subject: 'Biology', time: '10:00 - 10:45', teacher: 'Dr. Garcia', room: '302' },
          { subject: 'Mathematics', time: '11:00 - 11:45', teacher: 'Dr. Smith', room: '101' },
          { subject: 'Spanish', time: '13:00 - 13:45', teacher: 'Señora Lopez', room: '107' }
        ],
        Juma: [
          { subject: 'History', time: '08:00 - 08:45', teacher: 'Ms. Martinez', room: '106' },
          { subject: 'Chemistry', time: '09:00 - 09:45', teacher: 'Dr. Brown', room: '301' },
          { subject: 'Physical Education', time: '10:00 - 10:45', teacher: 'Coach Taylor', room: 'Gym' },
          { subject: 'English Literature', time: '11:00 - 11:45', teacher: 'Ms. Williams', room: '105' },
          { subject: 'Mathematics', time: '13:00 - 13:45', teacher: 'Dr. Smith', room: '101' }
        ]
      }
    },
    {
      groupNumber: '11-18',
      groupName: 'Web Development and Programming',
      schedule: {
        Dushanba: [
          { subject: 'Programming', time: '08:00 - 08:45', teacher: 'Mr. Davis', room: '402' },
          { subject: 'Web Design', time: '09:00 - 09:45', teacher: 'Ms. Anderson', room: '201' },
          { subject: 'Database', time: '10:00 - 10:45', teacher: 'Dr. Chen', room: '305' },
          { subject: 'Mathematics', time: '11:00 - 11:45', teacher: 'Dr. Smith', room: '101' },
          { subject: 'English', time: '13:00 - 13:45', teacher: 'Ms. Williams', room: '105' }
        ],
        Seshanba: [
          { subject: 'JavaScript Advanced', time: '08:00 - 08:45', teacher: 'Mr. Davis', room: '402' },
          { subject: 'UI/UX Design', time: '09:00 - 09:45', teacher: 'Ms. Anderson', room: '201' },
          { subject: 'Server Administration', time: '10:00 - 10:45', teacher: 'Mr. Torres', room: '403' },
          { subject: 'Project Management', time: '11:00 - 11:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Mobile Development', time: '13:00 - 13:45', teacher: 'Dr. Kim', room: '404' }
        ],
        Chorshanba: [
          { subject: 'React Framework', time: '08:00 - 08:45', teacher: 'Mr. Davis', room: '402' },
          { subject: 'CSS Advanced', time: '09:00 - 09:45', teacher: 'Ms. Anderson', room: '201' },
          { subject: 'API Development', time: '10:00 - 10:45', teacher: 'Dr. Chen', room: '305' },
          { subject: 'Version Control', time: '11:00 - 11:45', teacher: 'Mr. Torres', room: '403' },
          { subject: 'Testing & QA', time: '13:00 - 13:45', teacher: 'Ms. Parker', room: '307' }
        ],
        Payshanba: [
          { subject: 'Node.js Backend', time: '08:00 - 08:45', teacher: 'Dr. Chen', room: '305' },
          { subject: 'Graphic Design', time: '09:00 - 09:45', teacher: 'Ms. Anderson', room: '201' },
          { subject: 'Cloud Computing', time: '10:00 - 10:45', teacher: 'Mr. Torres', room: '403' },
          { subject: 'Cybersecurity Basics', time: '11:00 - 11:45', teacher: 'Dr. Hayes', room: '308' },
          { subject: 'Portfolio Development', time: '13:00 - 13:45', teacher: 'Ms. Roberts', room: '210' }
        ],
        Juma: [
          { subject: 'Full Stack Project', time: '08:00 - 08:45', teacher: 'Mr. Davis', room: '402' },
          { subject: 'DevOps Fundamentals', time: '09:00 - 09:45', teacher: 'Mr. Torres', room: '403' },
          { subject: 'Agile Methodology', time: '10:00 - 10:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Career Development', time: '11:00 - 11:45', teacher: 'Ms. Foster', room: '110' },
          { subject: 'Code Review Session', time: '13:00 - 13:45', teacher: 'Mr. Davis', room: '402' }
        ]
      }
    },
    {
      groupNumber: '09-32',
      groupName: 'Digital Marketing Specialist',
      schedule: {
        Dushanba: [
          { subject: 'Marketing', time: '08:00 - 08:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Social Media Strategy', time: '09:00 - 09:45', teacher: 'Ms. Foster', room: '110' },
          { subject: 'Content Creation', time: '10:00 - 10:45', teacher: 'Ms. Anderson', room: '201' },
          { subject: 'SEO & Analytics', time: '11:00 - 11:45', teacher: 'Mr. Peterson', room: '209' },
          { subject: 'Email Marketing', time: '13:00 - 13:45', teacher: 'Ms. Brown', room: '208' }
        ],
        Seshanba: [
          { subject: 'Brand Management', time: '08:00 - 08:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Video Production', time: '09:00 - 09:45', teacher: 'Mr. Lee', room: '205' },
          { subject: 'Copywriting', time: '10:00 - 10:45', teacher: 'Ms. Williams', room: '105' },
          { subject: 'Paid Advertising', time: '11:00 - 11:45', teacher: 'Mr. Peterson', room: '209' },
          { subject: 'Influencer Marketing', time: '13:00 - 13:45', teacher: 'Ms. Foster', room: '110' }
        ],
        Chorshanba: [
          { subject: 'Market Research', time: '08:00 - 08:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Photography Basics', time: '09:00 - 09:45', teacher: 'Mr. Lee', room: '205' },
          { subject: 'Google Ads', time: '10:00 - 10:45', teacher: 'Mr. Peterson', room: '209' },
          { subject: 'Consumer Behavior', time: '11:00 - 11:45', teacher: 'Dr. Morgan', room: '207' },
          { subject: 'Content Calendar', time: '13:00 - 13:45', teacher: 'Ms. Brown', room: '208' }
        ],
        Payshanba: [
          { subject: 'Facebook Marketing', time: '08:00 - 08:45', teacher: 'Ms. Foster', room: '110' },
          { subject: 'Instagram Strategy', time: '09:00 - 09:45', teacher: 'Ms. Foster', room: '110' },
          { subject: 'LinkedIn Professional', time: '10:00 - 10:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'Analytics Tools', time: '11:00 - 11:45', teacher: 'Mr. Peterson', room: '209' },
          { subject: 'Campaign Planning', time: '13:00 - 13:45', teacher: 'Ms. Brown', room: '208' }
        ],
        Juma: [
          { subject: 'E-commerce Marketing', time: '08:00 - 08:45', teacher: 'Ms. Roberts', room: '210' },
          { subject: 'TikTok & Trends', time: '09:00 - 09:45', teacher: 'Ms. Foster', room: '110' },
          { subject: 'Conversion', time: '10:00 - 10:45', teacher: 'Mr. Peterson', room: '209' },
          { subject: 'Client Management', time: '11:00 - 11:45', teacher: 'Ms. Brown', room: '208' },
          { subject: 'Portfolio Presentation', time: '13:00 - 13:45', teacher: 'Ms. Roberts', room: '210' }
        ]
      }
    }
  ];

  const getSubjectColor = (subject) => {
    const colorMap = {
      'Mathematics': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Physics': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Chemistry': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Biology': 'bg-green-50 border-green-200 hover:bg-green-100',
      'English Literature': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'English': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'History': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Geography': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Computer Science': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Physical Education': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Art & Design': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Music': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Spanish': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Programming Fundamentals': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Web Design': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      'Database Management': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'JavaScript Advanced': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'UI/UX Design': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'Server Administration': 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      'Project Management': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Mobile Development': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'React Framework': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'CSS Advanced': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'API Development': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Version Control': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Testing & QA': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Node.js Backend': 'bg-green-50 border-green-200 hover:bg-green-100',
      'Graphic Design': 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      'Cloud Computing': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Cybersecurity Basics': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Portfolio Development': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Full Stack Project': 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      'DevOps Fundamentals': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Agile Methodology': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Career Development': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Code Review Session': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Marketing Fundamentals': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Social Media Strategy': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Content Creation': 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      'SEO & Analytics': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Email Marketing': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'Brand Management': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Video Production': 'bg-red-50 border-red-200 hover:bg-red-100',
      'Copywriting': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Paid Advertising': 'bg-green-50 border-green-200 hover:bg-green-100',
      'Influencer Marketing': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Market Research': 'bg-slate-50 border-slate-200 hover:bg-slate-100',
      'Photography Basics': 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      'Google Ads': 'bg-sky-50 border-sky-200 hover:bg-sky-100',
      'Consumer Behavior': 'bg-lime-50 border-lime-200 hover:bg-lime-100',
      'Content Calendar': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      'Facebook Marketing': 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      'Instagram Strategy': 'bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100',
      'LinkedIn Professional': 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      'Analytics Tools': 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      'Campaign Planning': 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      'E-commerce Marketing': 'bg-green-50 border-green-200 hover:bg-green-100',
      'TikTok & Trends': 'bg-rose-50 border-rose-200 hover:bg-rose-100',
      'Conversion Optimization': 'bg-amber-50 border-amber-200 hover:bg-amber-100',
      'Client Management': 'bg-violet-50 border-violet-200 hover:bg-violet-100',
      'Portfolio Presentation': 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    };
    return colorMap[subject] || 'bg-gray-50 border-gray-200 hover:bg-gray-100';
  };
  return (
    <section className='schedule-section'>
      {/* <h1>Schedule Section</h1> */}
    <div className="bg-gradient-to-br">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8 space-y-12">
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

            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 ${!isOpen && "objects-hide"}`}>
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