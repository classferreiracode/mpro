<template>
    <div>
        <h1>Test</h1>
        <button class="rounded px-4 py-2 text-red-500" @click="showAlert">Hello
            world</button>
    </div>
</template>
<script setup>
const showAlert = () => {

    Toast.fire(
        '',
        'Hello Vue world!!!',
        'success'
    );
}
</script>
