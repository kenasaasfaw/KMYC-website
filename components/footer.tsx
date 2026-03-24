import Link from 'next/link';
import { Church, Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Church className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">WWWMY Qaaqee</h3>
                <p className="text-sm text-blue-200">Waldaa Kiristoos</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Amantoota waaqeffannaaa,tokkummaa fi Wangeela Yesuus Kiristoos babal’isuuf of kenne.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Geessituu gabaabaa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  Waa'ee Keenya
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-blue-200 hover:text-white transition-colors">
                  Lallaba
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-blue-200 hover:text-white transition-colors">
                  Tajaajiloota
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-200 hover:text-white transition-colors">
                  Sagantaalee
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Odeeffannoo Quunnamtii</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  Qaaqee,Dambi Doolloo, Itoophiyaa
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  +251 ********
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  info@wwwmyqaaqee.org
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Yeroo Waaqeffannaa</h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <p>
                <span className="font-semibold text-white">Tajaajila Dilbataa:</span><br />
                9:00 AM - 12:00 PM
              </p>
              <p>
                <span className="font-semibold text-white">Kadhannnaa walii galaa kan amantootaa:</span><br />
                Jimaata 7:00 AM-12 AM
              </p>
            </div>

            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="bg-white/5 rounded-lg p-6 mb-6">
            <p className="text-center text-yellow-400 font-semibold mb-2">
              "Waaqayyo akkasitti tokkicha ilma isaa hamma kennuufitti biyya lafaa jaallate;kun immoo isatti kan amanu hundinuu jireenya bra baraa haa qabaatuuf malee haa baduuf miti."
            </p>
            <p className="text-center text-blue-200 text-sm">Yohaannis 3:16</p>
          </div>

          <p className="text-center text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Waldaa Warra Wangeelaa Makaana Yesus Qaaqee. Mirgi hundi kan eegame dha.
          </p>
        </div>
      </div>
    </footer>
  );
}