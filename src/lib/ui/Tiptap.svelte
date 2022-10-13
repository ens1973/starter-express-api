<script>
  import { onMount, onDestroy } from 'svelte'
  import { Editor } from '@tiptap/core'
  import { mergeAttributes } from '@tiptap/core'
  import BaseHeading from '@tiptap/extension-heading'
  import StarterKit from '@tiptap/starter-kit'
  // DOCS: https://tiptap.dev/api/extensions/starter-kit
  // ICONS: https://remixicon.com/

  import Button from "./Button.svelte";

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const classes = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  }

  const Heading = BaseHeading.configure({ levels: [1, 2, 3, 4, 5, 6] }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const hasLevel = this.options.levels.includes(node.attrs.level)
      const level = hasLevel
        ? node.attrs.level
        : this.options.levels[0]

      return [`h${level}`, mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`
      }), 0]
    },
  })

  let element;
  let editor;
  export let key;
  export let content = '';


  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit.configure({
          // heading: Heading,
          blockquote: {
            HTMLAttributes: {
              class: 'italic',
            },
          },
        }),
        Heading
      ],
      content: content,
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor
      },
    })
  })
  
  let editorHTML = '';
  $: if (editor && editor.getHTML() != editorHTML){
    editorHTML = editor.getHTML();
    
    dispatch('change',{
      key,
      value: editorHTML
    });
    // console.log(editorHTML);
  }

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

{#if editor}
<div class="grid grid-cols-12">
  <!-- <button
    on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
    class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button> -->

  <!-- <Button small 
    secondary={editor.isActive('heading', { level: 1 })} 
    outline={!editor.isActive('heading', { level: 1 })} 
    on:click={ async () => await getHTML(editor.getHTML(), key)}
  >
    <i class="ri-save-3-line"></i>
  </Button> -->
  <Button small 
    secondary={editor.isActive('paragraph')} 
    outline={!editor.isActive('paragraph')} 
    on:click={() => editor.chain().focus().setParagraph().run()} 
    >
    <i class="ri-paragraph"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('blockquote')} 
    outline={!editor.isActive('blockquote')} 
    on:click={() => editor.chain().focus().toggleBlockquote().run()} 
    >
    <i class="ri-double-quotes-l"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('bulletlist')} 
    outline={!editor.isActive('bulletlist')} 
    on:click={() => editor.chain().focus().toggleBulletList().run()} 
    >
    <i class="ri-list-unordered"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('orderedlist')} 
    outline={!editor.isActive('orderedlist')} 
    on:click={() => editor.chain().focus().toggleOrderedList().run()} 
    >
    <i class="ri-list-ordered"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('codeblock')} 
    outline={!editor.isActive('codeblock')} 
    on:click={() => editor.chain().focus().toggleCodeBlock().run()} 
    >
    <i class="ri-code-view"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('bold')} 
    outline={!editor.isActive('bold')} 
    on:click={() => editor.chain().focus().toggleBold().run()} 
    >
    <i class="ri-bold"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('code')} 
    outline={!editor.isActive('code')} 
    on:click={() => editor.chain().focus().toggleCode().run()} 
    >
    <i class="ri-code-line"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('italic')} 
    outline={!editor.isActive('italic')} 
    on:click={() => editor.chain().focus().toggleItalic().run()} 
    >
    <i class="ri-italic"></i>
  </Button>
  <Button small 
    secondary={editor.isActive('strike')} 
    outline={!editor.isActive('strike')} 
    on:click={() => editor.chain().focus().toggleStrike().run()} 
    >
    <i class="ri-strikethrough"></i>
  </Button>
  <div class="col-span-12">
    <div class="grid grid-cols-12">
      <Button small 
        secondary={editor.isActive('heading', { level: 1 })} 
        outline={!editor.isActive('heading', { level: 1 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <i class="ri-h-1"></i>
      </Button>
      <Button small 
        secondary={editor.isActive('heading', { level: 2 })} 
        outline={!editor.isActive('heading', { level: 2 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <i class="ri-h-2"></i>
      </Button>
      <Button small 
        secondary={editor.isActive('heading', { level: 3 })} 
        outline={!editor.isActive('heading', { level: 3 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <i class="ri-h-3"></i>
      </Button>
      <Button small 
        secondary={editor.isActive('heading', { level: 4 })} 
        outline={!editor.isActive('heading', { level: 4 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <i class="ri-h-4"></i>
      </Button>
      <Button small 
        secondary={editor.isActive('heading', { level: 5 })} 
        outline={!editor.isActive('heading', { level: 5 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        <i class="ri-h-5"></i>
      </Button>
      <Button small 
        secondary={editor.isActive('heading', { level: 6 })} 
        outline={!editor.isActive('heading', { level: 6 })} 
        on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
      >
        <i class="ri-h-6"></i>
      </Button>
    </div>
  </div>
  <!-- <div class="col-span-12">
    <div class="grid grid-cols-12">
    </div>
  </div> -->
  </div>
{/if}

<div class="border rounded-md p-2" bind:this={element} />


<style>
</style>