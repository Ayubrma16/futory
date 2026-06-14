import { categories } from '@/data/categories'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import Image from 'next/image'
import { quotes } from '@/data/quotes'
import {
  getArticles,
  getFeaturedArticles
} from '@/lib/articles'
import {
  toPersianNumber,
  toPersianDate,
} from '@/lib/persian'
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

  const randomQuote =
  quotes[Math.floor(Math.random() * quotes.length)]
  const latestArticles = getArticles()
  .filter(article => !article.featured)
  .slice(0, 6)

  const heroArticle = latestArticles[0]

  const sideArticles = latestArticles.slice(1, 6)

const featuredArticles =
  getFeaturedArticles().slice(0, 6)
const sliderArticles =
  getFeaturedArticles().slice(0, 5)
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">

{/* HERO */}

<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

    {/* HERO SLIDER */}
    <div className="lg:col-span-2">

      <HeroSlider articles={latestArticles.slice(0, 3)} />

    </div>

{/* FOOTBALL QUOTE */}
<div className="h-full bg-gradient-to-br from-green-700 to-green-500 rounded-[32px] p-8 text-white flex flex-col">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-xl lg:text-2xl font-black">
      سخن بزرگان فوتبال
    </h2>

    <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
      LEGENDS
    </span>

  </div>

  <div className="bg-white/10 backdrop-blur rounded-3xl p-8 flex-1 flex flex-col justify-center">

    <p className="text-lg lg:text-xl leading-9 lg:leading-10 font-medium">
      «{randomQuote.text}»
    </p>

    <div className="mt-8 text-2xl font-black">
      {randomQuote.author}
    </div>

  </div>

</div>

  </div>

</section>

{/* CATEGORIES */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="flex items-center justify-between mb-10">

    <h2 className="text-3xl font-black">
      دسته‌بندی مقالات
    </h2>

    <span className="text-sm text-zinc-500">
      همه موضوعات فوتبالی
    </span>

  </div>

  {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {categories.map((cat) => (

      <Link
        key={cat.slug}
        href={`/articles/category/${cat.slug}`}
      >

        <div className={`group relative overflow-hidden rounded-3xl p-6 text-white bg-gradient-to-br ${cat.color} hover:scale-[1.03] transition` }>

          {/* glow effect */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

          <div className="relative z-10">

            <h3 className="font-black text-lg mb-2">
              {cat.title}
            </h3>

            <p className="text-sm opacity-80">
              مشاهده مقالات
            </p>

          </div>

        </div>

      </Link>

    ))}

  </div>

</section>

      {/* LATEST ARTICLES */}
<section className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between mb-16">

      <div>

        <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl lg:text-5xl font-black">
          آخرین مقالات
        </h2>

        <p className="text-zinc-500 mt-4 text-lg">
          جدیدترین داستان‌ها و تحلیل‌های فوتبالی Futory
        </p>

      </div>

    </div>

    <div className="grid lg:grid-cols-3 gap-8 items-start">

      {/* Hero Article */}
      <div className="lg:col-span-2">

        <Link href={`/articles/${heroArticle.slug}`}>

          <div className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[40px] overflow-hidden hover:border-green-600 transition">

            <div className="relative h-[240px] sm:h-[320px] lg:h-[420px]">

              <Image
                src={heroArticle.image}
                alt={heroArticle.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-10">

              <div className="text-sm text-zinc-500 mb-4">
                {heroArticle.category}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-6 group-hover:text-green-700 transition">
                {heroArticle.title}
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 leading-9 text-lg">
                {heroArticle.desc}
              </p>

            </div>

          </div>

        </Link>

      </div>

      {/* Side Articles */}
      <div className="space-y-6">

        {latestArticles.slice(1, 5).map((article) => (

          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
          >

            <div className="group bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-green-600 transition cursor-pointer">

              <div className="flex gap-5">

                <Image
                  src={article.image}
                  alt={article.title}
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-2xl object-cover"
                />

                <div>

                  <div className="text-sm text-zinc-500 mb-3">
                    {article.category}
                  </div>

                  <h3 className="font-black text-lg leading-8 group-hover:text-green-700 transition">
                    {article.title}
                  </h3>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* TIMELINE */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="text-center mb-20">

          <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl lg:text-5xl font-black">
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

{/* TRENDING SECTION */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-black">
      🔥 داغ‌ترین مطالب
    </h2>

    <span className="text-sm text-zinc-500">
      اسکرول کنید →
    </span>

  </div>

  {/* SCROLL CONTAINER */}
  <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">

    {trending.map((item, index) => (

      <div
        key={index}
        className="min-w-[300px] snap-start group"
      >

        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-green-600 transition h-full">

          {/* NUMBER */}
          <div className="text-green-600 font-black text-sm mb-4">
            #{index + 1}
          </div>

          {/* TITLE */}
          <h3 className="font-bold text-lg leading-8 group-hover:text-green-600 transition">
            {item}
          </h3>

          {/* FAKE TAGS */}
          <div className="mt-4 flex gap-2 flex-wrap">

            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
              فوتبال
            </span>

            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
              تحلیل
            </span>

          </div>

        </div>

      </div>

    ))}

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

      <h2 className="text-3xl sm:text-2xl sm:text-3xl lg:text-4xl lg:text-3xl sm:text-2xl sm:text-3xl lg:text-4xl lg:text-5xl font-black mt-3 text-zinc-900 dark:text-white leading-tight">

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



    </main>
  )
}