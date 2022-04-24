<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  Name: "Paragraph",

  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  display:inline-block;
  line-height: 19px;
  margin: 2px;
  font-size: 16px;
  color: #080808;
}
</style>
