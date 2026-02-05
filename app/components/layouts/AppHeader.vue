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
      align-x="between"
    >
      <Text
        :text="title"
      />
      <Container
        fill-color="action"
        :padding="[8, 12]"
        reaction
        rounded
        noselect
      >
        <Text
          text="Log in"
          color="action-primary"
        />
      </Container>
    </Flex>
  </Container>
</template>

<style scoped></style>