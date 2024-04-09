Component({
  data: {
    triggered: false,
  },
  methods: {
    onScrollRefresh: function () {
      var that = this;
      setTimeout(function () {
        that.setData({
          triggered: false,
        });
      }, 2000);
    },
  },
});
