<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Container
    fill-color="space-surface-item"
    :height="52"
    :padding="[0, 16]"
  >
    <Flex
      align-x="center"
    >
      <Text
        token="body-medium-400"
        color="space-surface-secondary"
        :text="title"
      />
    </Flex>
  </Container>
</template>

<style scoped></style>