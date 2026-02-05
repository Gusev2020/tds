<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue';
import { getGrow, getOpacityPercent, getOverflow, getPx, getShrink } from '~/sdk/utils/css';

type TFlexDirection = 'row' | 'column';
type TFlexAlignment = 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'baseline' | 'initial'
type TFlexSize = 'initial' | 'fill' | 'hug' | number

const props = defineProps({
  direction: {
    type: String as PropType<TFlexDirection>,
    default: 'row'
  },
  gap: {
    type: Number,
    default: 0
  },
  alignX: {
    type: String as PropType<TFlexAlignment>,
    default: 'initial'
  },
  alignY: {
    type: String as PropType<TFlexAlignment>,
    default: 'initial'
  },
  reverse: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: Boolean,
    default: false
  },
  grow: {
    type: Boolean,
    default: false
  },
  shrink: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number] as PropType<TFlexSize>,
    default: 'initial'
  },
  height: {
    type: [String, Number] as PropType<TFlexSize>,
    default: 'fill'
  },
  overflow: {
    type: Boolean,
    default: false
  },
  opacity: {
    type: Number,
    default: undefined
  },
})


const flexStyle = computed<CSSProperties>(() => {
  let width = undefined

  if (props.width === 'fill') {
    width = '100%'
  } else if (props.width === 'hug') {
    width = 'fit-content'
  } else if (props.width === 'initial') {
    width = undefined
  } else if (typeof props.width === 'number') {
    width = getPx(props.width)
  }

  let height = undefined

  if (props.height === 'fill') {
    height = '100%'
  } else if (props.height === 'hug') {
    height = 'fit-content'
  } else if (props.height === 'initial') {
    height = undefined
  } else if (typeof props.height === 'number') {
    height = getPx(props.height)
  }


  const display = 'flex'
  const flexReverseSuffix = props.reverse ? '-reverse' : ''
  const flexDirection = `${props.direction}${flexReverseSuffix}` as const

  let alignItems = undefined
  let justifyContent = undefined

  if (props.direction === 'row') {
    alignItems = convertAlignmentToCssValue(props.alignY, 'center')
    justifyContent = convertAlignmentToCssValue(props.alignX, props.reverse ? 'flex-end' : 'flex-start')
  }
  if (props.direction === 'column') {
    alignItems = convertAlignmentToCssValue(props.alignX, 'stretch')
    justifyContent = convertAlignmentToCssValue(props.alignY, props.reverse ? 'flex-end' : 'flex-start')
  }

  const flexWrap = props.wrap ? 'wrap' : undefined

  const flexGrow = getGrow(props.grow)
  const flexShrink = getShrink(props.shrink)

  const gap = getPx(props.gap)
  const overflow = getOverflow(props.overflow)
  const opacity = getOpacityPercent(props.opacity)

  return {
    width,
    height,
    display,
    flexDirection,
    flexWrap,
    alignItems,
    justifyContent,
    gap,
    flexGrow,
    flexShrink,
    overflow,
    opacity
  }
})


function convertAlignmentToCssValue(value: TFlexAlignment, initialValue: string): string {
  if (value === 'initial') {
    return initialValue
  }

  if (['start', 'end'].includes(value)) {
    return `flex-${value}`
  } else if (['around', 'between', 'evenly'].includes(value)) {
    return `space-${value}`
  }

  return value
}


</script>

<template>
  <div class="flex" :style="flexStyle">
    <slot />
  </div>
</template>

<style scoped></style>