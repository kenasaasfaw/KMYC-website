'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3807906/pexels-photo-3807906.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Waaqeffannaa Dilbataa',
      category: 'Waaqeffannaa',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3807907/pexels-photo-3807907.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kadhannaa Hawaasaa',
      category: 'Kadhannaa',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tajaajila Dubartootaa',
      category: 'Tajaajila',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3807518/pexels-photo-3807518.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sochii Ijoollee',
      category: 'Dargaggoota',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3807533/pexels-photo-3807533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tajaajila Hawaasaa',
      category: 'Tajaajila Alaa',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Walga’ii Kadhannaa',
      category: 'Kadhannaa',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3393650/pexels-photo-3393650.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Faarfannaa Koorii',
      category: 'Waaqeffannaa',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3807521/pexels-photo-3807521.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Garee Barnoota Macaafa Qulqulluu',
      category: 'Tajaajila',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1181276/pexels-photo-1181276.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sirna Cuuphaa',
      category: 'Sagantaa',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/8468111/pexels-photo-8468111.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Irbaata Tokkummaa',
      category: 'Hawaasa',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3807520/pexels-photo-3807520.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Konfiraansii Dargaggootaa',
      category: 'Dargaggoota',
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tajaajila Waaqeffannaa',
      category: 'Waaqeffannaa',
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
            Galmee Suuraa
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Yeroo waaqeffannaa, sagantaalee fi tajaajila hawaasaa keenya keessatti suuraawwan kaafaman ilaalaa
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.src)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>

                  <div className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold w-fit">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white hover:bg-gray-200 p-2 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-black" />
            </button>

            <img
              src={selectedImage}
              alt="Suuraa Guddaa"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Suuraawwan Keessan Qoodaa
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Suuraa addaa sagantaa waldaa irraa qabduu? Hawaasa keenya waliin qoodaa. Miidiyaa hawaasaa irratti nu yaadachiisuun gochuun yookaan suuraawwan keessan gara email kanaatti ergaa: gallery@wwwmyqaaqee.org.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Suuraawwan Keessan Ergaa
          </button>
        </div>
      </section>
    </div>
  );
} 