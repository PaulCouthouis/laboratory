import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import src from './KDS-0001.png'

export const Card = () => {
  return (
    <article class="bg-white rounded-2xl p-2 w-[600px] h-[800px]">
      <div class="border border-black border-opacity-40 rounded-2xl h-full flex flex-col justify-between">
        <header class="p-2 flex justify-between">
          <p class="bg-primary flex justify-center items-center rounded-2xl text-sm text-white w-16">
            感動詞
          </p>
          <p class="text-xxs text-center">
            Illustration by <br />
            stampo.fun
          </p>
        </header>
        <div class="py-2 flex-1 flex flex-col items-center">
          <aside class="w-2/3 h-2/5 flex justify-center items-center border border-black border-opacity-40 rounded-2xl bg-neutral">
            <img
              class="max-w-full max-h-full"
              src={src}
              alt="Illustration de la carte はい"
            />
          </aside>
          <h1 class="text-6xl font-bold p-2">はい</h1>
          <p class="text-xl">ええ</p>
          <p class="bg-neutral border-y border-black border-opacity-40 w-full p-4 m-4 leading-10">
            はい est la version la plus fréquente. <br />
            Il existe aussi ええ qui doit être cependant suivi par une phrase.
          </p>
          <div class="flex-1 flex flex-col justify-center items-center">
            <p class="leading-[3rem]">
              山本：「田中さんですか？」田中：「はい」
            </p>
            <p class="leading-[3rem]">
              山本：「田中さんですか？」田中：「ええ、そうです」
            </p>
          </div>
        </div>
        <footer class="p-2 grid grid-cols-3 items-end">
          <p class="text-xs leading-none">KDS-0001</p>
          <p class="text-xl leading-none text-center">Oui</p>
        </footer>
      </div>
      <div class="relative">
        <div class="absolute bottom-0.5 right-0 px-1 text-4xl  text-primary">
          <i class="fa-solid fa-circle-play"></i>
        </div>
      </div>
    </article>
  )
}
