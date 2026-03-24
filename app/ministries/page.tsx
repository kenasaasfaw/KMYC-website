import { Users, Heart, Music, Zap, BookOpen } from 'lucide-react';

export default function MinistriesPage() {
  const ministries = [
    {
      icon: Users,
      title: 'Tajaajila Dargaggootaa',
      description: 'Dargaggoota amantii keessatti akka guddatan, hawaasa isaanii akka tajaajilan fi dandeettii hoggansaa akka horatan jajjabeessina. Sagantaalee hawwataa fi carraa gorsaa qopheessina.',
      image: 'https://images.pexels.com/photos/3807906/pexels-photo-3807906.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Heart,
      title: 'Tajaajila Ijoollee',
      description: 'Barnoota Macaafa Qulqulluu umurii isaanii wajjin wal simatu, sochii fi tokkummaa fayyadamuun garaa fi sammuu ijoollee guddisna. Naannoo nageenyaa fi gammachiisaa uumna.',
      image: 'https://images.pexels.com/photos/3807518/pexels-photo-3807518.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Heart,
      title: 'Tajaajila Dubartootaa',
      description: 'Dubartoota umurii hundaaf deeggarsa, jajjabina fi hawaasa uumna. Guddina hafuuraa, gorsa fi jajjabeessuu irratti xiyyeeffanna.',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Music,
      title: 'Tajaajila Koorii',
      description: 'Muuziqaa fi waaqeffannaadhaan Waaqayyoon ulfeessuu fi waldaa jajjabeessuu. Kooriin keenya muuziqaa ammayyaa fi aadaa fayyadamuun waaqeffannaa miidhagaa uuma.',
      image: 'https://images.pexels.com/photos/3393650/pexels-photo-3393650.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-600 to-purple-800',
    },
    {
      icon: Zap,
      title: 'Tajaajila Wangeela Lallabaa',
      description: 'Wangeela Yesus Kiristoos hawaasa keenya fi bakka birootti labsuuf hojii cimaa hojjenna. Namoota amantii hin qabne bira geenya.',
      image: 'https://images.pexels.com/photos/3807533/pexels-photo-3807533.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-red-600 to-red-800',
    },
    {
      icon: BookOpen,
      title: 'Tajaajila Kadhannaa',
      description: 'Waldaa, hawaasa fi addunyaaf kadhachuuf of kennineerra. Torban torban walga’uun qajeelfama fi eebba Waaqayyoo kadhanna.',
      image: 'https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3807906/pexels-photo-3807906.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tajaajiloota Keenya
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Amantii keessan keessatti guddachuu fi Waaqayyoon tajaajiluuf karaa garaagaraa argadhaa
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`bg-gradient-to-br ${ministry.color} p-3 rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">{ministry.title}</h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {ministry.description}
                    </p>

                    <button
                      className={`w-full bg-gradient-to-r ${ministry.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}
                    >
                      Hirmaadhaa
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Akkamitti Hirmaachuu Dandeessu
          </h2>

          <p className="text-xl text-blue-200 mb-12 leading-relaxed">
            Amanaan hundi kennaa hafuuraa fi dandeettii Waaqayyoon tajaajiluuf itti fayyadamu qaba. Dargaggoota, faarfannaa, kadhannaa yookaan tajaajila hawaasaa irratti fedhii yoo qabaattan, tajaajila keenya keessatti iddoo isiniif jira.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Fedhii Keessan Ibsadhaa
          </button>
        </div>
      </section>
    </div>
  );
}