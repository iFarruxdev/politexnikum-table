import { useState } from "react";
import "../Schedule/Schedule.css";
import {
  Calendar,
  Clock,
  Users,
  CircleArrowRight,
  CircleArrowDown,
} from "lucide-react";
import { groups } from "../../data/cours-2";

const CoursesTwo = () => {
  let [openEvent, setOpenEvent] = useState([]);
  const toggleEvent = (index) => {
    setOpenEvent((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [index]
    );
  };

  const getSubjectColor = (subject) => {
    const colorMap = {
      Matematika: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      Physics: "bg-teal-50 border-teal-200 hover:bg-teal-100",
      Tarbiya: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      Biology: "bg-green-50 border-green-200 hover:bg-green-100",
      "English Literature": "bg-amber-50 border-amber-200 hover:bg-amber-100",
      "Ingliz tili": "bg-amber-50 border-amber-200 hover:bg-amber-100",
      Tarix: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      Geography: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
      Informatika: "bg-violet-50 border-violet-200 hover:bg-violet-100",
      Fizika: "bg-red-50 border-red-200 hover:bg-red-100",
      "Art & Design": "bg-pink-50 border-pink-200 hover:bg-pink-100",
      "Ona tili": "bg-rose-50 border-rose-200 hover:bg-rose-100",
      "Rus tili": "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
      "Ma'naviyat soati": "bg-violet-50 border-violet-200 hover:bg-violet-100",
      "Web Design": "bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100",
      "Database Management": "bg-sky-50 border-sky-200 hover:bg-sky-100",
      "JavaScript Advanced":
        "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
      "UI/UX Design": "bg-pink-50 border-pink-200 hover:bg-pink-100",
      "Server Administration": "bg-gray-50 border-gray-200 hover:bg-gray-100",
      "Project Management": "bg-lime-50 border-lime-200 hover:bg-lime-100",
      "Kvalifikatsion amaliyot": "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
      "React Framework": "bg-blue-50 border-blue-200 hover:bg-blue-100",
      "CSS Advanced": "bg-rose-50 border-rose-200 hover:bg-rose-100",
      "API Development":
        "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      "Version Control": "bg-slate-50 border-slate-200 hover:bg-slate-100",
      "Testing & QA": "bg-red-50 border-red-200 hover:bg-red-100",
      "Node.js Backend": "bg-green-50 border-green-200 hover:bg-green-100",
      "Graphic Design": "bg-purple-50 border-purple-200 hover:bg-purple-100",
      "Cloud Computing": "bg-sky-50 border-sky-200 hover:bg-sky-100",
      "Cybersecurity Basics": "bg-red-50 border-red-200 hover:bg-red-100",
      "Erkaklar kiyimini konstruksiyalash":
        "bg-amber-50 border-amber-200 hover:bg-amber-100",
      "Full Stack Project":
        "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
      "DevOps Fundamentals": "bg-teal-50 border-teal-200 hover:bg-teal-100",
      "Agile Methodology": "bg-lime-50 border-lime-200 hover:bg-lime-100",
      "Career Development":
        "bg-orange-50 border-orange-200 hover:bg-orange-100",
      "Code Review Session": "bg-slate-50 border-slate-200 hover:bg-slate-100",
      "Marketing Fundamentals": "bg-blue-50 border-blue-200 hover:bg-blue-100",
      "Social Media Strategy": "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
      "Content Creation": "bg-pink-50 border-pink-200 hover:bg-pink-100",
      "Tikuvchilik texnologiyasi jihozlari":
        "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      "Email Marketing": "bg-teal-50 border-teal-200 hover:bg-teal-100",
      "Brand Management": "bg-violet-50 border-violet-200 hover:bg-violet-100",
      "Video Production": "bg-red-50 border-red-200 hover:bg-red-100",
      Copywriting: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      "Paid Advertising": "bg-green-50 border-green-200 hover:bg-green-100",
      "Influencer Marketing": "bg-rose-50 border-rose-200 hover:bg-rose-100",
      "Market Research": "bg-slate-50 border-slate-200 hover:bg-slate-100",
      "Photography Basics":
        "bg-orange-50 border-orange-200 hover:bg-orange-100",
      "Google Ads": "bg-sky-50 border-sky-200 hover:bg-sky-100",
      "Consumer Behavior": "bg-lime-50 border-lime-200 hover:bg-lime-100",
      "Content Calendar": "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
      "Facebook Marketing": "bg-blue-50 border-blue-200 hover:bg-blue-100",
      "Instagram Strategy":
        "bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100",
      "LinkedIn Professional": "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
      "Analytics Tools":
        "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
      "Campaign Planning": "bg-teal-50 border-teal-200 hover:bg-teal-100",
      "E-commerce Marketing": "bg-green-50 border-green-200 hover:bg-green-100",
      "TikTok & Trends": "bg-rose-50 border-rose-200 hover:bg-rose-100",
      "Conversion Optimization":
        "bg-amber-50 border-amber-200 hover:bg-amber-100",
      "Client Management": "bg-violet-50 border-violet-200 hover:bg-violet-100",
      "Portfolio Presentation":
        "bg-orange-50 border-orange-200 hover:bg-orange-100",
    };
    return colorMap[subject] || "bg-gray-50 border-gray-200 hover:bg-gray-100";
  };
  return (
    <section className="CoursesTwo-section">
      {/* <h1>CoursesTwo Section</h1> */}
      <div className="bg-gradient-to-br">
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-4 py-8 space-y-12">
          {groups.map((group, groupIndex) => {
            const isOpen = openEvent.includes(groupIndex);
            return (
              <div key={groupIndex} className="space-y-6">
                <div
                  id="group-list"
                  onClick={() => toggleEvent(groupIndex)}
                  className="bg-gradient-to-r relative group-item-wrapper rounded-xl cursor-pointer shadow-lg p-6 text-white"
                >
                  {isOpen ? (
                    <CircleArrowRight className="group-item-icon" />
                  ) : (
                    <CircleArrowDown className="group-item-icon" />
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">
                      {group.groupNumber} - {group.groupName}
                    </h2>
                  </div>
                  <p className="text-blue-100 text-sm">Haftalik dars jadvali</p>
                </div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-6 ${
                    !isOpen && "objects-hide"
                  }`}
                >
                  {Object.keys(group.CoursesTwo).map((day) => (
                    <div
                      key={day}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="bg-gradient-to-r bg-[var(--text-color)] px-4 py-3">
                        <h3 className="text-lg font-semibold text-white text-center">
                          {day}
                        </h3>
                      </div>

                      <div className="p-4 space-y-3">
                        {group.CoursesTwo[day].map((classItem, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${getSubjectColor(
                              classItem.subject
                            )}`}
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
                              <p className="font-medium">
                                Room: {classItem.room}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesTwo;
