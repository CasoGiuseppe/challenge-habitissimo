<template>
  <section class="router-module">
    <div class="grid">
      <div class="
          grid__row
          grid__row--isWrap">
          <!-- UI user comments -->
          <div class="
            router-module__c-lasts-comments
            grid__col-xs-12">
            <DistributorContent
              isRTL
              isLight>
              <template #title>
                {{$t(`message.lastsComments.title`)}}
              </template>
              <template #description>
                {{$t(`message.lastsComments.description`)}}
              </template>
              <template
                v-if="comments[index]"
                #main>
                <li class="grid__col-xs-12">
                  <Badge
                    :id="comments[index].id"
                    isLight
                    :arrow= "{ direction: 'bottom' }">
                    <template #image>
                      <BaseIcon
                        :name="svg.user"
                        size="medium"
                        color="light"/>
                    </template>
                    <template #title>
                      {{comments[index].name}}
                    </template>
                    <template #subtitle>
                      {{comments[index].place}}
                    </template>
                    <template #date>
                      {{comments[index].date}}
                    </template>
                    <template #message>
                      {{comments[index].comment}}
                    </template>
                  </Badge>
                </li>
              </template>
            </DistributorContent>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Comments } from '@/services/http/Comments';
import icons from '@/assets/utilities/icons';

export default {
  name: 'RouterModuleBottom',

  components: {
    DistributorContent: () => import(/* webpackChunkName: "DistributorContent" */ '@/views/distributor-content/DistributorContent'),
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/base-icon/BaseIcon'),
  },

  data() {
    return {
      comments: {},
      index: 0,
      svg: icons,
      interval: '',
    };
  },

  methods: {
    async allComments() {
      this.comments = await Comments.getComments();
      this.interval = setInterval(() => this.incrementIndex(), 6000);
    },

    incrementIndex() {
      const comments = this.comments.length;
      this.index = this.index === (this.comments.length - 1) ? 0 : this.index + 1;
    },
  },

  mounted() {
    this.allComments();
  },

  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style lang='scss' scoped src= './RouterModule.scss'></style>
