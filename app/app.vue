<template>
  <Container
    :padding="16"
    fill-color="brand"
    :active="isActive"
    reaction
  >
    <Text
      text="Title"
      token="title-large-500"
      color="brand-primary"
      />
    <Text
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus."
      token="body-large-400"
      color="brand-secondary"
    />
  </Container>  
  <Container
    :padding="16"
    fill-color="brand"
    reaction
  >
    <Text
      text="Title"
      token="title-large-500"
      color="brand-primary"
      />
    <Text
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus."
      token="body-large-400"
      color="brand-secondary"
    />
  </Container>

  <br>

  <Container 
    fill-color="action"
    :padding="[8, 12]"
    :border-radius="8"
    :style="{
      width: 'fit-content'
    }"
    reaction
    overflow
  >
    <Text
      text="Press me"
      token="label-medium-500"
      color="action-primary"
      align="center"
      noselect
    />
  </Container>  
  <Container
    fill-color="black"
    :padding="[8, 12]"
    :border-radius="8"
    :style="{
      width: 'fit-content'
    }"
    reaction
    overflow
  >
    <Text
      text="Press me"
      token="label-medium-500"
      color="action-primary"
      align="center"
      noselect
    />
  </Container>  
  <Container
    fill-color="brand"
    :padding="[8, 12]"
    :border-radius="8"
    :style="{
      width: 'fit-content'
    }"
    reaction
    overflow
  >
    <Text
      text="Press me"
      token="label-medium-500"
      color="action-primary"
      align="center"
      noselect
    />
  </Container>
</template>


<script setup lang="ts">
const isActive = ref(true)
</script>