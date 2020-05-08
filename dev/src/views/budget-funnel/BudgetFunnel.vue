<template>
  <section class="budget-funnel">
    <aside class="budget-funnel__circle-progress">
      <!-- UI visual progress -->
      <BaseProgress
        :circle="{
          width: mobileDevice ? 90 : 120,
          height: mobileDevice ? 90 : 120,
          stroke: '#fff',
          strokeWidth: mobileDevice ? 10 : 20,
          color: '#fff'
        }"
        :value="progressValue"/>
      <span>{{$t(`message.form.progressmessage`)}}</span>
    </aside>
    <!-- ** -->

    <!-- UI visual form -->
    <form
      class="budget-funnel__user-fields"
      onsubmit="event.preventDefault();"
      novalidate>
      <header class="budget-funnel__header">
        <h2 class="budget-funnel__title">
          <transition
            mode="out-in"
            name="change-move">
            <span
              key="simple"
              v-if="!getAllComplteted(current)">
                {{$t(`message.form.title`)}}
            </span>
            <span
              key="complete"
              v-else>
              {{$t(`message.form.titlecomplete`, {category: this.current})}}
            </span>
          </transition>
        </h2>
        <p class="budget-funnel__description">
          {{$t(`message.form.description`)}}
        </p>
      </header>

      <!-- Dynamic component load -->
      <transition
        mode="out-in"
        name="change-side">
          <component
            :is="componentFile"
            :key="componentKey"
            :current="current"
            :fields="getFormFields(current)"
            @mounted="setNextState({ valid: completedStep })"
            @validate="setNextState"
            @changeModel="modelChange"
          />
      </transition>
      <!-- ** -->

      <!-- UI visual user action back/next -->
      <footer class="budget-funnel__user-actions">
        <span>
          <transition
            mode="out-in"
            name="change-fade">
              <BaseButton
                v-if="activePrevState && !getAllComplteted(current)"
                isLight
                @click="setActiveState('prev')">
                <template>
                  {{$t(`message.buttons.back`)}}
                </template>
              </BaseButton>
          </transition>
        </span>

        <span>
          <transition
            mode="out-in"
            name="change-move">
              <BaseButton
                key="next"
                v-if="!getAllComplteted(current)"
                isSimple
                :isDisabled="!activeNextState"
                @click="() => {
                  setCompleteState()
                  setActiveState('next')
                }">
                <template>
                  {{$t(`message.buttons.next`)}}
                </template>
              </BaseButton>

              <BaseButton
                key="repeat"
                v-else
                isSimple
                @click="() => { repeat() }"
              >
                <template>
                  {{$t(`message.buttons.repeat`)}}
                </template>
              </BaseButton>
          </transition>
        </span>
      </footer>
      <!-- ** -->
    </form>
    <!-- ** -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Constants } from '@/constants.js';

export default {
  name: 'BudgetFunnel',

  components: {
    BaseProgress: () => import(/* webpackChunkName: "BaseProgress" */ '@/components/base-progress/BaseProgress'),
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    BudgetFunnelStep2: () => import(/* webpackChunkName: "BudgetFunnelStep1" */ './BudgetFunnelStep2'),
  },

  computed: {
    ...mapGetters('categories', [
      'getSelectedCategories',
      'getActiveState',
      'getAllComplteted',
      'getFormFields',
      'getCompletedState',
    ]),

    mobileDevice() {
      return window.matchMedia('(max-width: 600px)').matches;
    },

    progressValue() {
      const currentFunnelSteps = this.getSelectedCategories(this.current).funnel.length;
      const count = this.getSelectedCategories(this.current).funnel.filter((node) => node.completed === true).length;
      return Math.floor((parseFloat(count) * 100) / parseFloat(currentFunnelSteps));
    },

    componentFile() {
      return this.importComponent(this.$route.params.step);
    },

    completedStep() {
      return this.getActiveState(this.current)[0].completed;
    },

    activeNextState() {
      return this.$store.state.categories.funnel.next;
    },

    activePrevState() {
      return this.getSelectedCategories(this.current).funnel.indexOf(this.getActiveState(this.current)[0]) !== 0;
    },

    componentKey() {
      return this.getAllComplteted(this.current)
        ? `${this.getSelectedCategories(this.current).data.slug}_${Constants.FUNNEL_COMPLETED}`
        : `${this.getSelectedCategories(this.current).data.slug}_${this.getActiveState(this.current)[0].component}`;
    },

    activeStep() {
      return this.$store.state.categories.list[this.current].funnel.filter((node) => node.component === this.$route.params.step)[0].active;
    },
  },

  data() {
    return {
      validateForm: [],
      temp: [],
    };
  },

  methods: {
    ...mapActions('categories', [
      'changeCompletedState',
      'changeActiveState',
      'nextAction',
      'repeatAction',
      'addFormValue',
    ]),

    setActiveState(dir) {
      // set new active state for current step
      this.changeActiveState({
        category: this.current,
        direction: dir,
      });
    },

    setCompleteState() {
      // add form fields values
      this.addFormValue({
        category: this.current,
        fields: this.validateForm,
      });

      // change completed state in related category and step
      this.changeCompletedState({
        category: this.current,
      });
    },

    // load dynamic component
    // whith URL parameters
    importComponent(path) {
      return () => import(`./BudgetFunnel${path}.vue`);
    },

    setNextState(params) {
      this.nextAction({ status: params.valid });
    },

    modelChange(value) {
      this.validateForm = value;
    },

    repeat() {
      localStorage.removeItem(Constants.LOCALSTORAGE);
      this.repeatAction({ category: this.current });
    },
  },

  props: {
    current: {
      type: String,
    },
  },

  watch: {
    // change path route
    componentKey() {
      this.$router.push(
        {
          name: 'budget',
          params: {
              category: this.current,
              step: this.getAllComplteted(this.current) ? Constants.FUNNEL_COMPLETED : this.getActiveState(this.current)[0].component,
            },
        },
      );
    },
  },
};
</script>

<style lang='scss' scoped src= './BudgetFunnel.scss'></style>
