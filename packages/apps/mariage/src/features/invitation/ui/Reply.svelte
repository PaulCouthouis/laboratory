<script lang='ts'>
  import type { ReplyCard, ReplyCardMember } from "../domain/values"

  export let members: string[]
  
  let message = ''
  let cardMembers = members.map<ReplyCardMember>(member => ({
    diet: '',
    name: member,
    status: 'wait'
  }))

  const handleSubmit = () => {
    const body: ReplyCard = {
      members: cardMembers,
      message
    }
    console.log(body)

    fetch('/api/reply', {
      body: JSON.stringify(body),
      method: 'POST'
    })
  }
</script>

<form class="mt-4" on:submit|preventDefault={handleSubmit}>
  {#each cardMembers as card }
    <fieldset class="my-4">
      <legend class="text-center">- {card.name} -</legend>
      <div class="flex justify-between my-2">
        <label>
          <input type="radio" bind:group={card.status} name={card.name} value={'accept'}  /> Présent
        </label>
        <label>
          <input type="radio" bind:group={card.status} name={card.name} value={'decline'} /> Absent
        </label>
        <label>
          <input type="radio" bind:group={card.status} name={card.name} value={'wait'} /> Indécis
        </label>
      </div>
      <input
        class="border p-2 w-full text-gray-700"
        placeholder="Régime alimentaire* (facultatif)"
        type="text"
        bind:value={card.diet}
      />
    </fieldset>
  {/each}
  <textarea
    class="border h-28 p-2 w-full text-gray-700"
    placeholder="Message (facultatif)"
    bind:value={message}
  />
  <div class="text-right mt-4">
    <button class="text-right bg-primary rounded p-4" type="submit">
      Envoyer le coupon-réponse
    </button>
  </div>
</form>