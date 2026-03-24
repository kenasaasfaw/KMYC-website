import Link from 'next/link';
import { Calendar, BookOpen, Users, Heart, ArrowRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/8468108/pexels-photo-8468108.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-block bg-yellow-500/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Baga Gara Maatii Waldaa Keenyaatti Dhuftan
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Waldaa Warra Wangeelaa<br />Makaana Yesus Qaaqee
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Bakka amantiin itti jiraatu, onneen itti jijjiiramu, hawaasni jaalala Kiristoosiin itti ijaaramu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Waaqeffannaa Hirmaadhu <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/sermons"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5" /> Lallaba Ilaali
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-yellow-500">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />

              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Dubbii Jajjabeessaa
                </h2>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 italic">
                  "Garaa kee guutuun Waaqayyotti amanadhu; hubannaa kee irratti hin hirkatiin. Daandii kee hunda keessatti isa beeki; inni immoo karaa kee ni qajeelcha."
                </p>

                <p className="text-lg font-semibold text-blue-600">
                  Fakkeenya 3:5-6
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Sagantaalee Dhufan
            </h2>

            <p className="text-xl text-gray-600">
              Waaqeffannaa fi tokkummaa keessatti nu waliin hirmaadhaa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Calendar className="h-12 w-12 mb-4 text-yellow-400" />

              <h3 className="text-2xl font-bold mb-3">
                Waaqeffannaa Dilbataa
              </h3>

              <p className="text-blue-100 mb-4">
                Dilbata hundumaa 9:00 AM
              </p>

              <p className="text-blue-200 leading-relaxed">
                Waaqeffannaa jabaa, lallaba jajjabeessaa fi tokkummaa amantootaa waliin hirmaadhaa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Heart className="h-12 w-12 mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Walgahii Kadhannaa
              </h3>

              <p className="text-yellow-100 mb-4">
                Roobii 6:00 PM
              </p>

              <p className="text-yellow-50 leading-relaxed">
                Kadhannaa keessatti walitti dhufuun argamuu fi qajeelfama Waaqayyoo barbaadhaa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Users className="h-12 w-12 mb-4 text-yellow-400" />

              <h3 className="text-2xl font-bold mb-3">
                Walgahii Dargaggootaa
              </h3>

              <p className="text-blue-100 mb-4">
                Jimaata 7:00 PM
              </p>

              <p className="text-blue-200 leading-relaxed">
                Walgahii dargaggootaa kan waaqeffannaa, barsiisa fi tokkummaa amantootaa qabu.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-8">

            <Link
              href="/sermons"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Lallaba Haaraa
              </h3>

              <p className="text-blue-200 mb-4 leading-relaxed">
                Ergaa jajjabeessaa amantii keessan jabeessu dhaggeeffadhaa ykn ilaalaa.
              </p>

              <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                Lallaba Ilaali <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/ministries"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Tajaajiloota Keenya
              </h3>

              <p className="text-blue-200 mb-4 leading-relaxed">
                Tajaajiloota garaagaraa keessatti hirmaachuun Waaqayyoo tajaajilaa.
              </p>

              <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                Tajaajiloota Ilaali <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/events"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Sagantaalee Dhufan
              </h3>

              <p className="text-blue-200 mb-4 leading-relaxed">
                Sagantaalee waldaa fi walgahii adda addaa hunda argachuuf ilaalaa.
              </p>

              <div className="flex items-center text-yellow-400 font-semibold group-hover:gap-2 transition-all">
                Sagantaalee Ilaali <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section
        className="relative py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/8468118/pexels-photo-8468118.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hawaasa Keenya Keessatti Hirmaadhaa
          </h2>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Waaqeffannaa, tokkummaa fi tajaajila keessatti jaalala Kiristoos argadhaa. Namni hundi baga nagaan dhuftan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/about"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Waa'ee Keenya Baradhaa
            </Link>

            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Nu Quunnamaa
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}