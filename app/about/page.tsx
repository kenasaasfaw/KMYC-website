import { Target, Eye, History, Users } from "lucide-react";

export default function AboutPage() {
  const leaders = [
    {
      name: "Luba Solomoon Bekele",
      role: "Luba Olaanaa",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Lubni Solomoon waggoota 15 oliif waldaa keenya tajaajilaa jira. Inni ogummaa fi garaa laafinaan geggeessa. Jaalalli inni hawaasaaf qabu fi of kennuun inni Dubbii Waaqayyoo barsiisu jireenya namoota hedduu jijjiireera.",
    },
    {
      name: "Jaarsa Abebe Taddasaa",
      role: "Jaarsa Waldaa",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Jaarsi Abebe waggoota dheeraaf muuxannoo geggeessummaa hafuuraa qaba. Ogummaan isaa fi gorsaan isaa yeroo hedduu waldaa keenya qajeelchuu keessatti gumaacha guddaa godheera.",
    },
    {
      name: "Jaarsa Mulugeetaa Haayilee",
      role: "Jaarsa Waldaa",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Jaarsi Mulugeetaa tajaajila dargaggootaa fi wangeela lallabuu irratti hojii guddaa hojjeta. Jaalalli inni dhaloota haaraa Wangeelaan ga’uuf qabu waldaa keenya guutuu kakaasa.",
    },
    {
      name: "Diyaaqon Daawit Kebede",
      role: "Geggeessaa Faarfannaa",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Diyaaqon Daawit garee faarfannaa keenyaa ogummaa fi kaka’umsa guddaan geggeessa. Kennaan muuziqaa isaa waaqeffannaa keessatti haala jabaa uumuuf gargaareera.",
    },
    {
      name: "Obboleettii Maartaa Asaffaa",
      role: "Geggeessituu Tajaajila Dubartootaa",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Obboleettiin Maartaa tajaajila dubartootaa jabinaan fi kabajaan geggeessiti. Isheen dubartoonni amantii isaanii keessatti akka guddatan fi Waaqayyoon tajaajilan gargaaraa jirti.",
    },
    {
      name: "Obboleessa Getaachoo Berhaanuu",
      role: "Qindeessaa Tajaajila Dargaggootaa",
      image:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Obboleessi Getaachoo sagantaalee dargaggootaa qindeessa. Inni hojii dargaggoonni amantii isaanii keessatti akka guddatan fi Kiristoos waliin hariiroo isaanii akka jabeessan taasisu irratti hojjechaa jira.",
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Waa'ee Waldaa Keenya
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Kaayyoo fi hundeeffamni waldaa keenyaa jaalala, amantii fi abdii
            Kiristoos irratti hundaa’e ijaaruudha.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900">
                  Seenaa Keenya
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Waldaan Warra Wangeelaa Makaana Yesuus Qaaqee kan
                  hundeeffamte bara 1985 yommuu ta’u, kaayyoon ishee
                  Wangeela Yesuus Kiristoos garaa hawaasa keenyaatti
                  fiduudha.
                </p>

                <p>
                  Waggoota darban heddu keessatti amanamummaa Waaqayyoo
                  karaa hedduun argineerra. Waldaan keenya ifa abdii,
                  bakka fayyinaa fi madda nyaata hafuuraa namoota
                  kumaatama heddu ta’aniif taateera.
                </p>

                <p>
                  Har’as dhaala keenya kabajaa jirra; akkasumas hawaasa
                  keenya tajaajiluuf fi ergaa jaalala Kiristoos
                  namoota dhaga’uuf fedhii qaban hundaaf labsuuf
                  carraa haaraa fudhachaa jirra.
                </p>
              </div>
            </div>

            <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8468111/pexels-photo-8468111.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hawaasa Waldaa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-600">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h3 className="text-3xl font-bold text-blue-900">
                  Ergama Keenya
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Ergamaan keenya namoota bartoota Yesuus Kiristoos
                gochuu, tajaajilaaf isaan qopheessuu fi Wangeela
                barsiisuu, waaqeffannaa fi tokkummaa keessatti
                guddisuudha.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-yellow-600" />
                <h3 className="text-3xl font-bold text-blue-900">
                  Mul'ata Keenya
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Mul’atni keenya waldaa Kiristaanaa guddachaa fi
                Kiristoos irratti hundaa’e ta’ee bartoota amanamoo
                uumuun hawaasa keenya fi addunyaa irratti dhiibbaa
                gaarii uumuudha.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900">
            Geggeessitoota Keenya
          </h2>
          <p className="text-xl text-gray-600">
            Geggeessitoota amanamoo maatii waldaa keenya
            tikfanii fi qajeelchan kana waliin wal baraa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index}>
              <img src={leader.image} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
              <p>{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}