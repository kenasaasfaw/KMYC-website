'use client';

import { useState } from 'react';
import { BookOpen, Download, Volume2 } from 'lucide-react';

export default function SermonsPage() {
  const [selectedSermon, setSelectedSermon] = useState(0);

  const sermons = [
    {
      id: 1,
      title: 'Humna Amantii',
      preacher: 'Luba Solomoon Bekele',
      date: 'Bitootessa 2, 2025',
      description:
        'Akka amantiin jireenya kee jijjiiruu fi gufuu kamiyyuu moʼuu danda’u baradhu. Ergaa jabaa Waaqa irratti yeroo hunda amanachuu barsiisu.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-1.pdf',
      thumbnail:
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 2,
      title: 'Ayyaanni Waaqa Guutuu Dha',
      preacher: 'Luba Solomoon Bekele',
      date: 'Guraandhala 23, 2025',
      description:
        'Akka ayyaanni Waaqayyoo yeroo hunda siif qophaaʼee fi rakkina hunda keessatti siif gaʼaa taʼe hubadhu. Ergaa abdii fi jajjabinaa.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-2.pdf',
      thumbnail:
        'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 3,
      title: 'Jaalala Jireenya Jijjiiru',
      preacher: 'Jaarsa Abebe Taddasaa',
      date: 'Guraandhala 16, 2025',
      description:
        'Humna jaalala Waaqayyoo jireenya jijjiiru fi akkamitti hariiroo keenya namoota biroo waliin fooyyessu qoradhu.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-3.pdf',
      thumbnail:
        'https://images.pexels.com/photos/3808221/pexels-photo-3808221.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 4,
      title: 'Kaayyoo Keenya Kiristoos Keessatti',
      preacher: 'Jaarsa Mulugeetaa Haayilee',
      date: 'Guraandhala 9, 2025',
      description:
        'Hariiroo Yesuus Kiristoos waliin qabaachuun kaayyoo jireenya kee argachuu fi raawwachuu dandaʼuu.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-4.pdf',
      thumbnail:
        'https://images.pexels.com/photos/1181276/pexels-photo-1181276.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 5,
      title: 'Qormaata Moʼachuu',
      preacher: 'Diyaaqon Daawit Kebede',
      date: 'Guraandhala 2, 2025',
      description:
        'Humna Waaqayyoo fayyadamuun qormaata akkamitti moʼachuu fi jireenya Kiristaanaa injifannoo keessa jiraachuu dandeenyu.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-5.pdf',
      thumbnail:
        'https://images.pexels.com/photos/3808214/pexels-photo-3808214.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
    {
      id: 6,
      title: 'Hawaasa Keessatti Jiraachuu',
      preacher: 'Obboleettii Maartaa Asaffaa',
      date: 'Amajjii 26, 2025',
      description:
        'Tokkummaa fi hawaasa keessatti jiraachuun qaama Kiristoos taʼuu keenyaaf akkamitti barbaachisaa akka taʼe hubachuu.',
      youtubeId: 'dQw4w9WgXcQ',
      audioUrl: '#',
      notes: 'sermon-notes-6.pdf',
      thumbnail:
        'https://images.pexels.com/photos/3807906/pexels-photo-3807906.jpeg?auto=compress&cs=tinysrgb&w=500',
    },
  ];

  const currentSermon = sermons[selectedSermon];

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Lallaba
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ergaawwan amantii kee jabeessan ilaali fi dhaggeeffadhu
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2">

              <div className="bg-black rounded-xl overflow-hidden shadow-2xl mb-8">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                 <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/-zG1fogu89U"
    title="HAA TURAMU | Solomon Alemu | 2026"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-gray-200">

                <h2 className="text-4xl font-bold text-blue-900 mb-2">
                  {currentSermon.title}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
                  <span className="font-semibold">
                    {currentSermon.preacher}
                  </span>

                  <span className="hidden sm:block text-gray-400">•</span>

                  <span>{currentSermon.date}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {currentSermon.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    <Volume2 className="h-5 w-5" />
                    Sagalee Dhaggeeffadhu
                  </button>

                  <button className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    <Download className="h-5 w-5" />
                    Barreeffama Buufadhu
                  </button>

                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">

                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-yellow-500" />
                  Tarree Lallabaa
                </h3>

                <div className="space-y-3">

                  {sermons.map((sermon, index) => (
                    <button
                      key={sermon.id}
                      onClick={() => setSelectedSermon(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-2 ${
                        selectedSermon === index
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-900 border-gray-200 hover:border-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <p className="font-semibold mb-1">{sermon.title}</p>

                      <p
                        className={`text-sm ${
                          selectedSermon === index
                            ? 'text-blue-100'
                            : 'text-gray-600'
                        }`}
                      >
                        {sermon.date}
                      </p>
                    </button>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}