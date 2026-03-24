'use client';

import { useState } from 'react';
import { Heart, CircleCheck as CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function PrayerRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('prayer_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        ]);

      if (supabaseError) {
        setError('Gaaffiin kadhannaa galmeessuu hin dandeenye. Maaloo irra deebiʼii yaali.');
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Dogoggorri uumameera. Maaloo irra deebiʼii yaali.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-4">
            <Heart className="h-12 w-12" />
            Gaaffii Kadhannaa
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Gaaffii kadhannaa keessan maatii waldaa keenya waliin qoodaa. Humna kadhannaa ni amanna, akkasumas isiniif kadhachuuf gammanna.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 md:p-12 border-2 border-gray-200">

                {submitted && (
                  <div className="mb-8 bg-green-50 border-2 border-green-500 rounded-lg p-6 flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-green-900 mb-1">Galatoomaa!</h3>
                      <p className="text-green-800">
                        Gaaffiin kadhannaa keessan nu gaʼeera. Gareen kadhannaa keenya isiniif kadhata. Isin waliin kadhachuun nu gammachiisa.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-8 bg-red-50 border-2 border-red-500 rounded-lg p-6 flex items-start gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-red-900 mb-1">Dogoggora</h3>
                      <p className="text-red-800">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Maqaa Keessan
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200"
                      placeholder="Maqaa keessan galchaa"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200"
                      placeholder="email keessan galchaa"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Gaaffii Kadhannaa
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Gaaffii kadhannaa keessan asitti barreessaa..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Heart className="h-5 w-5" />
                    {loading ? 'Ergamaa jira...' : 'Gaaffii Kadhannaa Ergi'}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Tajaajila Kadhannaa</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Gareen kadhannaa keenya yeroo hunda walitti dhufuun gaaffii kadhannaa maatii waldaa keenyaaf kadhata.
                </p>
                <div className="space-y-3 text-sm text-blue-100">
                  <p>
                    <span className="font-semibold">Walgahii Kadhannaa:</span><br />
                    Roobii Sa'aatii 12:00 Galgala
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span><br />
                    prayer@wwwmyqaaqee.org
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Kadhannaa Amanaa</h3>
                <p className="text-yellow-50 leading-relaxed italic">
                  "Kadhannaan nama qajeelaa humna qaba, hojii guddaa hojjeta."
                </p>
                <p className="text-yellow-100 mt-3 text-sm">Yaaqoob 5:16</p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Qajeelfama Kadhannaa</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Itti fufiinsaan ibsi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Waan itti mijatu qofa qoodi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Gaaffiin hundi iccitii ta'a
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Jajjabeessuun isin hordofna
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}