import Index from './Index.svelte';

let index = new Index({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default index;
