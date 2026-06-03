import HeroSlider from '@/components/HeroSlider'
import Link from 'next/link'
import Image from 'next/image'
import {
  toPersianNumber,
  toPersianDate,
} from '@/lib/persian'
import {
  getFeaturedArticles,
} from '@/lib/articles'
const slides = [
  {
    title: 'جام جهانی 1970؛ تولد فوتبال مدرن',
    desc: 'برزیل پله یکی از بهترین تیم‌های تاریخ فوتبال را ساخت.',
  },
  {
    title: 'مارادونا و شب جادویی 1986',
    desc: 'داستان دست خدا و فتح جام جهانی.',
  },
  {
    title: 'میلان ساکی چگونه اروپا را فتح کرد؟',
    desc: 'تحلیل یکی از تاکتیکی‌ترین تیم‌های تاریخ.',
  },
]
const liveMatches = [
  {
    home: 'بارسلونا',
    away: 'رئال مادرید',
    score: '2 - 1',
    minute: "5'",
  },
  {
    home: 'لیورپول',
    away: 'آرسنال',
    score: '1 - 1',
    minute: "26'",
  },
  {
    home: 'اینتر',
    away: 'میلان',
    score: '0 - 0',
    minute: "55'",
  },
]

const categories = [
  'جام جهانی',
  'اسطوره‌ها',
  'باشگاه‌ها',
  'مسابقات کلاسیک',
  'تاریخ فوتبال',
  'تاکتیک‌ها',
]

const timeline = [
  {
    year: '1930',
    title: 'اولین جام جهانی',
    desc: 'اروگوئه میزبان اولین جام جهانی تاریخ فوتبال شد.',
  },
  {
    year: '1958',
    title: 'ظهور پله',
    desc: 'پله در 17 سالگی جهان فوتبال را شگ۱ت‌زده کرد.',
  },
  {
    year: '1970',
    title: 'برزیل افسانه‌ای',
    desc: 'بهترین تیم تاریخ فوتبال جام جهانی را فتح کرد.',
  },
  {
    year: '1986',
    title: 'دست خدا',
    desc: 'مارادونا تاریخی‌ترین نمایش جام جهانی را ثبت کرد.',
  },
  {
    year: '1998',
    title: 'قهرمانی فرانسه',
    desc: 'زیدان فرانسه را به اولین جام جهانی رساند.',
  },
  {
    year: '2010',
    title: 'تیکی‌تاکا',
    desc: 'اسپانیا فوتبال مالکانه را به اوج رساند.',
  },
]

const trending = [
  'رونالدینیو چگونه فوتبال خیابانی را جهانی کرد؟',
  'راز موفقیت اسپانیا در جام جهانی 2010',
  'چرا جام جهانی 1998 تاریخی شد؟',
  'داستان افسانه‌ای منچستر یونایتد فرگوسن',
]

const tags = [
  'جام جهانی',
  'مارادونا',
  'پله',
  'رئال مادرید',
  'بارسلونا',
  'زیدان',
  'لیگ قهرمانان',
  'فوتبال کلاسیک',
  'تاکتیک',
  'آژاکس',
]
export default function HomePage() {

  const featuredArticles = getFeaturedArticles()

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-6">

{/* SLIDER */}
<div className="lg:col-span-2">

  <HeroSlider />

</div>

          {/* LIVE SCORES */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-6">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-black text-zinc-900 dark:text-white">
                نتایج زنده
              </h2>

              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                LIVE
              </span>

            </div>

            <div className="space-y-4">

              {liveMatches.map((match) => (

                <div
                  key={match.home}
                  className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-bold text-zinc-900 dark:text-white">
                        {toPersianNumber(match.home)}
                      </h3>

                      <p className="text-zinc-500 text-sm mt-1">
                        {toPersianNumber(match.away)}
                      </p>

                    </div>

                    <div className="text-left">

                      <div className="text-2xl font-black text-green-700">
                        {toPersianNumber(match.score)}
                      </div>

                      <div className="text-sm text-red-500 font-bold">
                        {toPersianNumber(match.minute)}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="mb-10">

          <h2 className="text-4xl font-black">
            دسته‌بندی مقالات
          </h2>

          <p className="text-zinc-500 mt-3">
            مهم‌ترین بخش‌های تاریخ فوتبال
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category) => (

            <div
              key={category}
              className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-green-600 rounded-3xl p-6 transition cursor-pointer"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-2xl mb-5 group-hover:bg-green-600 group-hover:text-white transition">

                ⚽

              </div>

              <h3 className="font-black text-lg group-hover:text-green-700 transition">
                {category}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* LATEST ARTICLES */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-16">

            <div>

              <h2 className="text-5xl font-black">
                آخرین مقالات
              </h2>

              <p className="text-zinc-500 mt-4 text-lg">
                جدیدترین داستان‌ها و تحلیل‌های فوتبالی Futory
              </p>

            </div>

          </div>

         <div className="grid lg:grid-cols-3 gap-8 items-start">

            <div className="lg:col-span-2 group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[40px] overflow-hidden hover:border-green-600 transition">

              <div className="h-[420px] bg-gradient-to-br from-green-700 to-green-500 relative" />

              <div className="p-10">

                <h3 className="text-4xl font-black leading-tight mb-6 group-hover:text-green-700 transition">
                  چرا جام جهانی ۱۹۷۰ آغاز فوتبال مدرن بود؟
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-9 text-lg">
                  بررسی کامل تیم افسانه‌ای برزیل، نقش پله و تأثیر این جام جهانی بر فوتبال مدرن.
                </p>

              </div>

            </div>

            <div className="space-y-6">

              {[
                'زیدان چگونه فرانسه را قهرمان جهان کرد؟',
                'تاکتیک توتال فوتبال آژاکس',
                'شب تاریخی لیورپول در استانبول',
                'افسانه شکست‌ناپذیر آرسنال',
              ].map((article) => (

                <div
                  key={article}
                  className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-green-600 transition cursor-pointer"
                >

                  <div className="flex gap-5">

                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-green-700 to-green-500 shrink-0" />

                    <div>

                      <div className="text-sm text-zinc-500 mb-3">
                        تاریخ فوتبال
                      </div>

                      <h3 className="font-black text-lg leading-8 group-hover:text-green-700 transition">
                        {article}
                      </h3>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            تاریخ فوتبال جهان
          </h2>

          <p className="text-zinc-500 mt-5 text-lg">
            مهم‌ترین لحظات تاریخ فوتبال از 1930 تا امروز
          </p>

        </div>

        <div className="relative">

          <div className="absolute right-4 top-0 w-1 h-full bg-green-100 dark:bg-green-950" />

          <div className="space-y-16">

            {timeline.map((item) => (

              <div
                key={item.year}
                className="relative pr-16"
              >

                <div className="absolute right-0 top-2 w-8 h-8 rounded-full bg-green-700 border-4 border-white dark:border-zinc-950 shadow-lg" />

                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-8 hover:border-green-600 transition">

                  <span className="text-green-700 font-black text-lg">
                    {toPersianNumber(item.year)}
                  </span>

                  <h3 className="text-3xl font-black mt-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-8 mt-5 text-lg">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TRENDING */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">

            <h2 className="text-4xl font-black">
              ترندهای فوتبالی
            </h2>

            <p className="text-zinc-500 mt-3">
              داغ‌ترین داستان‌های فوتبالی Futory
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-6">

              {trending.map((item, index) => (

                <div
                  key={item}
                  className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-green-600 rounded-3xl p-6 transition cursor-pointer"
                >

                  <div className="flex items-start gap-6">

                    <div className="text-5xl font-black text-zinc-200 group-hover:text-green-600 transition">
                      0{index + 1}
                    </div>

                    <div>

                      <h3 className="text-2xl font-black leading-tight group-hover:text-green-700 transition">
                        {item}
                      </h3>

                      <p className="text-zinc-500 mt-3 leading-8">
                        یکی از محبوب‌ترین مقالات این هفته در Futory.
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-8 h-fit">

              <h3 className="text-2xl font-black mb-8">
                موضوعات داغ
              </h3>

              <div className="flex flex-wrap gap-4">

                {tags.map((tag) => (

                  <div
                    key={tag}
                    className="px-5 py-3 rounded-2xl bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900 hover:bg-green-700 hover:text-white transition cursor-pointer font-medium"
                  >

                    #{tag}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


{/* FEATURED ARTICLES */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

  {/* HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

    <div>

      <span className="text-green-700 font-bold text-sm tracking-widest">
        داستان‌های ویژه
      </span>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 text-zinc-900 dark:text-white leading-tight">

        مقالات منتخب

      </h2>

      <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg leading-8 max-w-2xl">

        محبوب‌ترین داستان‌ها و روایت‌های تاریخ فوتبال جهان

      </p>

    </div>

    <button className="w-fit px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-green-600 hover:text-green-700 transition font-bold">

      مشاهده همه مقالات

    </button>

  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

    {featuredArticles.map((article) => (

      <Link
        key={article.slug}
        href={`/articles/${article.slug}`}
        className="group"
      >

        <article className="h-full overflow-hidden rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-green-600 transition-all duration-500 hover:-translate-y-2">

          {/* IMAGE */}
          <div className="relative h-60 sm:h-72 overflow-hidden">

            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* CATEGORY */}
            <div className="absolute top-5 right-5">

              <span className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md text-green-700 text-xs sm:text-sm px-4 py-2 rounded-full font-bold">

                {article.category}

              </span>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 flex flex-col h-[260px]">

            <h3 className="text-2xl sm:text-3xl font-black leading-tight mb-5 group-hover:text-green-700 transition line-clamp-2">

              {article.title}

            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-8 flex-1 line-clamp-3">

              {article.desc}

            </p>

            {/* FOOTER */}
            <div className="flex items-center justify-between mt-8">

              <span className="text-green-700 font-bold">

                مطالعه مقاله

              </span>

              <div className="w-11 h-11 rounded-2xl bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition">

                ←

              </div>

            </div>

          </div>

        </article>

      </Link>

    ))}

  </div>

</section>
```


    </main>
  )
}