'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Youtube, Instagram, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/3807521/pexels-photo-3807521.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nu Qunnamaa
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Gaaffii qabduu? Isin irraa dhagaʼuu ni jaallanna. Nu qunnamaa, yeroo dhiyootti deebii isiniif kennina.
          </p>

        </div>
      </section>

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-8 mb-16">

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
              <div className="bg-white/10 p-4 rounded-lg w-fit mb-4">
                <MapPin className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Bakka</h3>

              <p className="text-blue-100 leading-relaxed">
                Finfinnee, Itoophiyaa <br />
                Naannoo Afrikaa Bahaa
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-8 text-white shadow-lg">

              <div className="bg-white/10 p-4 rounded-lg w-fit mb-4">
                <Phone className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Bilbila</h3>

              <p className="text-yellow-50">
                <a href="tel:+251123456789">
                  +251 123 456 789
                </a>
                <br />
                <a href="tel:+251987654321">
                  +251 987 654 321
                </a>
              </p>

            </div>

            <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl p-8 text-white shadow-lg">

              <div className="bg-white/10 p-4 rounded-lg w-fit mb-4">
                <Mail className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Imeelii</h3>

              <p className="text-pink-100">
                <a href="mailto:info@wwwmyqaaqee.org">
                  info@wwwmyqaaqee.org
                </a>
                <br />
                <a href="mailto:pastor@wwwmyqaaqee.org">
                  pastor@wwwmyqaaqee.org
                </a>
              </p>

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

            <div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 md:p-12 border-2 border-gray-200">

                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Ergaa Nuuf Ergaa
                </h2>

                {submitted && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4 text-green-800">
                    Galatoomaa! Ergaan keessan nu gaʼeera. Yeroo dhiyootti isin qunnamna.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Maqaa
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Maqaa keessan"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Imeelii
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Mata-duree
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Dhimmichi maal irratti?"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Ergaa
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Ergaa keessan..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    {loading ? 'Ergaa Ergaa Jira...' : 'Ergaa Ergi'}
                  </button>

                </form>
              </div>
            </div>

            <div className="space-y-8">

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">

                <div className="flex items-start gap-4 mb-6">

                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Sa'aatii Biiroo
                    </h3>

                    <div className="space-y-2 text-gray-700">

                      <p>
                        <span className="font-semibold">Wiixata - Jimaata</span><br />
                        9:00 Ganama – 5:00 Galgala
                      </p>

                      <p>
                        <span className="font-semibold">Sanbata</span><br />
                        10:00 Ganama – 2:00 Waaree booda
                      </p>

                      <p>
                        <span className="font-semibold">Dilbata</span><br />
                        Waaqeffannaa booda
                      </p>

                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-xl p-8 text-white shadow-lg">

                <h3 className="text-2xl font-bold mb-4">
                  Nu Hordofaa
                </h3>

                <p className="text-blue-200 mb-6">
                  Miidiyaa hawaasaa irratti waldaa keenya waliin wal qunnamaa.
                </p>

                <div className="flex gap-4">

                  <a href="#" className="bg-white/20 p-3 rounded-lg">
                    <Facebook className="h-6 w-6" />
                  </a>

                  <a href="#" className="bg-white/20 p-3 rounded-lg">
                    <Youtube className="h-6 w-6" />
                  </a>

                  <a href="#" className="bg-white/20 p-3 rounded-lg">
                    <Instagram className="h-6 w-6" />
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            Isin irraa Dhagaʼuu Ni Barbaanna
          </h2>

          <p className="text-xl text-blue-200">
            Gaaffii waldaa keenya irratti yoo qabaattan, nu daawwachuu yoo barbaaddan, gorsa hafuuraa yoo barbaaddan yookaan hawaasa keenya waliin wal qunnamuuf yoo barbaaddan, yeroo kamiyyuu nu qunnamaa.
          </p>

        </div>

      </section>

    </div>
  );
}