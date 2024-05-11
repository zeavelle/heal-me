import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 justify-center items-center pt-5">
        <div className="flex flex-col gap-5 items-start max-w-[32rem] text-pretty">
          <p className="text-3xl font-semibold tracking-tight leading-snug">
            Langkah awal mengenali gejala gangguan kesehatan mental anda
          </p>
          <p className="text-muted max-w-[80%]">Bingung dengan apa yang anda alami saat ini? klik dibawah ini</p>
          <Link
            href="/"
            className="rounded-full text-primary bg-secondary hover:bg-secondary-darker transition-colors py-1 px-6 shadow-lg font-semibold"
          >
            Tes Sekarang
          </Link>
        </div>
        <div className="relative size-80">
          <Image src="/orang-depresi.webp" className="object-contain" fill />
        </div>
      </div>
      <div className="flex flex-col items-center my-14">
        <div className="text-center flex flex-col gap-3 mb-10">
          <p>Fitur</p>
          <p className="font-semibold text-2xl max-w-[35rem]">
            Apa saja yang diberikan Healme untuk solusi dibalik kesehatan mental anda
          </p>
        </div>
        <div className="flex items-center gap-10">
          <img src="/orang-sabar.webp" className="h-64 aspect-video object-cover" alt="orang-sabar" />
          <ul class="list-inside list-disc max-w-96 *:-indent-4 p-4">
            <li>Mengenal gejala dari apa yang anda rasakan</li>
            <li className="my-2">Berkonsultasi dengan para ahli psikolog</li>
            <li>Berbagi pengalaman dan menambah relasi dengan komunitas-komunitas yang ada</li>
          </ul>
        </div>
      </div>
    </>
  );
}
