import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function EventsPage() {
  const events = [
    {
      title: 'Tajaajila Waaqeffannaa Dilbataa',
      date: 'Dilbata hunda',
      time: '9:00 AM - 12:00 PM',
      location: 'Mana Waaqeffannaa Guddaa',
      description: 'Waaqeffannaa, kadhannaa fi barsiisa Macaafa Qulqulluu nama kakaasuuf nu waliin ta\'aa. Kun walga\'ii keenya guddaa isa itti Waaqayyoon galateeffannu fi amantii keessatti itti guddannu dha.',
      featured: true,
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Walga\'ii Kadhannaa',
      date: 'Roobii hunda',
      time: '6:00 PM - 7:30 PM',
      location: 'Galma Kadhannaa',
      description: 'Waldaa keenya, hawaasa keenya fi addunyaaf qajeelfama fi eebba Waaqayyoo kadhachuuf kadhannaa waliin ni taasifna.',
      featured: false,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Tokkummaa Dargaggootaa',
      date: 'Jimaata hunda',
      time: '7:00 PM - 9:00 PM',
      location: 'Giddugala Dargaggootaa',
      description: 'Walga\'ii dargaggootaaf qophaa\'e kan keessatti waaqeffannaa, barsiisa, bashannana fi tokkummaa waliin ta\'u.',
      featured: false,
      color: 'from-purple-600 to-purple-800',
    },
    {
      title: 'Barnoota Macaafa Qulqulluu - Kakuu Moofaa',
      date: 'Kibxataa fi Kamisa',
      time: '6:30 PM - 8:00 PM',
      location: 'Galma Tokkummaa',
      description: 'Kitaabota Kakuu Moofaa gadi fageenyaan barachuu. Waadaa fi kakuu Waaqayyoo akkamitti gara Yesusitti akka agarsiisan baranna.',
      featured: false,
      color: 'from-green-600 to-green-800',
    },
    {
      title: 'Leenjii Cimsannaa Dubartootaa',
      date: 'Bitootessa 15, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Galma Guddaa',
      description: 'Sagantaa addaa kan keessatti haasaa, gorsa fi leenjii dubartoota umurii hundaaf guddina isaanii hafuuraa fi jireenyaaf gargaaru ni kennama.',
      featured: true,
      color: 'from-pink-600 to-pink-800',
    },
    {
      title: 'Guyyaa Tajaajila Hawaasaa',
      date: 'Bitootessa 22, 2025',
      time: '8:00 AM - 4:00 PM',
      location: 'Giddugala Hawaasaa',
      description: 'Hawaasa keenya tajaajiluuf carraa kenname. Nyaata, qorannoo fayyaa fi Wangeelaan namoota bira gahuuf hirmaachuu dandeessu.',
      featured: true,
      color: 'from-red-600 to-red-800',
    },
    {
      title: 'Ayyaana Du\'aa Ka\'umsa Yesus',
      date: 'Ebla 20, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Mana Waaqeffannaa Guddaa',
      description: 'Du\'aa ka\'umsa Yesus Kiristoos kabajuuf tajaajila addaa kan keessatti faarfannaa addaa, cuuphaa fi lallaba jabaa ni ta\'a.',
      featured: true,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Kaampii Ganna Ijoollee',
      date: 'Waxabajjii 23-27, 2025',
      time: 'Sagantaa Guyyaa Guutuu',
      location: 'Naannoo Waldaa',
      description: 'Torban tokkoof kaampii ijoollee umurii 5-12. Barnoota Macaafa Qulqulluu, taphoota, ispoortii fi hojii harkaa bashannansiisaa ni qaba.',
      featured: false,
      color: 'from-indigo-600 to-indigo-800',
    },
  ];

  const featuredEvents = events.filter(e => e.featured);
  const upcomingEvents = events.filter(e => !e.featured);

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3807533/pexels-photo-3807533.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sagantaalee fi Yeroo
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tajaajila, walga’ii fi sagantaalee addaa keenya hunda irratti odeeffannoo yeroo yeroon argadhaa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Sagantaalee Addaa
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${event.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="p-8 text-white">
                  <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Sagantaa Addaa
                  </div>

                  <h3 className="text-3xl font-bold mb-6">{event.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Caalaatti Baradhaa <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Sagantaa Yeroo Hunda
          </h2>

        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Barruu Odeeffannoo Waldaa Argachuuf Galmaa'aa
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Sagantaalee keenya keessaa tokko illee hin dhabinaa. Odeeffannoo haaraa fi beeksisa sagantaalee waldaa argachuuf galmaa'aa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Imeelii keessan galchaa"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Galmaa'i
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}