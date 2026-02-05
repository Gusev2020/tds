<template>
  <Container
  :padding="16">
    <Container
      :padding="16"
      fill-color="black"
      :stroke-width="4"
      :active="isActive"
      reaction
    >
      <Text
        text="Title"
        token="title-large-500"
        color="black-primary"
        />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus."
        token="body-large-400"
        color="black-secondary"
      />
    </Container>  
    <br>
    <Container
      :padding="16"
      fill-color="black-surface"
      :stroke-width="4"
    >
      <Text
        text="Title"
        token="title-large-500"
        color="black-surface-primary"
        />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus."
        token="body-large-400"
        color="black-surface-secondary"
      />
    </Container>  
    <br>
    <Container
      :padding="16"
      fill-color="black-surface-item"
      :stroke-width="4"
    >
      <Text
        text="Title"
        token="title-large-500"
        color="black-surface-item-primary"
        />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, temporibus."
        token="body-large-400"
        color="black-surface-item-secondary"
      />
    </Container>  
  </Container>
  <br>

 
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
    width="hug"
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
    width="hug"
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
    width="hug"
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