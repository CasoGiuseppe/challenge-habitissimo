<template>
  <section class="grid grid--isFluid uikit">
    <h2>Buttons</h2>
    <ul class="
      grid__row
      grid__row--isWrap
      grid__row--start">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <BaseButton>
          <template>button</template>
        </BaseButton>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>secondary</span>
        <BaseButton isSecondary>
          <template>button</template>
        </BaseButton>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>light</span>
        <BaseButton isLight>
          <template>button</template>
        </BaseButton>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>disabled</span>
        <BaseButton isDisabled>
          <template>button</template>
        </BaseButton>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>full width</span>
        <BaseButton isFullsize>
          <template>button</template>
        </BaseButton>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>min width</span>
        <BaseButton hasMinWidth="130px">
          <template>button</template>
        </BaseButton>
      </li>
    </ul>

    <h2>Icons</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>xsmall</span>
        <BaseIcon
          :name="svg.user"
          size="xsmall"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>small</span>
        <BaseIcon
          :name="svg.user"
          size="small"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>normal</span>
        <BaseIcon
          :name="svg.user"
          size="normal"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>medium</span>
        <BaseIcon
          :name="svg.user"
          size="medium"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>large</span>
        <BaseIcon
          :name="svg.user"
          size="large"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>xlarge</span>
        <BaseIcon
          :name="svg.user"
          size="xlarge"
          color="primary"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>xxlarge</span>
        <BaseIcon
          :name="svg.user"
          size="xxlarge"
          color="primary"/>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>

    <h2>Input</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <BaseInput
          id="test"
          placeholder="placeholder"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>required</span>
        <BaseInput
          id="test"
          placeholder="placeholder"
          :isRequired="{
            state: true,
            label: 'required'
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>valid</span>
        <BaseInput
          id="test"
          placeholder="placeholder"
          :isValidate="{
            state: true,
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>invalid</span>
        <BaseInput
          id="test"
          placeholder="placeholder"
          :isValidate="{
            state: false,
          }"/>
      </li>
    </ul>

    <h2>Select</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>selected option</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>required</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"
          :isRequired="{
            state: true,
            label: 'required'
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>valid</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"
          :isValidate="{
            state: true,
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>invalid</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"
          :isValidate="{
            state: false,
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>disabled</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"
          :isDisabled="true"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>loading</span>
        <BaseSelect
          id="time"
          placeholder="placeholder"
          value="2"
          :options="[
            { id: 1, label: 'option 1', value: '1' },
            { id: 2, label: 'option 2', value: '2' },
            { id: 3, label: 'option 3', value: '3' }
          ]"
          :isLoading="true"/>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>

    <h2>Textarea</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>rows 10</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"
          :rows="10"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>default value</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"
          value="test"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>required</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"
          :isRequired="{
            state: true,
            label: 'required'
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>valid</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"
          :isValidate="{
            state: true,
          }"/>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>invalid</span>
        <BaseTextarea
          id="test"
          placeholder="placeholder"
          :isValidate="{
            state: false,
          }"/>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>

    <h2>Progress</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <BaseProgress
          :circle="{
            width: 120,
            height: 120,
            stroke: '#138BBF',
            strokeWidth: 20,
            color: '#138BBF'
          }"
          :value="65"/>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>

    <h2>Badge</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <Badge
          id="id">
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>light</span>
        <Badge
          id="id"
          isLight>
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>with icon</span>
        <Badge
          id="id"
          isLight
          :hasIcon="svg.user">
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>with arrow</span>
        <Badge
          id="id"
          :arrow="{
            direction: 'left'
          }">
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>with image</span>
        <Badge id="id">
          <template #image>
            <BaseIcon
              :name="svg.user"
              size="medium"
              color="light"/>
          </template>
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>loading</span>
        <Badge
          id="id"
          isLoading>
          <template #title> title </template>
          <template #subtitle> subtitle </template>
          <template #date> date </template>
          <template #message> message </template>
        </Badge>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>

    <h2>Banner</h2>
    <ul class="
      grid__row
      grid__row--isWrap">
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>simple</span>
        <Banner>
          <template #title> title </template>
          <template #description> description </template>
        </Banner>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>with icon</span>
        <Banner
          :hasIcon="svg.user">
          <template #title> title </template>
          <template #description> description </template>
        </Banner>
      </li>
      <li class="
        grid__col-xs-12
        grid__col-sm-3">
        <span>secondary</span>
        <Banner
          :hasIcon="svg.user"
          isSecondary>
          <template #title> title </template>
          <template #description> description </template>
        </Banner>
      </li>
      <li class="grid__col-xs-12 grid__col-sm-3"></li>
    </ul>
  </section>
</template>

<script>
import icons from '@/assets/utilities/icons';

export default {
  name: 'Uikit',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/base-input/BaseInput'),
    BaseSelect: () => import(/* webpackChunkName: "BaseSelect" */ '@/components/base-select/BaseSelect'),
    BaseTextarea: () => import(/* webpackChunkName: "BaseTextArea" */ '@/components/base-textarea/BaseTextarea'),
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
    Banner: () => import(/* webpackChunkName: "Banner" */ '@/components/banner/Banner'),
    BaseProgress: () => import(/* webpackChunkName: "BaseProgress" */ '@/components/base-progress/BaseProgress'),
  },

  data() {
    return {
      svg: icons,
    };
  },

};
</script>

<style lang='scss' scoped src= './Uikit.scss'></style>
+
