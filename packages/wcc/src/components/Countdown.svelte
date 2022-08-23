<script lang='ts'>
  import { init } from 'countdown/src/adapters/nanostores'
  export let finalTime: Date

  const getNow = () => new Date()

  const loop = (callback: (startTime: Date) => void) => {
    callback(getNow())
    setTimeout(() => loop(callback), 1000)
  }

  $: countdown = init(loop, new Date(finalTime))
</script>

<p>
  {$countdown.days}
  {$countdown.hours}
  {$countdown.minutes}
  {$countdown.seconds}
</p>