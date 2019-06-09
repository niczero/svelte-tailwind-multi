<script>
export let name;

let count = 0;
function handleClick () {
  count += 1;
}

let cats = [
  { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
  { id: 'z_AbfPXTKms', name: 'Maru' },
  { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
];
</script>

<style>
h1 {
  color: purple;
}
</style>

<h1>Hello {name}!</h1>
<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<ul>
  {#each cats as { id, name }, i}
    <li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
      {i + 1}: {name}
    </a></li>
  {/each}
</ul>
