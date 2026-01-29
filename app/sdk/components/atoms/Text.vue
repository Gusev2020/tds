<script setup lang="ts">
import type { PropType } from 'vue'
import { getOpacityPercent, getPercent } from '~/sdk/utils/css'


type TTextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type TTextAlign = 'left' | 'right' | 'center'
type TTextTransform = 'capitalize' | 'uppercase' | 'lowercase'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: 'body-medium-400'
  },
  as : {
    type: String as PropType<TTextTag>,
    default : 'p'
  },
  color: {
    type: String,
    default: 'space-primary'
  },
  opacity: {
    type: Number,
    default: 100
  },
  align: {
    type: String as PropType<TTextAlign>,
    default: 'left'
  },
  transform: {
    type: String as PropType<TTextTransform>,
    default: undefined
  },
  truncate: {
    type: Boolean,
    default: false,
  },
  noselect: {
    type: Boolean,
    default: false
  }
})

const textClass = computed(()=>{
  const classes: string[] = []

  const tokenParts = props.token.split('-')
  const tokenBase = `${tokenParts[0]}-${tokenParts[1]}`
  const tokenWeight = `fw-${tokenParts[2] ?? '400'}`

  classes.push(tokenBase)
  classes.push(tokenWeight)

  if(props.truncate) {
    classes.push('truncate')
  }
  if(props.noselect) {
    classes.push('noselect')
  }

  return classes
})

const textStyle = computed(()=> {
  const color = `var(--tds-${props.color})`
  const opacity = getPercent(getOpacityPercent(props.opacity))

  return {
    color,
    opacity,
    textAlign: props.align,
    textTransform: props.transform,
  }
})
</script>

<template>
    <component
      :is="as"
      class="text"
      :class="textClass"
      :style="textStyle"
    >
        {{ text }}
    </component>
</template>

<style lang="scss" scoped>
.text {
  font-family: 'Roboto', sans-serif;
}
</style>