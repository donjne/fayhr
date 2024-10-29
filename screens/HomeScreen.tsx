import Image from 'next/image'
import Link from 'next/link'

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 p-6 flex flex-col justify-between text-white">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="grid grid-cols-3 gap-3 aspect-[3/2]">
          <div className="col-span-1 row-span-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/Man in red shirt.png"
                alt="Man in red shirt"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/Woman in yellow and red patterned shirt.png"
                alt="Woman in yellow and red patterned shirt"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/Older woman hugging a child.png"
                alt="Older woman hugging a child"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome to Fayhr</h1>
          <p className="text-lg">
            Join the community of like minded people and fund together
          </p>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto space-y-4">
        <button className="w-full bg-white text-sky-600 py-3 px-4 rounded-full font-semibold text-lg hover:bg-sky-100 transition-colors">
          Join now
        </button>
        <p className="text-center">
          Already a member?{' '}
          <Link href="/login" className="underline font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}