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
            :name="mobileDevice ? 'change-side': 'change-move'"
            :style="{ 'transitionDelay' : '.5s'}">
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
            id="form"
            :is="componentFile"
            :key="componentKey"
            :current="current"
            :fields="getFormFields(current, $route.params.step)"
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
                @click="reset"
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
import { Constants } from '@/assets/utilities/constants';

export default {
  name: 'BudgetFunnel',

  components: {
    BaseProgress: () => import(/* webpackChunkName: "BaseProgress" */ '@/components/base-progress/BaseProgress'),
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    BudgetFunnelStep2: () => import(/* webpackChunkName: "BudgetFunnelStep1" */ './BudgetFunnelStep2'),
    NavigationRouterLink: () => import(/* webpackChunkName: "NavigationRouterLink" */ '@/components/navigation-router-link/NavigationRouterLink'),
  },

  computed: {
    ...mapGetters('categories', [
      'getSelectedCategories',
      'getActiveState',
      'getAllComplteted',
      'getFormFields',
      'getCompletedState',
    ]),

    // check device size
    mobileDevice() {
      return window.matchMedia('(max-width: 600px)').matches;
    },

    // set progress value
    // for UI circle
    progressValue() {
      const currentFunnelSteps = this.getSelectedCategories(this.current).funnel.length;
      const count = this.getSelectedCategories(this.current).funnel.filter((node) => node.completed === true).length;
      return Math.floor((parseFloat(count) * 100) / parseFloat(currentFunnelSteps));
    },

    // set dynamic component URL
    // to load differents form
    componentFile() {
      return this.importComponent(this.$route.params.step);
    },

    // get completed items
    completedStep() {
      return this.getActiveState(this.current)[0].completed;
    },

    // disable/enable next button
    activeNextState() {
      return this.$store.state.categories.funnel.next;
    },

    // display prev button
    activePrevState() {
      return this.getSelectedCategories(this.current).funnel.indexOf(this.getActiveState(this.current)[0]) !== 0;
    },

    // get transition
    // component key
    componentKey() {
      return this.getAllComplteted(this.current)
        ? `${this.getSelectedCategories(this.current).data.slug}_${Constants.FUNNEL_COMPLETED}`
        : `${this.getSelectedCategories(this.current).data.slug}_${this.getActiveState(this.current)[0].component}`;
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

    // set new active
    // state for current step
    setActiveState(dir) {
      this.changeActiveState({
        category: this.current,
        step: this.$route.params.step,
        direction: dir,
      });
    },

    // set complete
    // step on validate form
    setCompleteState() {
      // add form fields values
      this.addFormValue({
        category: this.current,
        step: this.$route.params.step,
        fields: this.validateForm,
      });

      // change completed state in related category and step
      this.changeCompletedState({
        category: this.current,
        step: this.$route.params.step,
      });
    },

    // load dynamic component
    // whith URL parameters
    importComponent(path) {
      return () => import(`./BudgetFunnel${path}.vue`);
    },

    // set next step
    // on valdiate emit
    setNextState(params) {
      this.nextAction({ status: params.valid });
    },

    // get fields values
    modelChange(value) {
      this.validateForm = value;
    },

    // reset form
    reset() {
      this.repeatAction({ category: this.current });
    },

    // navigate forward
    // and back between forms
    navigate() {
      this.$router.push(
        {
          name: 'budget',
          params: {
              category: this.current,
              step: this.getAllComplteted(this.current)
                    ? Constants.FUNNEL_COMPLETED
                    : this.getActiveState(this.current)[0].component,
            },
        },
      );
    },
  },

  props: {
    current: {
      type: String,
    },
  },

  watch: {
    // watch to
    // change path route
    componentKey() {
      this.navigate();
    },
  },
};
</script>

<style lang='scss' scoped src= './BudgetFunnel.scss'></style>
