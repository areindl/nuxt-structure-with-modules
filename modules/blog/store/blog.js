/**
 *  Vuex Module
 */

export const namespaced = true
export const state = () => ({
  // DEMO DATA
  // This should be loaded from an API
  articles: [
    {
      title: 'Trails in France',
      photo: '10',
      teaser:
        'Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Est velit egestas dui id. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.',
      fulltext:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Est velit egestas dui id. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Pharetra massa massa ultricies mi quis hendrerit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Luctus accumsan tortor posuere ac ut consequat semper. Volutpat ac tincidunt vitae semper quis lectus nulla. Facilisi etiam dignissim diam quis enim lobortis. Nec ultrices dui sapien eget mi. Diam maecenas ultricies mi eget mauris pharetra et ultrices.',
      slug: 'trails-in-france',
    },
    {
      title: 'Singletrails of Deux Alps',
      photo: '1000',
      teaser:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. ',
      fulltext:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Amet nisl suscipit adipiscing bibendum est. Urna neque viverra justo nec ultrices dui sapien eget. Accumsan tortor posuere ac ut consequat semper viverra nam. Pellentesque elit ullamcorper dignissim cras. Ut faucibus pulvinar elementum integer. Orci a scelerisque purus semper eget duis at tellus at. Sed faucibus turpis in eu mi bibendum neque. Nunc sed id semper risus in hendrerit gravida rutrum. Risus nullam eget felis eget nunc lobortis. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Etiam erat velit scelerisque in dictum non. In cursus turpis massa tincidunt dui ut ornare lectus. Lacus viverra vitae congue eu consequat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet cursus sit amet dictum. Gravida quis blandit turpis cursus in.',
      slug: 'singletrails-in-deux-alps',
    },
    {
      title: 'Bike to Chamonix',
      photo: '1018',
      teaser:
        'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      fulltext:
        ' Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      slug: 'bike-to-chamonix',
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
