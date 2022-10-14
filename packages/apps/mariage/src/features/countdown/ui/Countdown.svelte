<script lang='ts'>
  import { init } from '../adapters/nanostores'
  import TimeBlock from './child/TimeBlock.svelte'
  
  export let finalTime: Date

  const getNow = () => new Date()

  const loop = (callback: (startTime: Date) => void) => {
    callback(getNow())
    setTimeout(() => loop(callback), 1000)
  }

  $: countdown = init(loop, new Date(finalTime))
</script>

<p class="flex flex-wrap justify-around">
  {#if $countdown}
    <TimeBlock labelTime={$countdown.days} description='Jours' />
    <TimeBlock labelTime={$countdown.hours} description='Heures' />
    <TimeBlock labelTime={$countdown.minutes} description='Minutes' />
    <TimeBlock labelTime={$countdown.seconds} description='Secondes' />
  {/if}
</p>