<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue';
import type { FillColorToken, OutlineColorToken, ReactionColorToken } from '~/sdk/types/types/ColorToken';
import type { TCssTulip } from '~/sdk/types/types/Tulip';
import { getCssTulipRule, getOpacityPercent, getOverflow, getPercent, getPx } from '~/sdk/utils/css';

const props = defineProps({
  fillColor: {
    type: String as PropType<FillColorToken>,
    default: undefined
  },
  strokeColor: {
    type: String as PropType<OutlineColorToken>,
    default: undefined
  },
  strokeWidth: {
    type: Number,
    default: undefined
  },
  opacity: {
    type: Number,
    default: 100
  },
  padding: {
    type: [Number, Array] as PropType<number | TCssTulip>,
    default: 0
  },
  borderRadius: {
    type: [Number, Array] as PropType<number | TCssTulip>,
    default: 0
  },
  rounded: {
    type: Boolean,
    default: false
  },
  reaction: {
    type: Boolean,
    default: false
  },
  reactionColor: {
    type: String as PropType<ReactionColorToken>,
    default: undefined
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  noselect: {
    type: Boolean,
    default: false
  },
  overflow: {
    type: Boolean,
    default: false
  }
})

const containerClass = computed(() => {
  return [
    props.active && `active`,
    props.reaction && `reaction`,
    props.noselect && `noselect`,
    props.disabled && `disabled`
  ].filter(Boolean) as string[]
})
const containerStyle = computed<CSSProperties>(() => {
  const padding = getCssTulipRule(props.padding)

  const borderRadius = props.rounded ? '9999px' : getCssTulipRule(props.borderRadius)

  const opacity = getPercent(getOpacityPercent(props.opacity))

  const overflow = props.reaction
    ? 'hidden'
    : getOverflow(props.overflow)

  const bg = props.fillColor ? {
    '--bg-idle': `var(--tds-${props.fillColor})`,
  } : {
    '--bg-idle': `var(--tds-transparent)`,
  }

  const bc = props.strokeColor ? {
    '--bc-idle': `var(--tds-${props.strokeColor})`,
  } : (props.strokeWidth && props.fillColor ? {
    '--bc-idle': `var(--tds-${props.fillColor}-outline)`,
  } : {
    '--bc-idle': `var(--tds-transparent)`,
  })

  const reactionColor = props.reaction ? (props.reactionColor ?
    {
      '--bg-hover': `var(--tds-${props.reactionColor}-hover)`,
      '--bg-press': `var(--tds-${props.reactionColor}-press)`,
      '--bg-active': `var(--tds-${props.reactionColor}-active)`,
    } : {
      '--bg-hover': `var(--tds-${props.fillColor}-hover)`,
      '--bg-press': `var(--tds-${props.fillColor}-press)`,
      '--bg-active': `var(--tds-${props.fillColor}-active)`,
    }
  ) : undefined


  const borderWidth = props.strokeWidth && (props.strokeColor || props.fillColor)
    ? getPx(props.strokeWidth)
    : undefined

  const borderStyle = props.strokeWidth && (props.strokeColor || props.fillColor)
    ? 'solid'
    : undefined

  return {
    padding,
    borderRadius,
    opacity,
    borderWidth,
    borderStyle,
    overflow,
    ...reactionColor,
    ...bg,
    ...bc
  }
})
</script>

<template>
  <div class="container" :class="containerClass" :style="containerStyle">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  transition: transitions.$opacity, transitions.$border-color;
  background-color: var(--bg-idle);
  border-color: var(--bc-idle);

  &.reaction {
    z-index: 0;
    cursor: pointer;

    &::before {
      content: '';
      transition: transitions.$background-color;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }


  @media (hover: hover) and (pointer: fine) {
    &.reaction:hover::before {
      background-color: var(--bg-hover);
    }
  }

  &.reaction:active::before {
    background-color: var(--bg-press);
  }

  &.reaction.active::before {
    background-color: var(--bg-active);
  }
}
</style>