<template>
  <aside class="base-progress">
    <transition
      mode="out-in"
      name="change-move">
        <span
          class="base-progress__value"
          :key="value">
          {{value > 100 ? 100 : value}}
        </span>
    </transition>
    <svg
      class="base-progress__ring"
      width="100%"
      height="100%">
      <circle
        class="base-progress__ring-circle"
        :stroke="circle.stroke"
        :stroke-width="circle.strokeWidth"
        fill="transparent"
        :r="(circle.width / 2) - 10"
        :cx="circle.width / 2"
        :cy="circle.height/ 2"
      />
    </svg>
  </aside>
</template>

<script>
export default {
  name: 'BaseProgress',

  data() {
    return {
      progressCircle: '',
      radius: 0,
      circumference: 0,
    };
  },

  props: {
    circle: {
      type: Object,
      default() {
        return {
          width: 200,
          height: 200,
          stroke: '#000',
          strokeWidth: 10,
        };
      },
    },

    value: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    value() {
      this.setProgress();
    },
  },

  methods: {
    setInitParams() {
      this.progressCircle = this.$el.querySelector('circle');
      this.radius = this.progressCircle.r.baseVal.value;
      this.circumference = this.radius * 2 * Math.PI;

      const { style } = this.$el;
      style.setProperty('--width', `${this.circle.width}px`);
      style.setProperty('--height', `${this.circle.height}px`);
      style.setProperty('--font-size', this.fontFix());
      style.setProperty('--strokeDasharray', `${this.circumference} ${this.circumference}`);

      this.setProgress();
    },

    setProgress() {
      const { style } = this.$el;
      const nextValue = this.value > 100 ? 100 : this.value;
      console.log(this.circumference - (nextValue / 100) * this.circumference);
      style.setProperty('--strokeDashoffset', this.circumference - (nextValue / 100) * this.circumference);
    },

    fontFix() {
      const fontFixEl = this.$el;
      const relFontsize = fontFixEl.offsetWidth * 0.3;
      return `${relFontsize}px`;
    },
  },

  mounted() {
    this.setInitParams();
  },
};
</script>

<style lang='scss' scoped src= './BaseProgress.scss'></style>
