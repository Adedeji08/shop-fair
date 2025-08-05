import React from "react";

export const BookCatalogue = () => {
  return (
    <>
      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Book 1 */}
          <div className="cursor-pointer group">
            <div className="bg-gray-200 p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow aspect-[4/5]">
              <div className="h-full bg-gradient-to-br from-emerald-800 to-teal-900 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                  <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 opacity-90">
                    WHISPERING WOODS CHRONICLES
                  </div>
                  <div className="text-lg sm:text-2xl font-bold leading-tight mb-1 sm:mb-2">
                    THE WHISPERING
                  </div>
                  <div className="text-xl sm:text-3xl font-bold">WOODS</div>
                  <div className="text-xs sm:text-sm mt-2 sm:mt-4 opacity-90">MAYA STEVENS</div>
                </div>
              </div>
            </div>
            <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">The Whispering Woods</h3>
            <p className="text-gray-600 text-sm sm:text-base">by Arya Stevens</p>
          </div>

          {/* Book 2 */}
          <div className="cursor-pointer group">
            <div className="bg-gray-200 p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow aspect-[3/4] sm:aspect-[4/5]">
              <div className="h-full bg-gradient-to-br from-teal-700 to-cyan-800 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-8">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 opacity-90">
                      The international bestseller
                    </div>
                    <div className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">PLANT</div>
                    <div className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">MYSTERY</div>
                    <div className="text-xs sm:text-sm opacity-90">
                      Where nature holds the key
                    </div>
                    <div className="text-xs sm:text-sm mt-4 sm:mt-8 opacity-90">
                      ETHAN BLACKWOOD
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">Shadows of the Past</h3>
            <p className="text-gray-600 text-sm sm:text-base">by Ethan Blackwood</p>
          </div>

          {/* Book 3 */}
          <div className="cursor-pointer group">
            <div className="bg-gray-200 p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow aspect-[3/4] sm:aspect-[4/5]">
              <div className="h-full bg-gradient-to-br from-gray-800 to-slate-900 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white px-4 sm:px-8">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 opacity-90">
                      JONATHAN CROSS
                    </div>
                    <div className="border-t border-b border-white/30 py-2 sm:py-4 mb-2 sm:mb-4">
                      <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">ECHOES OF</div>
                      <div className="text-2xl sm:text-4xl font-bold">TOMORROW</div>
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 italic">
                      Winner of the Hugo Award
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">Echoes of Tomorrow</h3>
            <p className="text-gray-600 text-sm sm:text-base">by Zara Vance</p>
          </div>

          {/* Book 4 */}
          <div className="cursor-pointer group">
            <div className="bg-gray-200 p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow aspect-[3/4] sm:aspect-[4/5]">
              <div className="h-full bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg shadow-lg relative overflow-hidden flex items-center justify-center">
                <div className="text-center px-4 sm:px-6">
                  <div className="text-gray-700 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
                    A Novel
                  </div>
                  <div className="text-6xl sm:text-9xl mb-2 sm:mb-4">🏰</div>
                  <div className="text-gray-800 text-lg sm:text-2xl font-serif font-bold mb-1 sm:mb-2">
                    The Forgotten
                  </div>
                  <div className="text-gray-800 text-xl sm:text-3xl font-serif font-bold mb-2 sm:mb-4">
                    Kingdom
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">LEO STERLING</div>
                </div>
              </div>
            </div>
            <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg">
              The Forgotten Kingdom
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">by Leo Sterling</p>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12">New Arrivals</h2>
        <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Book 1 */}
          <div className="cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-indigo-700 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
                <div className="text-gray-600 text-xs sm:text-sm">Rediscover</div>
                <div className="font-serif text-base sm:text-xl mt-1">
                  The Last
                  <br />
                  Chronicle
                </div>
              </div>
            </div>
            <h4 className="mt-3 sm:mt-4 font-medium text-base sm:text-lg">The Last Chronicle</h4>
            <p className="text-gray-600 text-xs sm:text-sm">by Amelia Harper</p>
          </div>

          {/* Book 2 */}
          <div className="cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-teal-600 to-emerald-700 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
                <div className="text-gray-600 text-xs sm:text-sm">Rediscover</div>
                <div className="font-serif text-base sm:text-xl mt-1">
                  Echoes of the
                  <br /> Past
                </div>
              </div>
            </div>
            <h4 className="mt-3 sm:mt-4 font-medium text-base sm:text-lg">The Last Chronicle</h4>
            <p className="text-gray-600 text-xs sm:text-sm">by Amelia Harper</p>
          </div>

          {/* Book 3 */}
          <div className="cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
                <div className="text-gray-600 text-xs sm:text-sm">Rediscover</div>
                <div className="font-serif text-base sm:text-xl mt-1">Starlight Sonata</div>
              </div>
            </div>
            <h4 className="mt-3 sm:mt-4 font-medium text-base sm:text-lg">The Last Chronicle</h4>
            <p className="text-gray-600 text-xs sm:text-sm">by Amelia Harper</p>
          </div>

          {/* Book 4 */}
          <div className="cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
                <div className="text-gray-600 text-xs sm:text-sm">Rediscover</div>
                <div className="font-serif text-base sm:text-xl mt-1">
                  The Silent <br/> Witness
                </div>
              </div>
            </div>
            <h4 className="mt-3 sm:mt-4 font-medium text-base sm:text-lg">
              The Silent Witness
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm">by Daniel Carter</p>
          </div>

          {/* Book 5 - Hidden on small screens, shown on medium+ */}
          <div className="hidden sm:block cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 sm:px-6 sm:py-4 rounded-lg">
                <div className="text-gray-600 text-xs sm:text-sm">Rediscover</div>
                <div className="font-serif text-base sm:text-xl mt-1">Crimson Tide</div>
              </div>
            </div>
            <h4 className="mt-3 sm:mt-4 font-medium text-base sm:text-lg">Crimson Tide</h4>
            <p className="text-gray-600 text-xs sm:text-sm">by Olivia Evans</p>
          </div>
        </div>
        
        {/* Additional book - shown on small screens only */}
        <div className="sm:hidden mt-6">
          <div className="cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <div className="text-center bg-white/80 px-4 py-3 rounded-lg">
                <div className="text-gray-600 text-xs">Rediscover</div>
                <div className="font-serif text-base mt-1">Crimson Tide</div>
              </div>
            </div>
            <h4 className="mt-3 font-medium text-base">Crimson Tide</h4>
            <p className="text-gray-600 text-xs">by Olivia Evans</p>
          </div>
        </div>
      </section>

      {/* Rare Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12">Rare Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Book 1 */}
          <div className="cursor-pointer">
            <div className="bg-gray-300 p-4 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-950/50 to-transparent"></div>
                <div className="absolute inset-y-4 sm:inset-y-8 left-4 sm:left-8 w-2 sm:w-3 bg-amber-700/50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-300/20 text-6xl sm:text-9xl font-serif">
                  I
                </div>
              </div>
            </div>
          </div>
          
          {/* Book 2 */}
          <div className="cursor-pointer">
            <div className="bg-gray-300 p-4 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-green-900 to-emerald-800 rounded-lg relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-950/50 to-transparent"></div>
                <div className="absolute inset-y-4 sm:inset-y-8 left-4 sm:left-8 w-2 sm:w-3 bg-green-700/50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-300/20 text-6xl sm:text-9xl font-serif">
                  II
                </div>
              </div>
            </div>
          </div>
          
          {/* Book 3 */}
          <div className="cursor-pointer">
            <div className="bg-gray-300 p-4 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-9xl mb-3 sm:mb-6">🏰</div>
                  <div className="text-blue-900 font-serif text-lg sm:text-2xl">
                    Castle Architecture
                  </div>
                  <div className="text-blue-700 mt-1 sm:mt-2 text-xs sm:text-sm">Illustrated Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};